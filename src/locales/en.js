export default {
  lang: 'en',
  htmlLang: 'en',

  // Meta
  meta: {
    title: "Valheim Mage Challenge — Sigrid Ash-Eyed | Staff-Only Build Guide",
    description: "Hardcore mage challenge for Valheim: Sigrid Ash-Eyed — Odin's völva. Staves and knives only, no steel. Full build guide, gear progression, boss rewards, and deep Norse lore.",
    ogLocale: 'en_US',
    twitterTitle: "Valheim Mage Challenge — Sigrid Ash-Eyed | Staff-Only Build",
    twitterDescription: "Hardcore mage challenge for Valheim: staves and knives only, no steel. Full build guide, boss rewards, and deep Norse lore.",
  },

  // Hero & Footer
  heroTitle: "Odin's Mage Sigrid — Valheim",
  footer: 'Valheim Mage Challenge 🔮 <a href="https://t.me/eitrway" target="_blank" rel="noopener noreferrer" class="tg-link">✈ Telegram</a>',

  // Character header
  charName: 'Sigrid Ash-Eyed',
  charTitle: "Odin's Seeress",
  charQuote: '"Steel is a crutch for those blind to the eitr flow. True power lies in the spell."',
  charDifficulty: '🔴 PRESET: HARD MODE',

  // Hymn player
  hymnTitle: 'Sigrid Ash-Eyed',
  hymnSub: 'Character Anthem — Nordic Folk / Epic Hymn',
  hymnAudioFallback: 'Your browser does not support audio.',
  hymnLyricsToggle: '📜 Lyrics',

  // Description
  description: "Sigrid is a powerful völva (sorceress) torn from Asgard by Odin and cast into Valheim. She's a <strong>seasoned mage</strong> — maxed skills, staff in hand from minute one. The catch: Valheim is a world of brute steel, and mages are fragile. Her only melee weapon is a ritual knife. Eitr food is finite until Mistlands — every fireball counts!",

  // Backstory
  backstoryTitle: '📖 Banished from Asgard',
  backstoryP1: "Sigrid Ash-Eyed was among the most powerful völvas of Asgard — a seeress who read eitr currents as easily as runes on stone. When Odin learned that the Forsaken — ancient beings banished by the gods into the tenth world — were growing stronger and threatening to break Valheim's chains, he called a council. Warriors had been sent to Valheim by the hundreds: berserkers, spearmen, swordsmen — all perished, unable to defeat the seven Forsaken. Odin didn't need another sword. He needed magic.",
  backstoryP2: 'He came to Sigrid on the night of the winter solstice. <em>"Valheim devours warriors," said the Allfather, "but none of them wielded eitr. You will go there, völva. I will give you staves forged in the flames of Muspelheim and the cold of Niflheim, and a reserve of mana — but it is finite. When the eitr runs dry, you must survive by blade and cunning until you find a source of power within Valheim itself."</em> Sigrid never asked for this fate — but a völva does not refuse Odin. A Valkyrie seized her and hurled her into the tenth world, where stones remember the names of the fallen, and seven Forsaken await the one who will finally bring them death.',
  backstoryNote: "🐦 Huginn, Odin's raven, watches Sigrid from the shadows. Every slain boss is a report to the Allfather. Every gift after victory is not mercy — it's an investment.",

  // Rules
  rulesTitle: '📋 Rules',
  rules: [
    [1, '✅ Staff is your primary weapon', 'From the very start. Mages cast, not swing'],
    [1, '✅ Knives allowed', 'The only permitted melee weapon'],
    [1, '✅ Light armor only', 'Leather, troll, root, Fenris, padded, eitr-weave'],
    [2, '💀 1 life + 1 per boss kill', 'Start with 1 life. Each boss killed = +1 extra life'],
    [0, '❌ No swords / spears', 'Swords, spears, axes, sledgehammers — all banned'],
    [0, '❌ No bows', "You have a staff — why would you need a bow?"],
    [0, '❌ No heavy armor', 'Bronze, iron armor, etc. — forbidden'],
    [0, '❌ No shields', "A mage doesn't hide behind a shield"],
  ],

  // DevCommands
  devTitle: '🧪 Starting Setup via DevCommands',
  devDesc: "She's a veteran mage. Boost skills and spawn staves via console:",
  devSkillsLabel: 'Skill boost:',
  devLootLabel: 'Starting gear:',
  devNote: '⚠️ Eitr food is FINITE until Mistlands. Every fireball counts!',

  // Starter Kit
  kitTitle: "📦 Starter Kit — Odin's Gifts",
  kitHeaders: ['Item', 'Qty', 'Lore'],
  kitItems: [
    ['Staff of embers', '1', 'Ember staff — flame of Muspelheim'],
    ['Staff of frost', '1', 'Frost staff — breath of Niflheim'],
    ['Staff of protection', '1', "Protection staff — Asgard's ward"],
    ['Flint knife (lvl 3)', '1', "Völva's ritual dagger"],
    ['Leather armor set', '1', 'Enchanted robes'],
    ['Dverger circlet', '1', 'Arcane headlamp'],
    ['Yggdrasil porridge', '30', 'Liquid mana'],
    ['Magically stuffed shroom', '30', 'Concentrated mana'],
    ['Seeker aspic', '20', 'Mana reserve'],
    ['Honey', '50', "Odin's mead"],
    ['Cooked meat', '50', 'Basic food'],
    ['Wood', '200', 'For the base'],
    ['Surtling cores', '15', 'Fire of Muspelheim'],
  ],

  // Eras
  erasTitle: '⚔️ Gear Progression',
  erasSlotHeader: 'Slot',
  erasItemHeader: 'Item',
  eras: [
    {
      icon: '🪨', name: 'Stone Age → Eikthyr', open: true,
      items: [
        ['Primary', 'Staff of embers (fireballs)'], ['Secondary staff', 'Staff of frost (crowd control)'],
        ['Defense', 'Staff of protection (barrier)'], ['Melee', 'Flint knife (ritual dagger)'],
        ['Armor', 'Leather armor set'], ['Food', 'Yggdrasil porridge + Magically stuffed shroom + Cooked meat'],
      ],
      note: 'Staff is your only ranged weapon. Knife can be used any time for backstabs.',
    },
    {
      icon: '🌲', name: 'Bronze Age → The Elder',
      items: [
        ['Primary', 'Staff of embers'], ['Secondary staff', 'Staff of frost'],
        ['Melee', 'Bronze knife'], ['Armor', 'Troll leather armor set (stealth cloak)'],
        ['Food', 'Yggdrasil porridge + Magically stuffed shroom + Queens jam'],
      ],
      note: 'Troll armor — lightweight with a sneak bonus. Perfect for a mage: hide, creep, backstab.',
    },
    {
      icon: '⚙️', name: 'Iron Age → Bonemass',
      items: [
        ['Primary', 'Staff of embers'], ['Secondary staff', 'Staff of frost'],
        ['Melee', 'Abyssal razor'], ['Armor', 'Root armor set'],
        ['Food', 'Yggdrasil porridge + Magically stuffed shroom + Turnip stew'],
      ],
      note: "⚠️ Eitr food is running low! Root armor — the mage's first \"magical\" armor set.",
    },
    {
      icon: '🏔️', name: 'Silver Age → Moder',
      items: [
        ['Primary', 'Staff of embers'], ['Secondary staff', 'Staff of frost'],
        ['Melee', 'Silver knife'], ['Armor', 'Fenris armor set'],
        ['Food', 'Yggdrasil porridge + Seeker aspic + Serpent stew'],
      ],
      note: 'Fenris armor — THE TURNING POINT. Dark mage aesthetic + speed bonus.',
    },
    {
      icon: '🌑', name: 'Black Metal Age → Yagluth',
      items: [
        ['Primary', 'Staff of embers'], ['Secondary staff', 'Staff of frost'],
        ['Melee', 'Blackmetal knife'], ['Armor', 'Padded armor set (enchanted cloth)'],
        ['Food', 'Remaining eitr food + Blood pudding + Lox meat pie'],
      ],
      note: "⚠️ MANA CRISIS. Eitr food is almost gone. Fireballs for serious threats only. Time to knife!",
    },
    {
      icon: '🌿', name: 'Mistlands → The Queen — POWER REBORN',
      items: [
        ['Primary', 'Staff of embers (upgraded!)'], ['Secondary', 'Staff of frost (upgraded!)'],
        ['Third', 'Dead raiser (skeleton summon!)'], ['Defense', 'Staff of protection (upgraded!)'],
        ['Melee', 'Seeker shell knife'], ['Armor', 'Eitr-weave armor set'],
        ['Cape', 'Feather cape (wings of the völva)'], ['Food', 'Yggdrasil porridge + Magically stuffed shroom + Seeker aspic'],
      ],
      note: 'MANA IS BACK. Craft your own eitr food. Infinite mana. Fire, ice, skeletons — FULL POWER.',
    },
    {
      icon: '🌋', name: 'Ashlands → Fader — FLAME OF MUSPELHEIM',
      items: [
        ['Primary', 'Staff of embers (max upgrade)'], ['Secondary', 'Staff of frost (max upgrade)'],
        ['Third', 'Dead raiser (upgraded!)'], ['Defense', 'Staff of protection (max upgrade)'],
        ['Melee', 'Flametal knife'], ['Armor', 'Eitr-weave armor set (max upgrade)'],
        ['Cape', 'Feather cape / Asksvin cape'], ['Food', 'Yggdrasil porridge + Magically stuffed shroom + Roasted crust'],
      ],
      note: 'PEAK MAGE POWER. Flametal — the pinnacle of crafting. All staves maxed out.',
    },
  ],

  // Boss Rewards
  bossTitle: '🏆 Boss Rewards',
  bossRewardHeader: 'Reward',
  bossQtyHeader: 'Qty',
  bossBonusLabel: 'Bonus:',
  bosses: [
    {
      icon: '💀', name: 'Eikthyr', sub: 'Boss #1',
      quote: "The stag burned in the staff's flame. Odin is impressed.",
      loot: [['Yggdrasil porridge', '10'], ['Troll hides', '30'], ['Surtling cores', '15'], ['Fine wood', '50']],
      bonus: '<strong>3 portals</strong> — the völva knows the secrets of space',
    },
    {
      icon: '🌳', name: 'The Elder', sub: 'Boss #2',
      quote: 'The ancient spirit crumbled to ash. The swamps reveal their secrets.',
      loot: [['Magically stuffed shroom', '15'], ['Iron ingots', '60'], ['Root armor set (full)', '1'], ['Chitin', '30']],
      bonus: '<strong>Abyssal razor</strong> (lvl 3) — a blade from the depths of the abyss',
    },
    {
      icon: '💧', name: 'Bonemass', sub: 'Boss #3',
      quote: 'The rot was frozen by the frost staff. The mountains await.',
      loot: [['Seeker aspic', '10'], ['Silver ingots', '150'], ['Fenris hair', '15'], ['Wolf pelts', '20'], ['Frost resistance mead', '50']],
      bonus: "<strong>Fenris armor set</strong> (full, lvl 1) — the dark mage's armor",
    },
    {
      icon: '🐉', name: 'Moder', sub: 'Boss #4',
      quote: 'The dragon fell under a hail of ice shards.',
      loot: [['Black metal ingots', '80'], ['Linen thread', '80'], ['Barley flour', '60'], ['Needle', '40']],
      bonus: '<strong>Metal teleportation</strong> + 2 more portals (5 total)',
    },
    {
      icon: '👑', name: 'Yagluth — THE GREAT RESTORATION', sub: 'Boss #5',
      quote: "The fifth Forsaken has fallen. Odin restores the völva's full power.",
      loot: [['Refined eitr', '50'], ['Sap', '50'], ['Black cores', '15'], ['Soft tissue', '40'], ['Royal jelly', '30'], ['Dead raiser (staff)', '1'], ['Feather cape', '1'], ['Eitr-weave armor set', '1']],
      bonus: '<strong>Unlimited portals</strong> + eitr food crafting = infinite mana + <strong>Eitr-weave armor</strong>',
    },
    {
      icon: '👸', name: 'The Queen', sub: 'Boss #6',
      quote: 'The Queen has fallen. The mists of Mistlands have cleared. Ash lies ahead.',
      loot: [['Flametal ore', '60'], ['Ashwood', '80'], ['Morgen sinew', '40'], ['Asksvin hide', '20']],
      bonus: '<strong>Flametal knife</strong> — the path to Ashlands is open',
    },
    {
      icon: '🌋', name: 'Fader — LORD OF ASH', sub: 'Boss #7',
      quote: "The flame of Muspelheim is conquered. The völva stands above all worlds. Odin bows his head.",
      loot: [],
      bonus: 'Sigrid returns to Asgard. <strong>Stream over.</strong> 🔮',
    },
  ],

  // Deep Lore
  loreTitle: '📜 The Deep Lore of Sigrid Ash-Eyed',

  loreThorTitle: 'Sigrid & Thor: The Battle at the Gates of Helheim',
  loreThorIcon: '⚡',
  loreThorP1: "Long before her exile to Valheim, Sigrid fought alongside Thor — and it was no accident. When the dead armies of Hel breached the Gates of Helheim and poured into Midgard, Odin sent Thor to stop the invasion. But the Thunderer, accustomed to crushing giants with his hammer, found himself powerless: the dead felt no pain, and every fallen warrior rose again. Mjölnir could shatter bones, but it couldn't sever the threads of necromancy binding the fallen to Hel's will.",
  loreThorP2: 'Odin knew he needed a völva. He summoned Sigrid — still young then, but already more attuned to eitr currents than any mage in Asgard. <em>"Thor is my hammer," said the Allfather. "But a hammer is useless when the enemy rises after every blow. You will be his shield and his fire. Burn the threads of the dead."</em>',
  loreThorP3: "The battle raged for three days. Thor smashed through ranks of undead with Mjölnir while Sigrid stood at his back, burning away necromantic bonds with the staff of embers. Every corpse Thor shattered, Sigrid sealed with fire — so it would never rise again. They moved as one: hammer strike — flash of flame, ice blast — crack of thunder. The warriors of Asgard watching from the walls said they'd never seen such a pairing — the god of thunder and a mortal völva, fighting like two edges of the same blade.",
  loreThorP4: 'On the third day, Sigrid did what even Thor could not: she pushed through the ranks of the dead, using the frost staff to freeze them in place, reached the Gates themselves, and <strong>sealed them with the rune Isa</strong>, woven into a stream of pure eitr. The Gates slammed shut. The army of the dead crumbled to dust.',
  loreThorP5: 'Thor, not one to thank mortals, silently placed his hand on her shoulder. It meant more than any words the Thunderer could speak. From that day on, he called her <strong>"Ash-Eyed"</strong> — because after three days of unbroken spellcasting, her eyes had turned grey as ash and never regained their color. The name became her title — a mark of what she sacrificed for victory.',
  loreThorNote: '⚡ It was after the Battle at the Gates of Helheim that Odin realized magic could prevail where steel could not — and he remembered. When the Forsaken of Valheim began to grow in power, he knew exactly who to send.',

  loreFateTitle: "Odin's Gift: +1 Life per Victory",
  loreFateIcon: '💀',
  loreFateP1: "When Odin sent Sigrid to Valheim, he knew: the tenth world devours heroes. Hundreds of berserkers, spearmen, and swordsmen had already perished there, and none returned. The völva was his last gambit — and the Allfather couldn't afford to lose her as carelessly as the rest.",
  loreFateP2: "But Odin has a rule: <em>he never gives power for free</em>. Every gift is a deal. Every mercy is an investment.",

  loreFateMechanicTitle: '🔮 Mechanic: The Thread of Fate',
  loreFateMechanicP1: "Before the exile, Odin wove into Sigrid's soul the <strong>Thread of Fate (Örlagaþráðr)</strong> — a gossamer runic bond between the völva and Yggdrasil, the World Tree. This thread acts as an anchor: as long as it holds, Sigrid's soul is bound to Valheim and cannot pass into Helheim upon death.",
  loreFateMechanicP2: "But the Thread of Fate is fragile. At the moment of exile, it can withstand only <strong>one death</strong> — one resurrection. If Sigrid falls, the Thread will pull her soul back from the darkness and restore her body from Yggdrasil's eitr. But afterward, the Thread will fray and snap. The second death would be final.",

  loreFateWhyTitle: '⚔️ Why +1 Life per Boss?',
  loreFateWhyP1: "Each Forsaken is an ancient being banished by the gods into Valheim and bound in chains. When Sigrid slays a Forsaken, something crucial happens: <strong>the chains that held the boss release a massive surge of eitr</strong>. This eitr flows through Yggdrasil — and Odin, seated on his throne Hlidskjalf, intercepts a portion of that energy.",
  loreFateWhyP2: "The Allfather uses the captured eitr to <strong>weave another loop into Sigrid's Thread of Fate</strong> — an additional anchor capable of withstanding one more death. Each boss killed = another loop = another life.",

  loreFateTableHeaders: ['Boss', 'Lives After Victory', 'Lore'],
  loreFateTableRows: [
    ['Start', '1 life', 'The original Thread of Fate — a single loop'],
    ['💀 Eikthyr', '2 lives', "The stag's eitr strengthens the Thread"],
    ['🌳 The Elder', '3 lives', 'Ancient forest power woven into the anchor'],
    ['💧 Bonemass', '4 lives', 'The rot is purified, the Thread grows stronger'],
    ['🐉 Moder', '5 lives', "Dragon eitr — the mightiest loop"],
    ['👑 Yagluth', '6 lives', "Yagluth's flame tempers the Thread"],
    ['👸 The Queen', '7 lives', 'The Thread is infused with Mistlands power'],
    ['🌋 Fader', '—', 'All Forsaken have fallen. Sigrid is free.'],
  ],

  loreFateResTitle: '🪶 How Resurrection Works',
  loreFateResIntro: 'When Sigrid dies, the following occurs:',
  loreFateResSteps: [
    "<strong>Huginn screams.</strong> Odin's raven, ever watching Sigrid from the shadows, lets out a piercing cry heard across all of Valheim. It's the signal to the Allfather.",
    '<strong>The Thread pulls taut.</strong> Sigrid\'s soul begins to slip toward Helheim, but the Thread of Fate holds it back like a fishhook. One of the loops begins to glow with golden light.',
    "<strong>Odin speaks the rune.</strong> Seated on Hlidskjalf, the Allfather activates the loop. Yggdrasil's eitr surges along the Thread to the place of Sigrid's death.",
    '<strong>The body is restored.</strong> From the eitr flow, a new body forms for the völva — an exact copy of the old one, with all knowledge and skills intact. The process takes mere moments, but for Sigrid it feels like falling through an icy void.',
    '<strong>The loop burns away.</strong> The spent loop of the Thread crumbles to ash. One fewer life. Huginn silently returns to the shadows.',
  ],
  loreFateResNote: "💀 <strong>If all loops are spent</strong> — the Thread of Fate snaps. Sigrid's soul passes into Helheim forever. Odin loses his völva. Valheim remains unconquered. <strong>Stream over — Game Over.</strong>",
  loreFateResQuote: '"Huginn sees everything. Every death, every resurrection. He does not pity Sigrid — he counts. Odin counts with him. When the loops run out, the raven will simply fly away. And darkness will swallow the völva forever."',
  loreFateResQuoteAttr: "— Muninn, Odin's second raven",

  // Closing
  closing: 'Eitr flows through my veins. Flame rests in my hands. Valheim is my proving ground. 🔮',
};
