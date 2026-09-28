After Fallen Clocks reviews the 1–45 companion page, research and add:

1. Gearing: after we reach max level, what do we need to do?
2. How does gearing differ from the global version versus Taiwan/Korea? What to focus on for global?
3. Since we speedran to 45, what (if anything) to backtrack for proper gear. If we rush 45, how does that put us ahead of slow levelers? Any time-gated content we can start before them?

---
Open items carried from the 26 Sep 2026 global-watch run:

4. Item-level gates. The LST build showed Krao Cave and Draupnir at 700 (1,000 on KR/TW) and Urugugu Canyon at 1,400 (1,600 on KR/TW) — aion2hub, LST vs Korea. Codex (unchanged) still says the first Conquest dungeons clear around 900–1200 and posts the next tier at 1600, so the page follows Codex today. Re-check the in-game gate before moving the 1000 / 1500 / 2200 lines.
5. PlayNC notices are client-rendered, so the cheap monitor only fingerprints a server timestamp on that page. Read it through a renderer (r.jina.ai works) when checking for new posts. Newest as of 26 Sep: 19 Sep "Launch Scale Test Comes to a Close: What's Next?" — confirms Early Access Sep 30–Oct 4 and launch Oct 5, posts no hour.
6. The cloudflare quick-tunnel hostname rotates when cloudflared restarts, so the URL in the job prompt goes stale. Read the live one with: curl -s http://127.0.0.1:20241/metrics | grep user_hostnames. Live 26 Sep: dust-moderate-platinum-frank.trycloudflare.com

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
