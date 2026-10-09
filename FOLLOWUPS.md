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

## 2 Oct 2026 — "What do I do after 1800 gear score"

He is standing in the one band the page never described. The gear-score table went **1200–1600 → 1600–2200 → 2400+** with no steps in between, and the Transcendence ladder was **wrong for global**.

### The correction

**Global shifts Transcendence down one stage, and the page had it off by one:**

- **Stage 1 entry is 1,600 on global**, not 1,900 — and global stage 1 pays what Korea pays at stage 2: **green and grey cards.** Because all five card slots are empty before this, it is the **single biggest jump in the ladder.**
- **Stage 2 at 1,900** (Korea's stage 3) gives **blue** cards plus the blue bell, chalice parchment and mirror. The page said stage 2 gave **green** cards — that would have sent him to the wrong dungeon for the wrong reward.

### The band he is actually in, 1,800–1,900

- **Roll manastones on every piece.** Not perfect rolls — a few each, one blue and one green line, worth **~6–7 item level per piece.** Across a set that is the difference between 1,800 and 2,100. Do it even on gear he will replace, because it is what opens the tier-three dungeon.
- **Craft weapon and accessories first, armour last** — most damage stats per material.
- **Alts feed the craft:** wrathful minds from conquest runs, transferable through server storage when unbound. **~700 item level is enough for Krao Cave and Draupnir on global; 1,400 opens Urugugu and Vakron.**
- **Nightmare** at the highest difficulty he can clear, take **pets**, route the **Daevanion crystals into the PvE board.**
- **2,100 → Ferocious Horn Den** (tier three, best non-crafted gear in Season 1).
- **Past 2,200, stop treating gear score as the objective** and switch to combat power — gear score mostly exists to open doors.

### Two source-quality decisions

**The mmoexp KR guide was rejected as a source for this**, despite ranking well: it is dated **February 2026** and references **level 55/57 gear and "level 50+"**, neither of which exists on global (cap 45). Its gates are therefore KR/TW. Its *structure* was useful for finding the right questions; its numbers are not on the page.

**The row that said 2,200/2,700/2,800 was "disputed, single source" now records corroboration** — a second independent global guide published the same sequence. And the **2,100 vs 2,200** question (Ferocious Horn Den entry against the tier-three unlock) is recorded as **two numbers side by side** rather than averaged into a wrong one.

### Process

**My own assertions failed first and the page was correct** — I aimed 15 new checks at the Systems tab when the bands table is in the **At-45** tab and the ladder is in the **Cubes** tab. Worth remembering: check which tab a row actually lives in before writing an assertion against it, or the failure looks like a content bug. I also caught one assertion calling an undefined helper (`mmoexpNote()`) before it could throw.

**Transcripts:** the fetch script needs `--with youtube-transcript-api` under `uv run` — a plain `uv pip install` reports success but the script still cannot import it. And **inline `python3 -c` with a regex hits the approval timeout** on this host; write the script to a file and run it by path.

354 checks pass against the deployed bytes.


## 2 Oct 2026 — "What's the best way to get manastones after doing all quests"

The page explained how manastones **work** — which slot, what grades, how rolling resolves, what survives a transfer — and never said **where to get them**. Seventh question in the same shape.

### The answer

**The reliable tap is Alchemy.** Manastones are craftable, and the ladder is explicit:

- **5× Lesser Manastone → 1× Intermediate** at Alchemy **20**
- **30× Intermediate + Spiritstone Powder + ink → 1× Superior** at Alchemy **85**

So Alchemy is worth levelling for stone supply alone, whatever class he plays. This is the first thing on the page that makes Alchemy worth anything to a Cleric or Chanter, since the class-specific crafts are Handicraft and Blacksmithing.

**Bound vs tradable — the distinction that unlocks the question.** Content hands out the **(Bound)** stones: quests, expeditions, Sanctuary, achievements, Daeva Pass, chests, Ascension Trials. **Crafting** makes the **tradable** ones. Identical shape to dungeon loot, where cube rewards bind to the character and direct boss drops do not.

**Ascension Trial is 3 runs a week per character.** Nightmare Altar and Sanctum of Loathing, four difficulties each, and each can pay stones. Per character, not per server — so every alt is another three chances a week. That is the strongest argument yet for his alt plan, and it is independent of the Odyle argument.

**Achievement rewards pay stones on repeated clears with no cube opened.** There are achievements for exploration clears on Krao Cave, Urugugu, Fire Temple and Draupnir, plus "Filled with Manastone" I and II. **That is why players finish a Conquest run and walk off without looting** — the clear counts, the cube spends energy. Two replies in the thread gave this independently, one saying plainly "they are grinding achievements".

**The market works, funded by alt Kinah.** Crafted stones are tradable, and Superiors get expensive precisely because that is where everyone's demand lands.

**Grade odds, so he knows what he is buying:** Superior rolls Rare 50% / Epic 35% / Unique 15%. A yellow Damage Bonus on a Superior stone is a **0.5%** roll. Expect to spend a **stack**, not a stone.

### Sources

**wikily** has all 19 stones with per-item sources and the Alchemy recipes, and flags which are tradable. An **r/Aion2** thread supplied the bound-versus-tradable rule.

### Caveat recorded rather than papered over

wikily only has written source pages for the **(Bound)** variants; the unbound ones list Alchemy as their only source. That is consistent with content→bound and crafting→tradable, but "the unbound ones never drop" is an **inference from absence**, not a confirmed negative. The page states the split and does not claim drops never happen.

334 checks pass against the deployed bytes.


## 1 Oct 2026 — "Have I messed up? I claimed the guaranteed chest piece early"

**No.** And the fact he asked is the page's fault: it said "hold the pick" at Ferris **without ever explaining why**, which reads as scarcity.

### The actual mechanic

**Nothing is consumed globally.** Opening the end box three times gives one pick **from that dungeon's own loot table**, so taking it at one dungeon does not spend anything at another. The worst case is that he chose a slot conquest would later have filled anyway.

**Why Ferris says hold, stated properly now:** holding lets you take **the piece you are missing** once you have seen what conquest dropped. It is about **choosing better, not saving a resource.** Claiming early costs **information, not energy**.

Both rows are on the Cubes tab. This is the **sixth** question in the same pattern — the page had the instruction and not the reason, so the instruction read as a rule with a hidden cost.

### Two corrections found while verifying

**1. The page said "six-player PvE instances."** mmoexp says **five** on global against **four** in Korea; Fandom says six. **Recorded as disputed rather than picking a side** — I had taken Fandom's number straight and put it on the page yesterday without a second source.

**2. The star ranking was missing entirely**, and it matters for his next steps:

- **1-star:** Krao Cave, Draupnir
- **2-star:** Urugugu Canyon, Vakron Sky Island
- **3-star:** Fire Temple, Ferocious Horn Den

**On global you cannot skip the one-star step** the way Korea could — Krao and Draupnir have to raise item level before the two-star dungeons open. That is a material difference from the KR route and the page did not say it.

Also added where loot comes from: an **Odyle Energy Cube** at the end, with **each boss in Conquest holding its own chance at gear** — so a full three-boss clear has the best odds, and a one-boss run trades drop quality for speed.

Sources: mmoexp's Season 1 PvE guide and ExpCarry's dungeons guide added to Sources. ExpCarry flags its own numbers as **test-client values, not verified retail**, which is now noted.

### Process

One of my own assertions was asserting the very wording I corrected ("Six-player PvE instances") — that is what surfaced the unverified claim, so the assertion was kept and updated rather than loosened. And I caught myself asserting a **mmoexp citation on Sources that I had not actually added**, in the same batch. Both were real failures, not test noise.

320 checks pass against the deployed bytes.


## 1 Oct 2026 — "I hit 1400 gear score. Do I do expeditions or conquest?"

**Answer: the Conquest tier of Vakron Sky Island.** They are not alternatives, and his framing exposed a definition the page had never written down.

### The terminology, now on the Cubes tab

**Expedition is the dungeon.** Six-player PvE instances, the core of the endgame dungeon progression — and the same menu you unlock at 22 to start banking Odyle. So "expedition" is the activity, not a difficulty.

**Each expedition runs in one of two tiers: Exploration or Conquest.**

- **Exploration** — the easy mode, the version the MSQ walks you through while leveling.
- **Conquest** — the real one, with **Normal / Advanced / Hard** variants depending on the dungeon.

So the real question is "which expedition, and which tier of it" — at 1,400 that is **Vakron Sky Island on Conquest**: claim the end box three times, 120 Odyle, take the chest piece.

**Also recorded:** Transcendence is a **separate dungeon, not an expedition difficulty** — staged rather than tiered, and where Arcana cards come from. The old ladder listed it inline with the dungeons, which made it read as though it were on the same axis.

### Two facts worth having while standing in the instance menu

- **Hard mode Conquest is reportedly not in at global launch.** Single source (mmoexp), so it is flagged as such on the page rather than stated flat.
- **Exploration runs pay bound currency; Conquest runs pay unbound.** So running Conquest on an alt is a practical way to move resources to the main — **a second reason the alt plan pays**, beyond banking Odyle. That is a new fact, not a restatement.

Sources: **Fandom's Dungeons page** states the tier structure plainly; **Game8's difficulty page** confirms Conquest is for stronger parties with toggles per dungeon. Both added to Sources.

### Why this is my error, not his confusion

The Cubes tab already said "Conquest, not Exploration" and the At 45 tab said "Expedition list. Costs Odyle" — so the page used **expedition** as an umbrella in one place and as a peer of conquest in another, and never defined either. **He asked a question the page's own inconsistent vocabulary created.**

This is the same failure mode as the belt and the +5 rule, and it is now the **fifth** instance: not a missing fact, a missing definition. The check that would have caught it: *when two words on the page are used as both category and member, define the category before using either.*

302 checks pass against the deployed bytes. (The launch-day global watch had already been patched and pushed by the cron job; this edit sits on top of it.)


## 29 Sep 2026 — "Lay out when I need to claim the cubes from dungeons"

The answer existed but was **split across four tabs** — Start, At 45, the Launch plan and Systems — with no single view. It now has a class-agnostic **Dungeon cubes** tab (hotkey `E`, "At cap" group).

### The organising insight

**Odyle is the one timer that cannot wait.** It refills on its own and caps at 840, so unused energy is simply lost — whereas Nightmare, Ascension Trial and daily dungeons all **scale with your power** and should be held to the end of the week. **Cubes are the opposite of every other weekly**, and that contrast is what makes the timing make sense. It was only implied before, spread across the "Order why" row on At 45.

### The ladder, in gear-score order

- **Never 1–44**, and still never in the story Exploration dungeons at 45 even though he is max level. **One exception:** if short of item level, three exploration runs gives a pick of item-level-62 gear.
- **45 / 1000:** Krao Cave for the repeatable Unique necklace, earring or ring; Draupnir once.
- **1400:** Vakron — claim three times, take the **chest piece**.
- **1900:** Transcendence 2 — guaranteed green cards.
- **2100:** Ferris — three boxes, but **hold** the equipment pick.
- **Then:** Gnevakum — two chests a run, 14 runs, to finish the pity and craft a **guard**.
- **Then:** return to claim the held pick, prioritising **boots and gloves**.
- **Stage 4:** Transcendence for gold cards.
- **2400+:** Fire Temple and Ferocious Horn Den.

Plus the mechanics: 40 Odyle per cube, 80 for a double claim, per character; **three chests, not four**; Conquest not Exploration. And the weekly: claim all Odyle from Substance Morph (**16 per server plus 4 per character**) and the subscriber shop before the Wednesday reset, since neither carries.

### Process

`verify.js` gained 24 assertions, including that **every ladder rung is present and the rungs appear in ascending gear-score order** — so a future edit cannot silently reorder the spend priority. That ordering check is the one that matters most here, because the tab's whole value is sequence.

**Two shell tools hit approval timeouts this round** (`python3 - <<heredoc` and `node -e`). Both jobs were done with the file-edit tool instead, which needs no approval and shows a diff. Worth defaulting to that for string and file work and reserving shell for the harness and git — noted in the skill.

290 checks pass against the deployed bytes.


## 29 Sep 2026 — "How do I upgrade my belt and amulet to yellow?" — and the naming problem underneath it

**The mechanism, two steps repeated:** enhance to **+10** → **Substance Morph** up one grade → enhance the new one to **+10** again → repeat.

**The menu path, which the page never had:** **Menu → Substance Morph, or `Alt`+`H`.** It lists what you can morph into, with the ones you already have materials for at the top; required materials on the right, success chance in the middle. Belt and amulet morphs are **high chance or 100%**.

**The thing that makes the ladder confusing, and that no source said plainly:** a morph **returns the piece at +0 of the new grade.** It does not carry your enhancement. That is why the +10 gets redone at every rung, and why the process looks longer than it is.

### The naming problem, handled rather than papered over

Three sources name these grades three different ways:

- **Fextralife:** the belt/amulet chain is **Rare → Epic → Unique**.
- **KanonXO's doc:** writes **Yellow/Unique** and **Orange/Heroic**.
- **Players (and Fallen Clocks):** green, blue, yellow, gold.

**No source maps colour to grade name for the belt and amulet**, so the page declines to guess one — and says so, rather than inventing a mapping that would look authoritative.

It also explains why the gap does not matter: **every rung is the same two steps.** So the actionable answer for a green belt is "enhance to +10 and morph, repeat until the icon stops changing" — a **stop condition stated in a colour-free way**, since the icon is the ground truth and the names are not.

This also prompted removing the word "gold" from Systems' stop condition in favour of "top grade" — the page should not lean on a colour name it cannot source. Console-grade naming is now consistent with the caveat.

### Fourth question in a row of the same shape

The page had the ladder and the reasoning; what it lacked was **the path to the action** (no menu route for morphing) and **the one mechanic that makes the ladder confusing** (the +0 reset). Same pattern as the last three: not missing facts, missing the disambiguating detail.

266 checks pass against the deployed bytes.


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
## 1 Oct 2026 global-watch check — patched and pushed

Source churn, normalized: the five Codex articles are byte-identical to the 29 Sep check. The Failure Guild doc moved 314 bytes again — image re-encode; a text export still shows only the unchanged level 1-45 route, phases 1-5. Both Questlog hashes moved with identical byte counts (Cloudflare churn), and the Skill Builder builds still resolve and still read Global. The PlayNC list moved for real: about twenty notices landed on 30 Sep, launch day.

What changed on global, all from NC’s own notices, none of it KR/TW:

- Servers were added as regions filled. NA West got Nezekan/Zikel (30 Sep 20:11), NA East got Vaizel/Triniel (17:51), and EU got Fregion/Ereshkigal (12:15), Yustiel/Marchutan (10:30) and Meslamtaeda/Beritra (19:09). The page said NA West has one pair off the 28 Sep notice, which is now false: NA West has two pairs and NA East has three.
- Launch Rewards (30 Sep 14:00): the pre-registration and Steam wishlist rewards are extended to everyone who creates an account and logs in before maintenance on 1 Dec, 11:30 PM PT. Mail expires 8 Dec.
- Early Access Queue Time Compensation (30 Sep 13:16): one Appearance Change Voucher for long queues.
- Jump Into Advanced Access Now! (30 Sep 10:00): Founder’s Packs stop selling 5 Oct, 8:00 AM PDT — the last chance to buy into advanced access.
- Launch FAQ: no progress carries over from TW/KR; Steam and PURPLE share servers; controller play works but is not officially supported; server locations are North America, South America, Europe and Japan.

Patched pages.js: Server row rewritten for the launch-day additions; new Free rewards row on Start; new Cutoff row on the shop tab; Queue row now carries the compensation voucher; new Fresh start row on the Do not copy Korea tab; that tab’s checked date moved 29 Sep to 1 Oct; two new notice links on Sources.

Name collision worth remembering: NC named EU servers after characters the Daevanion boards are also named after, so Marchutan, Yustiel, Triniel and Vaizel now mean two different things on this page. The Server row says so.

Nothing KR/TW-only was added. Open items 1-6 stand, except that item 5’s newest-post line is superseded (newest is now 30 Sep).

Method: web_extract worked this run (no Firecrawl 402). No browser on this host, so the site was verified with node verify.js against the deployed bytes; every content check passes and the live byte-identity check is re-run after the push.

## 3 Oct 2026 global-watch check — patched and pushed

Source churn, normalized: the five Codex articles are byte-identical to the 2 Oct check. The Failure Guild doc moved 302 bytes again with no text change — stripped to text it is 22,835 bytes, sha256 9a70198fbb728d0faf727f5fd0dcd945b196a0dd0ccc598f8078cb1141d01335 (image re-encode is the standing cause, and this hash is the new baseline for future runs). Both Questlog hashes moved with identical byte counts (Cloudflare token churn): the Skill Builder still resolves and still reads Global, and the Character Builder link still 404s, which the page already says. The PlayNC notice list moved for real: two new posts on 2 Oct plus a known-issues post dated 3 Oct.

What changed on global, all from NC’s own notices:

- "Advanced Access Known Issues (Updated: 10/2)" — the load-bearing line: opening the Duty tab on the map before level 45 leaves Duties unavailable when you do reach 45, until the next day. The other entry is a cosmetic English title bug (Vanguard of Atreia displays as Shaper of Heavens). The companion tells you to run Duties at 45, so it was walking into this one.
- "Twitch Drops: War For Atreia" (posted 2 Oct 15:00): three campaigns — Oct 2–4, Oct 7–9, Oct 12–14. Campaign 1 pays on watch time: 30 min Appearance Change Voucher, 1 h 10 Soul Codex, 2 h 10 Resurrection Spiritstone, 4 h 10 Mysterious Pet Chest. The Drops FAQ states rewards are Global-server only and Korea/Taiwan players are not eligible.
- "Twitch Drops Account Linking Guide" (2 Oct 01:27): link the account you actually play on — Steam for Steam, NC/PURPLE for PURPLE — and do not re-link through the NC website, which can unlink the existing connection and leave you unable to reach your existing character.
- "New Servers Opening (Europe)" (2 Oct 05:10): EU added Hithanya (Elyos) / Nemon (Asmodian), 03:00 PDT / 12:00 CEST.

Patched pages.js: two new rows on the prep Clock (Twitch drops, Twitch link), the Server row now carries the 2 Oct EU pair, one new row beside Duties in the At-45 "Where it comes from" list for the pre-45 Duty-tab lockout, and the Do-not-copy-Korea checked date moved 1 Oct to 3 Oct. Six new verify.js checks in a "3 Oct launch-window additions" section.

Nothing KR/TW-only was added. The drops are explicitly global-only (their own FAQ excludes Korea and Taiwan) and the Duty-tab lockout is a global client issue, so neither is a KR/TW system difference to avoid.

Open items 4-6 stand; item 5’s newest-post line moves to 3 Oct.

Method: web_extract worked for every PlayNC article this run, no renderer needed.

## 4 Oct 2026 global-watch check — patched and pushed

Source churn, normalized: the five Codex articles are byte-identical to the 3 Oct check. The Failure Guild doc moved 931 bytes, and stripped to text it is byte-identical to yesterday’s strip (same text sha256 8c2c05bc…), so it is another image re-encode. Both Questlog hashes moved with identical byte counts (Cloudflare token churn): the Skill Builder still resolves and both Cleric builds still read Global, and the Character Builder link still 404s — which the page already says. The PlayNC list moved for real: one new post, 3 Oct 11:43.

What changed on global, from NC’s own notice, none of it KR/TW:

- “Founder’s Packs Cosmetics Soon Available On All Characters” (3 Oct 11:43): the pack title, the Deluxe/Ultimate armor and weapon skins, and the Ultimate pet and wings become usable on every character on the account, on any server. Excluded and still one-time: the 30-day membership, the Daeva’s Campaign Supply Chest and the Daeva’s Styling Chest. Implementation lands after Early Access ends, several days out, with a follow-up post on the mechanics.
- Same notice, the upgrade route: on PURPLE you upgrade the pack you own to a higher tier; on Steam you buy the higher tier on the same account and ask Customer Support to refund the lower-priced pack. That route only matters until packs stop selling Mon Oct 5, 8:00 AM PDT.

Patched pages.js: the $50/$100 why-line now points at the new route, two new shop rows (Cosmetics, Upgrade), the Do-not-copy-Korea checked date moved 3 Oct to 4 Oct, and one new notice link on Sources. Seven new verify.js checks in a “4 Oct launch-window additions” section. index.html untouched.

Nothing KR/TW-only was added — account-wide pack cosmetics and the tier-upgrade route are global-client decisions, not a KR/TW system difference to avoid.

Open items 4-6 stand; item 5’s newest-post line moves to 3 Oct.

## 5 Oct 2026 global-watch check — patched and pushed

Source churn: the four Codex articles are byte-identical to the 4 Oct check. Questlog's two builder URLs moved to 16,491 bytes each and both extract to the same mrrosapony planner shell listing the Cleric PvE and Cleric PvP builds, both tagged Global; the character-builder page itself still answers that the character does not exist, which the Sources tab already records. The Failure Guild doc moved 86 bytes and was not re-read this run — nothing in it was reported as changed. The real change was the PlayNC notice board (+2,154 bytes): a launch-day thanks post plus the notices the page had not yet absorbed.

What changed on global, in NC's own words, none of it KR/TW:

- Coupon TAKEFLIGHTAION2 ("A Thank You Gift to all Daevas!", 30 Sep): Odyle Energy x4, Resurrection Spiritstone x5, Battle Enhance Scroll x10, redeemed at Settings > Miscellaneous > Account > Enter Coupon. All servers, one redemption per account, items bound. Ends 13 Oct 11:00 PM PDT, EU 14 Oct 08:00 CEST. The page had no coupon row at all.
- Server transfer (Steam, 30 Sep): transfers open 14 Oct, free at first, same faction only, and Early Access characters will be restricted to Early Access servers. The page said only "transfers open later".
- Launch server line-up ("New Server and Matchmaking Information", 4 Oct): the advanced-access servers stay open and are labelled as such, and a separate launch list opens with commercial launch — EU 9 pairs, NA East 5, NA West 3, LATAM 4, ASIA 3. That corrects the page's "NA East now runs three pairs", which was true of advanced access only. Watch the spellings: the two 4 Oct notices render the same three servers as Tahavatha/Tahabata, Ludra/Rudra and Kasaka/Kasika.
- Twitch Drops ("Global Twitch Drops", 30 Sep): one event in two halves — advanced access 30 Sep-4 Oct (over) and global launch 5-16 Oct on any AION 2 channel, 1 h Odyle Energy x4 through 10 h Adorable Young Elim, claimed before 30 Oct 23:59 PDT. The page still carried only the campaign 1 deadline.
- Maintenance (4 Oct) closes a page-level open question: some bosses were retuned for being "too low for the intended difficulty of a five-player party", so the Fandom-versus-mmoexp five/six disagreement leans to five. NC is a primary source here, not a third-party guide.

Patched pages.js: a new Coupon row on the prep Clock, the Twitch drops row rewritten for the launch half, the Server row rebuilt on the 4 Oct notice (launch pairs plus the 14 Oct transfer rules), the Dungeon-tiers why-line updated with NC's five-player wording, and four new links on Sources. verify.js gained a "5 Oct launch-window additions" claim block; node verify.js is green and the deployed pages.js is byte-identical to local.

Nothing KR/TW-only was added. The launch line-up, transfers, drops and the coupon are all global-service facts.

The 5 Oct "Thank you Daevas!" post is image-only in Steam, on PlayNC and in the dbaion2 mirror, so it carries no fact to record, and no new code appeared with it.

Open items 4-6 stand; item 5's newest-post line moves to 5 Oct.

Method: web_extract worked for every PlayNC article; Steam's ISteamNews API supplied the announcement bodies, since the PlayNC board pages only render the images.

## 6 Oct 2026 global-watch check — patched and pushed

Source churn: the five Codex articles are byte-identical to the 5 Oct check. The Failure Guild doc moved 327 bytes and its stripped text carries no Ludra or launch content at all, so it is the standing image re-encode, not an edit. Both Questlog URLs moved from 16,491 to 16,600 bytes: the Skill Builder still resolves and still lists the two Cleric builds tagged Global, and the Character Builder link still 404s, which the Sources tab already records. The real change was the PlayNC notice board (36,811 to 40,838 bytes): eight posts the page had not absorbed.

What changed on global, in NC’s own words, none of it KR/TW:

- “AION 2 Will Launch On Time” (5 Oct 08:50): global launch went live as scheduled at 6:00 AM PDT / 15:00 CEST. The page’s launch row still read as a future date sourced from the Steam listing; it now reads live and cites NC.
- “Update on Sanctuary Raid” (5 Oct 08:40): Sanctuary Raid: Ludra is “temporarily removed with the full launch build” while the encounter is reworked, and global gets new and adjusted mechanics and attack patterns. Ludra-specific Early Access gear is removed with it and will be granted back to whoever earned it, with the materials spent upgrading it reimbursed; a new First Clear event follows with the in-game Hall of Fame reset, and the new release date is promised by 16 Oct. This is the material one — the gear-score ladder pointed at 2,700-2,800 for Ludra and the systems tab said the bracelet comes from Ludra. Both now carry the caveat. Korea and Taiwan still run the old fight, so current Ludra guides describe their build, not global’s.
- “Customization Voucher to All Players” (5 Oct 14:24): a free Customization Voucher (Bound) to every player, used at ESC › Closet. Cosmetic only.
- “Graphics Card Giveaway” (5 Oct 15:00): one Nvidia GeForce RTX 5080 via a Gleam page, entries 5 Oct to 12 Oct 23:59 PDT (EU clock ends 13 Oct 08:59 CEST), United States/Canada/Europe excluding Belgium, Netherlands, Serbia, Slovakia, Italy and Portugal; an hour on Steam is +10 entries.
- Milestones: “Thank you for 300,000 Active Players!”, “Thank you for 400,000 Active Players” and “Thank you Daevas!” appear on the board as recognition posts with no mechanic, so nothing was recorded from them.
- “[Notice] Server Matchmaking Information (Asia)” (5 Oct 09:35): the Asia pairing list, which agrees with the launch line-up already on the page (Siel/Israphel, Kaisinel/Lumiel, Yustiel/Marchutan, Ariel/Azphel and so on). No change needed.

Patched pages.js: the Prep Clock launch row rewritten as live and on time, a new “Ludra pulled” row on the Clock, a Voucher row and an RTX draw row after the Coupon row, the 2200→2800 gear row and the systems Accessories row given the Ludra caveat, the Do-not-copy-Korea checked date moved 4 Oct to 6 Oct, and four new links on Sources. verify.js gained a “6 Oct launch-window additions” block and its checked-date assertion moved to 6 Oct. index.html untouched. node verify.js is green apart from the pre-push live check, which is re-run after the push.

Nothing KR/TW-only was added. The Ludra pull is a global-build decision, and the voucher and the draw are global-service facts.

Open items 1-6 stand; item 5’s newest-post line moves to 5 Oct.

Method: web_extract worked for every PlayNC article this run; no browser on the host, so the site was verified with node verify.js.

## 7 Oct 2026 global-watch check — patched and pushed

Source churn: the five Codex articles are byte-identical to the 6 Oct check. The Failure Guild doc moved 43 bytes (37,960,983 → 37,961,026) and its stripped text is the same guide with the same image placeholders, so it is the standing image re-encode, not an edit. Both Questlog URLs moved from 16,600 to 17,150 bytes: the Skill Builder still resolves and still lists the two Cleric builds tagged Global (mrrosapony PvE and PvP), and the Character Builder link still answers that the character does not exist, which the Sources tab already records. The real change was the PlayNC notice board: one new post.

What changed on global, in NC’s own words, none of it KR/TW:

- “[Notice] Maintenance | Oct. 6 (PDT) / Oct. 7 (CEST)” (7 Oct): NC’s first weekly maintenance since launch, and the notice itself calls it the weekly scheduled game server maintenance. When: October 6, 2026 at 23:30 PDT / October 7, 2026 at 8h30 CEST. Duration 3 h 30 m, and 5 h 30 m on the ASIA servers. Affected service: game servers — login is unavailable throughout. Update details promised later, and the Updates board still reads “No registered posts”, so there are no patch notes yet.
- The board re-pinned “Information on Server Transfer” (30 Sep) beside the New Server and Matchmaking notice. Its text is unchanged from what the page already carries: transfers from 14 Oct, same faction only, Early Access characters restricted to Early Access servers, free at first.
- “Launch Into AION 2 Now!” (5 Oct 09:00) is a launch-day congratulation post that only re-links earlier notices, so it carries no fact to record.

Patched pages.js: a new “Weekly down” row on the Prep clock (Tue 11:30 PM PDT · Wed 8:30 AM CEST, 3 h 30 m against 5 h 30 m on ASIA), the At-45 “Weekly” row why-line citing NC’s notice for the Wednesday boundary, the At-45 “Reset” row upgraded from “likely cadence” to confirmed, the Korea tab check date moved 6 Oct to 7 Oct, and one new link on Sources. index.html untouched. verify.js gained a “7 Oct launch-window additions” claim block and its checked-date assertion moved to 7 Oct. node verify.js is green (400 checks) apart from the pre-push live check, which is re-run after the push.

Nothing KR/TW-only was added. The weekly maintenance is a global-service fact; the only regional split in it is the longer ASIA window, which is not KR/TW.

Open items 1-6 stand; item 5’s newest-post line moves to 7 Oct.

Method: web_extract worked for the notice list, the maintenance notice, the transfer notice, the Launch Into post and the Updates board this run; no browser on the host, so the site was verified with node verify.js.

## 8 Oct 2026 global-watch check — patched and pushed

Source churn: the five Codex articles are byte-identical to the 7 Oct check. The Failure Guild doc moved 329 bytes (37,961,026 → 37,961,355) and its stripped text is the same guide with the same image placeholders, so it is the standing image re-encode, not an edit. Both Questlog URLs moved from 17,150 to 17,036 bytes: the Skill Builder still resolves and still lists the two Cleric builds tagged Global (mrrosapony PvE and PvP), and the Character Builder link still answers that the character does not exist, which the Sources tab already records. The PlayNC notice board moved 40,838 → 41,017 bytes with no new post — the change is the 6 Oct maintenance notice retitled with “(Completed)”. The real change is on the Updates board, which the monitor does not track: it no longer reads “No registered posts”. NC published “[Notice] Patch Notes | Oct. 6 (PDT) / Oct. 7 (CEST)”, timestamped 2026-10-07 02:30.

One methodological note: the monitor’s hashes changed for every monitored URL this run, including the five byte-identical Codex pages, so the hash alone is not a content signal — the byte sizes are.

What changed on global, in NC’s own words, none of it KR/TW:

- Founder’s Pack items go cross-character: “Founder’s Pack purchasers will be able to use Skins, Titles, and other items on other characters and servers.” The patch adds a free Founder’s-Pack-dedicated Shop that hands a purchaser the tier items they do not yet own, open “for all characters on all servers until a closure notice is issued”, with duplicate skins excluded from the paid-skin purchase limit. This is the completion of the 3 Oct notice the Shop tab already carried; the free shop is the new fact.
- “A weekly limit of 20 Morphs per server will be added to the Substance Morph formula for morphing Sealed Wings into Enhance Stones.” A new global ceiling on Enhance Stone supply, which the Systems tab already calls the bottleneck.
- New Kina item on the Wind Breeze special tab: Resurrection Spiritstone (Season 1), 25,000 Kina, “Limited to 10 purchases per server per week”, on sale from the 6 Oct maintenance through before the 15 Dec maintenance.
- Higher Raw Leather drop rates in Chaotic Lower Reshanta, Verteron and Altgard.
- Fixes: map pins now cap at 30 and display correctly, the Asmodian weekly “Daeva of Glorious Deeds” mission can be completed, and duplicated Movement Controls options and broken chat emote commands are fixed.

One caution: the maintenance notice footer still links a “Maintenance is over, welcome back” post (articleId 6ac61f286b722c561dc6aa7f) that returns NC’s 404 page and does not appear on the board, so nothing on the page is built on it. The completion flag used instead is the retitled notice.


Patched pages.js: a new “Patch 1” row on the Prep clock, a new “Morph cap” row in the Systems Enhancement section quoting NC, a new “Pack shop” row on the Shop tab, the Cosmetics why-line now records that the change shipped with the 6 Oct maintenance, the At-45 Shop row now carries the Kinah resurrection spiritstone, the Korea tab checked date moved 7 Oct to 8 Oct, and two new links on Sources (the first patch notes and the Updates board). index.html untouched. verify.js gained a “8 Oct launch-window additions” block and its checked-date assertion moved to 8 Oct. node verify.js is green (409 checks) apart from the pre-push live check, which is re-run after the push.

Nothing KR/TW-only was added. The Founder’s Pack is a global-only system, so the new pack rows are safe by construction; the morph cap, the Kinah item and the drop-rate change are global-service facts.

Open items 1-6 stand; item 5’s newest-post line moves to 8 Oct.

Method: web_extract worked for the notice list, the Updates board, the patch notes and the maintenance notice this run; no browser on the host, so the site was verified with node verify.js.


## 9 Oct 2026 global-watch check — patched and pushed

Source churn: the five Codex articles are byte-identical to the 8 Oct check (same hashes, same sizes). Both Questlog URLs moved 17,036 → 17,150 bytes — the standing app-shell churn, not an edit: the Skill Builder still resolves and still lists the two Cleric builds tagged Global (mrrosapony PvE and PvP), and the Character Builder link still answers that the character does not exist, which the Sources tab already records. The Failure Guild doc moved 37,961,355 → 37,960,842 bytes with the same stripped text and the same image placeholders, so it is the standing image re-encode. The real change was the PlayNC notice board, 41,017 → 41,196 bytes, with a run of new posts all posted 8 Oct, after the 8 Oct morning check.

What changed on global, in NC’s own words, none of it KR/TW:

- “New Servers Opening (Europe)” (8 Oct 11:00): NC opened a tenth EU pair, Elyos Nathara / Asmodian Tassin, from 09:00 PDT / 18:00 CEST. It repeats that transfers come later and that all instanced content including dungeons is available cross-server. The page’s Server row said “EU 9 pairs”, so the count moved to 10.
- “[Notice] Temporary Maintenance | Oct 8 PDT / Oct 9 CEST” (8 Oct 09:00): a second maintenance in week one, all services offline 1.5 hours from Oct 8 23:30 PDT / Oct 9 8:30 CEST for what NC calls server stabilization. Its one gameplay change: the Flight Power of the four quest wings is up 500 each, 2,000 in total — Daeva’s Lesser Wings 2,000 → 2,500, and the Intermediate, Superior and Ultimate wings 500 → 1,000 each.
- “[Notice] EU servers affected by cloud service outage (Oct 8)” (8 Oct 06:30) and “October 8 EU Service Outage Compensation” (8 Oct 13:11): a cloud outage hit 21 named EU servers (Elyos Nezekan, Kaisinel, Ariel, Meslamtaeda, Nania, Luteros, Daminu, Bakarma, Kochi, Tiamat; Asmodian Zikel, Lumiel, Azphel, Beritra, Ulgorn, Odar, Kromede, Baba, Fafnir, Agnita, Atiel), resolved the same day, with 1 day of membership and 1 day of pet auto loot for actives plus a Special Daeva Supply chest (20 Life Crystal, 10 Resurrection Spiritstone, 20 Battle Enhance Scroll, 5 Content Usage Ticket Selection Chest, 5 Odyle Energy). Left off the page on purpose: it is EU-region and transient, and an NA player cannot receive it.
- The Updates board still lists only the 6 Oct patch notes, so there is no second patch.

Patched pages.js: the Server row count moved 9 → 10 pairs with the new EU pair named in its why-line, a new “Temp down” row on the Prep clock for the 8 Oct temporary maintenance and the wing Flight Power change, the Korea tab checked date moved 8 Oct → 9 Oct, and two new links on Sources (the temporary-maintenance notice and the new-EU-servers notice). index.html untouched. verify.js: the 4 Oct server-count assertion narrowed to the non-EU end, both checked-date assertions moved to 9 Oct, and a new “9 Oct launch-window additions” block added. node verify.js is green — 416 checks, the live Pages check included after the push.

Nothing KR/TW-only was added. The new EU servers and the wing buff are global-service facts.

Open items 1–6 stand; item 5’s newest-post line moves to 9 Oct.

Method: web_extract worked for the notice list, all four 8 Oct notices and the Updates board this run; no browser on the host, so the site was verified with node verify.js.
