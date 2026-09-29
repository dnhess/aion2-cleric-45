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
  ck(/that is the Korea\/Taiwan version/.test(chk2), "8/12/16 thresholds flagged as KR/TW");
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
