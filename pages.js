// Multi-class companion. Class-specific tabs live under CLASSES;
// everything class-agnostic lives under PAGES.
const CLASSES = {
  cleric: {
    label: "Cleric",
    weapon: "Mace and shield",
    tabs: ["skills", "stats", "daevanion"],
    skills: {
    kicker: "Skills · open when you get a point",
    now: "Community build leads. Two-slot macro: Earth Punishment then Judgment Thunder.",
    html: `
<article class="cleric-block">
  <h2>Rules</h2>
  <div class="row"><span class="k">Two builds</span><span class="do">Community build leads. RosaPony is the alternate.<span class="why">They are aimed at different jobs. The community one is a group/raid healer build — it talks about Sanctuary progression, being the only support in the group, and rez in raids. RosaPony is a damage-leaning PvE Cleric: he puts the buffs and the two damage skills in his macro and takes Judgment Thunder first. Its author is reportedly at 1M+ combat power; RosaPony’s progression is unknown.</span></span></div>
  <div class="row"><span class="k">Why they clash</span><span class="do">Different roles, not just different numbers.<span class="why">Most of the conflicts below are that split. Healing for a group: follow the community build. Mostly solo and want to contribute damage: several RosaPony picks have a real reason behind them.</span></span></div>
  <div class="row"><span class="k">Points</span><span class="do">Skill points take a skill to 10. Everything above that is bonus levels.<span class="why">13 points to reach 8, 21 to reach 10. Then the Daevanion board adds up to +4, so 14, and gear and Arcana cards carry the rest — players report +6. Lv.20 is not the ceiling: this player's Cleric runs Earth Punishment at Lv.25. Resets are free, so a bad spend is not permanent.</span></span></div>
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
  <div class="row"><span class="k">Primary</span><span class="do">Two slots: Earth Punishment, then Condemnation. 10 ms each, hold LMB alongside.<span class="why">From the same player's updated in-game Macro window, so this is what he actually runs: slot 1 Earth Punishment (Lv.25), slot 2 Condemnation (Lv.20), both 10 ms. It supersedes the earlier Earth Punishment → Judgment Thunder pairing. He is explicit that it is the setup to run <em>until you have good uptime on Punishment</em> — an interim macro, not the endpoint. Grobs puts the top-priority skill last while this screenshot puts Earth Punishment first; it is a two-click change, so try both. Only go to 40–50 ms if your ping is 80+.</span></span></div>
  <p>Leveling: stack the two clicks’ spam skills and hold left click plus the macro key.</p>
  <ol class="macro">
    <li>Earth Punishment</li>
    <li>Condemnation</li>
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
    daevanion: {
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
    }
  },
  chanter: {
    label: "Chanter",
    weapon: "Staff",
    tabs: ["skills", "build", "stats", "daevanion"],
    skills: {
    kicker: "Skills · open when you get a point",
    now: "Melee staff hybrid. Weave auto-attacks or you run dry on mana.",
    html: `
<article class="cleric-block">
  <p class="kicker">Global · 4 stigma slots · free skill reset</p>
  <h2>Rules</h2>
  <div class="row"><span class="k">Points</span><span class="do">Skill points take a skill to 10. Everything above that is bonus levels.<span class="why">13 points to reach 8, 21 to reach 10. Then the Daevanion board adds up to +4, so 14, and gear and Arcana cards carry the rest. His Chanter sits at Lv.20 and his Cleric at Lv.25, so the ceiling is how much skill-level gear you stack. Resets are free.</span></span></div>
  <div class="row"><span class="k">Gate</span><span class="do">+1 skill level every 3 character levels.<span class="why">Onslaught is learned at level 1, so it can reach 8 at character level 19. Bonus levels from gear and the board count toward it.</span></span></div>
  <div class="row"><span class="k">Specialties</span><span class="do">Five options per skill. You run two, or three at Lv.20.<span class="why">Every Lv.20 skill in the 1M CP build carries three specialties and every Lv.12-16 skill carries two. Skill effects are documented as unlocking at 8, 12 and 16 — but that is the Korea/Taiwan version, so treat the global thresholds as unconfirmed.</span></span></div>
  <div class="row"><span class="k">Budget</span><span class="do">About 230–250 points at 45. About 150 at 37.<span class="why">Reported figures rather than confirmed ones. At 21 points a skill that is roughly eleven skills at 10, so you cannot level everything.</span></span></div>
  <div class="row"><span class="k">Mana</span><span class="do">The defining constraint. Weaving is how you fix it.<span class="why">Heavy early mana problems are the class's listed weakness. Onslaught restores MP on every hit, and weaving auto-attacks between skills is what keeps you casting. Skip the weaving and you stall.</span></span></div>

  <h2>Spend</h2>
  <div class="row"><span class="k">1–18</span><span class="do">Rushing Smash and Impactful Crush to 8 first.<span class="why">You use your dash and your ranged attack constantly, so they earn their points earliest. Then Onslaught (left click) and Incandescent Blow (right click) — those two are your sustained damage and your mana engine.</span></span></div>
  <div class="row"><span class="k">19</span><span class="do">First specialties, and take the MP ones.<span class="why">Onslaught: +20% MP restored. Incandescent Blow: −20% MP consumed. Rushing Smash gets its charge option. Early Chanter points are a mana problem before they are a damage problem.</span></span></div>
  <div class="row"><span class="k">21–25</span><span class="do">Dark Crush at 22 with its Critical Hit specialty.<span class="why">Dark Crush is your priority target skill — a 20 m ranged hit that only lands on a target already Stunned, Knocked Down or Airborne, which is why the rest of the kit opens it up. One of its options removes the cooldown; another is the Piercing Strike chain, and Piercing Strike is KR/TW-only.</span></span></div>
  <div class="row"><span class="k">26–38</span><span class="do">Recuperation, Tremor Crush, Spinning Strike and Defiance to 8 as each unlocks.<span class="why">Then Attack Preparation, which can reach 10 at 37, and Spinning Strike to 10 at 38. Spinning Strike is a ranged skill that makes Dark Crush available again — it is part of the core loop, not filler.</span></span></div>
  <div class="row"><span class="k">39–45</span><span class="do">Wind's Promise and the other passives.<span class="why">Wind's Promise adds Critical Damage Boost and a chance of extra damage. Passives can go past 10 later through gear and Arcana.</span></span></div>
  <div class="row"><span class="k">Weak passives</span><span class="do">Crossguard and Raging Spell.<span class="why">Described as of little use in PvE. Not where your points go.</span></span></div>

  <h2>Specialty picks</h2>
  <div class="row"><span class="k">Onslaught</span><span class="do">+20% MP restored → and at 12, each hit cuts 1s off Spinning Strike.<span class="why">That level-12 option is the engine of the class: every Onslaught hit accelerates your next Spinning Strike, which reopens Dark Crush. One Korean creator uses HP absorb instead because he hit a bug with the cooldown cut.</span></span></div>
  <div class="row"><span class="k">Incandescent</span><span class="do">−20% MP consumed. Later, fewer-targets damage.<span class="why">Mana first while leveling, then the damage version for bosses once you are not starving.</span></span></div>
  <div class="row"><span class="k">Dark Crush</span><span class="do">Critical Hit from level 8.<span class="why">Then the Piercing Strike chain at 12 and no-cooldown at 16. This is the skill the whole kit funnels into.</span></span></div>
  <div class="row"><span class="k">Spinning Strike</span><span class="do">−5s cooldown, then Crit at 16.<span class="why">One source calls the cooldown cut mandatory after Korea's September change. At 16 it ignores Block and Evasion and lands as a critical.</span></span></div>
  <div class="row"><span class="k">Wave Blow</span><span class="do">Change it to AoE for grinding.<span class="why">Hits up to four enemies and raises your Critical Damage Boost 10% for 30s, stacking twice.</span></span></div>
  <div class="row"><span class="k">Recuperation</span><span class="do">+1 consecutive use so you heal twice.<span class="why">Its heal also removes a debuff and adds a heal over time.</span></span></div>
  <div class="row"><span class="k">Fracturing</span><span class="do">The charge option while leveling.<span class="why">Changes it to a charge skill for up to 200% more damage. Later, Heat Wave Blow plus the reset at 12.</span></span></div>

  <h2>Stigmas · 4 slots</h2>
  <div class="row"><span class="k">First</span><span class="do">Undefeated Mantra, ahead of everything else.<span class="why">Every source agrees. It raises PvE damage boost and tolerance for you and the party, and adds +100 Accuracy at stigma level 10. Take it as high as it goes.</span></span></div>
  <div class="row"><span class="k">Sprint Mantra</span><span class="do">Move speed plus 15% chance to restore HP on attack.<span class="why">+10.5% move speed for you and nearby party. Cheap, always useful.</span></span></div>
  <div class="row"><span class="k">Fracturing Blow</span><span class="do">Rush that lowers the target's Defense 30% for 5s.<span class="why">One source keeps it at 1 purely for the stagger damage; another takes it to 5 for the shorter cooldown. The 1M CP build takes it over Power of the Storm when a Cleric is present — but notes that swap is not valid on global.</span></span></div>
  <div class="row"><span class="k">Power of the Storm</span><span class="do">Group pick — and on global it beats the Cleric's equivalent.<span class="why">+20% Combat Speed and −20% cooldowns on you, +20% and −10% for the party within 40 m. Korean players rate the Cleric's Earth's Blessing higher and say the two overlap; the 1M CP build says that on global this one is the stronger of the two. Take it unless you are the only support and need the healing instead.</span></span></div>
  <div class="row"><span class="k">Marchutan's Wrath</span><span class="do">Contested: mandatory, or mediocre.<span class="why">The 1M CP build calls it mandatory — it triggers Dark Crush on the target for 7s. A Korean creator says it now does little damage. Both describe the same effect; they disagree on whether it earns a slot.</span></span></div>
  <div class="row"><span class="k">Healing Touch</span><span class="do">Only as the sole healer in higher-end content.<span class="why">Not a general pick. Two sources say the same thing.</span></span></div>
  <div class="row"><span class="k">Ignore</span><span class="do">Obliterate · Assault Shock · Barrier Spell.<span class="why">Useless per the 1M CP build. Impending Authority and Ensnaring Mark are niche PvP with long cooldowns.</span></span></div>
  <div class="row"><span class="k">Four to carry</span><span class="do">Undefeated Mantra · Sprint Mantra · Guardian Blessing · Power of the Storm.<span class="why">The 1M CP build's early global set, identical for solo and group PvE. Swap Guardian Blessing for Focused Defense on Nightmare fights. This closes the open question of what a fresh 45 should carry.</span></span></div>
  <div class="row"><span class="k">Cost</span><span class="do">75 shards to take one stigma to 20.<span class="why">1 per level to 5, 2 per level to 10, 4 to 15, 8 to 20. A freshly levelled Chanter carries about six stigmas with four of them at 5.</span></span></div>

  <h2>Macro</h2>
  <div class="row"><span class="k">Chain</span><span class="do">Two chains in circulation — try both.<span class="why">Codex's is Onslaught → Dark Crush → Spinning Strike at 10 ms: a closed loop where Onslaught restores MP and Spinning Strike reopens Dark Crush. The 1M CP build's real macro, from his screenshot, is just Wave Blow → Dark Crush at 10 ms and leans on weaving for the rest. See the PvE build tab.</span></span></div>
  <div class="row"><span class="k">Weave</span><span class="do">Hold left click and the macro key together.<span class="why">Not optional on a Chanter. Weaving auto-attacks is your mana, and with Onslaught's level-12 specialty every hit also takes a second off Spinning Strike. The game cancels animations better that way than if you put auto-attacks inside the macro.</span></span></div>
  <div class="row"><span class="k">Leave out</span><span class="do">Defensive cooldowns.<span class="why">Keep guard and panic buttons manual so you fire them when the hit lands, not on a timer.</span></span></div>
  <div class="row"><span class="k">Mode</span><span class="do">Aion 1 mode (tab target) auto-weaves auto-attacks for you.<span class="why">Action Combat mode does not — you have to put the auto-attack commands in the macro yourself. Worth knowing before you pick a control scheme.</span></span></div>

  <h2>Not on global</h2>
  <div class="row"><span class="k">KR/TW only</span><span class="do">Eight skills exist in Korea and Taiwan but not the global client.<span class="why">Hub's global list is 26 active and 10 passive. Resonance Crush, Crushing Blow, Bursting Blow, Storm Chain, Surging Strike, Piercing Strike, Bolt Crush and Crushing Strike are not in it. Any guide building a rotation around those is describing a later version. Dark Crush's Piercing Strike chain specialty is affected too.</span></span></div>
</article>`
    },
    build: {
    kicker: "Second opinion · shared screenshots",
    now: "A 1M+ combat-power Chanter's PvE allocation. One player, not a published guide.",
    html: `
<article class="cleric-block">
  <p class="kicker">Global · 4 stigma slots · read as a second opinion</p>
  <div class="row"><span class="k">Read this as</span><span class="do">One player's build, not a source of record.<span class="why">Handed over as text plus two in-game screenshots. The screenshots are direct evidence; the numbers are his. He is at 1M+ combat power, which is the reason it is worth reading at all — but nothing here is independently corroborated.</span></span></div>

  <h2>Skill levels and specialty order</h2>
  <p>His notation: the skill's level, then which specialty tiers he takes, then the order to take them. <em>4 &gt; 5 &gt; 3</em> means take tier 4 first.</p>
  <div class="row"><span class="k">Onslaught</span><span class="do">Lv.20 · tiers 3/4/5 (4 &gt; 5 &gt; 3)</span></div>
  <div class="row"><span class="k">Dark Crush</span><span class="do">Lv.20 · tiers 3/4/5 (5 &gt; 4 &gt; 3)</span></div>
  <div class="row"><span class="k">Recuperation</span><span class="do">Lv.20 · tiers 1/4/5 (4 &gt; 1 &gt; 5)</span></div>
  <div class="row"><span class="k">Spinning Strike</span><span class="do">Lv.20 · tiers 1/2/3 (1 &gt; 3 &gt; 2)</span></div>
  <div class="row"><span class="k">Incandescent Blow</span><span class="do">Lv.16 · tiers 3/5 (3 &gt; 5)</span></div>
  <div class="row"><span class="k">Rushing Smash</span><span class="do">Lv.16 · tiers 4/5 (4 &gt; 5)</span></div>
  <div class="row"><span class="k">Defiance</span><span class="do">Lv.16 · tiers 3/5 (5 &gt; 3)</span></div>
  <div class="row"><span class="k">Impactful Crush</span><span class="do">Lv.12 · tiers 3/4 (3 &gt; 4)</span></div>
  <div class="row"><span class="k">Heat Wave Blow</span><span class="do">Lv.12 · tiers 3/4 (4 &gt; 3)</span></div>
  <div class="row"><span class="k">Tremor Crush</span><span class="do">Lv.12 · tiers 2/3 (2 &gt; 3)</span></div>
  <div class="row"><span class="k">Wave Blow</span><span class="do">Lv.12 · tiers 1/4 (4 &gt; 1)</span></div>
  <div class="row"><span class="k">Gust Rampage</span><span class="do">Not invested.</span></div>
  <div class="row"><span class="k">Pattern</span><span class="do">Lv.20 skills carry three specialties. Lv.12 and Lv.16 skills carry two.<span class="why">True across all eleven of his rows, so treat it as a real rule about the system. The exact unlock levels are still unconfirmed by any source I have.</span></span></div>

  <h2>Level 20 priority</h2>
  <div class="row"><span class="k">Order</span><span class="do">Dark Crush &gt; Recuperation &gt; Spinning Strike &gt; Onslaught.</span></div>
  <div class="row"><span class="k">How many to 20</span><span class="do">Contested: four here, two or three on global.<span class="why">His four Lv.20 skills are shown on his hotbar, so that is what he runs. Madsin expects most classes to reach only about two skills at Lv.20 on global because rings get contested for other stats — though he got three "pretty easily" when rings were free to roll. Plan for two, treat more as a bonus.</span></div>
  <div class="row"><span class="k">Investment</span><span class="do">His Chanter tops out at Lv.20; his Cleric runs Lv.25.<span class="why">Same player, so the gap is how much skill-level gear and Arcana each character has, not a class rule. He is at 1M+ combat power on the Cleric. Read this Chanter allocation as a well-invested second character, and expect the Cleric's numbers to be the more final of the two.</span></span></div>

  <h2>Passives</h2>
  <div class="row"><span class="k">Order</span><span class="do">Wind's Promise &gt; Impact Hit &gt; Attack Preparation &gt; Inspiring Spell &gt; Earth's Promise.<span class="why">Earth's Promise is a passive, not something you cast — it cuts the target's PvE damage tolerance every time you land an attack.</span></span></div>

  <h2>Stigmas</h2>
  <div class="row"><span class="k">Mandatory</span><span class="do">Undefeated Mantra · Sprint Mantra · Guardian Blessing · Marchutan's Wrath.</span></div>
  <div class="row"><span class="k">Next</span><span class="do">Focused Defense — excellent for prog and higher-end content.</span></div>
  <div class="row"><span class="k">If solo support</span><span class="do">Power of the Storm, and trade Guardian Blessing or Sprint Mantra for Healing Touch if you need the healing.</span></div>
  <div class="row"><span class="k">Ignore</span><span class="do">Obliterate · Assault Shock · Barrier Spell — useless. Impending Authority · Ensnaring Mark — niche PvP, cooldown too long.</span></div>
  <div class="row"><span class="k">Level 25 order</span><span class="do">Undefeated Mantra &gt; Guardian Blessing or Sprint Mantra.</span></div>

  <h2>Early global sets · 4 slots</h2>
  <div class="row"><span class="k">Solo PvE</span><span class="do">Undefeated Mantra · Sprint Mantra · Guardian Blessing · Power of the Storm.<span class="why">For Nightmare fights, swap Guardian Blessing for Focused Defense — he writes "Focused Block", which is almost certainly this skill.</span></span></div>
  <div class="row"><span class="k">Group PvE</span><span class="do">Undefeated Mantra · Sprint Mantra · Guardian Blessing · Power of the Storm.<span class="why">Identical to solo. This answers what a fresh 45 should carry — the question the Skills tab left open.</span></span></div>

  <h2>Upgrade order · global</h2>
  <div class="row"><span class="k">To 20</span><span class="do">Undefeated Mantra &gt; Power of the Storm &gt; Sprint Mantra.</span></div>
  <div class="row"><span class="k">To 15</span><span class="do">Undefeated Mantra &gt; Guardian Blessing.</span></div>
  <div class="row"><span class="k">To 10</span><span class="do">Sprint Mantra &gt; Focused Defense.</span></div>
  <div class="row"><span class="k">To 5</span><span class="do">Power of the Storm &gt; Focused Defense.</span></div>

  <h2>Macro</h2>
  <div class="row"><span class="k">His macro</span><span class="do">Wave Blow then Dark Crush, 10 ms each.<span class="why">Two steps only, straight from his in-game Macro window. It disagrees with the Codex chain on the Skills tab — both are credible, so run both and keep whichever your latency likes.</span></span></div>
  <div class="row"><span class="k">Shred window</span><span class="do">Fire Fracturing Blow right before Marchutan's.<span class="why">Lines the Defense shred up with your burst.</span></span></div>
  <div class="row"><span class="k">What to include</span><span class="do">Up to you whether gap-closers and non-mobile skills go in.<span class="why">His words. There is no single correct macro list.</span></span></div>
  <div class="row"><span class="k">Weave</span><span class="do">Spam LMB with macro software alongside the in-game macro, or hold the macro and LMB keys together.<span class="why">Second source to say this — weaving is how the class works.</span></span></div>
</article>`
    },
    stats: {
    kicker: "What to stack",
    now: "Weapon is a staff. Attack and Critical Hit. Mana is the early wall.",
    html: `
<article class="cleric-block">
  <h2>Chase</h2>
  <div class="row"><span class="k">Attack</span><span class="do">Melee damage first, heals second.<span class="why">You are a bruiser, not a pure healer. Your damage is comparable to a Cleric or Templar's while you also buff.</span></span></div>
  <div class="row"><span class="k">Crit</span><span class="do">Critical Hit, then Critical Damage Boost.<span class="why">Dark Crush's level-8 specialty is a critical hit, and Wave Blow raises your Critical Damage Boost 10% for 30s stacking twice. Attack and Critical Hit is the pair the community PvE build runs.</span></span></div>
  <div class="row"><span class="k">Speed</span><span class="do">Combat Speed.<span class="why">You are weaving melee between skills, so animation time is damage. Power of the Storm hands you +20% for 10s on demand.</span></span></div>
  <div class="row"><span class="k">Accuracy</span><span class="do">Mandatory, not optional.<span class="why">Bosses frequently parry front attacks and you fight in melee. Undefeated Mantra adds +100 Accuracy at stigma level 10, which is a large part of why it is the first stigma.</span></span></div>
  <div class="row"><span class="k">Alive</span><span class="do">HP, Defense, Block.<span class="why">Guardian Blessing and Focused Defense cover you, and Undefeated Mantra's tolerance makes the whole party tankier — one source says it lets the group face-tank some mechanics.</span></span></div>
  <div class="row"><span class="k">Evasion</span><span class="do">Worth having for PvE.<span class="why">It is how you dodge attacks in open-world and dungeon content.</span></span></div>
  <div class="row"><span class="k">Mana</span><span class="do">Treat MP as a stat, not an afterthought.<span class="why">It is the class's listed weakness and the reason your early specialty picks are MP options. Weaving is the real fix, but MP lines are not wasted.</span></span></div>

  <h2>Manastones</h2>
  <p>Game8's listed priorities for the Chanter, in their order:</p>
  <div class="row"><span class="k">First</span><span class="do">Critical Damage Tolerance ×4 · Weapon Damage Tolerance ×4.<span class="why">Survivability lines first.</span></span></div>
  <div class="row"><span class="k">Then</span><span class="do">Attack/Critical Hit Resist ×4 · Regeneration Penetration ×4.<span class="why">Middle of their list.</span></span></div>
  <div class="row"><span class="k">Filler</span><span class="do">Accuracy/Critical Hit Resist ×2 · Block Penetration/Accuracy ×6.<span class="why">Last on their list, and the counts suggest more slots than the earlier entries.</span></span></div>
  <div class="row"><span class="k">PvP set</span><span class="do">PvP Critical Hit/Resist ×8.<span class="why">Swap in for PvP rather than stacking both.</span></span></div>

  <h2>Gear and cards</h2>
  <div class="row"><span class="k">Weapon</span><span class="do">Staff.<span class="why">Not a mace. The Cleric and Chanter do not share weapons.</span></span></div>
  <div class="row"><span class="k">PvE build</span><span class="do">Attack and Critical Hit, Destruction / Life / Death Pantheon.<span class="why">Hub's community buff/DPS hybrid build — party buffs and mantras layered over damage.</span></span></div>
  <div class="row"><span class="k">PvP build</span><span class="do">PvP Damage Boost, HP and self-heal, guard stigmas, Destruction / Justice / Life Pantheon.<span class="why">Hub's community PvP bruiser. Both Hub builds are labelled orientative test builds from the playtest client, so treat the stat directions as the useful part, not the exact numbers.</span></span></div>
  <div class="row"><span class="k">Arcana</span><span class="do">Illusion for cooldown reduction and party support.<span class="why">Hunt cards giving 10–15% cooldown reduction. Wisdom instead raises your smite (double damage) chance — take that if you are over-geared and want to solo more or push personal damage.</span></span></div>
  <div class="row"><span class="k">Leveling</span><span class="do">Weapon, then accessories and guard, to +5 only.<span class="why">Same rule as any class — you replace pieces four or five times. Cap gear order is on At 45.</span></span></div>
</article>`
    },
    daevanion: {
    kicker: "Daevanion · the board",
    now: "Same boards as the Cleric. You differ on priorities — buff uptime first.",
    html: `
<article class="cleric-block">
  <div class="row"><span class="k">Caveat</span><span class="do">The board list below is the full 8-board Korea/Taiwan client.<span class="why">Global's test client showed a partial set. Treat this as direction for what to prioritise, not as a map of what you will have on day one. Same situation as the Cleric's board page.</span></span></div>
  <div class="row"><span class="k">Core</span><span class="do">Nezekan, then Zikel, then Yustiel.<span class="why">Nezekan gives Attack and Combat Speed — both directly feed your damage and your buff uptime. Zikel's damage boost is worth finishing early if you solo. Yustiel's cooldown reduction is the crucial one for group Chanters, because your value is how often your mantras are up.</span></span></div>
  <div class="row"><span class="k">Survival</span><span class="do">Marchutan for Defense and HP.<span class="why">Listed as vital for survivability in group PvE and PvP.</span></span></div>
  <div class="row"><span class="k">Later</span><span class="do">Vaizel for Critical Damage Boost, Triniel for Multi-hit.<span class="why">Both are damage upgrades to add after the core route, not before. Azphel is your PvP board — focus its damage mitigation nodes.</span></span></div>
  <div class="row"><span class="k">Solo</span><span class="do">Ariel for grinding efficiency.<span class="why">Worth taking if you spend your time farming rather than raiding.</span></span></div>
  <div class="row"><span class="k">Past 10</span><span class="do">Same sources as any class.<span class="why">Up to +4 on a skill from the board, +1 from each ring for up to two skills, +1 each from your weapon and guard, and +1 per Arcana card.</span></span></div>
  <div class="row"><span class="k">To 20</span><span class="do">Four skills finish at Lv.20: Dark Crush, Recuperation, Spinning Strike, Onslaught — in that priority order.<span class="why">From the 1M CP build. Everything else in his kit sits at 16 or 12. Onslaught, Dark Crush and Spinning Strike are the loop; Recuperation joins them because the class dies otherwise.</span></span></div>
  <div class="row"><span class="k">Feathers</span><span class="do">Pick up traces and turn them in at the Monolith.<span class="why">Skill points, amulet scrolls and titles. Same system as the Cleric — minimap icons, and it feeds your skill levels.</span></span></div>
  <div class="row"><span class="k">Flavour</span><span class="do">Iconic weapons per board line up with the KR/TW route.<span class="why">If you see a guide naming boards by weapon rather than name, it is the same eight.</span></span></div>
</article>`
    }
  }
};

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
  <div class="row"><span class="k">Ascension</span><span class="do">A bar that gates the story, not the Trial.<span class="why">The MSQ periodically stops until you fill an Ascension bar with exploration content. Sealed dungeons and on-path green quests fill it fastest, which is why the route tells you to take the greens it lists. This is separate from Ascension Trial, which is a weekly.</span></span></div>
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
  <div class="row"><span class="k">Characters</span><span class="do">Make all four on day one — four slots are free.<span class="why">A full or locked server blocks character creation for accounts with nobody on it, but once you have one character there you can add alts freely. Rolling all four immediately is what protects the plan.</span></span></div>

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
  <div class="row"><span class="k">Shugo</span><span class="do">Unlocks at 13. Keys are server-wide, not per character.<span class="why">Fextralife gives the rates: 1 key a day to a cap of 7 on a free account, 4 a day to a cap of 28 with a subscription. The old "2 a day to 14" on this page was wrong, and Madsin says 3 — trust Fextralife, it is the only source that states both tiers. Because the pool is shared, spend these on your main.</span></span></div>
  <div class="row"><span class="k">Shugo when</span><span class="do">Games run at :15 and :45 past the hour. Do not spend a key unless you placed well.<span class="why">Four or five of the nine games are playable each slot, and the number of reward cards you can pick is set by your placement — spending a key after a bad run wastes it. Madsin: exit without claiming if you did not place first or second.</span></span></div>
  <div class="row"><span class="k">Nightmare</span><span class="do">Unlocks at 45. Two tickets a day, stores to 14. Per character.<span class="why">You start at 2/14. Tickets do not start recharging until the character is 45, so every alt parked at 45 is quietly banking them. Source: Grobs episode 10.</span></span></div>
  <div class="row"><span class="k">Invasions</span><span class="do">Every two hours at the half-hour.<span class="why">Separate from the Shugo Festival, with its own daily allowance. Source: Codex daily/weekly.</span></span></div>

  <h2>Do not</h2>
  <div class="row"><span class="k">+5</span><span class="do">Stop enhancing there while you level.<span class="why">You replace pieces 4–5 times.</span></span></div>
  <div class="row"><span class="k">Stones</span><span class="do">Do not manastone junk.<span class="why">Save them for 45. One random fill on leveling armor at most. Never put accessory stones on quest gear — those are the expensive ones.</span></span></div>
  <div class="row"><span class="k">1000</span><span class="do">Do not fake gear score.<span class="why">Krao’s entry reads 1000 and it is tuned for real stats. The clean boost is the Clash Rune Chests from map quests — names are on At 45. Those are not the Hugo Mercs class runes.</span></span></div>
  <div class="row"><span class="k">Runes</span><span class="do">Socket, +1, stop.<span class="why">A failed upgrade can break the rune.</span></span></div>
  <div class="row"><span class="k">Shugo</span><span class="do">Do not use keys before 45.<span class="why">Loot scales to your level. After 45, do Shugo and invasions when they pop.</span></span></div>
  <div class="row"><span class="k">Explore</span><span class="do">Kill the boss. Do not loot the chest.<span class="why">Story sends you into Exploration Krao, Urugugu, Fire Temple, Draupnir. The chest spends Odyle on junk. Then push Draupnir, not more Exploration. Source: Codex after-45.</span></span></div>
  <div class="row"><span class="k">Rifts</span><span class="do">Probably do not cross to the other faction for the mirrored seals.<span class="why">On Taiwan and Korea you were forced to, for identical rewards. On the test client the Daevanion crystals and skill points were stripped out of the opposite faction's versions, so on global they look optional. Confirm in game before spending a rift on it.</span></span></div>
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
  versus: {
    kicker: "Cleric vs Chanter",
    now: "Cleric for progression. Chanter for farm and damage. One support slot? Cleric.",
    html: `
<article class="cleric-block">
  <p>Both are priest classes, playable by both factions. They are not two flavours of the same job — one heals, the other fights while buffing. Sources: AION2 Hub class pages, MMO Codex Cleric and Chanter guides, and r/Aion2 threads from KR/TW players.</p>

  <h2>The split</h2>
  <div class="row"><span class="k">Role</span><span class="do">Cleric is a Healer. Chanter is Healer/DPS.<span class="why">Hub: the Cleric is the dedicated healer, mace and shield, back line. The Chanter is a “sustain-and-support bruiser” with a staff, fighting up close. Codex: the Cleric is the primary healer, the Chanter brings buffs, off-heals and melee damage.</span></span></div>
  <div class="row"><span class="k">One line</span><span class="do">Cleric for progression, Chanter for farm.<span class="why">Community shorthand, and it holds up. Also: Cleric is ranged, Chanter is melee.</span></span></div>
  <div class="row"><span class="k">Rez</span><span class="do">Only the Cleric can resurrect.<span class="why">The single biggest structural difference. It saves the party rare resurrection stones in top content. No amount of Chanter damage replaces it. Source: Codex.</span></span></div>
  <div class="row"><span class="k">Healing</span><span class="do">Cleric wins on raw healing, AoE heals and cleansing.<span class="why">Chanter off-heals. It can solo-heal most dungeons early on, but Codex says it is not a dedicated solo healer for late content.</span></span></div>
  <div class="row"><span class="k">Damage</span><span class="do">Chanter wins, clearly.<span class="why">Codex: a Cleric’s personal and overall damage is “well below Chanter’s.” The Chanter deals damage comparable to Clerics and Templars while also supporting. A Cleric contributes burst on cooldown windows; the Chanter sustains.</span></span></div>
  <div class="row"><span class="k">Buffs</span><span class="do">Chanter’s job. Mantras are highly requested.<span class="why">Party-wide attack speed, cooldown reduction, damage and damage tolerance, plus off-healing. A good Chanter makes everyone else hit harder, which is why groups invite them even when healing is not needed.</span></span></div>
  <div class="row"><span class="k">Tanky</span><span class="do">Cleric.<span class="why">Natural defense, strong self-heals and shields. Codex calls it very tanky with easy PvE control difficulty. The Chanter’s survivability is Undefeated Mantra’s group tolerance plus a stun-lock passive, not raw mitigation.</span></span></div>
  <div class="row"><span class="k">Mana</span><span class="do">Chanter’s real weakness early.<span class="why">Heavy mana problems, and weaving auto-attacks is how you manage it. Onslaught restores MP on every hit. A Cleric has the easier early game here.</span></span></div>
  <div class="row"><span class="k">Stagger</span><span class="do">Cleric has the better stagger kit.<span class="why">Codex lists “fewer stagger skills” as a Chanter weakness. Stagger breaks boss groggy mechanics, so this matters in dungeons.</span></span></div>
  <div class="row"><span class="k">Mobility</span><span class="do">Cleric is very immobile early.<span class="why">Codex calls it a Cleric weakness. The Chanter is melee with a dash and a ranged attack, so it repositions better.</span></span></div>

  <h2>Do not stack them blindly</h2>
  <p>Three Cleric and Chanter skills cancel each other out. Game8's skill tooltips spell these out — this is the clearest independent confirmation I found that the two classes are designed to interlock rather than duplicate.</p>
  <div class="row"><span class="k">Mantra</span><span class="do">Undefeated Mantra cancels the Cleric's Light of Protection.<span class="why">Both give the same damage boost and tolerance. Only the highest level applies, and if they are equal, Undefeated Mantra wins. So bringing both is usually a wasted Cleric slot — which is exactly why the Cleric drops LoP when a Chanter is present.</span></span></div>
  <div class="row"><span class="k">Storm</span><span class="do">Power of the Storm is blocked by the Cleric's Earth's Blessing.<span class="why">If Earth's Blessing is already active you cannot receive Power of the Storm. The Chanter's headline group buff and a Cleric buff occupy the same space.</span></span></div>
  <div class="row"><span class="k">Promise</span><span class="do">Earth's Promise is cancelled by the Cleric's Chain of Torment.<span class="why">Its damage-tolerance reduction does not apply when Chain of Torment is used. A Cleric running Chain of Torment removes a Chanter debuff.</span></span></div>
  <div class="row"><span class="k">Slots</span><span class="do">A Chanter loses 2 of its 4 stigma slots to mantras.<span class="why">A Cleric loses 1 to its buff. That compression is why the Chanter's kit feels tighter, and why players describe the two as complementary rather than competing.</span></span></div>

  <h2>Getting picked</h2>
  <p>The honest order of what decides whether a group takes you.</p>
  <div class="row"><span class="k">First</span><span class="do">Gear score and combat power, not class.<span class="why">The dungeon lobby shows everyone's gear score and combat power before the pull, so that is what a leader is actually reading. Being geared matters more than which priest you rolled. Class only decides the tiebreak between two similarly geared players.</span></span></div>
  <div class="row"><span class="k">Cleric</span><span class="do">Structural demand, because of the rez.<span class="why">Not because it heals more. It is the only class that can resurrect, and KR/TW players call 2× Cleric “borderline mandatory until you are overgeared or speedrunning.” A Cleric is the safest pick to be wanted in serious content at every stage.</span></span></div>
  <div class="row"><span class="k">Chanter</span><span class="do">Wanted, but as the second support rather than the first.<span class="why">Groups invite Chanters because the mantras make everyone else's damage look better on the logs. That is real, durable demand. When a group has exactly one support slot though, the KR/TW answer is the Cleric.</span></span></div>
  <div class="row"><span class="k">Timing flips it</span><span class="do">Healing demand is highest at launch, not lowest.<span class="why">The intuition that people will not need healing once they know the game has it backwards for the first weeks. Everyone is under-geared and learning, which is when a healer is most needed. The Cleric-favoured and Chanter-favoured eras are the Caveat row above: global favours the Cleric early and the Chanter later.</span></span></div>
  <div class="row"><span class="k">Chanter upside</span><span class="do">It is never a dead pick.<span class="why">“Chanters are more than fine” — and on global Power of the Storm is the stronger version of the Cleric's equivalent buff, which is a Chanter-only reason to bring one. You will not sit in a lobby unfilled. You are just slightly less likely to be the first priest picked.</span></span></div>

  <h2>What players actually say</h2>
  <div class="row"><span class="k">One slot</span><span class="do">Take the Cleric.<span class="why">Asked directly whether to bring Cleric or Chanter as a group’s only support, the KR/TW players in r/Aion2 were near-unanimous: “the support is definitive… it does not have the revive skill the Cleric has.” Another: “in every sanctuary 2× Cleric is borderline mandatory until you are overgeared or speedrunning.”</span></span></div>
  <div class="row"><span class="k">Second slot</span><span class="do">Chanters are wanted, not merely tolerated.<span class="why">“Chanters are more than fine.” “People will always invite you as a Chanter because it boosts their DPS — making them look good on the logs.” Buffs and personal damage both count.</span></span></div>
  <div class="row"><span class="k">Late game</span><span class="do">Some KR/TW veterans call the Chanter stronger.<span class="why">One who played both in Taiwan: at endgame “the Chanter will be far superior… it cannot heal as much, but its own DPS and the buffs make every content much easier.” Note that is a fully geared, seasons-ahead server.</span></span></div>
  <div class="row"><span class="k">Caveat</span><span class="do">KR/TW is seasons ahead of global.<span class="why">A pointed reply in that thread: those players have more skill points and gear, so their tiering may not map to global’s first months. Global players are newer and content is less trivial, which favours the Cleric early and the Chanter later.</span></span></div>
  <div class="row"><span class="k">Feel</span><span class="do">Cleric rotation is dull early. Chanter is busier.<span class="why">“Cleric rotation feels pretty crap early game.” Codex agrees the Cleric is not for players who want dynamic gameplay or to carry with damage. The Chanter needs constant weaving, which is engaging or tiring depending on you.</span></span></div>

  <h2>If you switch</h2>
  <div class="row"><span class="k">Keep</span><span class="do">The 1–45 route, Start, and At 45 all survive a switch.<span class="why">Phases 1–5 are MSQ and seal routing from the Failure Guild maps — no class in them. Prep and the At 45 checklist cover dungeons, Odyle, duties and weeklies, which are class-agnostic.</span></span></div>
  <div class="row"><span class="k">Redo</span><span class="do">Skills, Stats, Daevanion and the macro are Cleric-only.<span class="why">Every skill name, every specialty, the stigma set and the five-slot rotation would need rebuilding from the Chanter guide. Assume a full evening of work, not a tweak.</span></span></div>
  <div class="row"><span class="k">Ping</span><span class="do">Contested, and probably a non-issue now.<span class="why">The argument for the Cleric is that the Chanter lives on auto-attack weaving, which a bad connection punishes. But Madsin plays at 200 ping, clears all content day one, and says a network patch a few weeks ago made ping "significantly less of a deal" — up to 100–150 ping you lose some damage against a local player, and mostly it hurts dodging. DPS checks are not tight enough to plan around. Pick the class you want.</span></span></div>
  <div class="row"><span class="k">Crafting</span><span class="do">Chanter levels one craft, Cleric levels two.<span class="why">Staves come from Handicraft, and Handicraft is also where accessories come from — so a Chanter covers both weapon and jewellery with one profession. A Cleric's mace is Blacksmithing, so a Cleric levels Handicraft for accessories plus Blacksmithing for the weapon. Confirmed on Fextralife's crafting tables and ExpCarry's profession list, independently of Madsin, who flags the same split. Real early time saved, and it points the same way as the rest of this tab.</span></span></div>
  <div class="row"><span class="k">Later PvP</span><span class="do">Your occasional-PvP criterion counts for less than you think in weeks one and two.<span class="why">PvP is a deliberate skip for the first fortnight whichever class you play — open-world kills are worth about 300 AP against rankless players. The Chanter's small-scale identity only starts paying once that matters. It does not change the verdict, but do not pick Chanter <em>for</em> early PvP.</span></span></div>
  <div class="row"><span class="k">Solo</span><span class="do">Both clear solo content. Chanter clears it faster.<span class="why">r/Aion2 on the four support-ish classes: “all of those will never die in solo content unless you really try,” and “there is no relevant open-world / solo content you can’t clear with one hand off keyboard.” So this is a speed question, not a capability one. Codex puts the Cleric’s solo damage “well below Chanter’s.”</span></span></div>
  <div class="row"><span class="k">Farm</span><span class="do">Chanter, on speed.<span class="why">Higher personal damage plus AoE specialties (Wave Blow to AoE, Spinning Strike, Dark Crush) makes it the better mob-mower. Mingu recommends a specific AoE grind chain for it. The Cleric farms fine — it just takes longer per pack. Caveat: neither is documented as better at pet drops specifically. I found no class-based pet-farming data; pets cap at 3 for everyone.</span></span></div>
  <div class="row"><span class="k">Small PvP</span><span class="do">Chanter.<span class="why">Codex: Chanters act as “a lockdown class and duelist in PvP, singling out targets with melee and ranged damage.” The Cleric’s PvP role “shifts entirely to group survival” and it shines in large-scale fights where healing is the priority. For occasional or small-scale PvP, the Chanter has the self-sufficient kit.</span></span></div>
  <div class="row"><span class="k">Leveling</span><span class="do">Roughly even, with different friction.<span class="why">The 1–45 route on Phases 1–5 is MSQ and seals — class-agnostic. The Chanter kills faster but fights heavy early mana problems and must weave auto-attacks to sustain. The Cleric is safer and simpler but very immobile early and kills slower. Neither is a shortcut.</span></span></div>
  <div class="row"><span class="k">Your use case</span><span class="do">Solo, farming and occasional PvP — Chanter fits better.<span class="why">On those three criteria the Chanter wins: faster solo clears, better mob farming, and a real small-scale PvP identity. What you give up is the resurrection and the automatic raid slot. That trade only hurts if you plan to be the sole support in hard organized content — which is not what you described.</span></span></div>
  <div class="row"><span class="k">Verdict</span><span class="do">Group progression? Cleric. Solo and farm? Chanter.<span class="why">The Cleric’s edge is entirely structural: the only rez in the game, easier to play, and a guaranteed slot in serious groups. If your days are solo questing, farming and the occasional battleground, that edge buys you little and the Chanter’s damage and buffs buy you a lot.</span></span></div>

  <h2>Alts</h2>
  <div class="row"><span class="k">What they are for</span><span class="do">Banking resources in parallel, and the banking is class-independent.<span class="why">Odyle unlocks at 22 and Nightmare tickets at 45, and both are per character, so each alt starts filling its own tank the moment it reaches those levels. Any class banks the same amount, so the number of alts is what matters, not what they are.</span></span></div>
  <div class="row"><span class="k">Then roles only matter for playing them</span><span class="do">If you will actually run the alt in groups, the Cleric is the more in-demand priest.<span class="why">Same logic as Getting picked. If the alt is purely a resource farm you log in and out of, its class is irrelevant and you should pick whatever you will enjoy levelling.</span></span></div>
  <div class="row"><span class="k">Never together</span><span class="do">Do not run your Cleric and Chanter in the same group.<span class="why">Their buffs collide: Undefeated Mantra cancels Light of Protection, and Power of the Storm is blocked while Earth's Blessing is up. As two characters in two different groups they are fine — this only bites if you bring both to one party.</span></span></div>
  <div class="row"><span class="k">Cost of a priest alt</span><span class="do">Cheaper than it looks.<span class="why">The 1–45 route on Phases 1–5 is class-agnostic, so only the class tabs change — Skills, Stats, Daevanion and the macro. You already know the route, the seals and the Odyle budget.</span></span></div>
  <div class="row"><span class="k">Third class</span><span class="do">No grounded recommendation available.<span class="why">I have no data on which non-priest class is in demand on global, and launch populations will not be known until after the servers are up. Pick on what you want to play, and treat any “best alt class” claim you see this week as speculation.</span></span></div>
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
  <div class="row"><span class="k">How far</span><span class="do">22 is the cheap win. 45 is the expensive one.<span class="why">22 opens Odyle, which is per character and recharges 120 a day to an 840 cap. 45 opens Nightmare tickets (2/day, cap 14) and the five duties. An alt parked at 22 banks energy only; one pushed to 45 banks tickets and can run duties too. Decide per alt based on how much leveling time you actually have — the 22 stop is a fraction of the cost.</span></span></div>
  <div class="row"><span class="k">Alt roles</span><span class="do">Only matters if you will group on them.<span class="why">The banking above is class-independent, so a pure resource alt can be any class you enjoy. If you want the alt to be wanted in dungeons, the Cleric is the more in-demand priest. Full reasoning on Compare.</span></span></div>

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
  plan: {
    kicker: "A launch plan · one player, not a guide",
    now: "Item level is the real gate. Everything below feeds it.",
    html: `
<article class="cleric-block">
  <p class="kicker">Global · Madsin's route · read as a second opinion</p>
  <div class="row"><span class="k">Read this as</span><span class="do">One experienced player's plan, not a source of record.<span class="why">Madsin, 11 months on Taiwan/Korea, 1M+ combat power, playing from 200 ping. He says twice in the video that this is what <em>he</em> is doing because he wants to get back into a content routine, and that the game does not require any of it. Where his numbers are checkable I have checked them and flagged what disagreed.</span></span></div>
  <div class="row"><span class="k">His headline</span><span class="do">Do not minmax the fun out of it.<span class="why">His words: the game is about the journey, rushing and minmaxing "quite literally means nothing" because it is not required and not always rewarded. His own example — he made every mistake on Taiwan, skipped alts until season 2, and still cleared all content on day one.</span></span></div>

  <h2>Item level is the gate</h2>
  <p>His core correction to how most people think about week one. Not combat power, not class — item level is what unlocks content, and it comes from more places than gear alone.</p>
  <div class="row"><span class="k">Where it comes from</span><span class="do">Equipped gear, enhancement, manastones, Daevanion boards, Arcana cards.<span class="why">Every board level adds item level on top of the stats. That is why an item-level-only PvP board still matters even if you do not care about PvP.</span></span></div>
  <div class="row"><span class="k">1,400</span><span class="do">Vakron unlocks. You will be about 1,500 after exploration.<span class="why">Open the end box three times — 120 energy — for a guaranteed pick from the dungeon's loot table. Take the chest piece.</span></span></div>
  <div class="row"><span class="k">1,900</span><span class="do">Transcendence stage 2. This is the first thing you farm on the main.<span class="why">Guaranteed green Arcana cards, a chance at a chalice, and about 50% for blue cards. A green card is roughly 40 item level, so cards are the cheapest guaranteed gain available.</span></span></div>
  <div class="row"><span class="k">2,100</span><span class="do">Ferris's horn, then the exploration soul.<span class="why">Open three boxes there too, 120 energy, but hold the equipment pick — you claim it later based on what you got from conquest.</span></span></div>
  <div class="row"><span class="k">Then</span><span class="do">Nevakum Gulag for armor and a guard.<span class="why">Run it 28 times — 14 runs claiming two chests each — to complete the pity. The pity includes a ticket, and two tickets craft a guard. Guards are hard to get otherwise and crafting one costs as much as a weapon, so this is the cheap route to it.</span></span></div>
  <div class="row"><span class="k">Stage 4</span><span class="do">Back to Transcendence for gold cards.<span class="why">You do not need a full gear set to get there, only the item level. End goal of the whole chain is Sanctuary.</span></span></div>
  <div class="row"><span class="k">Short on ilvl</span><span class="do">Three levers: enhancement, better manastones, or the exploration dungeon.<span class="why">Each enhancement is one item level. Three runs of the exploration dungeon give a pick of item-level-62 gear. Higher-grade manastones roll better.</span></span></div>
  <div class="row"><span class="k">Don't</span><span class="do">Do not open boxes during MSQ dungeons.<span class="why">Those are the tutorial versions and the boxes hold trash. Save the energy. Same rule as the At 45 tab — and he is the second source to say it.</span></span></div>

  <h2>Crafting</h2>
  <div class="row"><span class="k">When</span><span class="do">AFK and overnight fuel. Not a daytime activity.<span class="why">Queue a batch and it runs back to back. Each craft gives a flat amount of XP for its level and that does not drop as you level, so you can spam the cheapest recipe indefinitely.</span></span></div>
  <div class="row"><span class="k">How</span><span class="do">Spam the level-1 recipe, which needs almost no materials.<span class="why">Buy the NPC ingredient and the white base off the auction house. You go to novice 50, do a short quest, and break into professional. His target: about professional 20 on level-1 ingredients, then blue ingredients to 25–30, then craft.</span></span></div>
  <div class="row"><span class="k">Which one</span><span class="do">Handicraft — it covers accessories <em>and</em> some weapons.<span class="why">Accessories are the first endgame piece you craft, so Handicraft is the one everyone levels. Maces, swords, daggers and shields are Blacksmithing. Sorcerer and Spiritmaster weapons are Alchemy.</span></span></div>
  <div class="row"><span class="k">Class matters here</span><span class="do">Chanter gets weapon and accessories from one craft. Cleric needs two.<span class="why">Staves come from Handicraft, maces from Blacksmithing — confirmed on Fextralife's crafting tables and ExpCarry's profession list, independent of Madsin. So a Chanter levels Handicraft and covers everything; a Cleric has to also level Blacksmithing for the mace. See Compare.</span></span></div>
  <div class="row"><span class="k">The base</span><span class="do">Crafting an endgame piece needs an artisan base, not just materials.<span class="why">Bases cascade: white can proc green, green into blue, blue into gold. He expects to buy the base off the auction house for about 4 million Kinah rather than gamble the whole chain, and to fall back to crafting it only if prices are worse than that.</span></span></div>
  <div class="row"><span class="k">Failed procs</span><span class="do">Do not vendor them.<span class="why">When the supply delivery lists them, other players buy them at a premium. Vending them at the start is a loss.</span></span></div>
  <div class="row"><span class="k">Order</span><span class="do">Neck, two earrings, two rings, then the weapon.<span class="why">Then upgrade the weapon first through transfer crafting: star dragon, splendid, dark dragon, ebony, and onward. Afterwards take the accessories up the same ladder.</span></span></div>

  <h2>Soul binds</h2>
  <div class="row"><span class="k">Not early</span><span class="do">He calls this the biggest early pitfall.<span class="why">Soul binds give no item level and season one is easy. They are a real endgame power system and a waste of Kinah in week one.</span></span></div>
  <div class="row"><span class="k">If you reroll anything</span><span class="do">Reroll only for game feel.<span class="why">Movement speed on boots and earrings. Combat speed on gloves, weapon, guard and necklace. Those make your character faster to play, which is worth more early than damage you do not need.</span></span></div>
  <div class="row"><span class="k">After the crafted weapon</span><span class="do">Spend soul codexes on the weapon first.<span class="why">Reroll until you have two usable stats or combat speed or a rare line like damage boost. Then do necklace and earrings for combat speed, movement speed and precision.</span></span></div>

  <h2>Where the currency goes</h2>
  <div class="row"><span class="k">Abyss Points</span><span class="do">Stigma shards. Nothing else.<span class="why">Stigma shards cost 10,000 AP on global and are the one purchase he will not skip — some classes do not function until specific skills are at specific levels. He is emphatic that PvP gear is a trap here: the Canis set is only item level 62 and costs more AP on global, so it is expensive temporary gear that does not help.</span></span></div>
  <div class="row"><span class="k">Nightmare tokens</span><span class="do">Stigma shards, but hold at least 14,000 back.<span class="why">You want the Zikel statue as early as you can buy it. Global puts stigma shards in this shop too.</span></span></div>
  <div class="row"><span class="k">Festival shop</span><span class="do">Daevanion crystal first, then stigma shards.<span class="why">Radiant Odil only if a craft is stalled waiting on it. Daevanion crystal is item level, so it outranks the rest early.</span></span></div>
  <div class="row"><span class="k">Season shop</span><span class="do">Buy the materials on an alt, keep the main's tokens for wings.<span class="why">Bound materials still transfer through server storage, and the Talisra wings — the season one base wings — are what your main's tokens are for.</span></span></div>
  <div class="row"><span class="k">Battle pass</span><span class="do">Take the Odyle pass on the main, and on alts if global allows.<span class="why">Energy is the scarcest thing in the first two weeks, so more of it on an alt is still worth it. He buys both passes and calls them cheap.</span></span></div>

  <h2>PvP, early</h2>
  <div class="row"><span class="k">Skip open world</span><span class="do">Waste of time in weeks one and two.<span class="why">Everyone you meet is rankless, so a kill is worth about 300 AP and a lot of walking. AP accumulates to a cap rather than expiring weekly, so you are not losing anything by waiting.</span></span></div>
  <div class="row"><span class="k">Do</span><span class="do">Only the time-sensitive PvP: sieges, world bosses, battlegrounds.<span class="why">Those pay medals and bonus AP, and you will want PvP gear eventually. You can also get uncapped AP without fighting players — supply requests, Shugo, duties and weekly contracts — and just showing up to a siege or a world boss and being in the fight feeds most of the weekly cap.</span></span></div>
  <div class="row"><span class="k">PvE first</span><span class="do">All character progression is gated behind PvE.<span class="why">PvP gear does not unlock PvE content, but PvE gear unlocks everything. His rule: be comfortable in PvE before considering PvP gear at all. Note this is from the region ahead — he says global PvP gear does not even appear to have PvP stats, so treat that part as open.</span></span></div>

  <h2>Weekly reset</h2>
  <div class="row"><span class="k">Contracts</span><span class="do">Buy the weekly contracts from the command merchants before the reset.<span class="why">They carry over to the following week, so buying them early is free progress. Available from 45.</span></span></div>
  <div class="row"><span class="k">Energy</span><span class="do">Claim all Odyle from substance morphing and the subscription shop before reset.<span class="why">Those reset weekly and do not carry. He describes it as about 20 double-claim dungeon runs. Energy is the one thing he says is king.</span></span></div>
  <div class="row"><span class="k">Run late</span><span class="do">Daily dungeon, Nightmare and Ascension Trial on the last day of the week.<span class="why">Rewards scale with your performance, and your performance improves all week. He does this on alts too, so their rewards are better when they feed the main. Independent agreement with the At 45 tab.</span></span></div>

  <h2>Deliberately skipped</h2>
  <div class="row"><span class="k">Pets and Genis</span><span class="do">Ignore at first. They give power, not item level.<span class="why">Petals arrive on their own from daily dungeons on your characters, so there is nothing to farm. On global he expects cube keys from two characters' monoliths to take every Genis to level 10 before you grind stats.</span></span></div>
  <div class="row"><span class="k">Gathering</span><span class="do">Not for fast progression — but it is how you make money.<span class="why">He will not touch it. If you are not racing, gathering pays: he and players like him will buy your materials off the auction house all season. Odil is the one to specialise in because everything morphs through it.</span></span></div>
  <div class="row"><span class="k">Auction house</span><span class="do">The real early money is selling to people who are racing.<span class="why">Gathered materials, artisan bases, and above all Kinah-to-token boxes sold on the world exchange — the premium-currency price is inflated early and deflates later, so selling high and buying back cheap is how a non-paying player funds the battle pass.</span></span></div>
  <div class="row"><span class="k">Open-world bosses</span><span class="do">Do them, but do not rush them.<span class="why">They are slow to kill early. Their boxes feed supply deliveries for AP, and that tab resets seasonally, so there is no weekly pressure.</span></span></div>
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
  <div class="row"><span class="k">Chanter</span><span class="do"><a href="https://mmo-codex.com/articles/aion-2-chanter-guide/" target="_blank" rel="noopener">Codex Chanter</a> · <a href="https://aion2hub.com/classes/chanter" target="_blank" rel="noopener">Hub Chanter</a> · <a href="https://game8.co/games/Aion-2/archives/612963" target="_blank" rel="noopener">Game8 Chanter</a><span class="why">Chanter and Compare tabs. Game8 is the independent one — it supplied the skill tooltips, the manastone priorities and the three cross-class conflicts. Also <a href="https://www.reddit.com/r/Aion2/comments/1wronmf/chanter_or_cleric/" target="_blank" rel="noopener">r/Aion2: Chanter or Cleric</a> for KR/TW player sentiment.</span></span></div>
  <div class="row"><span class="k">Chanter caveat</span><span class="do">Part of the Chanter build order leans on sources Codex aggregates.<span class="why">Codex cites aLuckyRO for the level-45 point allocation, the leveling specialty picks, the starter stigma set and the DPS macro. Those parts are single-creator and cannot be independently corroborated the way the Cleric's duty, Odyle and weekly facts were. Hagoo and Logon (Korean) cover the endgame targets, and Game8 and Hub cover mechanics and skills. The 1M+ CP build below now covers the same ground from a different, independent player — where the two agree, treat it as settled.</span></span></div>
  <div class="row"><span class="k">1M+ CP build</span><span class="do">The Chanter build from the same player who wrote the Cleric build above — a second opinion, not a source of record.<span class="why">Handed to Fallen Clocks as text plus two in-game screenshots (his skill hotbar and his in-game Macro window). The screenshots are direct evidence of what he actually runs; the numbers are his. He is at 1M+ combat power, which is why it is worth reading, but none of it is independently corroborated. It is the only source that states a concrete four-stigma set and a level-20 upgrade order, and it is where the Wave Blow → Dark Crush macro comes from. See the PvE build tab. On three points it overrides the Chanter rows above: Marchutan's Wrath is mandatory to him, on global Power of the Storm beats the Cleric's buff, and Fracturing Blow's swap for Power of the Storm is explicitly not valid on global.</span></span></div>
  <div class="row"><span class="k">Launch plan</span><span class="do"><a href="https://youtu.be/9r4nDbBxRxk" target="_blank" rel="noopener">Madsin — my progression plans for Global</a><span class="why">The Launch plan tab — its item-level ladder, crafting, currency and soul-bind sections all come from this. 55 minutes, 11 months on Taiwan/Korea, 1M+ combat power, from 200 ping. Transcript read in full. Where his numbers were checkable I checked them: the crafting split he describes is confirmed independently, his Shugo key figure is wrong and Fextralife's is on the page instead, and his two-skills-to-Lv.20 estimate is flagged against the build on the Chanter tab. He says plainly that this is his personal plan and not a requirement.</span></span></div>
  <div class="row"><span class="k">Shugo + crafting</span><span class="do"><a href="https://aion2.wiki.fextralife.com/Shugo_Festival" target="_blank" rel="noopener">Fextralife: Shugo Festival</a> · <a href="https://aion2.wiki.fextralife.com/Crafting" target="_blank" rel="noopener">Fextralife: Crafting tables</a> · <a href="https://expcarry.com/aion2-professions-guide" target="_blank" rel="noopener">ExpCarry professions</a><span class="why">Fextralife is where the Shugo key rates come from — 1 a day to a cap of 7 free, 4 a day to a cap of 28 subscribed — and its crafting tables are what confirm staves are Handicraft while maces are Blacksmithing. ExpCarry lists the same split per class.</span></span></div>
  <div class="row"><span class="k">Cleric macro</span><span class="do">The same player's updated in-game Macro window.<span class="why">A screenshot of the Macro panel rather than a write-up: slot 1 Earth Punishment (Lv.25), slot 2 Condemnation (Lv.20), both 10 ms, hold LMB alongside. It replaces the earlier Earth Punishment → Judgment Thunder pairing on Skills, and it comes with a condition — he frames it as the setup until he has good uptime on Earth Punishment, so it is interim.</span></span></div>
  <div class="row"><span class="k">Skill levels</span><span class="do"><a href="https://skycoach.gg/blog/aion-2/articles/aion-2-beginner-guide" target="_blank" rel="noopener">Skycoach beginner guide</a> · <a href="https://www.reddit.com/r/Aion2/comments/1pc32kj/level_16_skills/" target="_blank" rel="noopener">r/Aion2: Level 16 skills</a> · <a href="https://www.reddit.com/r/Aion2/comments/1pjqgml/how_to_get_20_skills/" target="_blank" rel="noopener">r/Aion2: how to get +20 skills</a><span class="why">Used to correct the level ceiling on both Skills tabs. Skill points stop at 10; the Daevanion board adds up to +4, so 14; gear and Arcana cards carry the rest, with players reporting +6. The threads confirm the breakdown and that +skill levels roll on gear of any rarity. Skycoach documents the 8/12/16 effect thresholds as Korea/Taiwan values, which is why they are flagged as unconfirmed for global.</span></span></div>
  <div class="row"><span class="k">Checklists</span><span class="do"><a href="https://mmo-codex.com/articles/aion-2-new-player-checklist/" target="_blank" rel="noopener">Codex new-player</a> · <a href="https://mmo-codex.com/articles/aion-2-daily-weekly-checklist/" target="_blank" rel="noopener">Codex daily/weekly</a> · <a href="https://mmo-codex.com/articles/aion-2-krao-cave-guide/" target="_blank" rel="noopener">Codex Krao / Draupnir</a></span></div>
  <div class="row"><span class="k">Series</span><span class="do"><a href="https://youtu.be/gUNOKxTKnYc" target="_blank" rel="noopener">1 Basics</a> · <a href="https://youtu.be/dYaLTeV5QX8" target="_blank" rel="noopener">2 Content</a> · <a href="https://youtu.be/fUeYz6b7eJ0" target="_blank" rel="noopener">3 Arcana</a> · <a href="https://youtu.be/Qo3EXzcSXeo" target="_blank" rel="noopener">4 Daevanion</a> · <a href="https://youtu.be/54voCuvNXmU" target="_blank" rel="noopener">5 Skills</a> · <a href="https://youtu.be/KMGmwHtH1hM" target="_blank" rel="noopener">Stats</a> · <a href="https://youtu.be/3Yn91qaBD5s" target="_blank" rel="noopener">7 Gear</a> · <a href="https://youtu.be/HMod6Z4GrE0" target="_blank" rel="noopener">8 Macros</a> · <a href="https://youtu.be/hAl6c_LwE3M" target="_blank" rel="noopener">10 Daily/weekly</a><span class="why">Grobs. Episode 10 is the source for the Daily and weekly and First week sections on At 45. Episodes 6 and 9 were not in the numbered intros I could hear. The mouse-software toggle from episode 8 is not on this page.</span></span></div>
  <div class="row"><span class="k">Community</span><span class="do">Cleric build pasted from a community Discord.<span class="why">No link and no author, but its author is reportedly at 1M+ combat power, so it now leads on Skills. RosaPony is kept as the alternate. Anything the community build does not cover still comes from the older sources. The same player later sent his Chanter build, which is on the Chanter PvE build tab.</span></span></div>
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

function classTabs(classKey) {
  const key = CLASSES[classKey] ? classKey : "cleric";
  return CLASSES[key].tabs || [];
}

function isClassTab(view, classKey) {
  return classTabs(classKey).indexOf(view) !== -1;
}

function pageFor(view, classKey) {
  const key = CLASSES[classKey] ? classKey : "cleric";
  if (isClassTab(view, key)) return CLASSES[key][view];
  return PAGES[view];
}
