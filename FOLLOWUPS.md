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

## 29 Sep 2026 — Chanter added, site is now multi-class

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
