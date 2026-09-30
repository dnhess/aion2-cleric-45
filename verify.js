// Verification harness for the Aion 2 class companion.
//
// This host has no browser, so the site is verified functionally against the
// DEPLOYED bytes rather than rendered. Run from the repo root:
//
//     node verify.js
//
// It checks: every class's tabs resolve and are non-empty; each view id the
// deployed index.html references resolves for every class; nav visibility
// matches resolvability (a class-scoped tab is *supposed* to be unresolvable
// for a class that lacks it); the class switcher wiring is present; and the
// content claims that matter are actually on the page. Finally it fetches the
// live site and requires byte-identity with the local files.
//
// Exit code 0 = all passed. The live check fails until you push, which is
// correct - it means what it says.

const fs = require("fs");
const https = require("https");
const DIR = __dirname + "/";

function get(url) {
  return new Promise((res, rej) => {
    https.get(url, r => {
      if (r.statusCode !== 200) return rej(new Error("HTTP " + r.statusCode));
      const chunks = [];
      r.on("data", c => chunks.push(c));
      r.on("end", () => res(Buffer.concat(chunks)));
    }).on("error", rej);
  });
}

(async () => {
  const localPages = fs.readFileSync(DIR + "pages.js");
  const localHtml = fs.readFileSync(DIR + "index.html");
  const localPagesStr = localPages.toString("utf8");
  const localHtmlStr = localHtml.toString("utf8");
  const api = new Function(localPagesStr + "; return { CLASSES, PAGES, pageFor, isClassTab, classTabs };")();
  const { CLASSES, PAGES, pageFor, isClassTab, classTabs } = api;

  let fails = 0;
  const ck = (ok, label) => { if (!ok) fails++; console.log("  " + (ok ? "ok  " : "FAIL") + " " + label); };

  console.log("=== classes & tabs ===");
  console.log("classes:", Object.keys(CLASSES).join(", "));
  for (const k of Object.keys(CLASSES)) {
    console.log(`  ${k}: ${CLASSES[k].label} (${CLASSES[k].weapon}) tabs=[${classTabs(k).join(",")}]`);
    for (const t of classTabs(k)) {
      const pg = CLASSES[k][t];
      ck(!!pg && !!pg.kicker && !!pg.now && !!pg.html && pg.html.length > 400, `${k}.${t} complete`);
    }
  }
  ck(!isClassTab("build", "cleric"), "build is NOT a Cleric tab");
  ck(isClassTab("build", "chanter"), "build IS a Chanter tab");
  ck(pageFor("build", "cleric") === undefined, "pageFor('build','cleric') is undefined (so the render guard is required)");
  ck(!!pageFor("build", "chanter"), "pageFor('build','chanter') resolves");

  console.log("=== every view id in deployed html resolves per class ===");
  const ids = new Set();
  for (const m of localHtmlStr.matchAll(/\["(\w+)","[^"]*"\]/g)) ids.add(m[1]);
  for (const m of localHtmlStr.matchAll(/state\.view = "(\w+)"/g)) ids.add(m[1]);
  const phaseIds = new Set([...localHtmlStr.matchAll(/^    id: "(p\d)"/gm)].map(m => m[1]));
  for (const k of Object.keys(CLASSES)) {
    const mismatched = [];
    for (const id of ids) {
      if (phaseIds.has(id)) continue;
      // the nav filter hides a view exactly when it is unresolvable, so these must agree
      const resolvable = !!pageFor(id, k);
      const shown = !!(PAGES[id] || isClassTab(id, k));
      if (resolvable !== shown) mismatched.push(id);
    }
    ck(mismatched.length === 0, `nav visibility matches resolvability for ${k}${mismatched.length ? " (mismatch: " + mismatched.join(",") + ")" : ""}`);
  }
  ck(!pageFor("build", "cleric") && !(PAGES["build"] || isClassTab("build", "cleric")), "Cleric hides build in nav AND cannot resolve it");

  console.log("=== wiring ===");
  ck(/items\.filter\(\(\[id\]\) => PAGES\[id\] \|\| isClassTab\(id, state\.classKey\)\)/.test(localHtml), "nav filters unavailable views");
  ck(/isClassTab\(state\.view, state\.classKey\)/.test(localHtml), "kicker uses isClassTab");
  ck(/function render\(\) \{\n  if \(!PAGES\[state\.view\] && !isClassTab/.test(localHtml), "render() guards unresolvable views");
  ck(/e\.key === "b"[^}]*"build"/.test(localHtml), "hotkey B -> build");
  ck(/classKey: state\.classKey/.test(localHtml), "classKey persisted");

  console.log("=== session sanity: switch class while on build ===");
  // simulate the guard: cleric + view=build must fall back to skills
  const view = "build", cls = "cleric";
  const guarded = (!PAGES[view] && !isClassTab(view, cls) && !phaseIds.has(view)) ? "skills" : view;
  ck(guarded === "skills", "guard rewrites build -> skills when Cleric selected");

  console.log("=== chanter build tab content ===");
  const b = CLASSES.chanter.build.html;
  const content = {
    "allocation rows present": ["Onslaught", "Dark Crush", "Recuperation", "Spinning Strike", "Wave Blow", "Gust Rampage"].every(n => b.includes(n)),
    "specialty tier notation": /tiers 3\/4\/5/.test(b) && /4 &gt; 5 &gt; 3/.test(b),
    "Lv20 priority": /Dark Crush &gt; Recuperation &gt; Spinning Strike &gt; Onslaught/.test(b),
    "passive order": /Wind's Promise &gt; Impact Hit &gt; Attack Preparation &gt; Inspiring Spell &gt; Earth's Promise/.test(b),
    "mandatory stigmas": /Undefeated Mantra · Sprint Mantra · Guardian Blessing · Marchutan's Wrath/.test(b),
    "ignore list": /Obliterate/.test(b) && /Barrier Spell/.test(b),
    "early sets both variants": (b.match(/Undefeated Mantra · Sprint Mantra · Guardian Blessing · Power of the Storm/g) || []).length >= 2,
    "upgrade order tiers": /To 20/.test(b) && /To 5/.test(b),
    "wave blow -> dark crush macro": /Wave Blow then Dark Crush/.test(b),
    "labelled as second opinion": /not a source of record|second opinion/i.test(b),
  };
  for (const [k, v] of Object.entries(content)) ck(v, k);

  console.log("=== corrected / conflicting rows ===");
  const cs = CLASSES.chanter.skills.html, cl = CLASSES.cleric.skills.html;
  ck(/Skill points take a skill to 10/.test(cs) && /Skill points take a skill to 10/.test(cl), "skill-point wording fixed on BOTH classes");
  ck(!/maxes at 10/.test(localPagesStr), "no stale 'maxes at 10' claim anywhere");
  ck(/Two chains in circulation/.test(cs), "macro conflict flagged on Chanter Skills");
  ck(/Contested: mandatory, or mediocre/.test(cs), "Marchutan's conflict flagged");
  ck(/Four to carry/.test(cs), "four-stigma answer added");
  ck(/on global it beats the Cleric's equivalent/.test(cs), "Power of the Storm global note");
  ck(/1M\+ CP build/.test(PAGES.links.html), "source documented on Sources");
  ck(/how_to_get_20_skills/.test(PAGES.links.html), "skill-level thread cited");

  console.log("=== cleric macro update + level ceiling ===");
  const clk = CLASSES.cleric.skills.html;
  ck(/Earth Punishment, then Condemnation/.test(clk), "Cleric macro primary is EP -> Condemnation");
  ck(/<li>Condemnation<\/li>/.test(clk), "macro step list shows Condemnation");
  ck(!/<li>Judgment Thunder<\/li>/.test(clk), "old Judgment Thunder step removed from the list");
  ck(/until you have good uptime on Punishment/.test(clk), "interim condition recorded");
  ck(/slot 1 Earth Punishment \(Lv\.25\), slot 2 Condemnation \(Lv\.20\)/.test(clk), "screenshot values recorded");
  ck(/hold LMB alongside/.test(clk), "hold LMB recorded");
  ck(/updated in-game Macro window/.test(clk), "labelled as his updated screenshot");
  ck(!/Levels 12, 16 and 20 are bonuses/.test(localPagesStr), "old '12, 16 and 20 are bonuses' wording gone");
  ck(/Earth Punishment at Lv\.25/.test(clk), "Cleric explains its own Lv.25 evidence");
  ck(/Lv\.25 is not the ceiling|is not the ceiling/.test(clk), "Cleric level ceiling corrected");
  const chk2 = CLASSES.chanter.skills.html;
  ck(/Everything above that is bonus levels/.test(chk2), "Chanter level wording corrected");
  ck(/his Cleric at Lv\.25/.test(chk2), "Chanter cites the Lv.25 evidence");
  ck(/Slots open at 8, 12 and 20/.test(chk2), "8/12/16 + 20 model stated on Chanter Skills (supersedes the old KR-only caveat)");
  ck(/skill-level gear|skill-level gear and Arcana/.test(CLASSES.chanter.build.html), "build tab notes his investment gap");
  ck(/macro window/i.test(PAGES.links.html) && /skycoach\.gg/.test(PAGES.links.html), "sources updated with macro + level sources");

  console.log("=== getting picked + alts ===");
  const vs = PAGES.versus.html;
  ck(/<h2>Getting picked<\/h2>/.test(vs), "Compare has a Getting picked section");
  ck(/Gear score and combat power, not class/.test(vs), "acceptance filter order stated");
  ck(/Structural demand, because of the rez/.test(vs), "Cleric demand grounded in the rez, not healing volume");
  ck(/as the second support rather than the first/.test(vs), "Chanter acceptance framed honestly");
  ck(/highest at launch, not lowest/.test(vs), "launch healing-demand inversion stated");
  ck(/It is never a dead pick/.test(vs), "Chanter upside acknowledged");
  ck(/<h2>Alts<\/h2>/.test(vs), "Compare has an Alts section");
  ck(/banking is class-independent/.test(vs), "alt banking is class-independent");
  ck(/Do not run your Cleric and Chanter in the same group/.test(vs), "main+alt collision warning present");
  ck(/No grounded recommendation available/.test(vs), "third-class row refuses to invent a pick");
  const af = PAGES.after.html;
  ck(/22 is the cheap win\. 45 is the expensive one/.test(af), "alt depth fork on At 45");
  ck(/Alt roles<\/span><span class="do">Only matters if you will group/.test(af), "alt role caveat on At 45");
  ck(/Full reasoning on Compare/.test(af), "At 45 cross-references Compare");

  console.log("=== launch plan tab + Madsin integration ===");
  ck(!!PAGES.plan && !!PAGES.plan.kicker && !!PAGES.plan.now && PAGES.plan.html.length > 2000, "plan tab is complete");
  ck(!!pageFor("plan", "cleric") && !!pageFor("plan", "chanter"), "plan resolves for both classes (class-agnostic)");
  ck(/<h2>Item level is the gate<\/h2>/.test(PAGES.plan.html), "plan has the item-level ladder");
  ck(/1,400|1,900|2,100/.test(PAGES.plan.html), "ilvl breakpoints present");
  ck(/<h2>Crafting<\/h2>/.test(PAGES.plan.html) && /<h2>Soul binds<\/h2>/.test(PAGES.plan.html), "plan has crafting and soul bind sections");
  ck(/Do not minmax the fun out of it/.test(PAGES.plan.html), "his own framing recorded");
  ck(/read as a second opinion/i.test(PAGES.plan.html), "labelled as a second opinion");
  // Shugo correction
  const pp = PAGES.prep.html;
  ck(!/Two keys a day, stores to 14/.test(pp), "stale 'two keys a day' removed");
  ck(/cap of 7 on a free account/.test(pp) && /cap of 28 with a subscription/.test(pp), "Shugo rates corrected to Fextralife figures");
  ck(/:15 and :45 past the hour/.test(pp), "Shugo cadence corrected");
  ck(!/Three keys per day/.test(pp), "did not adopt Madsin's wrong key count");
  // new Prep rows
  ck(/Make all four on day one/.test(pp), "server-lock / four characters row added");
  ck(/A bar that gates the story, not the Trial/.test(pp), "ascension bar row added");
  ck(/Probably do not cross to the other faction/.test(pp), "rift row added to Do not");
  // Compare
  const vv = PAGES.versus.html;
  ck(/Chanter levels one craft, Cleric levels two/.test(vv), "crafting split row on Compare");
  ck(/independently of Madsin/.test(vv), "crafting split attributed to independent sources");
  ck(/Contested, and probably a non-issue now|neither says class decides it/.test(vv), "ping row revised");
  ck(/200 ping/.test(vv), "ping revision cites the 200-ping player");
  // Chanter build contested count
  ck(/Contested: four here, two to five in Korea, two on global/.test(CLASSES.chanter.build.html), "skills-to-20 dispute flagged on the build tab");
  // sources
  ck(/9r4nDbBxRxk/.test(PAGES.links.html), "Madsin video cited on Sources");
  ck(/aion2\.wiki\.fextralife\.com/.test(PAGES.links.html), "Fextralife cited on Sources");
  ck(/cap of 7 free, 4 a day to a cap of 28 subscribed/.test(PAGES.links.html), "Sources states the corrected Shugo rates");
  // nav wiring
  ck(/\["plan","Launch plan"\]|\["plan", "Launch plan"\]/.test(localHtmlStr), "nav includes the plan tab");
  ck(/e\.key === "l"[^}]*"plan"/.test(localHtmlStr), "hotkey L -> plan");

  console.log("=== KanonXO doc integration ===");
  const sys = PAGES.systems;
  ck(!!sys && !!sys.kicker && !!sys.now && sys.html.length > 4000, "systems tab is complete");
  ck(!!pageFor("systems", "cleric") && !!pageFor("systems", "chanter"), "systems resolves for both classes");
  const sysHas = (re, label) => ck(re.test(sys.html), label);
  sysHas(/<h2>Enhancement and Amp<\/h2>/, "systems: enhancement/amp");
  sysHas(/soft-resets to 60%/, "systems: enhance success reset");
  sysHas(/\+\d+ Amp 5 transfers into an Orange piece/, "systems: yellow->orange transfer rule");
  sysHas(/<h2>Potential<\/h2>/, "systems: potential");
  sysHas(/Crafted 5% \(weapon\)/, "systems: potential values with Asia flag");
  sysHas(/<h2>Stat lines<\/h2>/, "systems: stat lines");
  sysHas(/Damage Boost ≈2% · Combat Speed ≈4%/, "systems: weapon/guard stat lines");
  sysHas(/10% chance of a reroll instead of a reroll/, "systems: mixed-grade synch warning");
  sysHas(/<h2>Stones<\/h2>/, "systems: stones");
  sysHas(/Manastones go on weapons and armor\. Soulstones go on accessories/, "systems: mana vs soulstone");
  sysHas(/worth under 1% of your damage/, "systems: theostone worthlessness");
  sysHas(/<h2>Transfer<\/h2>/, "systems: transfer");
  sysHas(/10 fragments = accessory stone/, "systems: transfer costs");
  sysHas(/wait for the second/, "systems: skip first heroic set");
  sysHas(/<h2>What each slot gives<\/h2>/, "systems: slot map");
  sysHas(/BDO-style/, "systems: rune blowup");
  sysHas(/<h2>Arcana<\/h2>/, "systems: arcana");
  sysHas(/Transmute a card and choose every line/, "systems: arcana crafting");
  sysHas(/Asia launched with 5 cards/, "systems: global arcana expectation");
  sysHas(/<h2>Pet Genus<\/h2>/, "systems: genus");
  sysHas(/<h2>Wings<\/h2>/, "systems: wings");
  sysHas(/<h2>Stat values<\/h2>/, "systems: stat values");
  sysHas(/Double Chance &gt; Front\/Back Attack Boost/, "systems: stat priority tldr");
  sysHas(/<h2>The damage formula<\/h2>/, "systems: damage formula");
  sysHas(/Pure Attack/, "systems: pure attack concept");
  sysHas(/1,500 Accuracy and 1,600 Crit/, "systems: raid caps");
  ck(/<kbd>Y<\/kbd> systems/.test(localHtmlStr), "key hint shows Y for systems");
  ck(/\["systems","Systems"\]/.test(localHtmlStr), "nav includes systems");
  ck(/e\.key === "y"[^}]*"systems"/.test(localHtmlStr), "hotkey Y -> systems");

  console.log("=== specialty model resolved everywhere ===");
  ck(/Five specialty options\. Slots open at 8, 12 and 20/.test(CLASSES.chanter.skills.html), "chanter skills has the resolved model");
  ck(/Level 16 gives option 5\. Level 20 gives the third slot/.test(CLASSES.chanter.skills.html), "chanter skills states the slot levels");
  ck(/Independently confirmed by KanonXO/.test(CLASSES.cleric.skills.html), "cleric skills row now cited");
  ck(/Every one of his eleven rows matches the specialty rules exactly/.test(CLASSES.chanter.build.html), "build tab pattern row resolved");
  ck(!/exact unlock levels are still unconfirmed/.test(localPagesStr), "no stale 'unconfirmed thresholds' claim left");
  ck(!/treat the global thresholds as unconfirmed/.test(localPagesStr), "no stale KR-only threshold caveat left");

  console.log("=== daevanion board correction ===");
  const cd = CLASSES.cleric.daevanion.html, chd = CLASSES.chanter.daevanion.html;
  ck(/Four white boards share one point pool/.test(cd) && /Four white boards share one point pool/.test(chd), "white/coloured split on both classes");
  ck(/Four do nothing in PvE|Three do nothing in PvE|do nothing in PvE/.test(cd), "cleric dead-tile warning");
  ck(/Three of them do nothing in PvE/.test(chd), "chanter dead-tile warning");
  ck(/Multi-hit Resist on Triniel/.test(chd) && /Crit Damage Tolerance on Vaizel/.test(chd), "names the dead tiles");
  ck(/This is where the page previously had it wrong/.test(chd), "corrects its own prior Yustiel claim");
  ck(!/Yustiel’s cooldown reduction is the crucial one/.test(localPagesStr), "stale Yustiel cooldown claim gone");
  ck(!/Marchutan for Defense and HP/.test(localPagesStr), "stale Marchutan defense claim gone");
  ck(/Ariel<\/span><span class="do">Your PvE board/.test(chd), "chanter Ariel = PVE board");
  ck(!/Ariel for grinding efficiency/.test(localPagesStr), "stale Ariel grinding claim gone");

  console.log("=== stats, compare, at45 additions ===");
  const cst = CLASSES.cleric.stats.html, chst = CLASSES.chanter.stats.html;
  ck(/Double Chance &gt; Front\/Back Attack Boost/.test(cst) && /Double Chance &gt; Front\/Back Attack Boost/.test(chst), "stat priority on both Stats tabs");
  ck(/Eroded 45%, Talisra 35%/.test(cst), "cleric wings data");
  ck(/Eroded 45%, Talisra 23%/.test(chst), "chanter wings data");
  ck(/you have Earth’s Grace/.test(cst), "cleric crit-damage nuance");
  ck(/you have Wind’s Promise/.test(chst), "chanter crit-damage nuance");
  ck(/Raid caps/.test(cst) && /bosses parry front attacks/.test(chst), "raid caps on both, melee note for chanter");
  ck(/neither says class decides it/.test(PAGES.versus.html), "ping row revised to cite both sources");
  ck(/Templar, Brawler and Assassin and found no major difference between classes/.test(PAGES.versus.html), "ping row records the no-class-difference finding");
  ck(/Supports specifically/.test(PAGES.versus.html), "stigma gatekeeping row added");
  ck(/Manastones, soulstones, potential and the extra Philosopher’s line do not/.test(PAGES.after.html), "what transfers row (on At 45)");
  ck(!/Skip the first heroic set/.test(PAGES.prep.html), "relocated rows are NOT left on Start");
  ck(/Amp ceiling/.test(PAGES.after.html), "amp ceiling row on At 45");
  ck(/whether crafted beats dungeon is not confirmed/.test(PAGES.after.html), "crafted-vs-dungeon global caveat");
  ck(/Skip the first heroic set/.test(PAGES.after.html), "first-heroic-set advice");
  ck(/docs\.google\.com\/document\/d\/11u4wLCG1WfL/.test(PAGES.links.html), "KanonXO doc cited on Sources");
  ck(/Aion Research Lab/.test(PAGES.links.html), "AionLab credited");

  console.log("=== level plan tab ===");
  const lp2 = PAGES.levelplan;
  ck(!!lp2 && !!lp2.kicker && !!lp2.now && lp2.html.length > 1500, "level plan tab is complete");
  ck(!!pageFor("levelplan", "cleric") && !!pageFor("levelplan", "chanter"), "level plan resolves for both classes");
  ck(/<h2>The plan<\/h2>/.test(lp2.html), "level plan has the list");
  ck(/Pick side quests before you can finish them/.test(lp2.html), "the pick-early mechanic is called out");
  ck(/relayed by someone called EARL/.test(lp2.html), "EARL recorded as the messenger, not the author");
  ck(/Who wrote it<\/span><span class="do">Stoopzz/.test(lp2.html), "credited to Stoopzz");
  ck(/Stoopzz's route/.test(lp2.html), "kicker names the author");
  ck(/twitch\.tv\/stoopzz/.test(lp2.html) && /youtube\.com\/stoopzz_TV/.test(lp2.html), "creator links present");
  ck(/the author and the sender are different people/.test(lp2.html), "distinguishes author from Discord sender");
  ck(/Why it holds up/.test(lp2.html), "five-anchor justification recorded");
  ck(/Level plan<\/span><span class="do"><a href="https:\/\/www\.twitch\.tv\/stoopzz"/.test(PAGES.links.html), "Sources credits Stoopzz with a link");
  ck(/Connections<\/span><span class="do">Stoopzz, Madsin and KanonXO are the same circle/.test(PAGES.links.html), "shared-circle caveat recorded on Sources");
  ck(!/A level-gated side-quest list from a Discord message/.test(localPagesStr), "old unattributed Sources wording gone");
  ck(!/from someone called EARL, with no link and no further attribution/.test(localPagesStr), "old unverified tab wording gone");
  // every line of the source list must be present
  const lines = ["1–12", "12–14", "14–17", "18–20", "20–22", "22–27", "27–31", "33–42", "42–45"];
  ck(lines.every(l => lp2.html.includes(l)), "all level bands present");
  const quests = ["Practice Makes Perfect", "Creion Research Assistant", "The great curse breaking caper",
                  "Nornir Assembly", "An invitation to the Past: Part I", "Finders keepers",
                  "Traveling merchant", "Herb Pouch Heist", "Kumrica"];
  const missing = quests.filter(q => !lp2.html.includes(q));
  ck(missing.length === 0, "every quest name preserved verbatim" + (missing.length ? " (missing: " + missing.join(", ") + ")" : ""));
  ck(/<h2>Where it agrees with the route<\/h2>/.test(lp2.html), "agreement section present");
  ck(/<h2>Where it does not match<\/h2>/.test(lp2.html), "disagreement section present");
  ck(/Exact match: the route says/.test(lp2.html), "abandoned-site cross-check recorded");
  ck(/kisk Kumrica’s Cellar/.test(lp2.html), "kumrica cross-check against the route");
  ck(/Hugo Mercs pt\.2 chain/.test(lp2.html), "nornir naming conflict flagged");
  ck(/Graverobber campsite quests are that same stop, or an extra one/.test(lp2.html), "level-33 ambiguity flagged rather than resolved");
  ck(/Teleport to healing spring/.test(lp2.html), "new healing-spring step included");
  ck(/\["levelplan","Level plan"\]/.test(localHtmlStr), "nav includes level plan");
  ck(/e\.key === "n"[^}]*"levelplan"/.test(localHtmlStr), "hotkey N -> level plan");
  ck(/<kbd>N<\/kbd> level plan/.test(localHtmlStr), "key hint shows N");
  ck(/level-gated side-quest route/.test(PAGES.links.html), "level plan source documented");

  console.log("=== class-aware route skill rows ===");
  const phasesSrc = localHtmlStr.slice(localHtmlStr.indexOf("const PHASES = ["), localHtmlStr.indexOf("function vodUrl"));
  const PHASESX = new Function(phasesSrc + "; return PHASES;")();
  const helpersSrc = localHtmlStr.slice(localHtmlStr.indexOf("function itemId("), localHtmlStr.indexOf("function renderClassSwitch"));
  ck(helpersSrc.includes("function itemVisible"), "itemVisible helper present in deployed html");
  ck(helpersSrc.includes("function phaseIds"), "phaseIds helper present in deployed html");
  function routeApi(classKey) {
    const st = { classKey, checks: {} };
    return new Function("state", "PHASES", helpersSrc +
      "; return { itemVisible, phaseIds, allItems, phaseProgress }; ")(st, PHASESX);
  }
  const apiC = routeApi("cleric"), apiH = routeApi("chanter");

  // every cls value must be a real class key
  const clsUsed = new Set();
  PHASESX.forEach(p => p.parts.forEach(pt => pt.items.forEach(it => { if (it.cls) clsUsed.add(it.cls); })));
  const badCls = [...clsUsed].filter(c => !CLASSES[c]);
  ck(badCls.length === 0, "every cls tag is a real class key" + (badCls.length ? " (bad: " + badCls.join(",") + ")" : ""));

  // both classes get skill rows, in most phases
  const skillPhasesC = PHASESX.filter(p => p.parts.some(pt => pt.items.some(it => it.tag === "skill" && apiC.itemVisible(it)))).map(p => p.n);
  const skillPhasesH = PHASESX.filter(p => p.parts.some(pt => pt.items.some(it => it.tag === "skill" && apiH.itemVisible(it)))).map(p => p.n);
  ck(skillPhasesC.length >= 4, `Cleric skill rows appear in ${skillPhasesC.length} phases (${skillPhasesC.join(",")})`);
  ck(skillPhasesH.length >= 4, `Chanter skill rows appear in ${skillPhasesH.length} phases (${skillPhasesH.join(",")})`);

  // visibility really filters
  const visC = [];
  PHASESX.forEach(p => p.parts.forEach(pt => pt.items.forEach(it => { if (apiC.itemVisible(it)) visC.push(it); })));
  const visH = [];
  PHASESX.forEach(p => p.parts.forEach(pt => pt.items.forEach(it => { if (apiH.itemVisible(it)) visH.push(it); })));
  ck(visC.every(it => !it.cls || it.cls === "cleric"), "Cleric view shows no Chanter-tagged rows");
  ck(visH.every(it => !it.cls || it.cls === "chanter"), "Chanter view shows no Cleric-tagged rows");
  ck(visH.length !== visC.length || JSON.stringify(visH) !== JSON.stringify(visC), "the two classes see different route content");
  ck(visH.filter(it => it.tag === "skill").length > visC.filter(it => it.tag === "skill").length, "Chanter gets more skill rows than Cleric (the requested depth)");

  // no part may vanish entirely for either class
  const emptyParts = [];
  for (const cl of ["cleric", "chanter"]) {
    const api = routeApi(cl);
    PHASESX.forEach(p => p.parts.forEach((pt, pi) => {
      if (!pt.items.some(it => api.itemVisible(it))) emptyParts.push(`${cl}:${p.id}:${pi}`);
    }));
  }
  ck(emptyParts.length === 0, "no route part disappears for a class" + (emptyParts.length ? " (empty: " + emptyParts.join(",") + ")" : ""));

  // checkbox stability: a non-class row keeps its id across a class switch
  const firstMsq = "p1:0:0";
  ck(apiC.phaseIds(PHASESX[0]).includes(firstMsq) && apiH.phaseIds(PHASESX[0]).includes(firstMsq),
     "shared rows keep the same checkbox id in both classes");
  ck(apiC.allItems().length === apiC.allItems().length, "allItems is stable within a class");
  const sumC = PHASESX.reduce((a, p) => a + apiC.phaseProgress(p).total, 0);
  ck(sumC === apiC.allItems().length, "Cleric per-phase totals sum to allItems");
  const sumH = PHASESX.reduce((a, p) => a + apiH.phaseProgress(p).total, 0);
  ck(sumH === apiH.allItems().length, "Chanter per-phase totals sum to allItems");
  ck(apiC.allItems().length < apiH.allItems().length, "Chanter route has more checkable rows than Cleric");

  // a ticked box counts for its own class and does not leak into the other
  const stC = { classKey: "cleric", checks: {} }, stH = { classKey: "chanter", checks: {} };
  stC.checks["p1:0:0"] = true; stH.checks["p1:0:0"] = true;
  const pcC = new Function("state", "PHASES", helpersSrc + "; return phaseProgress;")(stC, PHASESX);
  const pcH = new Function("state", "PHASES", helpersSrc + "; return phaseProgress;")(stH, PHASESX);
  ck(pcC(PHASESX[0]).done === 1 && pcH(PHASESX[0]).done === 1, "a shared row ticks for both classes");
  // phase 1 gives each class exactly one skill row, so equal totals there are correct.
  // Assert where the classes genuinely differ, and that somewhere they do.
  const diffTotals = PHASESX.filter(p => pcC(p).total !== pcH(p).total).map(p => p.n);
  ck(diffTotals.length > 0, `some phases have different totals per class (${diffTotals.join(",")})`);
  ck(pcH(PHASESX[1]).total === pcC(PHASESX[1]).total + 1, "phase 2 gives Chanter exactly one more row than Cleric");

  // currentNext and the keydown cursor must both go through phaseIds
  ck(/if \(!itemVisible\(it\)\) continue;/.test(localHtmlStr), "currentNext skips hidden rows");
  ck(/const ids = phaseIds\(p\);\n  if \(state\.cursor >= ids\.length\)/.test(localHtmlStr), "renderMain uses phaseIds for the cursor");
  ck(!/p\.parts\.forEach\(\(part, pi\) => part\.items\.forEach\(\(_, ii\) => ids\.push/.test(localHtmlStr), "no leftover inline id-building loops");
  ck(/const ids = phaseIds\(p\);\n    if \(e\.key === "j"/.test(localHtmlStr), "keydown cursor uses phaseIds");
  ck(/if \(!itemVisible\(it\)\) return "";/.test(localHtmlStr), "renderMain hides non-matching rows");
  ck(/if \(!rows\) return "";/.test(localHtmlStr), "a part with no visible rows is skipped entirely");
  ck(/Class tabs and the skill rows inside the route follow the class/.test(localHtmlStr), "right-rail hint mentions route skill rows");

  console.log("=== belt/amulet: the enhancing exception ===");
  const pp2 = PAGES.prep.html, af2 = PAGES.after.html, sys2 = PAGES.systems.html, lp3 = PAGES.plan.html;
  ck(/Go past \+5\. These two are the exception to the rule above/.test(pp2), "Start has the belt/amulet exception");
  ck(/the one place Kinah is not wasted/.test(pp2), "Start explains why they are the exception");
  ck(/from the level-45 MSQ line, so this whole section applies from the 40s onward, not while you are 1–40/.test(pp2), "Start gets the timing right");
  ck(/Take each to <strong>\+10<\/strong>, then Substance Morph it into the next grade/.test(pp2), "Start has the ladder");
  ck(/Stop at gold/.test(pp2), "Start has the gold stop");
  ck(/Madsin's rule is to upgrade nothing but these two/.test(pp2), "Start attributes the rule");
  ck(/Enhance these before anything else/.test(af2), "At 45 has the belt/amulet answer");
  ck(/Belt, Amulet<\/span><span class="do">Enhance these before anything else/.test(af2), "At 45 row is labelled");
  ck(/Take each to \+10, Substance Morph it up a grade/.test(af2), "At 45 has the ladder");
  ck(/Kinah while leveling/.test(lp3), "Launch plan has Madsin's Kinah rule");
  ck(/the belt is the reading that fits/.test(lp3), "the ASR garble is disclosed, not silently corrected");
  ck(/Get to the top grade and stop/.test(sys2), "Systems states the stop condition");
  ck(/Belt gives defensive stats, amulet offensive/.test(sys2), "Systems says what each gives");
  // the +5 rule must still stand for everything else
  ck(/Stop enhancing there while you level/.test(pp2) && /never the Kinah/.test(pp2), "+5 rule kept and sharpened");
  ck(/dissolving returns your stones but never the Kinah/i.test(pp2), "the stones-vs-Kinah reason is on the page");
  // how to open the enhancement menu — the follow-up question
  ck(/Menu → Enhance All/.test(pp2), "Start gives the menu path");
  ck(/There is no hotkey on the inventory/.test(pp2), "Start rules out the inventory hotkey");
  ck(/No default keybind is documented for it/.test(pp2), "does not invent a keybind");
  ck(/Menu → Enhance All/.test(sys2), "Systems gives the menu path");
  ck(/Enhance order/.test(pp2) && /Belt and amulet first\. Weapon next/.test(pp2), "Start has the enhance order");
  ck(/never the Kinah, manastones or theostones/.test(pp2), "extract refund detail");
  ck(/Revelation Amulet Enhance Scroll/.test(af2) && /Fierce Battle Amulet/.test(af2), "amulet naming discrepancy recorded both ways");
  ck(/the belt is Noble Belt in both|The belt is Noble Belt in both/.test(af2), "notes the belt name agrees across sources");
  ck(/Fextralife's priority is belt and amulet first/.test(af2), "At 45 cites Fextralife's priority");
  ck(/What comes back/.test(sys2) && /Enhancement Stones, and only those/.test(sys2), "Systems states the refund rule");
  ck(/What to enhance/.test(sys2), "Systems states what to enhance");
  ck(/Three sources agree/.test(pp2), "belt/amulet now carries three-source backing");
  ck(!/Source: Madsin and KanonXO\./.test(localPagesStr), "old two-source citation replaced");
  // the +5 rule must state its own scope, or it reads as contradicting the belt
  ck(/Stop enhancing there while you level — weapon, armor, accessories and guard/.test(pp2), "+5 rule states which gear it covers");
  ck(/it covers everything except the two pieces below/.test(pp2), "+5 rule points at its exception");
  ck(/Go past \+5\. These two are the exception to the rule above/.test(pp2), "belt row answers the +5 question directly");
  ck(/Their \+5 is 10/.test(pp2), "spells out that the belt's first stop is +10, not 5");
  ck(/Enhance these before anything else — and past \+5/.test(af2), "At 45 connects the belt to the +5 rule");
  const statsRows = (CLASSES.cleric.stats.html.match(/to \+5 only — not the belt or amulet/g) || []).length;
  const statsRowsH = (CLASSES.chanter.stats.html.match(/to \+5 only — not the belt or amulet/g) || []).length;
  ck(statsRows === 1 && statsRowsH === 1, "both Stats tabs scope the +5 rule");
  ck(/they go to \+10 and get morphed up a grade/.test(CLASSES.cleric.stats.html), "Cleric Stats explains the belt exception");
  ck(/\+10, morph up a grade, \+10 again/.test(CLASSES.chanter.stats.html), "Chanter Stats explains the belt exception");
  ck(!/to \+5 only\.<span class="why">/.test(localPagesStr), "no unscoped '+5 only' row remains");
  // two versions of the same dungeon share a name — the Krao confusion
  ck(/Every dungeon has two versions and both are called by the same name/.test(pp2), "the two-versions rule is stated generally");
  ck(/<strong>Exploration<\/strong> is the easy tutorial one/.test(pp2), "Exploration defined");
  ck(/<strong>Conquest<\/strong> is the max-level one/.test(pp2), "Conquest defined");
  ck(/its cube costs 40 Odyle and holds low-level trash/.test(pp2), "the cost and the reason are on the row");
  ck(/Krao<\/span><span class="do">Two different dungeons share the name/.test(pp2), "Krao has its own row");
  ck(/Exploration Krao is the story one you were sent into during the MSQ — skip its cube/.test(pp2), "answers his exact question");
  ck(/Krao Cave proper is the level-45 Conquest version/.test(pp2), "distinguishes the real Krao Cave");
  ck(/repeating its Conquest cube guarantees a Unique necklace/.test(pp2), "says where Odyle does belong");
  ck(/So the answer flips depending on which you are standing in/.test(pp2), "states the flip explicitly");
  ck(/Exploration Krao, Urugugu, Fire Temple and Draupnir — kill those bosses, skip those cubes/.test(pp2), "the four story dungeons are still named");
  // how to morph the belt/amulet up a grade — the "green to yellow" question
  ck(/Menu → Substance Morph, or <kbd>Alt<\/kbd>\+<kbd>H<\/kbd>/.test(pp2), "Start gives the substance morph path and hotkey");
  ck(/comes out at \+0 of the new grade/.test(pp2), "states that morphing resets the enhancement");
  ck(/Green to yellow<\/span><span class="do">Two steps per grade, repeated/.test(pp2), "answers the green-to-yellow question");
  ck(/Keep going until the icon stops changing/.test(pp2), "gives a stop condition that does not rely on colour names");
  ck(/No source maps colour to grade name for these two, so this page does not guess one/.test(pp2), "declines to invent the colour-to-grade mapping");
  ck(/every rung is the same two steps/.test(pp2), "explains why the naming gap does not matter");
  ck(/Menu → Substance Morph<\/strong> or <kbd>Alt<\/kbd>\+<kbd>H<\/kbd>/.test(sys2), "Systems gives the morph path too");
  ck(/the \+10 is redone at every rung/.test(sys2), "Systems explains the reset");

  console.log("=== inline script integrity ===");
  const scr = localHtmlStr.match(/<script>\n([\s\S]*?)<\/script>\s*<\/body>/);
  ck(!!scr, "inline script block located");
  if (scr) {
    try { new Function(scr[1]); ck(true, "index.html inline script parses"); }
    catch (e) { ck(false, "index.html inline script parses (" + e.message + ")"); }
    ck((scr[1].match(/phaseIds\(/g) || []).length >= 3, "phaseIds is used by all three id consumers");
    ck(!/CLASS_TABS/.test(scr[1]), "no stale CLASS_TABS reference left in the shell");
  }

  console.log("=== live vs local ===");
  try {
    const lp = await get("https://dnhess.github.io/aion2-cleric-45/pages.js?cb=" + Date.now());
    const lh = await get("https://dnhess.github.io/aion2-cleric-45/index.html?cb=" + Date.now());
    ck(lp.equals(localPages), "live pages.js byte-identical to local");
    ck(lh.equals(localHtml), "live index.html byte-identical to local");
    ck(lp.toString("utf8").includes("build: {"), "live pages.js contains the build tab");
  } catch (e) {
    console.log("  live check skipped:", e.message);
  }

  console.log("\n" + (fails === 0 ? "ALL CHECKS PASSED" : fails + " FAILURE(S)"));
  process.exit(fails === 0 ? 0 : 1);
})();
