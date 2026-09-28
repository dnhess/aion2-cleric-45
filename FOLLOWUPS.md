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
