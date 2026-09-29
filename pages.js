const PAGES = {
  prep: {
    kicker: "Start here · then phase 1",
    now: "Set these, then stay on phases 1–5. Maps are Asmodian.",
    html: `
<article class="cleric-block">
  <h2>Words</h2>
  <div class="row"><span class="k">MSQ</span><span class="do">Yellow main story.<span class="why">The route. Do not skip it.</span></span></div>
  <div class="row"><span class="k">Side</span><span class="do">Green quests on the path.<span class="why">Only the ones this route lists. Not every green on the map.</span></span></div>
  <div class="row"><span class="k">Seal</span><span class="do">Orange dungeon.<span class="why">Do the ones on the route. If you skip them, they get harder at 45 because the world scales up.</span></span></div>
  <div class="row"><span class="k">Kisk</span><span class="do">A teleport you unlock.<span class="why">Black on the maps. Take them so you never run back.</span></span></div>
  <div class="row"><span class="k">Odyle</span><span class="do">Dungeon energy. It refills.<span class="why">Unlocks at 22 and is per character. Do not spend it on every Exploration chest — save it for Vakron after 45.</span></span></div>
  <div class="row"><span class="k">Kinah</span><span class="do">Money.</span></div>
  <div class="row"><span class="k">Gear score</span><span class="do">A number that unlocks content.<span class="why">Not how strong you are. Combat power is the real strength.</span></span></div>
  <div class="row"><span class="k">Stigma</span><span class="do">Extra skills from level 22.<span class="why">Four slots on global. Korea videos that show six are later.</span></span></div>
  <div class="row"><span class="k">Daevanion</span><span class="do">The board. Press D.<span class="why">The grid people call tiles. Separate from your skill bar.</span></span></div>

  <h2>Clock</h2>
  <div class="row"><span class="k">Early access</span><span class="do">Wed Sep 30, 6:00 AM PDT · 8:00 AM CDT.<span class="why">NC’s 28 Sep “Advanced Access Servers” notice posts the hour: 6 AM PDT to Oct 4, 10 PM PDT, which is 13:00 UTC. The 10 AM PDT we had from a stream is dead. Buying a pack mid-window still lets you in immediately.</span></span></div>
  <div class="row"><span class="k">Free launch</span><span class="do">Mon Oct 5, 6:00 AM PDT · 8:00 AM CDT.<span class="why">Now from NC’s own notice, not just the Steam listing: Oct 5, 6 AM PDT / 13:00 UTC. Maintenance runs Oct 4, 10 PM PDT to Oct 5, 6 AM PDT, so that night is down.</span></span></div>
  <div class="row"><span class="k">Install</span><span class="do">Pre-download now — it decrypts on Sep 30.<span class="why">NC opened pre-download on 28 Sep. Files land encrypted and the game decrypts them on Sep 30; that is not a reinstall. Decrypt time depends on your PC, and downloading on the day depends on your line. Steam testers: uninstall the Playtest app first, it does not update into the retail client. PURPLE players have nothing to do.</span></span></div>
  <div class="row"><span class="k">Queue</span><span class="do">Membership buys the priority queue when a server is full.<span class="why">A privilege, not a guarantee — NC can pull it if your account gets actioned. Same 19 Sep notice as the trade change.</span></span></div>
  <div class="row"><span class="k">Faction</span><span class="do">These maps are Asmodian.<span class="why">Elyos is the other continent. Lock faction before you trust the arrows — on global each server houses one faction, so faction also decides which servers you can roll on.</span></span></div>
  <div class="row"><span class="k">Server</span><span class="do">Region → faction → server. NA West has one pair.<span class="why">NC’s 28 Sep notice lists the advanced access servers. NA West, NA East, LATAM and ASIA each get Siel (Elyos) / Israphel (Asmodian); EU adds Nezekan/Zikel, Vaizel/Triniel and Kaisinel/Lumiel. NA East and LATAM get two pairs. Advanced access is its own server set; dungeons can still match across them.</span></span></div>
  <div class="row"><span class="k">Rivals</span><span class="do">Your server’s pair is who you meet.<span class="why">Siel is paired with Israphel, so Abyss and Spacetime Rifts pull the other faction from that matched server. NC says pairings get reshuffled later to keep the factions balanced, so the names can change after launch.</span></span></div>
  <div class="row"><span class="k">Market</span><span class="do">Your server’s market opens day one.<span class="why">The cross-server market does not. NC waits until servers are at a similar stage.</span></span></div>
  <div class="row"><span class="k">Pets</span><span class="do">Claim Pagati + the pet you picked.<span class="why">Newsletter reward. Pets cap at 3, so these count.</span></span></div>

  <h2>Settings</h2>
  <div class="row"><span class="k">Tab</span><span class="do">Target hostile players only.<span class="why">Key settings → General. Stops Tab landing on NPCs. Do not rebind Tab. Put the toggle on a spare mouse button.</span></span></div>
  <div class="row"><span class="k">Potions</span><span class="do">Auto-use at ~60% HP.<span class="why">Fires by itself when a pull goes wrong.</span></span></div>
  <div class="row"><span class="k">Mode</span><span class="do">Target mode.<span class="why">Key next to Shift swaps action vs target. Auto-attacks keep going. Left click refunds MP.</span></span></div>
  <div class="row"><span class="k">Lock</span><span class="do">Lock anything you will keep.<span class="why">Extract, soulbind, and dismantle share one inventory.</span></span></div>
  <div class="row"><span class="k">Extract</span><span class="do">Auto Extract + Quick Select on.<span class="why">Junk turns into stones. Do not sell gear. Vendors pay Kinah and you lose the stones.</span></span></div>
  <div class="row"><span class="k">Camera</span><span class="do">Check the settings yourself.<span class="why">The old advice here came from a channel we no longer use. Turn shake off if it bothers you; that is your call, not a rule.</span></span></div>
  <div class="row"><span class="k">Dodge</span><span class="do">Roll is an i-frame.<span class="why">On high ping, roll a little early. Do not start a long skill into a boss tell.</span></span></div>
  <div class="row"><span class="k">HUD</span><span class="do">Hide the helper speech bubble at 10 if it annoys you.<span class="why">It talks over loot and wants F. Turn it back on for lore. Source: own preference, not a rule.</span></span></div>
  <div class="row"><span class="k">Auto-potion</span><span class="do">Fires without a keypress at 60% HP.<span class="why">Source: Codex new-player checklist. Saves a pull that goes wrong.</span></span></div>

  <h2>Timers</h2>
  <div class="row"><span class="k">Odyle</span><span class="do">Unlocks at 22. Recharges 15 every 3 hours = 120/day. Stores to 840.<span class="why">You start at 120/840. Opening a dungeon cube costs 40, or 80 to open it twice with membership. Per character, not shared — which is the whole reason to park alts at 22 early so they recharge in parallel. Source: Grobs episode 10.</span></span></div>
  <div class="row"><span class="k">Shugo</span><span class="do">Unlocks at 13. Two keys a day, stores to 14. Server-wide, not per character.<span class="why">Every hour on the hour a popup appears; pick a minigame and pay a key. Because the pool is shared, spend these on your main. Source: Grobs episode 10.</span></span></div>
  <div class="row"><span class="k">Nightmare</span><span class="do">Unlocks at 45. Two tickets a day, stores to 14. Per character.<span class="why">You start at 2/14. Tickets do not start recharging until the character is 45, so every alt parked at 45 is quietly banking them. Source: Grobs episode 10.</span></span></div>
  <div class="row"><span class="k">Invasions</span><span class="do">Every two hours at the half-hour.<span class="why">Separate from the Shugo Festival, with its own daily allowance. Source: Codex daily/weekly.</span></span></div>

  <h2>Do not</h2>
  <div class="row"><span class="k">+5</span><span class="do">Stop enhancing there while you level.<span class="why">You replace pieces 4–5 times.</span></span></div>
  <div class="row"><span class="k">Stones</span><span class="do">Do not manastone junk.<span class="why">Save them for 45. One random fill on leveling armor at most. Never put accessory stones on quest gear — those are the expensive ones.</span></span></div>
  <div class="row"><span class="k">1000</span><span class="do">Do not fake gear score.<span class="why">Krao’s entry reads 1000 and it is tuned for real stats. The clean boost is the Clash Rune Chests from map quests — names are on At 45. Those are not the Hugo Mercs class runes.</span></span></div>
  <div class="row"><span class="k">Runes</span><span class="do">Socket, +1, stop.<span class="why">A failed upgrade can break the rune.</span></span></div>
  <div class="row"><span class="k">Shugo</span><span class="do">Do not use keys before 45.<span class="why">Loot scales to your level. After 45, do Shugo and invasions when they pop.</span></span></div>
  <div class="row"><span class="k">Explore</span><span class="do">Kill the boss. Do not loot the chest.<span class="why">Story sends you into Exploration Krao, Urugugu, Fire Temple, Draupnir. The chest spends Odyle on junk. Then push Draupnir, not more Exploration. Source: Codex after-45.</span></span></div>
  <div class="row"><span class="k">Ascension</span><span class="do">Hold your Trial entries until your gear score is higher.<span class="why">Three runs a week. The exact gear-score step is not confirmed for global, so treat any specific number as unverified. Source: Codex daily/weekly.</span></span></div>
  <div class="row"><span class="k">Gold gear</span><span class="do">Keep gold. Transfer crafting carries it forward.<span class="why">Enhancement, amplification and soulbinds inherit when you upgrade into a better piece, so the investment is not lost. Source: Codex after-45.</span></span></div>
  <div class="row"><span class="k">Pets</span><span class="do">Build pet insight toward the 3-cap.<span class="why">Global caps at 3, not Korea’s 5. Run Odylium Repository for pet souls while you are still filling it, then Bio-Research Base for enhancement stones. Source: Codex daily/weekly.</span></span></div>
  <div class="row"><span class="k">Field bosses</span><span class="do">Farm them in a group.<span class="why">Drops scale with damage dealt, so the whole group should be hitting. Supply Requests pay Abyss Points — skip the ones that are not worth the trip. Source: Codex daily/weekly.</span></span></div>
  <div class="row"><span class="k">Seals</span><span class="do">Do the ones on this route. Do not save them all for 45.<span class="why">Running story alone lands you at 962 and locked out of the 1000 content; the fix is 10–15 sealed dungeons, and they get harder once the world scales. Source: Codex new-player checklist.</span></span></div>

  <h2>Boss scrolls</h2>
  <div class="row"><span class="k">First</span><span class="do">Combat Speed.<span class="why">Shorter animations. Use on named story bosses and seal walls, not trash.</span></span></div>
  <div class="row"><span class="k">With it</span><span class="do">Movement Speed.<span class="why">Dodge and reposition. Attack / Courage / Absorption if you have them. Five-minute buffs.</span></span></div>
  <div class="row"><span class="k">Founder</span><span class="do">Spend the campaign chest.<span class="why">Bound potions and scrolls. Not an XP boost.</span></span></div>

  <h2>Companion tools</h2>
  <div class="row"><span class="k">Overlay</span><span class="do"><a href="https://github.com/AnkuAion2/Aion2-MSQ-Overlay" target="_blank" rel="noopener">Anqua overlay</a><span class="why">Windows only. Reads the English quest tracker and shows route notes. Releases zip, not “Source code.” Closed source, not NCSoft-approved. This page works without it.</span></span></div>
  <div class="row"><span class="k">DPS meter</span><span class="do"><a href="https://abysslogs.com/" target="_blank" rel="noopener">Abyss Logs</a><span class="why">Free. Live party DPS, boss HP and berserk timer as an overlay, plus a dungeon lobby that shows everyone’s gear score and combat power before the pull. Upload a fight with one click and read the breakdown in the browser: per-skill damage, crit and back-attack rates, buff uptime against boss HP, and where your parse sits against your class bracket. All six regions, nine languages, leaderboards per boss.</span></span></div>
  <div class="row"><span class="k">Safety</span><span class="do">Read the DPS meter’s own claim, then decide.<span class="why">Abyss Logs says it passively reads game packets off the network interface and never touches the client or server, so it is not bannable. That is the developer’s claim, not an NCSoft statement — they describe themselves as an independent project with no NCSoft affiliation. It is a different mechanism from the overlay, which is OCR plus memory reading. Your account, your call.</span></span></div>
</article>`
  },
  cleric: {
    kicker: "Skills · open when you get a point",
    now: "Community build leads. Two-slot macro: Earth Punishment then Judgment Thunder.",
    html: `
<article class="cleric-block">
  <h2>Rules</h2>
  <div class="row"><span class="k">Two builds</span><span class="do">Community build leads. RosaPony is the alternate.<span class="why">They are aimed at different jobs. The community one is a group/raid healer build — it talks about Sanctuary progression, being the only support in the group, and rez in raids. RosaPony is a damage-leaning PvE Cleric: he puts the buffs and the two damage skills in his macro and takes Judgment Thunder first. Its author is reportedly at 1M+ combat power; RosaPony’s progression is unknown.</span></span></div>
  <div class="row"><span class="k">Why they clash</span><span class="do">Different roles, not just different numbers.<span class="why">Most of the conflicts below are that split. Healing for a group: follow the community build. Mostly solo and want to contribute damage: several RosaPony picks have a real reason behind them.</span></span></div>
  <div class="row"><span class="k">Points</span><span class="do">A skill maxes at 10.<span class="why">13 points to reach 8. 21 points to reach 10. Resets are free, so a bad spend is not permanent.</span></span></div>
  <div class="row"><span class="k">Gate</span><span class="do">+1 skill level every 3 character levels.<span class="why">Earth’s Retribution hits 8 at 19 and 10 at 25. Earth’s Grace, Survival Willpower, and Radiant Benediction skip that gate.</span></span></div>
  <div class="row"><span class="k">8 / 12 / 20</span><span class="do">Three specialty slots. Not five.<span class="why">Each skill has five specialty options. They unlock at skill levels 8, 12, and 16. You can only equip three. The slots open at 8, 12, and 20. Level 16 is the strong option, not a third slot. Skill level 20 still needs Arcana and gear.</span></span></div>
  <div class="row"><span class="k">Budget</span><span class="do">~234 points at 45.<span class="why">~258 after you turn in feathers. About twelve skills at 10 out of 22. Damage first. Heals stay lean.</span></span></div>
  <div class="row"><span class="k">Above 20</span><span class="do">20 is not the ceiling.<span class="why">A community screenshot shows skills sitting at 25, and one at 23. Sources: mastery points to 10, Daevanion board up to +4, Arcana cards, two rings, weapon, and guard.</span></span></div>

  <h2>Spend</h2>
  <div class="row"><span class="k">1–18</span><span class="do">Both clicks, always capped.<span class="why">Left: Earth’s Retribution (also gives MP). Right: Judgment Thunder. Then Empyrean Lord’s Grace. Bolt is your stagger. Scattershot only for story and seal bosses.</span></span></div>
  <div class="row"><span class="k">19</span><span class="do">First specialty on both clicks.<span class="why">Earth’s Retribution: +20% MP. Judgment Thunder: +12% damage, fewer targets.</span></span></div>
  <div class="row"><span class="k">21</span><span class="do">Earth’s Grace to 10 the moment you learn it.</span></div>
  <div class="row"><span class="k">22</span><span class="do">1 point in Summon Resurrection.<span class="why">Parties expect the rez. Then Earth Punishment and Noble Aura toward 5.</span></span></div>
  <div class="row"><span class="k">25</span><span class="do">Both clicks can hit 10.<span class="why">Survival Willpower and Radiant Benediction can go straight to 10.</span></span></div>
  <div class="row"><span class="k">26–38</span><span class="do">New damage skills as they unlock.<span class="why">Bolt 8 at 32, 10 at 38. Chain of Torment is worth its points too.</span></span></div>
  <div class="row"><span class="k">Heals</span><span class="do">Max Healing Light. Raise Healing Enhancement.<span class="why">Heals cannot crit, so Enhancement is how heals get bigger.</span></span></div>
  <div class="row"><span class="k">Radiant Recovery</span><span class="do">Take it to 20, per the community build.<span class="why">Older advice to park it at 1 came from a leveling-phase build tuned to the first weeks of Krao and Draupnir farming, where you do not need an aggressive healer. That reason stops holding once you are healing real content.</span></span></div>
  <div class="row"><span class="k">39–45</span><span class="do">Leftover points into passives.<span class="why">Earth’s Grace is about twice Empyrean Lord’s Grace per level for your damage.</span></span></div>
  <div class="row"><span class="k">Skip</span><span class="do">0 points in Lightning Strike Scattershot.<span class="why">Community build agrees: N/A, no points. Weak in the boss loop until 16.</span></span></div>
  <div class="row"><span class="k">Level 20 order</span><span class="do">Condemnation → Radiant Recovery → Healing Light → Divine Aura → Judgment Thunder → Bolt.<span class="why">Community build, and now the page default. RosaPony’s order was Judgment Thunder → Divine Aura → Condemnation → Earth’s Retribution → Chain of Torment → Healing Light. Kept only as the alternate.</span></span></div>
  <div class="row"><span class="k">Bolt</span><span class="do">Fire it on cooldown, fully charged.<span class="why">Community note. Do not clip the charge.</span></span></div>

  <h2>Specialty picks</h2>
  <div class="row"><span class="k">Retribution</span><span class="do">+20% MP restored</span></div>
  <div class="row"><span class="k">Thunder</span><span class="do">+12% damage, fewer targets</span></div>
  <div class="row"><span class="k">Aura</span><span class="do">+50% attack speed on bosses<span class="why">Take the AoE version if you are farming trash.</span></span></div>
  <div class="row"><span class="k">Chain</span><span class="do">+3 seconds on the DoT</span></div>
  <div class="row"><span class="k">Condemn</span><span class="do">+12% damage, fewer targets</span></div>
  <div class="row"><span class="k">Bolt</span><span class="do">+30% skill speed</span></div>
  <div class="row"><span class="k">Light</span><span class="do">+2 consecutive heals</span></div>
  <div class="row"><span class="k">Defiance</span><span class="do">Restore 10% HP</span></div>

  <h2>Stigmas · 4 slots</h2>
  <div class="row"><span class="k">Solo</span><span class="do">Light of Protection / Earth Punishment / Amplification / Noble Aura.<span class="why">Two separate sources land on these four. Earth Punishment is the strongest PvE stigma. ~34% cooldown reduction lines its 30s timer up with the buff.</span></span></div>
  <div class="row"><span class="k">Group</span><span class="do">Drop Light of Protection when a Chanter is with you.<span class="why">Community build puts Voice of Doom in that slot. It also calls Benevolence mandatory, and Salvation a panic button for early Sanctuary.</span></span></div>
  <div class="row"><span class="k">Rebuild</span><span class="do">5 → Earth Punishment. 10 → Amplification. 15 → Benevolence. 20 → Light of Protection, then Amplification, then Benevolence, then Noble Aura.<span class="why">Community upgrade tiers, roughly cheapest-first. Summon Resurrection can go toward 25 while you are learning Sanctuary.</span></span></div>
  <div class="row"><span class="k">Rez</span><span class="do">1 point in Summon Resurrection from 22.<span class="why">Mandatory in raids. One source argues you can skip it in dungeons because most players carry their own resurrection stones there — but parties still expect the Cleric to have it.</span></span></div>
  <div class="row"><span class="k">Contested</span><span class="do">Power Burst, Root, Assault Mark.<span class="why">The community build calls all three useless. RosaPony and RedCloud both run Power Burst in regular PvE for its stagger damage, so “useless” is that build’s opinion, not a consensus. Root is RosaPony-only. Assault Mark has no defender. Treat Power Burst as an optional stagger slot rather than a dead one.</span></span></div>
  <div class="row"><span class="k">Korea</span><span class="do">Ignore 5th and 6th slot builds.<span class="why">Global starts at four.</span></span></div>

  <h2>How the macro works</h2>
  <div class="row"><span class="k">Stack</span><span class="do">Put the skills you spam on one key.<span class="why">That key cycles them when you press it. Holding that key does nothing. The macro is what lets you hold.</span></span></div>
  <div class="row"><span class="k">Set it</span><span class="do">Escape → Key settings → General → Gameplay → Macro.<span class="why">Nothing is bound by default. Then the Macro button at the top right → Add. You select the hotkey line, not a skill icon.</span></span></div>
  <div class="row"><span class="k">Hold</span><span class="do">Hold left click and the macro key together.<span class="why">Left click is Earth’s Retribution. It also cancels other skills. A black shadow means the cancel worked. Do not put left click inside the macro. That cancels less.</span></span></div>
  <div class="row"><span class="k">Leave out</span><span class="do">Dodge, movement, and timed buffs.<span class="why">Season 1 has less cooldown reduction. A buff spent on trash is gone for the boss. Add a skill only after you already spam it without thinking. The community build is looser here: it says you may add Amplification and Divine Aura if you accept losing the say on when they fire. Never macro the heals or support buttons.</span></span></div>
  <div class="row"><span class="k">Order</span><span class="do">Highest priority skill at the bottom of the stack.<span class="why">That one fires first.</span></span></div>
  <div class="row"><span class="k">Bind</span><span class="do">Side button, or right click.<span class="why">If the macro key is right click, Judgment Thunder moves onto the stack. Left click never moves. Do not use mouse software to hold the buttons for you. That is outside the game. This page only uses the in-game macro.</span></span></div>
  <div class="row"><span class="k">Primary</span><span class="do">Two slots: Earth Punishment, then Judgment Thunder. 10 ms each.<span class="why">Community build, and it agrees with the rule above — the buffs stay manual. The screenshot lists Earth Punishment in slot 1. Grobs puts the top-priority skill last, so try both; it is a two-click change. Only go to 40–50 ms if your ping is 80+.</span></span></div>
  <p>Leveling: stack the two clicks’ spam skills and hold left click plus the macro key.</p>
  <ol class="macro">
    <li>Earth Punishment</li>
    <li>Judgment Thunder</li>
  </ol>
  <div class="row"><span class="k">Alternate</span><span class="do">RosaPony chains five: Noble Aura → Prayer of Amplification → Earth Punishment → Chain of Torment → Judgment Thunder.<span class="why">Fuller dungeon loop, but it macros two buffs, which both Grobs and the community build say not to do. Kept as an option, not the default.</span></span></div>
  <div class="row"><span class="k">Weave</span><span class="do">Retribution → Mark → Retribution → Divine Aura → hold macro.<span class="why">Heals, Mark, Aura, Bolt, dodge, and long cooldowns stay off the macro. Target mode on.</span></span></div>
  <div class="row"><span class="k">Planner</span><span class="do"><a href="https://questlog.gg/aion-2/en/skill-builder/FQXZUw3OF054?build-id=2233" target="_blank" rel="noopener">PvE</a> · <a href="https://questlog.gg/aion-2/en/skill-builder/FQXZUw3OF054?build-id=1650" target="_blank" rel="noopener">PvP</a><span class="why">The community character build we used is deleted now, so these two stand in. Both are tagged Global, not KR/TW.</span></span></div>

  <h2>After 45</h2>
  <div class="row"><span class="k">To 20</span><span class="do">Condemnation, Radiant Recovery, Healing Light, Divine Aura, Judgment Thunder, Bolt.<span class="why">Community build. RosaPony’s list — Judgment Thunder, Divine Aura, Condemnation, Earth’s Retribution, Chain of Torment, Healing Light — is the alternate. Extra levels come from the board (up to +4), two rings, weapon, guard, and Arcana. Defiance stops at 16.</span></span></div>
  <div class="row"><span class="k">Passives</span><span class="do">Lord’s Grace → Earth’s Grace → Healing Enhancement → Immortal Veil → Warm Benediction → Radiant Benediction → Prayer of Concentration → Survival Willpower → Lords’ Benediction → Heal Block.</span></div>
</article>`
  },
  stats: {
    kicker: "What to stack",
    now: "Attack makes heals bigger. CDR around 34%. Crit cap is 50%.",
    html: `
<article class="cleric-block">
  <h2>Chase</h2>
  <div class="row"><span class="k">Attack</span><span class="do">Biggest heals and your damage.<span class="why">Damage multipliers do not apply to heals. Heal Boost times Incoming Heal does (20% + 20% is ×1.2 twice).</span></span></div>
  <div class="row"><span class="k">Speed</span><span class="do">Combat Speed. Strongest feel stat.<span class="why">Shortens every cast. On a mace, extra % that misses the next frame does nothing. Useful steps: 3.5 / 7.1 / 11.1 / 15.4 / 20 / 25 / 30.4.</span></span></div>
  <div class="row"><span class="k">CDR</span><span class="do">Stop around 34%.<span class="why">That lines Earth Punishment’s 30s cooldown up with the buff. The cap is 60%. You do not want the cap.</span></span></div>
  <div class="row"><span class="k">Alive</span><span class="do">HP, Defense, Block.<span class="why">Default manastone lines. You are a shield class: you can block and then parry, so the combined chance can pass 50%. A hit from behind skips both.</span></span></div>
  <div class="row"><span class="k">Heals</span><span class="do">Healing Enhancement.<span class="why">Heals cannot crit. Crit cap on global is 50% (Korea is 80%). Crit does not help your heals.</span></span></div>
  <div class="row"><span class="k">Skip</span><span class="do">Accuracy, Evasion, Crit Damage, Multi-hit, Max MP, Crit Resist.<span class="why">Not the early chase.</span></span></div>

  <h2>Slots</h2>
  <div class="row"><span class="k">Necklace</span><span class="do">Combat Speed.<span class="why">Global soulbind also rolls Might + Precision on every accessory. Korea’s old “passive skill” accessories are not the launch chase.</span></span></div>
  <div class="row"><span class="k">Earrings</span><span class="do">Move Speed.</span></div>
  <div class="row"><span class="k">Rings</span><span class="do">Keep them to push two skills toward 20.<span class="why">+1 skill level each.</span></span></div>
  <div class="row"><span class="k">Leveling</span><span class="do">Weapon, then accessories and guard, to +5 only.<span class="why">Extract the old piece. Cap gear order is on At 45.</span></span></div>

  <h2>If a tooltip lies</h2>
  <div class="row"><span class="k">Boost</span><span class="do">Your boost minus their tolerance.<span class="why">30% damage boost vs 20% tolerance = 10%.</span></span></div>
  <div class="row"><span class="k">Defense</span><span class="do">A flat cut, not a percent.<span class="why">Good vs small hits. Weak vs big ones.</span></span></div>
  <div class="row"><span class="k">Block</span><span class="do">PvE bosses: about 50% less damage.<span class="why">PvP: parry ~30% less, block ~40% less. You need about 500 more of the defensive stat than their accuracy to approach the 50% cap.</span></span></div>
  <div class="row"><span class="k">God stats</span><span class="do">Outer ring: value ÷ 5 = %.<span class="why">Might and Dex (inner): value ÷ 10. A “conditional” line like PvE Attack is not multiplied by those percents. Raw attack is.</span></span></div>
  <div class="row"><span class="k">Adds</span><span class="do">Damage Boost + PvE + boss + species add, then multiply once.<span class="why">Back, front, and element boosts are separate multipliers. Usually better per point.</span></span></div>
</article>`
  },
  systems: {
    kicker: "Daevanion · the board",
    now: "Orange damage nodes first. Ariel before Azphel, if Ariel is there.",
    html: `
<article class="cleric-block">
  <div class="row"><span class="k">Titles</span><span class="do">Show one name. Equip three effects.<span class="why">Achievements become stats. Most people only change the name. Smite comes from early feathers — equip it around 17–21. Prefer damage or move speed.</span></span></div>
  <div class="row"><span class="k">Fill</span><span class="do">Orange damage corners first.<span class="why">Then skill nodes: Judgment Thunder → Earth’s Retribution → Condemnation → Divine Aura → Chain of Torment. Only heal to rush: Healing Light to 16. Passives only if they sit on that path.</span></span></div>
  <div class="row"><span class="k">Unlock</span><span class="do">About 12 / 20 / 30 / 40 / two at 45.<span class="why">Six Season 1 boards. Fill Ariel (PvE) before Azphel (PvP) if Ariel is on the live client. A test at level 37 did not show Ariel. That does not mean it is gone at 45.</span></span></div>
  <div class="row"><span class="k">Ignore</span><span class="do">Korea’s 8-board healer route.<span class="why">Yustiel then Marchutan is a later season there. Do not copy those crystal counts.</span></span></div>
  <img class="map" src="maps/daev-boards.webp" alt="Daevanion boards Nezekan Zikel Vaizel Triniel" width="1920" height="1080">
  <p class="map-cap">Boards while leveling. Click to enlarge.</p>
  <div class="row"><span class="k">Feathers</span><span class="do">Pick up traces. Turn them in at the Monolith.<span class="why">Skill points, amulet scrolls, titles. Minimap icons. Global moved some alt skill points into seal dungeons. Still turn feathers in.</span></span></div>
  <div class="row"><span class="k">Pets</span><span class="do">Every pet to 3. Then stop.<span class="why">Global cap is 3. Korea goes to 5. Killing mobs on the route already feeds Genus. Do not grind pets on day one.</span></span></div>
  <div class="row"><span class="k">Pantheon</span><span class="do">Equip better statues when you have them.<span class="why">Slow free stats. Nightmare shop: statues, wings, and Ariel crystals before cosmetics.</span></span></div>
  <div class="row"><span class="k">Cubes</span><span class="do">Lock keepsakes before you dismantle.<span class="why">Auto Extract is on. Reroll duty bonuses until the item you want sits in slot 1 or 2 — the odds fall off from left to right. Source: Codex daily/weekly.</span></span></div>
</article>`
  },
  after: {
    kicker: "At 45",
    now: "Week resets Wednesday. Duties are the only daily. Hold Nightmare and Ascension for day 7.",
    html: `
<article class="cleric-block">
  <ol class="steps">
    <li>Skipped seals? Do them now.<span class="why">They scaled to 45, so they are harder. Followed this route? Skip this step.</span></li>
    <li>Open the map. Take the quests that reward a Clash Rune Chest. Open them and equip the runes.<span class="why">Not the two class runes from the route — those came from Hugo Mercs and you already socketed them. The chests are real quest rewards (Hub’s item page lists them). Any exact gear-score-per-rune figure came from a channel we dropped, so treat the size of the gain as unverified. Story-only lands at 962 against a 1000 gate. Quest names are under Where.</span></li>
    <li>Story weapon to +5. Five duties. Buy Command Scrolls.<span class="why">Duties are 5 a day for the whole server — do them on this Cleric. Scrolls you do not buy this week are gone. Bought ones bank. Rewards: stones, pet crystals, Abyss points, cube keys.</span></li>
    <li>Leftover seals, strongholds, feathers.<span class="why">This is the band where sealed dungeons and strongholds pay out. Collect feathers at the Monolith for skill points. Both Krao and Draupnir drop wing feathers, and 50 feathers craft that dungeon’s wing — confirmed for global. Source: Codex after-45 and Krao guide.</span></li>
    <li>Belt and amulet upgrade on their own track. Then the next ascension.<span class="why">Belts and amulets use separate upgrade items, so they do not compete with armor stones. The next ascension gives a yellow bracelet; +5 for now. Source: Codex after-45.</span></li>
    <li>Dump Odyle into Vakron’s Sky Island.<span class="why">Armor and guard. Urugugu Canyon covers weapon and accessories in the same band. Save Odyle for these instead of spending it on every Exploration cube. Source: Codex after-45.</span></li>
    <li>While energy is empty: alts, contracts, Abyss.<span class="why">Level alts to 22, where the energy system opens, before pushing any single character further. One creator caps the useful count at three. Skins, pets and materials move through account storage; Abyss Points and Daevanion fragments do not. Twelve command contracts. Abyss weeklies, and kill while you do them. Source: Codex new-player checklist.</span></li>
    <li>Then stop chasing the number.<span class="why">Gear score only unlocks the door. Combat power is your strength. Invest first: weapon, then guard, then necklace and earrings, then armor — those move power most for the least cost. Next: rings, belt and amulet, then manastones. Source: Codex after-45.</span></li>
  </ol>

  <h2>Where it comes from</h2>
  <div class="row"><span class="k">Clash chest</span><span class="do">Map quests. Take the ones whose reward is the chest.<span class="why">Hub’s global item page lists eight. At 45: All Work and No Play, Kraka Pond Pests, Fallout, Another Survivor. Earlier, if still on the map: Cursed Blue Mineral and The Future Within the Past (30), Hugo Mercenaries: An Old Promise (32), Zumion’s Call: Part Two (37). Questlog names one giver: Xiao, Thunder Lightning Merchants HQ, for All Work and No Play, and marks that quest Light. If you are Asmodian and Xiao is not there, follow the map icon. Do not wander. Also sold in the Nightmare coin shop for 500 Phantasmal Fragments.</span></span></div>
  <div class="row"><span class="k">Class runes</span><span class="do">Already on the route. Not the clash chests.<span class="why">Rune 1: after Urugugu wings, Nornir Assembly, Hugo Mercs part 2, then the Abandoned Site side quest. Rune 2: after the 3rd Ascension, Hugo Mercs part 3 in Briskwind Shelter. Socket, +1, stop.</span></span></div>
  <div class="row"><span class="k">Weapon</span><span class="do">Finish the yellow story. The weapon is the reward.<span class="why">Enhance it from the N menu, Enhancement. Stones, not the cash shop.</span></span></div>
  <div class="row"><span class="k">Duties</span><span class="do">Journal. Five a day, server-wide.<span class="why">Reroll the bonus row until the item you want sits in slot 1 or 2 — the odds fall off left to right. Reward is Kinah plus uncapped Abyss Points. Source: Codex daily/weekly.</span></span></div>
  <div class="row"><span class="k">Scrolls</span><span class="do">Weekly purchase. Not the cash shop.<span class="why">Command Scrolls. Buy them when the week turns or that week is gone. Bought ones bank. Global vendor name is not pinned yet.</span></span></div>
  <div class="row"><span class="k">Belt</span><span class="do">Strongholds. Belts use their own upgrade items.<span class="why">They do not compete with armor stones. Source: Codex after-45.</span></span></div>
  <div class="row"><span class="k">Bracelet</span><span class="do">The next ascension quest.<span class="why">Yellow. +5 for now. The Trial is a separate weekly — hold those entries until your gear score is higher.</span></span></div>
  <div class="row"><span class="k">Vakron</span><span class="do">Expedition list. Costs Odyle.<span class="why">Armor and guard. Urugugu Canyon, same list, is the weapon and accessory loop in that gear-score band. Not a walk-up on the story map.</span></span></div>
  <div class="row"><span class="k">Necklace</span><span class="do">Krao Cave, once you are 1000.<span class="why">Entry reads Lv 45, 1000, 1–4 players. Repeating the Conquest cube guarantees a Unique necklace, earring or ring over time. Source: Codex Krao guide.</span></span></div>
  <div class="row"><span class="k">Krao fight</span><span class="do">At half HP the boss goes groggy. Everyone must land a groggy skill.<span class="why">Miss the window and the party wipes. Keep one groggy skill off cooldown going in. Source: Codex Krao guide.</span></span></div>
  <div class="row"><span class="k">Abyss</span><span class="do">Abyss merchant. Not the town vendor.<span class="why">Pick up the weeklies there and buy tier-1 accessories with Abyss Points. The exact point threshold came from a channel we dropped, so treat that number as unverified. The Abyss Point cap is 500,000 and rises 500,000 a week. Sources: Codex after-45, Hub LST writeup.</span></span></div>
  <div class="row"><span class="k">Later</span><span class="do">Expedition list again once your Arcana and blue cards land.<span class="why">Fire Temple and Ferocious Horn Den. That Fire Temple is not the story Exploration one — kill that boss but do not loot its chest. Source: Codex after-45.</span></span></div>
  <h2>Upgrade rules</h2>
  <div class="row"><span class="k">+1–10</span><span class="do">Always succeeds.<span class="why">Extract gives every stone back. Safe while you are still replacing pieces. The button is in the enhancement window, bottom right.</span></span></div>
  <div class="row"><span class="k">+10–15</span><span class="do">Can fail. The item does not break.<span class="why">You just lose the stones and Kinah for that click. Source: Grobs gear episode.</span></span></div>
  <div class="row"><span class="k">+15</span><span class="do">Breakthrough. Needs amplify stones.<span class="why">Each level is +1%. Armor gives HP and defense. Weapon and accessories give attack. Not a leveling goal.</span></span></div>
  <div class="row"><span class="k">Types</span><span class="do">Abyss shop is PvP. Crafted is PvE. Dungeons are neutral.<span class="why">Same base stats. One line differs: PvP damage, or a PvE damage line you craft on. Crafted PvE line is stronger than the dungeon one.</span></span></div>
  <div class="row"><span class="k">Theo</span><span class="do">The glow stone. Skip it for PvE.<span class="why">PvE damage is tiny; PvP can roll a stun or slow. Cheap, and the glow is fine. Source: Grobs gear episode.</span></span></div>
  <div class="row"><span class="k">Stones</span><span class="do">Engrave rerolls all four lines. You cannot lock one.<span class="why">Do not chase a perfect roll on gear you will replace. The stones are gone when you extract.</span></span></div>

  <h2>Gear-score bands</h2>
  <div class="row"><span class="k">900–1200</span><span class="do">Sealed dungeons, strongholds, 1-star expeditions.<span class="why">Krao Cave and Draupnir Cave are doable around 1000. Draupnir’s guaranteed cube reward is worth one clear. Source: Codex after-45.</span></span></div>
  <div class="row"><span class="k">1200–1600</span><span class="do">Abyss ring and earring plus Krao’s necklace.<span class="why">That trio is the standard way to break 1600, then you start Transcendence. Source: Codex after-45.</span></span></div>
  <div class="row"><span class="k">1400</span><span class="do">Vakron Sky Island on global.<span class="why">Grobs says the global build gates Vakron at 1,400 item level, not Korea’s 1,600. This matches the LST data in our notes that put Krao/Draupnir at 700 against 1,000 on KR/TW — global gates run lower. The 1,400 target is also why he pushes side content so hard in week one. Source: Grobs episode 10.</span></span></div>
  <div class="row"><span class="k">1600–2200</span><span class="do">Vakron Sky Island and Urugugu Canyon.<span class="why">Codex’s number for the same band, still on Korea/Taiwan figures. Vakron is armor and guard, Urugugu is weapon and accessories. Keep pushing Transcendence toward blue Arcana cards. Source: Codex after-45.</span></span></div>
  <div class="row"><span class="k">2400+</span><span class="do">Fire Temple and Ferocious Horn Den.<span class="why">These open once your unique Arcana and blue cards land. From there the weekly limits on Nightmare, Ascension Trial and raid attempts pace you alongside Odyle. Source: Codex after-45.</span></span></div>
  <div class="row"><span class="k">Craft</span><span class="do">If you craft one early piece, make it the weapon.<span class="why">Creators describe a guaranteed crafted-weapon path that does not depend on a lucky drop. Source: Codex after-45.</span></span></div>
  <div class="row"><span class="k">Runes</span><span class="do">Leave clash runes at +1.<span class="why">+1 takes reliably; +2 fails over and over and a fail can break the rune. Confirmed by player reports, not just one guide.</span></span></div>
  <div class="row"><span class="k">Disputed</span><span class="do">Higher thresholds are not settled.<span class="why">One source claimed 2200 opened tier 3 with stage-4 Transcendence at 2700 and Ludra Sanctuary at 2800. Codex’s ladder tops out at “2400 and beyond”. Treat any number past 2400 as unverified until you see it on the live client.</span></span></div>

  <h2>Why the rush matters</h2>
  <div class="row"><span class="k">Weekly</span><span class="do">The gate is the week, not the level bar.<span class="why">Command Scrolls on Wednesday — twelve a week, unbought weeks are lost, bought ones stockpile. 14 shared solo-dungeon entries across your whole roster. Three Ascension Trial runs. Nightmare recharges twice a day per character. Source: Codex daily/weekly.</span></span></div>
  <div class="row"><span class="k">Alts</span><span class="do">Skins, pets, and mats can move.<span class="why">Abyss Points and Daevanion fragments cannot — they are earned on the character that uses them. Level alts to 22 for the energy system before pushing one further. Source: Codex new-player checklist.</span></span></div>

  <h2>Daily and weekly</h2>
  <div class="row"><span class="k">Daily</span><span class="do">Five duty quests. That is the only daily.<span class="why">Escape → Journal → Duty. They send you into the open world to kill a boss or trash and take a minute or two. Five per day and only once per server, so do them on your main, never an alt. Open at 45. Source: Grobs episode 10.</span></span></div>
  <div class="row"><span class="k">Duty loot</span><span class="do">Reroll for crystals, hidden-cube keys, or anything gold.<span class="why">You always get a guaranteed base reward, plus five random slots whose odds fall off left to right. Chase crystals of any colour, hidden-cube keys, and unique pieces. Source: Grobs episode 10.</span></span></div>
  <div class="row"><span class="k">Weekly</span><span class="do">Ascension Trial ×3 · daily dungeons ×14 · battlefields ×3 wins · both command merchants · Odyle crafts · subscriber shop.<span class="why">Reset is Wednesday, matching Korea and Taiwan. Source: Grobs episode 10.</span></span></div>
  <div class="row"><span class="k">Ascension</span><span class="do">Three attempts a week, and you can run them on every character.<span class="why">Solo dungeon: three rooms of trash then a boss. You pick the difficulty and each tier has its own item-level requirement — 1,500 lets you run normal. Do them at the end of the week for the better room. Source: Grobs episode 10.</span></span></div>
  <div class="row"><span class="k">Daily dungeons</span><span class="do">14 tickets, main only, despite the name.<span class="why">Solo instance with 1 minute 30 to kill as many mobs as possible; your points set the reward. Tickets reset weekly, not daily. Because the reward scales with kills, run them at the end of the week when you are strongest. Source: Grobs episode 10.</span></span></div>
  <div class="row"><span class="k">Battlefields</span><span class="do">Three victory rewards a week, on any character.<span class="why">The balanced PvP mode. Not restricted to your main. Source: Grobs episode 10.</span></span></div>
  <div class="row"><span class="k">PvE scrolls</span><span class="do">Command merchant in the main city. Twelve a week, main only.<span class="why">Dawn Legion base for Elyos. Buy them every week and stack them — running them can wait. Twelve per server, so not on alts. Same open-world kill structure as duties. Source: Grobs episode 10.</span></span></div>
  <div class="row"><span class="k">PvP scrolls</span><span class="do">Abyss command merchant. Up to 20, but you kill inside the Abyss.<span class="why">Same buy-and-stack rule. Distinct from the PvE set — this is a second weekly batch, not a duplicate. Source: Grobs episode 10.</span></span></div>
  <div class="row"><span class="k">Siege</span><span class="do">Artifact siege every Wednesday and Saturday.<span class="why">The factions fight over three artifacts. Each one your side wins opens an Abyss corridor. A corridor gives you 2 minutes to kill as many mobs as possible for Kinah and Abyss Points, and you can run it once per corridor won — so a 2–1 siege means two runs for your faction and one for theirs. Lasts until the next siege. Doable on main and alts. Source: Grobs episode 10.</span></span></div>
  <div class="row"><span class="k">Field bosses</span><span class="do">Optional. Map → Exploration → Field Boss shows spawn times.<span class="why">Both PvE bosses in the open world and PvP bosses in the Abyss. Do as much damage as you can for a shot at loot. Not worth setting a timer for, but check the map whenever you are online. Source: Grobs episode 10.</span></span></div>
  <div class="row"><span class="k">Supply</span><span class="do">Feed materials for Abyss Points. Emergency, weekly, season tabs.<span class="why">Every player gets the identical request list, so the market for whatever it asks for spikes hard. Sell into that spike, or feed it if you have spares. Do not try to complete all of them. Source: Grobs episode 10.</span></span></div>
  <div class="row"><span class="k">Crafts</span><span class="do">Substance morph: 16 per server plus 4 per character of Odyle.<span class="why">So 20 on your main and 4 on every alt. This is manual Odyle, which means more dungeon runs. Source: Grobs episode 10.</span></span></div>
  <div class="row"><span class="k">Shop</span><span class="do">Wind Breeze merchant, special tab, weekly.<span class="why">Membership only. Buy the same Odyle (16 main / 4 per alt), the Unknown Fisher challenge tickets — 21 of them buys 21 more daily-dungeon runs — and soul crystals for Genus. Skip the rest. Source: Grobs episode 10.</span></span></div>

  <h2>First week</h2>
  <div class="row"><span class="k">Reset</span><span class="do">Wednesday. Early access gives you a full 7 days; an Oct 5 start gives you 2.<span class="why">Early access opens Wednesday Sep 30, and Korea/Taiwan reset on Wednesday, so that is the likely cadence. Oct 5 is a Monday. Two days is enough only if you spend them in the right order. Source: Grobs episode 10.</span></span></div>
  <div class="row"><span class="k">Day 1</span><span class="do">Every character to 22, then the main to 45, then five duties.<span class="why">22 opens Odyle, which is per character — so each alt parked there starts banking energy in parallel. 45 opens Nightmare tickets and duties. That is the whole day; nothing else is urgent. Same plan whether or not you have early access. Source: Grobs episode 10.</span></span></div>
  <div class="row"><span class="k">Then</span><span class="do">Five duties every login, then push the main to 1,400 item level via side content.<span class="why">Finish the story, all greens, then every question mark on the map — those are sealed dungeons and strongholds. Collect feathers and turn them in at the Monolith in the main city. 1,400 is the Vakron gate. Source: Grobs episode 10.</span></span></div>
  <div class="row"><span class="k">Side</span><span class="do">Battlefield wins, Shugo festivals, Abyss corridors.<span class="why">Lighter priorities you pick up as they come. Source: Grobs episode 10.</span></span></div>
  <div class="row"><span class="k">Alts</span><span class="do">Level them to 45, then redo all the side content on each.<span class="why">Main story, greens, every seal dungeon and stronghold, on every character. Feathers are the one exception — those synchronise across characters, so you only farm them once. Source: Grobs episode 10.</span></span></div>
  <div class="row"><span class="k">Day 7</span><span class="do">Dungeons, Nightmare, Ascension, daily dungeons, crafts, shop.<span class="why">Everything with a weekly timer gets burned today. Source: Grobs episode 10.</span></span></div>
  <div class="row"><span class="k">Order why</span><span class="do">Nightmare, Ascension and daily dungeons all scale with your power, so holding them until day 7 pays.<span class="why">Nightmare is worth waiting on because you can challenge at level 10 once you are strong enough, and tickets only cap at 14/14 — two bosses a day keeps you progressing without wasting the pool. Odyle hits full, so dungeons cannot wait past today. Source: Grobs episode 10.</span></span></div>
  <div class="row"><span class="k">Oct 5 start</span><span class="do">Day 1 unchanged. Day 2: Ascension and daily dungeons first, then crafts and shop, then duties and scrolls, then battlefields.<span class="why">With only two days you invert the priority — the weekly content you cannot make up comes before the side content you can. Alts still get levelled because they give you more Ascension runs and start their Nightmare banking. Source: Grobs episode 10.</span></span></div>
  <div class="row"><span class="k">Alts note</span><span class="do">Alts short of Vakron can run Krao or Draupnir instead.<span class="why">Those do not need 1,400 item level, so alts still convert their Odyle into gear. Source: Grobs episode 10.</span></span></div>
</article>`
  },
  shop: {
    kicker: "Cash shop",
    now: "Standard pack if you want the head start. Do not pay for stats.",
    html: `
<article class="cleric-block">
  <div class="row"><span class="k">$0</span><span class="do">Play on October 5.<span class="why">You can. Market buying, remote storage, and extra Odyle are slower. That is the real paywall, not a damage skin.</span></span></div>
  <div class="row"><span class="k">$25</span><span class="do">Standard Founder’s Pack.<span class="why">5-day advanced access plus 30-day membership plus a bound chest plus a title with no stats. NC’s 28 Sep update lists the Special Quai Membership inside every tier, Standard included. This is the only pack with progression value, and the value is the head start plus membership.</span></span></div>
  <div class="row"><span class="k">$50 / $100</span><span class="do">Skins, a pet, wings. No combat stats.<span class="why">Buy only if you like the look. One pack per account. Upgrading later does not give a second membership.</span></span></div>
  <div class="row"><span class="k">Member</span><span class="do">$14.99 a month, on sale from Sep 30. This is the QoL.<span class="why">NC cut it from $15 and struck World Exchange out of the benefits on 28 Sep. Sales open Sep 30, 6 AM PDT; three purchases per server per month. Remote storage. You can list on the market without it, but you cannot buy. Kinah exchange. No personal trade — NC struck it from the global benefits, so the Market is the trade hub. Higher Odyle cap, reward cubes take a second Odyle injection, and a larger Shugo Festa key cap. Wind Breeze merchants in the shop UI.</span></span></div>
  <div class="row"><span class="k">$100</span><span class="do">You own Ultimate. No combat stats.<span class="why">Official contents: everything in Deluxe, plus Moonlit Aria skin, Black Dragon pet, Blazing Sun Wings, and Daeva’s Styling Chest. The store does not say what is in that chest.</span></span></div>
  <div class="row"><span class="k">Look</span><span class="do">The chest has a voucher. It is not the face redo.<span class="why">Global client data: Daeva’s Styling Chest contains a Customization Voucher. That pays the Closet fee once, for a skin, not your character’s face. The item that says “change the appearance of the character you have created” is a different voucher. Global data does not list this chest as its source. Korea got that one from event boxes, and it requires level 10. Do the face in the creator. Open the chest later for the skin fee.</span></span></div>
  <div class="row"><span class="k">Skip</span><span class="do">Battle pass, gold sellers, treating the chest as XP.<span class="why">Membership beats an early pass. Sellers are ban bait. The founder chest is potions and scrolls you will loot anyway.</span></span></div>
</article>`
  },
  watch: {
    kicker: "Do not copy Korea",
    now: "4 stigmas. Pets cap at 3. No Heroics. Cap is 45.",
    html: `
<article class="cleric-block">
  <div class="row"><span class="k">Cap</span><span class="do">45.<span class="why">Korea and Taiwan are already 50.</span></span></div>
  <div class="row"><span class="k">Stigmas</span><span class="do">4 slots.<span class="why">They grew to 5, then 6, over there.</span></span></div>
  <div class="row"><span class="k">Dungeons</span><span class="do">No Heroic drops. No hard Conquest.<span class="why">Chase crafted orange and dungeon Potential.</span></span></div>
  <div class="row"><span class="k">Pets</span><span class="do">Cap 3.<span class="why">Korea is 5. Smite on pet slots 3 and 9 was removed.</span></span></div>
  <div class="row"><span class="k">Boards</span><span class="do">Do not follow an 8-board healer route.<span class="why">Codex now leads with Yustiel then Marchutan. That is Korea. Crystal counts from their July reset are also wrong here. Test nodes were about half.</span></span></div>
  <div class="row"><span class="k">Accessories</span><span class="do">Might + Precision. Combat Speed necklace. Move Speed earrings.</span></div>
  <div class="row"><span class="k">Wings</span><span class="do">Do not dismantle them for stones.<span class="why">Korea used to get ~90k enhancement stones that way. Not global.</span></span></div>
  <div class="row"><span class="k">Trade</span><span class="do">No personal trade.<span class="why">NC crossed “Personal Trading” out of the global membership benefits. The 19 Sep notice says direct player-to-player trades are disabled and the Market is the hub. Korea and Taiwan still trade 5 a day with membership.</span></span></div>
  <div class="row"><span class="k">Caps</span><span class="do">Green +5, blue +10.<span class="why">Test build. Korea and Taiwan take green past +6 and blue to +15, so their videos overshoot.</span></span></div>
  <p>Checked 29 Sep 2026. If the live client disagrees, the client wins.</p>
</article>`
  },
  links: {
    kicker: "Sources",
    now: "Google Doc if you need the map arrows.",
    html: `
<article class="cleric-block">
  <h2>Route</h2>
  <div class="row"><span class="k">Maps</span><span class="do"><a href="https://docs.google.com/document/d/1zfmmmebLIZ9BxHTQbhBIT7VKMMqncVzADf1K8NEtamA/edit" target="_blank" rel="noopener">Failure Guild doc</a></span></div>
  <div class="row"><span class="k">VOD</span><span class="do"><a href="https://youtu.be/Oz5mIrtiWz8" target="_blank" rel="noopener">Krix Domi, 3h21, silent</a> · <a href="https://youtu.be/LU4GIlhI_E8" target="_blank" rel="noopener">spoken recap</a></span></div>
  <div class="row"><span class="k">Overlay</span><span class="do"><a href="https://github.com/AnkuAion2/Aion2-MSQ-Overlay" target="_blank" rel="noopener">Anqua</a></span></div>
  <h2>Used on this page</h2>
  <div class="row"><span class="k">Skills</span><span class="do"><a href="https://mmo-codex.com/articles/aion-2-cleric-guide/" target="_blank" rel="noopener">Codex Cleric</a> — distrust the KR board section</span></div>
  <div class="row"><span class="k">Checklists</span><span class="do"><a href="https://mmo-codex.com/articles/aion-2-new-player-checklist/" target="_blank" rel="noopener">Codex new-player</a> · <a href="https://mmo-codex.com/articles/aion-2-daily-weekly-checklist/" target="_blank" rel="noopener">Codex daily/weekly</a> · <a href="https://mmo-codex.com/articles/aion-2-krao-cave-guide/" target="_blank" rel="noopener">Codex Krao / Draupnir</a></span></div>
  <div class="row"><span class="k">Series</span><span class="do"><a href="https://youtu.be/gUNOKxTKnYc" target="_blank" rel="noopener">1 Basics</a> · <a href="https://youtu.be/dYaLTeV5QX8" target="_blank" rel="noopener">2 Content</a> · <a href="https://youtu.be/fUeYz6b7eJ0" target="_blank" rel="noopener">3 Arcana</a> · <a href="https://youtu.be/Qo3EXzcSXeo" target="_blank" rel="noopener">4 Daevanion</a> · <a href="https://youtu.be/54voCuvNXmU" target="_blank" rel="noopener">5 Skills</a> · <a href="https://youtu.be/KMGmwHtH1hM" target="_blank" rel="noopener">Stats</a> · <a href="https://youtu.be/3Yn91qaBD5s" target="_blank" rel="noopener">7 Gear</a> · <a href="https://youtu.be/HMod6Z4GrE0" target="_blank" rel="noopener">8 Macros</a> · <a href="https://youtu.be/hAl6c_LwE3M" target="_blank" rel="noopener">10 Daily/weekly</a><span class="why">Grobs. Episode 10 is the source for the Daily and weekly and First week sections on At 45. Episodes 6 and 9 were not in the numbered intros I could hear. The mouse-software toggle from episode 8 is not on this page.</span></span></div>
  <div class="row"><span class="k">Community</span><span class="do">Cleric build pasted from a community Discord.<span class="why">No link and no author, but its author is reportedly at 1M+ combat power, so it now leads on Skills. RosaPony is kept as the alternate. Anything the community build does not cover still comes from the older sources.</span></span></div>
  <div class="row"><span class="k">At 45</span><span class="do"><a href="https://mmo-codex.com/articles/aion-2-after-level-45-gear-progression/" target="_blank" rel="noopener">Codex after 45</a> · <a href="https://aion2hub.com/database/items/533700064" target="_blank" rel="noopener">Clash Rune Chest</a></span></div>
  <div class="row"><span class="k">DPS</span><span class="do"><a href="https://abysslogs.com/" target="_blank" rel="noopener">Abyss Logs</a> — passive packet-read meter with shareable logs</span></div>
  <div class="row"><span class="k">Dropped</span><span class="do">aLuckyRO and FRESHY are no longer used.<span class="why">Both channels read as AI-generated content, so their videos and the Daevanion map they supplied have been removed. Their claims were re-checked against Codex, Hub and PlayNC: most held up and are now cited to those sources; the ones that did not are either removed or explicitly marked unverified on the page.</span></span></div>
  <div class="row"><span class="k">Chest</span><span class="do"><a href="https://aion2hub.com/database/items/930100021" target="_blank" rel="noopener">Customization Voucher</a> is in the styling chest. <a href="https://aion2hub.com/database/items/563100004" target="_blank" rel="noopener">Face voucher</a> is not, in global data.</span></div>
  <div class="row"><span class="k">Shop</span><span class="do"><a href="https://mmo-codex.com/articles/aion-2-founders-pack-guide/" target="_blank" rel="noopener">Founder’s packs</a></span></div>
  <div class="row"><span class="k">Global</span><span class="do"><a href="https://aion2.plaync.com/en-us/board/notice/view?articleId=6a850010fa34c1011d6273b2" target="_blank" rel="noopener">Membership perks</a> — personal trade and World Exchange struck. <a href="https://aion2.plaync.com/en-us/board/notice/view?articleId=6ab85cc646be804931c31335" target="_blank" rel="noopener">Advanced Access servers</a> · <a href="https://aion2.plaync.com/en-us/board/notice/view?articleId=6abab930eea53f5d6dbcf939" target="_blank" rel="noopener">Server pairings</a> · <a href="https://aion2.plaync.com/en-us/board/notice/view?articleId=6aba64d0d97eae18cc40e130" target="_blank" rel="noopener">Pre-download</a> — all 28 Sep. <a href="https://aion2.plaync.com/en-us/board/notice/view?articleId=6aadde90fa34c1011d6277af" target="_blank" rel="noopener">19 Sep notice</a> — trades off, market is the hub.</span></div>
  <div class="row"><span class="k">Boards</span><span class="do"><a href="https://www.youtube.com/watch?v=hNnDfDXrWxM&t=296s" target="_blank" rel="noopener">RosaPony @ 4:56</a> · <a href="https://questlog.gg/aion-2/en/skill-builder/FQXZUw3OF054?build-id=2233" target="_blank" rel="noopener">Questlog PvE</a><span class="why">The character-builder page we sourced is gone — it now answers that the character does not exist. The builds survive in the Skill Builder links above.</span></span></div>
  <h2>Hub</h2>
  <div class="row"><span class="k">Global</span><span class="do"><a href="https://aion2hub.com/" target="_blank" rel="noopener">Home</a> · <a href="https://aion2hub.com/classes/cleric" target="_blank" rel="noopener">Cleric</a> · <a href="https://aion2hub.com/database" target="_blank" rel="noopener">Items</a></span></div>
  <div class="row"><span class="k">Maps</span><span class="do"><a href="https://aion2hub.com/maps" target="_blank" rel="noopener">World</a> · <a href="https://aion2hub.com/maps/hidden-cubes" target="_blank" rel="noopener">Hidden cubes</a> · <a href="https://aion2hub.com/guides/leveling" target="_blank" rel="noopener">Elyos splits</a></span></div>
  <div class="row"><span class="k">Tools</span><span class="do"><a href="https://aion2hub.com/tools/event-timer" target="_blank" rel="noopener">Rift timer</a> · <a href="https://aion2hub.com/tools/build-calculator" target="_blank" rel="noopener">Planner</a> · <a href="https://aion2hub.com/tools/gear-forge" target="_blank" rel="noopener">Enchant sim</a></span></div>
  <div class="row"><span class="k">Notices</span><span class="do"><a href="https://aion2hub.com/news/aion-2-early-access-servers-explained" target="_blank" rel="noopener">EA servers</a> · <a href="https://aion2hub.com/news/aion-2-launch-scale-test-global-vs-korea-changes" target="_blank" rel="noopener">LST vs KR</a> · <a href="https://aion2.plaync.com/en-us/board/notice" target="_blank" rel="noopener">PlayNC</a></span></div>
</article>`
  }
};
