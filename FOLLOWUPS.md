After Fallen Clocks reviews the 1–45 companion page, research and add:

1. Gearing: after we reach max level, what do we need to do?
2. How does gearing differ from the global version versus Taiwan/Korea? What to focus on for global?
3. Since we speedran to 45, what (if anything) to backtrack for proper gear. If we rush 45, how does that put us ahead of slow levelers? Any time-gated content we can start before them?

---
Open items carried from the 26 Sep 2026 global-watch run:

4. Item-level gates. The LST build showed Krao Cave and Draupnir at 700 (1,000 on KR/TW) and Urugugu Canyon at 1,400 (1,600 on KR/TW) — aion2hub, LST vs Korea. Codex (unchanged) still says the first Conquest dungeons clear around 900–1200 and posts the next tier at 1600, so the page follows Codex today. Re-check the in-game gate before moving the 1000 / 1500 / 2200 lines.
5. PlayNC notices are client-rendered, so the cheap monitor only fingerprints a server timestamp on that page. Read it through a renderer (r.jina.ai works) when checking for new posts. Newest as of 26 Sep: 19 Sep "Launch Scale Test Comes to a Close: What's Next?" — confirms Early Access Sep 30–Oct 4 and launch Oct 5, posts no hour.
6. The site is published on GitHub Pages, not a tunnel: https://dnhess.github.io/aion2-cleric-45/ , repo dnhess/aion2-cleric-45, branch main, served from the repo root. Pages only updates on commit+push, so any job that edits pages.js must push. The quick-tunnel approach was retired after the hostname rotated a third time.

---

## 28 Sep 2026 — dropped sources

aLuckyRO and FRESHY were removed from the page. Both read as AI-generated channels.

Removed outright: their two video links, the aLuckyRO-sourced `maps/daev-ariel.webp` Daevanion map (file deleted from the repo), and the camera-shake and helper-bubble QoL lines.

Re-checked and re-cited. Codex, Hub and PlayNC independently confirm most of what those two supplied, so the facts stayed and the sourcing moved:
- Duty rerolls (slot 1 or 2, odds fall left to right), 5 duties/day server-wide — Codex
- Command Scrolls, twelve a week, Wednesday reset, unbought weeks lost — Codex
- 14 shared solo-dungeon entries; three Ascension Trial runs — Codex
- Nightmare two recharges a day per character — Codex
- Shugo hourly on the hour; Invasions every 2h at the half-hour — Codex
- Alts to 22 for the energy system; skins/pets/mats shared, Abyss Points and Daevanion fragments per character — Codex
- Auto-potion at 60%; extract/soulbind/dismantle share one inventory — Codex
- 962 from story-only vs the 1000 gate; 10–15 sealed dungeons as the fix; Krao entry Lv 45/1000 — Codex
- Krao Conquest pity guarantees a Unique necklace/earring/ring; groggy window at half HP — Codex Krao guide
- Odyle: Exploration 30/cube, 7 clears a week; Conquest 40 — Codex Krao guide
- Save Odyle for Vakron; the 900–1200 / 1200–1600 / 1600–2200 / 2400+ ladder; enhance order; belts and amulets on their own track; transfer crafting carries enhancement — Codex after-45
- Shugo keys level-scaled before 45 — Codex
- Clash runes: +1 is reliable, +2 fails repeatedly and can break the rune — r/Aion2 player reports

Still unverified, marked as such on the page or removed:
- Clash Rune Chest gear-score gain per rune (the old "+40", which made the 1000 claim work). The chests themselves are real — Hub's item page lists them as quest rewards.
- Abyss tier-1 accessory cost (the old "200,000 Abyss points"). Cap is 500,000, rising 500,000 a week, per the Hub LST writeup.
- Ascension Trial gear-score threshold (the old "~1500, rewards nearly double").
- Vakron condensed-cube trick and the 21-clear chest. Codex confirms Vakron is the armor/guard loop and to save Odyle, but not the cube mechanic.
- Belt/amulet "substance morph" to yellow; the ~190-feather figure.
- Rift cadence (old "every 3 hours, ~2.5 rifts").
- Thresholds past 2400 (old "2200 opens tier 3, 2700 stage-4 Transcendence, 2800 Ludra Sanctuary"). Codex tops out at "2400 and beyond".
- The "7–10 days to 2200" estimate.

Worth confirming in-game before trusting any of the above.

---

## 29 Sep 2026 — "Do I open the energy cube from the Krao I had to do during the quest?"

**No — kill the boss and skip the cube.** But the question exposed a trap worth fixing: **two different dungeons share the name Krao.**

### The answer

The page already said *"Kill the boss. Do not loot the chest"* for Exploration dungeons. It was correct and it was not findable from his question, because he had no way to know there were two versions.

**The rule, now stated generally:** every dungeon has two versions under one name.

- **Exploration** — the easy tutorial version the MSQ walks you into. Its cube costs **40 Odyle** and holds low-level trash. **Skip it.**
- **Conquest** — the max-level version. Spend Odyle only on the latest Conquest version you can enter, or on the exploration version once you are 45 and short of item level.

**Applied to his exact case:** Exploration Krao is the story one he was sent into — skip its cube. **Krao Cave proper** is the level-45 Conquest version (gear score 1000, 1–4 players), and that is where Odyle belongs, because repeating its Conquest cube **guarantees a Unique necklace, earring or ring** over time. So the answer flips depending on which Krao he is standing in.

Madsin agrees independently: *"you don't spend energy on the leveling dungeons. You only spend energy on the latest possible exploration version to open exactly three chest, not four, three to claim one of the piece of equipment."*

### The pattern across three consecutive questions

This is the **third question in a row where the page had the fact but not in a form findable from the question**:

1. *"do I enchant my belt"* — belt was absent from a page with a whole "do not enhance" section.
2. *"should I go past +5 on the belt"* — the +5 rule never stated its own scope.
3. *"do I open the cube from the Krao during the quest"* — two dungeons with one name, and nothing said so.

**The fix is the same shape every time: state the rule that distinguishes the cases, not just the individual case.** His questions are not gaps in coverage, they are gaps in *disambiguation* — the page knows both facts and never tells him which one he is looking at.

Recording this because it is now predictable. When he asks about a specific instance, check whether the page has a general rule that separates it from the adjacent case.

258 checks pass against the deployed bytes.


## 29 Sep 2026 — "Should I go past +5 on the belt?" — the +5 rule needed a scope

Fallen Clocks asked whether to go past +5 on the belt. **The answer is yes — and his question exposed that two adjacent rows on the page appeared to contradict each other.**

The +5 rule never stated **which gear it covered**, and the belt row sat immediately below it calling the belt the exception. Two rules side by side, one apparently negating the other, with no scope on either. The page was technically correct and practically ambiguous.

### The answer

**Yes, go past +5 on the belt.** The +5 stop is a rule about **gear you replace 4–5 times**. The belt and amulet are **never replaced**, so they are the one place Kinah is not wasted. The belt's ladder runs **in tens, not fives**:

**+10 → Substance Morph to the next grade → +10 again → repeat to gold → stop.**

So "stop at +5" never applied to the belt at all. **The belt's first stop is +10.**

### What changed

- **Start's +5 row now names its scope:** "weapon, armor, accessories and guard", and says it covers everything except the two pieces below.
- **The belt row leads with the direct answer** ("Go past +5") rather than describing itself as an exception — he asked in +5 terms, so the answer should be in +5 terms.
- **New Start row "Their +5 is 10"** states plainly that the belt ladder is in tens.
- **At 45** says "before anything else — and past +5".
- **Both Stats tabs' Leveling rows** now read "to +5 only — not the belt or amulet" with the +10/morph exception explained, because that row was quoting the number with no context at all.

### The generalisable lesson

**A rule that names a number should name the gear it applies to.** "Stop at +5" is not a rule without its scope — it is half a rule, and the half it omits is exactly what he needs when he is looking at the belt. He asked the question the page created. **When a rule has an exception, the rule must state its own boundary rather than relying on the exception sitting nearby.**

Four of my own assertions were checking the previous wording of the belt row and were rewritten. New assertions now verify that the +5 rule states its scope, that **no unscoped "+5 only" row remains anywhere**, and that both Stats tabs carry the caveat — so a future edit cannot quietly re-introduce the ambiguity.

248 checks pass against the deployed bytes.


## 29 Sep 2026 — How to open the enhancement menu, and a third source on the belt/amulet rule

Fallen Clocks asked how to open the enchant menu. The page said "the button is in the enhancement window, bottom right" but **never said how to reach that window** — another gap, and a basic one, since the page tells him to enhance things.

### The answer

**Menu → Enhance All.** There is **no hotkey on the inventory**. The screen lists every piece you own — equipped and in your cube — plus your available enhancement materials. Pick the item, then press Enhance.

**No default keybind is documented** for it by any source I found, so the page says to check Key settings rather than inventing a key. Fextralife and a second guide agree on the menu path.

### Fextralife independently confirms the belt/amulet rule — and more strongly than my sources did

Its gear-enhancing page lists an enhancement priority, and it is the same rule from a third independent source:

1. **Must enhance first: Noble Belt and the amulet.**
2. Then the **weapon**.
3. **Everything else last, and sparsely.**

Its reasoning: the belt and amulet *"should be your priority when enhancing because of the stats they influence and because **you won't change them for new ones at any point**."* That is a cleaner statement of why than either Madsin or KanonXO gave, and it independently corroborates yesterday's answer. **Three sources now agree on the same rule**, so the row says so.

It also states the extract rule in the same shape as the page: **only Enhancement Stones are refunded; never Kinah, manastones or theostones.**

### A naming discrepancy recorded rather than resolved

Fextralife calls the amulet the **Revelation Amulet**, with a *Revelation Amulet Enhance Scroll*. KanonXO's doc calls it the **Fierce Battle Amulet**. Possibly a regional rename or a later item. Both names are on the page so he can hunt the vendor by either; **Noble Belt agrees in both sources.**

Note also that Fextralife's ladder ends at *Unique* +10 (gold), while KanonXO wrote "Orange/Heroic being max". Madsin reaches gold and says settle there rather than pushing enhancement on it early. Those are compatible — the ladder ends at the top grade, and the advice is not to spend on enhancing that grade yet — so the page presents it that way instead of picking a winner.

### Process

**This run caught four of my own assertions checking wording I had just improved** ("The one thing worth enhancing at this stage" became "Enhance these before anything else", the attribution sentence changed). Rewritten to match.

**One of them was worth investigating rather than just updating:** an assertion for "Stop at gold" failed, which could have meant I dropped Madsin's reasoning while rewriting. I checked before editing — the gold-stop rationale still exists on the Systems tab — then restored it on Start too, since Start is where he will look first. **A failing assertion is a question about the content, not just about the test.**

I also mangled one assertion into invalid JavaScript while patching it (`ck(/.../ 2 || true, "")`), which the linter caught. Reverted and rewritten properly.

239 checks pass against the deployed bytes.


## 29 Sep 2026 — Do I enhance the belt while leveling? Yes — and it was missing entirely

Fallen Clocks asked: *"When leveling do I enchant my belt and other things."* The page had **no answer**. It said "stop enhancing at +5" and left the belt and amulet out completely. A genuine gap, not a restatement.

### The answer

**Everything is a no except the belt and amulet.**

- **General rule:** don't enhance while leveling. You replace pieces 4–5 times, and dissolving returns the enhancement stones but **never the Kinah**. Madsin, asked directly how to spend Kinah while leveling, said *nowhere* — do not tap gear, and upgrade nothing that is not the belt or the amulet, because all of it is temporary.
- **The exception:** the belt and amulet are the pieces you **keep**, so they are the one place Kinah is not wasted. Take each to **+10 → Substance Morph to the next grade → +10 again → repeat until Heroic/gold**. Then **stop** — enhancing gold early costs far too much for too little.
- Belt scrolls come from Strongholds, amulet scrolls from turning in feathers, so neither competes with armor or weapon stones.
- Belt gives defensive stats, amulet offensive.

**Timing caveat stated on the page:** the belt and amulet come from the **level-45 MSQ line**, so this applies from the 40s onward, not during 1–40. Without that, a "while leveling" row would read as advice for a character who has no belt yet.

Placed in four spots: Start's Do-not section (as the exception to the +5 rule), At 45 as "the one thing worth enhancing at this stage", the Launch plan as Madsin's Kinah rule, and Systems for the ladder plus stat split.

### An ASR error of mine, disclosed rather than normalised

Madsin's caption reads *"upgrade anything that isn't **the build** or the amulet"*. **"Belt" is the reading that fits** — the belt and amulet are exactly the two pieces on their own upgrade track, and the ones you keep, so they are the two that would be exempt from a "don't upgrade temporary gear" rule. "The build" does not parse as something you upgrade.

The page **discloses the garble** rather than silently writing "belt", so the inference is visible and reversible. My own skill warns about garbled game terms in auto-captions; this one had been sitting in a transcript I read carefully and still missed the first time, because "build" is a plausible English word rather than obvious noise. **The tell is a word that scans fine but does not fit the game system** — those are harder than obvious garble like "crowave" for Crow Cave.

226 checks pass against the deployed bytes.


## 29 Sep 2026 — Skill guidance inline in the level flow, per class

Requested directly: *"in the leveling guide, it includes what skills to level up, so I don't have to switch back and forth between the skills tab and the level flow for Chanter."* The route (phases 1–5) now carries per-class skill rows.

### The mechanism

Route items gained an optional `cls` tag. A tagged row only counts and only renders for that class.

**All five places that iterate items now go through one helper pair** — `itemVisible(it)` and `phaseIds(p)`: progress totals, per-phase counts, the next-up line, the render, and the `J`/`K` keyboard cursor. Previously each of the five built its own id list inline by hand. Filtering in some and not others would have made the progress bar disagree with the rows on screen, which is the kind of bug that is invisible until it is confusing.

**Item ids keep their original indices**, so hiding a row never renumbers another row's checkbox. Shared rows tick identically in both classes and existing checkmarks survive a class switch, which matters because he is already partway through the route. A part whose rows are all class-specific for the *other* class is skipped entirely rather than rendering a bare heading.

### Content

Five phases, both classes:

- **p1 (1–9):** name the two main clicks.
- **p2 (10–16):** Cleric — points into Earth's Retribution and Judgment Thunder. Chanter — Rushing Smash and Impactful Crush to 8 first, then the click pair, plus the weave warning (Onslaught restores MP on every hit; skip the weave and you run dry).
- **p3 (17–21):** at 19, first specialties for each class, taken from their own Skills tabs.
- **p4 (22–32):** Cleric — Earth's Grace to 10 at 21. Chanter — Dark Crush at 22 with its Crit specialty, the Earth's Promise passive at 21, the stigma order (Undefeated Mantra → Guardian Blessing or Sprint Mantra → Power of the Storm), and the 26+ skills to 8.
- **p5 (33–45):** finishing guidance, including Chanter's Attack Preparation at 37 and Spinning Strike to 10 at 38.

**Correct counts (computed, not estimated): 9 Chanter-tagged rows, 5 Cleric-tagged, 1 class-agnostic, = 15 skill rows total.** Chanter therefore sees **10** and Cleric sees **6**. The commit message for this change says "11 skill rows to Cleric's 8" — those numbers were wrong; I estimated instead of counting. The code and the page are correct; only that commit message is inaccurate. Noted here because the commit message is permanent and cannot be amended without force-pushing a published repo.

### Verification

`verify.js` grew a whole section: every `cls` value must be a real class key (guards a typo like `chanters`), both classes must get skill rows in all five phases, neither class may see the other's rows, **no route part may disappear for either class**, shared rows keep identical checkbox ids, per-phase totals must sum to `allItems`, and some phases must legitimately differ per class (2, 4 and 5 do).

**Also added an inline-script parse check.** The earlier one had been lost in a rewrite, and it matters now: `new Function(inlineScriptBody)` compiles the shell without executing it, so a syntax error introduced into the render pipeline gets caught. This round rewrote a good chunk of that script, and there was no check that it still parsed. That gap is closed.

211 checks pass against the deployed bytes.


## 29 Sep 2026 — Level plan route credited to Stoopzz

Fallen Clocks corrected the provenance: the level-gated side-quest list is **Stoopzz's**, not EARL's. **EARL was the Discord messenger; Stoopzz is the author.** I had read the screenshot's sender name off the image and attributed the content to him, which was wrong — the sender of a screenshot is not its author.

**Spelling matters: Stoopzz, two z's.** He was given as "stoopz" and the correct handle is `stoopzz` — verified on Twitch and YouTube. Recording the spelling because it is the difference between finding him and not.

**Who he is, verified rather than assumed:** full-time MMORPG content creator, roughly **217k Twitch followers**, ranked **#4 for Aion 2 on Twitch** and **#2 in English** (twitchmetrics). Heavy player of the game. Both his Twitch and YouTube links are now on the tab and on Sources.

**This materially raises the weight of the route.** It was previously filed as "unattributed Discord screenshot, second opinion." It is now an independent route from a top-tier Aion 2 streamer that matches our arrow map on five anchors — a considerably stronger signal, and the tab's provenance row now says so instead of hedging.

### A caveat worth having found

**Stoopzz, Madsin and KanonXO are the same circle.** Stoopzz made the "Aion 2 Full Class Guide" with Madsin, and has publicly backed KanonXO's read on the game. Madsin is the Launch plan tab and KanonXO is the Systems tab — so **three of the sources on this page are not fully independent of each other.** They talk, and they may share conclusions. Their agreement is weaker corroboration than agreement between unrelated sources, and that is now written on Sources so it does not get over-read later.

This is the kind of thing that is invisible if each source is checked only against the page rather than against each other.

### Process

**A screenshot's sender is not its author.** The image carried a Discord message header — name and timestamp — in the corner, and I read that as provenance. It was provenance of *transmission*, not authorship. When a screenshot arrives second-hand, the author has to come from Fallen Clocks or from what the content itself credits; never from the chat header. Recording this because it is the second time this round that a source's identity was the thing that needed checking rather than its content.

182 checks pass against the deployed bytes.


## 29 Sep 2026 — Level plan tab from a Discord screenshot (author later corrected to Stoopzz)

Fallen Clocks sent a screenshot of a level-by-level side-quest list, shared in Discord by someone called **EARL** at 04:58. No link, no other attribution. It is now a class-agnostic **Level plan** tab (hotkey `N`) in the While you level nav group.

### What the list actually is

Not a second route — a *level-gated side-quest schedule*. 21 lines, 1–45. The structural insight, which the list never states and is easy to miss while transcribing it:

**It deliberately accepts side quests before it can finish them.** At 14 you pick the 2nd side quest and explicitly do not complete it, because the MSQ walks you back past the turn-in at 17. Same at 18: take the 3rd side quest plus two more in the main quest area, then finish all three at 20 ("Practice Makes Perfect", "Creion Research Assistant", "The great curse breaking caper"). You are banking quests whose completion you will pass through anyway.

That is why this is a separate tab rather than merged into the phases checklist — the map route tells you where to walk, this tells you what to accept and when to hand in. Merging two checklists would have broken both.

### Cross-checked every line against phases 1–5

**Five independent anchors agree**, which is what puts this above the other unattributed material on the page:

- Ascension quests at **22 and 32** — fits the route's existing note that an Ascension bar gates the MSQ, and the Prep tab's explanation of the same system.
- The 2-part side quest in **Nornir Assembly** at 27–31 — same location and level band as the route's first-rune detour.
- **Teleport to Abandoned Site at 31** — exact match to the route's "Teleport to Abandoned Site → local side quest → Rune 1". Independent confirmation of a step that was previously single-sourced.
- **Kumrica's Cellar at 42** — the route's kisk list already contains "kisk Kumrica's Cellar". This names the side quest sitting there.
- **Story-only from 33** — the route says "From 33 on: 100% MSQ except the rune detour below"; this says main story 33–42 and 42–45.

### Four mismatches recorded, not resolved

- **Nornir chain name.** The route calls it the "Hugo Mercs pt.2 chain"; this calls it "An invitation to the Past: Part I". Same location, same window, so almost certainly the same chain under two names — but someone hunting by name should try both. Recorded that way.
- **Level 33.** The route's only 33 detour is the 2nd rune via Hugo Mercs pt.3 in Briskwind Shelter after the 3rd Ascension. This list adds "Finders keepers" and "Traveling merchant" at the Graverobber campsite. Whether that is the same stop or an extra one cannot be determined from either source, so the tab says so rather than picking.
- **Healing spring.** "Teleport to healing spring" at 31 is new — not on the route. Added, since it sits immediately before the Abandoned Site step.
- **Early greens.** Levels 12, 14, 17, 18 and 20 are level-gated here; the route leaves early greens unnamed beyond "only the ones this route lists".

Quest names preserved verbatim from the screenshot, including the inconsistent capitalisation in "The great curse breaking caper" and "Finders keepers".

### Process

**Recurring mistake worth naming:** I twice tried to add a tab's nav row, hotkey and key hint to `pages.js`. All three live in `index.html` — only the page objects are in `pages.js`. A tab addition always spans both files, so a single-file edit script will silently match nothing. Split the script per file and run it against each.

173 checks pass against the deployed bytes.


## 29 Sep 2026 — KanonXO's progression doc: Systems tab, specialty model resolved, boards corrected

Fallen Clocks found a large Google Doc and asked to link it and use it. It is **KanonXO's** Aion 2 PvE progression guide — ~10,400 words, last updated 20 Sep 2026, written for Korea with global flags he sets himself. Credentials: ~1k hours, cleared everything including the pinnacle raids, just under 900k combat power on a Brawler. Lower CP than the 1M+ players already on the page, but far more systems detail, and the only source that publishes the damage formula.

Fetched via the public export endpoint (`/export?format=txt`) rather than scraping the preview. Save transcripts/docs to a file and read in chunks.

### Resolved: the specialty-perk thresholds

**This closes a question I had flagged open twice.** Options unlock at skill levels **8, 12 and 16**; slots open at **8, 12 and 20**. Five options total per skill, three equippable.

- Lv.8 → options 1–3, and your first slot
- Lv.12 → option 4, and a second slot
- Lv.16 → option 5
- Lv.20 → the third slot

Which means a Lv.12 skill runs two options from 1–4, a Lv.16 skill runs two including option 5, and a Lv.20 skill runs three.

**Two consequences worth recording.** First, this fully explains the 1M+ CP Chanter build's tier notation — I checked all eleven of his rows against the rule and every one is consistent, so his numbers are now decoded rather than copied. Second, **the Cleric Skills tab already had this right** ("slots open at 8, 12, and 20"), and I downgraded it on the Chanter tab last round for lack of a source. That was a real error: I removed a correct fact. It is reverted, and the Cleric row is now cited as independently confirmed.

### Corrected: the Daevanion boards

KanonXO's structure, which supersedes what was on the Chanter tab:

- **Four white boards — Nezekan, Zikel, Vaizel, Triniel.** They **share a single point pool**, cannot be maxed, and are where skill levels come from. Prioritise key active skills to reach 12/16/20, then orange tiles.
- **Four coloured boards — Ariel, Azphel, Marchutan, Yustiel.** Individual point pools, and **no skill levels at all**.

Roles: **Ariel = PvE** (orange tiles are PvE Damage Boost/Tolerance), **Azphel = PvP** and worthless in PvE, **Marchutan = general stats, mid-game** (Weapon Damage Boost/Tolerance), **Yustiel = general stats, end-game** (Attack/Defense Increase).

**The Chanter tab had four of these wrong**: Yustiel as cooldown reduction and "the crucial one for group Chanters", Marchutan as Defense/HP "vital for survivability", and Vaizel/Triniel as offensive Crit Damage Boost and Multi-hit. KanonXO lists Vaizel's Crit Damage **Tolerance** and Triniel's Multi-hit **Resist** — defensive stats that do nothing in PvE because bosses have no Crit, Multi-hit or Weapon Damage Boost. Those three tiles are now flagged as dead. The Cleric tab's Ariel-before-Azphel guidance was already right.

Board count reconciles: six in Season 1 (four white + Ariel + Azphel) with Marchutan mid-game and Yustiel end-game, which matches the Cleric tab's long-standing note that a level-37 test did not show Ariel.

### New: Systems tab

A class-agnostic reference tab (hotkey `Y`) so this material has a home: enhancement and Amp, potential, the full ideal-stat-line table per gear piece with roll rarities, manastones versus soulstones, theostones, transfer, what each slot gives, Arcana, Pet Genus, wings, the stat-value hierarchy and the damage formula. Highlights worth naming:

- **A maxed Yellow transfers into an Orange as +20 Amp 0** — the strongest argument for finishing a piece before moving on.
- **Stat priority: Double Chance > Front/Back Attack Boost > Weapon Damage Boost ≈ Critical Damage Boost > Damage Boost.** Double Chance and Front/Back are their own multipliers and never dilute; Damage Boost additively stacks with four sources and is worth about half per point. No build guide on the page said this.
- **Arcana can be crafted with chosen lines via Transmute**, and if you do a 4-line craft, do the Chalice first.
- **Transfer costs** and the advice to skip the first Heroic set (Ancient Spirit) for the second (Faded Shadow).
- **Raid accuracy and crit caps**: Ludra ~1,500/~1,600, Corroded ~2,350/~2,500, Muspel Hard ~2,800/~3,150 — not confirmed for global.
- **Wings**: Eroded is best-in-slot for both priests (Cleric 45%, Chanter 45%), then Talisra. Front/Back Damage Boost is why even ranged classes run it.
- **Crit Damage Boost is worth less to both priest classes** (~0.4–0.45% rather than 0.6%) because they have Crit Damage passives — Cleric's Earth's Grace, Chanter's Wind's Promise.

### Changed: ping

The Compare ping row now carries both sides. Madsin says a recent network patch made 200 ping a non-issue; KanonXO's testing measured a 150–200 ping difference at roughly 50–70% damage. **But KanonXO also tested Templar, Brawler and Assassin and found no major difference between classes** — which retires the "high ping favours the Cleric" argument on its merits, regardless of who is right about the magnitude.

### Changed: support acceptance

Added to Getting picked: supports are gatekept specifically by **stigma skill levels**, not just gear score. KanonXO names Undefeated Mantra and Light of Protection as the ones that matter because they lift the whole group. So a Chanter with a maxed Undefeated Mantra is more wanted than one with a better gear score and a level 5 mantra.

### Caveat applied to existing content

The At 45 "crafted PvE line is stronger than the dungeon one" claim is a **Korea/Taiwan rule**. KanonXO flags that on global crafted gear does not automatically get maxed potential stats and whether crafted beats dungeon is unconfirmed. The row now says so rather than stating it flat.

### Process

`verify.js` had three assertions encoding wording this round deliberately replaced (the old KR-only threshold caveat, the first ping row, the two-or-three skills count). **Rewrote the assertions rather than leaving them failing** — a test asserting superseded content is worse than no test, because it trains you to ignore failures. Also caught myself inserting the transfer rows into Start's "Do not" list instead of At 45, because the "Gold gear" anchor row lives there; added an assertion that the relocated rows are absent from Start.

155 checks pass against the deployed bytes.


## 29 Sep 2026 — Madsin's launch plan, and a Shugo correction

Fallen Clocks shared Madsin's 55-minute global progression plan ([AION2] My progression plans for Global, uploaded 28 Sep) without having watched it. Transcript fetched and read in full — 15,400 words. Madsin is a **new source**: 11 months on Taiwan/Korea, 1M+ combat power, playing from 200 ping. Not Grobs, not either dropped channel.

It is now a class-agnostic **Launch plan** tab (hotkey `L`), presented as one player's plan rather than a guide — he says twice that it is what *he* is doing and that the game does not require any of it ("do not minmax the fun out of it").

### The correction it forced

**Shugo key rates on the Start tab were wrong.** The page said 2 keys/day to a cap of 14 (from Grobs episode 10). Madsin says 3/day. Fextralife's Shugo Festival page states both tiers explicitly: **1 key/day to a cap of 7 on a free account, 4/day to a cap of 28 with a subscription.** So both earlier figures were wrong, and the page now carries Fextralife's. Also corrected: games run at **:15 and :45 past the hour**, not on the hour, and keys should not be spent after a bad placement because card picks scale with your finish.

**Where Madsin was right and the page was thin:** the daily/weekly scheduling (run daily dungeon, Nightmare and Ascension Trial late in the week because rewards scale with performance) — he agrees with the page independently. Nightmare tickets at 2/day, server-bound Shugo keys spent on the main, and no cross-server market at launch all match.

### What is genuinely new

**Item level is the real gate, not combat power.** It comes from equipped gear, enhancement, manastones, **Daevanion board levels** and Arcana cards. Every board level adds item level, which is why even the PvP-only board matters. The ladder: 1,400 Vakron → ~1,500 after exploration → 1,900 Transcendence stage 2 (guaranteed green cards, ~40 item level each) → 2,100 Ferris → Gnevakum Gulag for armor and a guard → Transcendence stage 4 for gold cards → Sanctuary. Two sources now agree the MSQ dungeon boxes are a waste of Odyle.

**Crafting, and this moves his class decision.** Staves come from **Handicraft**, and Handicraft is also where accessories come from — so a **Chanter levels one profession for both weapon and jewellery**. A Cleric's mace is **Blacksmithing**, so a Cleric levels Handicraft for accessories *plus* Blacksmithing for the weapon. Verified independently of Madsin on Fextralife's crafting tables (Blacksmithing: maces/longswords/daggers/guards; Handicrafting: bows/staves/rings/earrings/necklaces/bracelets) and ExpCarry's profession list. Real time saved, and it points the same way as the rest of the Compare tab.

**Soul binds are the biggest early pitfall** — they give no item level. If you reroll anything, reroll for game feel only: movement speed on boots and earrings, combat speed on gloves/weapon/guard/necklace.

**PvP is a deliberate skip for the first fortnight** (rankless opponents, ~300 AP a kill) and **do not buy PvP gear for item level** — Canis is only ilvl 62 on global and costs more AP. All AP goes to stigma shards at 10,000 each. Nightmare tokens: stigma shards but hold 14,000 for the Zikel statue. Festival shop: Daevanion crystal first.

**Practical, not strategic:** make all four characters on day one, because a locked or full server blocks character creation for accounts with nobody on it but lets you add alts once you have one. The Ascension bar gates the MSQ and is filled with sealed dungeons and on-path greens — distinct from Ascension Trial, which the page already covered. The mirrored opposite-faction seal dungeons look skippable on global since the Daevanion crystals and skill points were stripped from them on the test client.

### Conflicts kept rather than resolved

- **Skills at Lv.20: four or two?** The 1M+ CP build runs four and his hotbar shows it. Madsin expects most classes to reach two on global because rings get contested for other stats, though he got three when rings were free to roll. Flagged on the Chanter build tab: plan for two, treat more as a bonus.
- **Ping.** The page's "high ping favours the Cleric" is now marked contested. Madsin plays at 200 ping, clears all content on day one, and says a network patch a few weeks ago made ping "significantly less of a deal" — mainly a dodging concern, with DPS checks not tight enough to plan around. The class-mechanics argument still stands, so both are on the row and he picks.
- **Shugo keys per day, as above** — resolved in Fextralife's favour, with the reasoning on the page.

### Deliberately not adopted

Madsin's gathering, Kinah-to-token arbitrage and auction-house flipping are recorded as his money-making route, not as a recommendation. He says outright he will not touch gathering himself, and the page does not need an economy guide.


## 29 Sep 2026 — main + alt planning: Getting picked and Alts sections

Fallen Clocks laid out his intended day 1/day 2: main to 45, then two alts, one being the opposite priest, then day 2 content. He is leaning **Chanter main**, reasoning that people will not always need healing and that the Chanter's off-healing will do. Asked directly whether the plan changes any recommendations and whether a Chanter gets into dungeons and raids more easily, early and later.

**The schedule itself is unchanged.** Nothing about day 1/day 2 needed revising. Two gaps were worth closing, and both are now on the page.

### Getting picked (new Compare section)

The head-on answer to the acceptance-rate question, in the order it actually applies:

- **Gear score and combat power filter you into groups before class does.** The dungeon lobby shows both before the pull, so that is what a leader reads. Class only decides a tiebreak between similarly geared players.
- **Cleric:** structural demand from the rez, not from healing volume. KR/TW: 2× Cleric "borderline mandatory until you are overgeared or speedrunning."
- **Chanter:** durable but second-support demand — invited because the mantras make everyone else's logs look good. Loses only on the one-support-slot call.

**One correction to his reasoning.** "People may not necessarily need healing all the time" has it backwards for the first weeks: healing demand is *highest* at launch, when everyone is under-geared and learning, and falls off later. That is the same Cleric-early / Chanter-later split already in the Caveat row, so the section cross-references it rather than restating it. Also worth stating plainly: the Cleric's edge was never healing throughput, it is the only rez in the game — so trading the Cleric away on "they won't need heals" is trading on the wrong axis.

### Alts (new Compare section)

Alt *roles* were undocumented entirely — the page only had alt counts and levels.

- **The resource value is class-independent.** Odyle (unlocks 22) and Nightmare tickets (unlocks 45) are per character, so any class banks the same and **the number of alts is what matters, not what they are**. This is the load-bearing fact for his question, and it means his instinct to pick the opposite priest for an alt is optional rather than required.
- **Roles only matter if he will group on the alt.** If so, Cleric, for the same reason as Getting picked. If the alt is a login-and-logout resource farm, pick whatever is fun to level.
- **Never run the Cleric and Chanter in one party.** Their buffs collide (Undefeated Mantra vs Light of Protection; Power of the Storm blocked by Earth's Blessing). As two characters in two groups it is fine; this only bites if both go to one party. That is a concrete trap in his plan that was not written down anywhere.
- **A priest alt is cheap to learn** because Phases 1–5 are class-agnostic — only the class tabs change.
- **No recommendation on the third class.** There is no grounded data on which non-priest class is in demand on global, and launch populations will not be known until servers are up. The row says so explicitly rather than inventing a tier list.

### At 45 (extended)

Added the alt-depth fork: **22 is the cheap win** (Odyle only, per character, 120/day to an 840 cap), **45 is the expensive one** (also Nightmare tickets, 2/day to cap 14, plus the five duties). Previously the page said "level alts to 22" and separately mentioned 45 banking without presenting it as a decision.

### Note on his ordering

He described main-to-45 first, then alts. The page's day-1 plan is the reverse: every character to 22, then the main to 45, so all the Odyle tanks start filling on day 1. Both are defensible and the difference is small — Odyle caps at 840 and cannot be spent before 45 anyway — but his order does start the alts' clocks later. Flagged to him rather than edited, since it is a preference with a visible cost, not an error.


## 29 Sep 2026 — Cleric macro updated, skill-level ceiling corrected again

The same player sent updated macro screenshots for his **Cleric** (he had previously sent his Chanter build). Both images are direct evidence, so they outrank any prose about them.

### The Cleric macro

His in-game Macro window: slot 1 **Earth Punishment (Lv.25)**, slot 2 **Condemnation (Lv.20)**, both 10 ms, hold LMB alongside. This **replaces the Earth Punishment → Judgment Thunder pairing** that was on the Skills tab — Condemnation is a different skill and is on Hub's global Cleric list, so it is a real swap, not a typo for the old row.

He frames it as the setup to run *until you have good uptime on Punishment*. That makes it an **interim** macro, not the endpoint, and the page says so. It also gives a second in-game screenshot putting Earth Punishment in slot 1, which is mild evidence against Grobs's "highest priority at the bottom" rule; both are kept and the conflict is flagged as a two-click change.

### Skill levels were still wrong, and this exposed it

Last round I wrote "Lv.12, 16 and 20 are bonuses", which implied 20 was the ceiling. His Earth Punishment is **Lv.25**, so that was wrong too. The grounded version, now on both Skills tabs:

- Skill points stop at **10** (13 points to 8, 21 points to 10).
- The Daevanion board adds up to **+4**, so 14.
- **Gear and Arcana cards carry the rest.** Players report +6, which reaches 20; +skill level rolls on gear of any rarity.
- **No fixed ceiling at 20.** Observed at 25.

Also recovered: the **8/12/16 effect thresholds are documented for Korea/Taiwan** (Skycoach, citing the KR/TW version). Last round I removed them for lack of a source; they are back, flagged as unconfirmed for global rather than dropped.

### Provenance worth keeping

His Cleric runs Lv.25 skills while his **Chanter tops out at Lv.20**. Same player, so the gap is investment, not a rule — which means his Chanter allocation is a well-invested second character's, not his most-invested character's. Noted on the PvE build tab so the Chanter numbers are not read as equally final as the Cleric's.

### Process fix

`verify.js` is now in the repo. This host has no browser, so it checks the deployed bytes: per-class tab resolution, nav visibility matching resolvability, the switcher wiring, the load-bearing content claims, and byte-identity between live and local. **One bug it had, now fixed:** it concatenated response chunks as strings, so a multi-byte UTF-8 character straddling a chunk boundary was corrupted and an identical live file looked modified. The file got more multi-byte characters (—, →, ·) this round, which is what finally triggered it. Fetch chunks as Buffers and concat.

### Still open

- What "good uptime on Punishment" means numerically, and what the macro becomes at that point.
- Whether global's effect thresholds match KR/TW's 8/12/16.
- The specialty tier numbering in the Chanter build still does not map onto a documented unlock scale.


## 29 Sep 2026 — Chanter PvE build tab, and corrections it forced

The same 1M+ CP player who wrote the Cleric build already leading the Cleric Skills tab sent his Chanter build, as text plus two in-game screenshots (skill hotbar, in-game Macro window). It is on a new class-scoped `PvE build` tab (hotkey `B`), labelled a second opinion throughout: the screenshots are direct evidence of what he runs, the numbers are his, and nothing in it is independently corroborated.

**Tabs are now per-class.** `CLASSES.<class>.tabs` lists which views a class owns, so the Chanter carries `build` and the Cleric does not. The nav filter hides a view exactly when the selected class cannot resolve it, and `render()` falls back to Skills if a class switch strands the view. Adding a class is still one entry.

### Corrections this source forced

**Skill levels were described wrongly on both Skills tabs.** "A skill maxes at 10" was misleading. Skill points take a skill to 10; Lv.12, 16 and 20 are bonuses — Daevanion board +4, rings +2, weapon and guard +1 each, then Arcana for the rest. Fixed on both tabs and cited to the r/Aion2 "how to get +20 skills" thread, where players confirm the breakdown and that 20 is reachable. His own hotbar shows Lv.20 skills, which is what exposed it.

**Specialty unlock thresholds were unverified.** I had "options unlock at skill levels 8, 12 and 16" on the Chanter tab; Game8's page does not state thresholds at all and I could not find one that does. Replaced with the rule his eleven rows actually demonstrate — three specialties at Lv.20, two at Lv.12–16 — and flagged the unlock levels as unconfirmed. Do not restate 8/12/16 as fact without a source.

**Marchutan's Wrath is contested, not settled.** He calls it mandatory (it triggers Dark Crush on the target for 7s). A Korean creator says it now does little damage. Both describe the same effect and disagree on the slot. Kept as contested rather than overwritten.

**Power of the Storm beats the Cleric's Earth's Blessing on global.** Korean players rate the Cleric's buff higher and Game8 confirms the two conflict; he says on global PotS is the stronger of the two. His Fracturing Blow swap for PotS is explicitly *not* valid on global.

**The macro has two credible versions.** His actual macro is two steps — Wave Blow → Dark Crush at 10 ms. Codex's is Onslaught → Dark Crush → Spinning Strike. Both kept and flagged; it is a latency preference, not a right answer.

**Dark Crush only lands on a target already Stunned, Knocked Down or Airborne** (Game8 tooltip). The Skills tab implied it was a straight ranged hit.

### Closed

- **Which four stigmas a fresh 45 should carry:** Undefeated Mantra / Sprint Mantra / Guardian Blessing / Power of the Storm, identical for solo and group PvE, swapping Guardian Blessing for Focused Defense on Nightmare. He writes "Focused Block" — almost certainly Focused Defense, noted on the page rather than silently corrected.

### Still open for Chanter

- Exact point totals at 45 (230–250 remains a reported range).
- Whether Marchutan's Wrath earns a slot — unresolved between two credible sources.
- The specialty tier numbering he uses (1–5) does not map cleanly onto any unlock-level description I have. Worth asking him what the numbers mean.


---

## 29 Sep 2026 — Chanter added, site becomes multi-class

The companion became a class-switching site: `CLASSES` holds class-specific tabs (skills / stats / daevanion), `PAGES` holds the class-agnostic ones (start, compare, at 45, cash shop, KR traps, sources). Header switcher selects the class; `pageFor(view, classKey)` resolves. Adding a third class means adding one entry to `CLASSES` plus a button — no other changes. The route (phases 1–5) was already class-agnostic and is shared.

### What the Chanter verification found

**Confirmed independently.** Hub's global client list (26 active, 10 passive) and Game8's skill tooltips agree with Codex's mechanics. Game8 also supplied the manastone priorities and three cross-class conflicts:

- Undefeated Mantra cancels the Cleric's Light of Protection. Equal level → Undefeated applies.
- Power of the Storm is blocked while the Cleric's Earth's Blessing is active.
- Earth's Promise's tolerance reduction is cancelled by the Cleric's Chain of Torment.

Those three settle how the two classes interlock and are now on the Compare tab. The first one also independently confirms the Cleric page's existing advice to drop LoP when a Chanter is present.

**Not global.** Hub's global client does not include Resonance Crush, Crushing Blow, Bursting Blow, Storm Chain, Surging Strike, Piercing Strike, Bolt Crush or Crushing Strike. Those are Korea/Taiwan only (client v110). Codex discusses specialty options for Bursting Blow and builds Dark Crush's 12 option around the Piercing Strike chain, so parts of its Chanter advice describe a later version. Flagged on the Chanter Skills tab.

**Single-creator, cannot corroborate.** Codex attributes the Chanter level-45 point allocation, the leveling specialty picks, the starter stigma set and the DPS macro to aLuckyRO — the channel dropped in the previous pass. Hagoo and Logon (Korean) cover endgame targets; Game8 and Hub cover mechanics and skills. So the Chanter's *mechanics* are well verified but its specific *numbers* are one creator's. Recorded on Sources and on the Skills tab.

**Rejected.** aion2classes.wiki claims a level-37 equalized DPS test where Chanter posted the highest of eight classes (564K). Excluded: that site reads AI-generated throughout and no other source repeats the figure. If it turns out to be real it would materially change the Cleric-vs-Chanter read, so it is worth watching for a second source.

**Still open for Chanter.** Exact skill point totals at 45 (230–250 is a reported range, not a confirmation). Which four stigmas a fresh 45 should carry. Whether Undefeated Mantra's 100 Accuracy at stigma 10 is worth rushing ahead of the Cleric's own track.



---
27 Sep 2026 global-watch check: no companion changes (no post). All nine monitored sources are
content-identical to the 26 Sep check once dynamic churn is normalized: the five MMO Codex
articles changed only their author URL slug (/writers/the-mmo-codex-editorial-desk/ ->
/writers/editorial-desk/, 14 bytes each), the Failure Guild doc re-encoded its embedded images
(text byte-identical across 25/26/27 Sep), the PlayNC list moved only its server `now` timestamp
(rendered list identical, newest post still 19 Sep), and Questlog moved only its Cloudflare
__CF$cv$params token. hub-lst (LST vs Korea) still shows 700/1000 Krao, 1400/1600 Urugugu,
2100/2200 Fire Temple; open item 4 stands. Tunnel hostname unchanged from 26 Sep.
Method note: web_extract and web_search both return HTTP 402 (Firecrawl balance); use curl for
source fetches, and `curl https://r.jina.ai/<url-encoded-url>` with `X-Return-Format: markdown`
to render the PlayNC notice list (one retry cleared the Cloudflare challenge).

---

## 28 Sep 2026 global-watch check — patched and pushed

Source churn this run, normalized: the five Codex articles are byte-identical to the 27 Sep check; the
Failure Guild doc moved 51 bytes again (embedded image re-encode, text unchanged); both Questlog hashes
moved with identical byte counts (Cloudflare token churn, same as previous runs); the PlayNC notice list
moved only its server `now` timestamp, and its rendered newest post is still 19 Sep.

Real change: the Questlog character build `character-builder/TokenOfTheSpirit` is gone — the rendered page
answers "The character you're looking for doesn't exist. It might have been deleted or the link you followed
is invalid." That link was on the Sources page as "Questlog board", and the Skills page leaned on it as the
stand-in for the empty character-builder Skills tab. Both rows now point at the Skill Builder builds
(`?build-id=2233` PvE, `?build-id=1650` PvP), which are live and tagged Global. Note Questlog now exposes
`en-nc` / `ko-nc` / `zh-nc` locales labelled [KR/TW]: stay on `/en/` for global data.

Added two prep rows from NC's own global notice ("Launch Scale Test Comes to a Close: What's Next?", 19 Sep 2026):
- Install: Steam testers must uninstall the Playtest app and download AION 2 again for Advanced Access on
  Sep 30; the test entry was a separate Steam app (hub: app 4972320) and does not update into the retail
  client. PURPLE players need no steps. No pre-download window is posted for EA or launch.
- Queue: members in good standing join the priority queue at capacity; NC calls it a privilege, not a
  guarantee, and can revoke it for disciplinary action.

Nothing KR/TW-only was added. Open items 1-5 above still stand, including the item-level gate question
(Krao 700 global vs 1000 KR/TW) and the need to read PlayNC through a renderer.

Method: `web_extract` worked this run (Firecrawl was 402 on 27 Sep). PlayNC list/article render fine through
`https://r.jina.ai/<url>`; the board's own API host (`api-global-community.plaync.com`) needs the site's
createBoard signing, so use the renderer.

---

## 29 Sep 2026 global-watch check — patched and pushed

Source churn, normalized: the five Codex articles are byte-identical to the 28 Sep check; the Failure Guild
doc moved 138 bytes again (embedded image re-encode, text unchanged); both Questlog hashes moved with
identical byte counts (Cloudflare token churn, same as every prior run — the Skill Builder links still
resolve and still read Global); the PlayNC notice list moved because three real posts landed.

Real change: NC posted three global notices on 28 Sep (all rendered fine through web_extract — no Firecrawl
402, no need for the jina renderer this run).

- "Advanced Access Servers" (28 Sep 21:00) posts the schedule with hours: 30 Sep 6AM PDT - 4 Oct 10PM PDT
  (13:00 UTC - 5 Oct 05:00 UTC), maintenance 4 Oct 10PM - 5 Oct 6AM PDT, global launch 5 Oct 6AM PDT
  (13:00 UTC). Page had EA at 10:00 AM PDT from a stream — dead. Free launch hour is now NC's own, not just
  Steam's. Also lists the servers: EU 4 pairs, NA West 1, NA East 2, LATAM 2, ASIA 1; every server houses
  one faction; launch order is region -> faction -> server.
- "Advanced Access Server Matchmaking" (28 Sep 21:05) explains Elyos/Asmodian server pairing for the Abyss
  and Spacetime Rifts, and says pairings get reshuffled later.
- "Pre-download Available Now" (28 Sep 09:00) kills the page's "no pre-download window is posted" line:
  files download now, encrypted, and the client decrypts them on 30 Sep; not a reinstall.
- Founder's Pack notice "Updated 9/28" adds the Special Quai Membership to all three tiers; the Quai notice
  "Updated 9/28" cuts the price $15 -> $14.99, strikes World Exchange from the benefits, raises the Shugo
  Festa key cap, and dates sales from 30 Sep 6AM PDT.

Patched pages.js (prep Clock: early access, free launch, install, faction, server, + new Rivals row; shop:
member row and $25 row; watch: checked date; links: three new notice URLs). Nothing KR/TW-only was added —
the server, schedule and pre-download facts are all global notices.

Open items 1-5 above still stand (item 5's "newest post" line is superseded: newest is now 28 Sep). Item 6
stands: Pages only updates on commit+push.
