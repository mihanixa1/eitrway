import './style.css';

// Mage-only Valheim build page
(function() {

function acc(icon, name, sub, content, open) {
    return `<div class="ac${open?' open':''}" onclick="this.classList.toggle('open')">
    <div class="ac-h"><span class="i">${icon}</span><span class="n">${name}${sub?` <span style="font-family:Inter;font-size:.75rem;color:var(--dim)">${sub}</span>`:''}</span><span class="t">▼</span></div>
    <div class="ac-b"><div class="ac-c">${content}</div></div></div>`;
}

function tbl(headers, rows) {
    let h = `<table><tr>${headers.map(x=>`<th>${x}</th>`).join('')}</tr>`;
    rows.forEach(r => { h += `<tr>${r.map((c,i)=>`<td${i===headers.length-1&&headers[i]==='Лор'?' class="lr"':''}>${c}</td>`).join('')}</tr>`; });
    return h + '</table>';
}

// ===== BUILD HTML =====
let html = '';

// Character header
html += `<div class="ch">
<div class="ico">🔮</div>
<h2>Сигрид Пеплоглазая</h2>
<div class="ttl">Провидица Одина</div>
<div class="qt">"Сталь — костыль для тех, кто не видит потоки эйтра. Настоящая сила — в заклинании."</div>
<div class="df">🔴 ПРЕСЕТ: СЛОЖНО</div>
</div>`;

// Hymn player
html += `<div class="hymn-player">
<div class="hymn-header">
<span class="hymn-icon">🎵</span>
<div class="hymn-info">
<div class="hymn-title">Sigrid Ash-Eyed</div>
<div class="hymn-sub">Гимн персонажа — Nordic Folk / Epic Hymn</div>
</div>
</div>
<audio id="hymn-audio" preload="metadata">
<source src="sigrid-hymn.wav" type="audio/wav">
Ваш браузер не поддерживает аудио.
</audio>
<div class="hymn-controls">
<button class="hymn-btn" id="hymn-play" onclick="toggleHymn()">▶</button>
<div class="hymn-progress-wrap" id="hymn-progress-wrap">
<div class="hymn-progress-bar">
<div class="hymn-progress-fill" id="hymn-fill"></div>
</div>
</div>
<span class="hymn-time" id="hymn-time">0:00 / 0:00</span>
<div class="hymn-vol-wrap">
<span class="hymn-vol-icon" onclick="toggleMute()">🔊</span>
<input type="range" class="hymn-vol" id="hymn-vol" min="0" max="1" step="0.05" value="0.7">
</div>
</div>
<div class="hymn-lyrics-toggle" onclick="document.getElementById('hymn-lyrics').classList.toggle('open')">
<span>📜 Текст гимна</span><span class="hymn-lyrics-arrow">▼</span>
</div>
<div class="hymn-lyrics" id="hymn-lyrics">
<p><em>[Intro — slow, atmospheric]</em></p>
<p>Eitr runs through my veins<br>Eitr burns through my chains</p>
<p><em>[Verse 1]</em></p>
<p>I am Sigrid, the Ash-Eyed seer<br>Born of runes and frozen fear<br>Odin tore me from the sky<br>Threw me down but I won't die</p>
<p><em>[Chorus]</em></p>
<p><strong>I am fire, I am frost<br>I am everything they lost<br>Staff of embers, staff of ice<br>Valheim pays the witch's price<br>I am fire, I am frost<br>Count the dead and count the cost</strong></p>
<p><em>[Verse 2]</em></p>
<p>Leather cloak and ritual blade<br>Through the Meadows, unafraid<br>My mana fades with every spell<br>Every fireball I send to Hel</p>
<p><em>[Bridge]</em></p>
<p>From the swamps where shadows creep<br>To the mountains, cold and steep<br>Clad in Fenris, born of night<br>I become the dark and I'm the light</p>
<p><em>[Outro — epic, triumphant]</em></p>
<p>Now the dead rise at my call<br>Eitr-woven, standing tall<br>Seven bosses, seven graves<br>Sigrid bows to none, she only slays</p>
<p><strong>I am Sigrid, Ash-Eyed<br>Völva of Valheim</strong></p>
</div>
</div>`;

// Description
html += `<div class="dsc">Сигрид — могущественная вёльва (колдунья), которую Один вырвал из Асгарда и забросил в Вальхейм. Она — <strong>опытный маг</strong> с прокачанными навыками и посохом в руках с первой минуты. Проблема: Вальхейм — мир грубой стали, а маг хрупок телом. Единственное оружие ближнего боя — ритуальный нож. Эйтр-еда конечна до Мистландс — каждый файербол на счету!</div>`;

// Backstory
html += `<div class="dsc" style="border-left:3px solid var(--gold);background:linear-gradient(135deg,var(--card),#1a1520)">
<h3 class="st g">📖 Изгнание из Асгарда</h3>
<p style="margin-bottom:12px">Сигрид Пеплоглазая была одной из сильнейших вёльв Асгарда — провидицей, читавшей потоки эйтра так же легко, как руны на камне. Когда Один узнал, что Отверженные — древние существа, изгнанные богами в десятый мир — набирают силу и грозят разорвать цепи Вальхейма, он созвал совет. Воинов в Вальхейм отправляли сотнями: берсерки, копейщики, мечники — все они гибли, не сумев одолеть семерых Отверженных. Одину нужен был не меч. Ему нужна была магия.</p>
<p style="margin-bottom:12px">Он явился к Сигрид в ночь зимнего солнцестояния. <em>«Вальхейм пожирает воинов, — сказал Всеотец, — но ни один из них не владел эйтром. Ты пойдёшь туда, вёльва. Я дам тебе посохи, выкованные в пламени Муспельхейма и холоде Нифльхейма, и запас маны — но он конечен. Когда эйтр иссякнет, тебе придётся выживать клинком и хитростью, пока не найдёшь источник силы в самом Вальхейме.»</em> Сигрид не просила этой судьбы — но вёльва не отказывает Одину. Валькирия подхватила её и сбросила в десятый мир, где камни помнят имена павших, а семь Отверженных ждут того, кто наконец принесёт им гибель.</p>
<div class="nt">🐦 Хугин, ворон Одина, следит за Сигрид из теней. Каждый поверженный босс — доклад Всеотцу. Каждый дар после победы — не милость, а инвестиция.</div>
</div>`;

// Rules
html += `<div class="section"><h3 class="st">📋 Правила</h3><div class="rg">`;
[
    [1,'✅ Посох — основное оружие','С первой минуты. Маг стреляет магией'],
    [1,'✅ Ножи разрешены','Единственное оружие ближнего боя'],
    [1,'✅ Лёгкая броня','Кожа, тролль, корневая, Фенрис, стёганая, эйтр'],
    [2,'💀 1 жизнь + 1 за босса','Старт: 1 жизнь. Каждый убитый босс = +1 доп. жизнь'],
    [0,'❌ Никаких мечей/копий','Мечи, копья, секиры, кувалды запрещены'],
    [0,'❌ Никаких луков','У мага есть посох — зачем лук?'],
    [0,'❌ Тяжёлая броня','Бронзовая, железная броня, и так далее — запрещены'],
    [0,'❌ Любые щиты','Маг не прячется за щитом']
].forEach(r => { const cls = r[0]===2?'sp':r[0]?'ok':'no'; html += `<div class="rc ${cls}"><b>${r[1]}</b><span>${r[2]}</span></div>`; });
html += `</div></div>`;

// DevCommands
html += `<div class="dev">
<h3>🧪 Стартовая настройка через DevCommands</h3>
<p>Маг — опытный. Прокачиваем навыки и выдаём посохи через консоль:</p>
<div class="lbl">Прокачка навыков:</div>
<div class="cmd">raiseskill ElementalMagic 50\nraiseskill BloodMagic 50\nraiseskill Run 40\nraiseskill Sneak 30\nraiseskill Knives 30\nraiseskill Dodge 30</div>
<div class="lbl">Стартовый лут:</div>
<div class="cmd">spawn StaffFireball 1\nspawn StaffIceShards 1\nspawn StaffShield 1\nspawn KnifeFlint 1\nspawn YggdrasilPorridge 30\nspawn MagicallyStuffedShroom 30\nspawn SeekerAspic 20</div>
<div class="nt">⚠️ Эйтр-еда КОНЕЧНА до Мистландс. Каждый файербол на счету!</div>
</div>`;

// Starter Kit
html += `<div class="kit"><h3>📦 Стартовый набор — Дары Одина</h3>`;
html += tbl(['Предмет','Кол-во','Лор'], [
    ['Staff of embers','1','Посох углей — пламя Муспельхейма'],
    ['Staff of frost','1','Посох мороза — дыхание Нифльхейма'],
    ['Staff of protection','1','Посох защиты — щит Асгарда'],
    ['Flint knife (3 ур.)','1','Ритуальный кинжал вёльвы'],
    ['Leather armor set','1','Зачарованные одежды'],
    ['Dverger circlet','1','Магический светильник'],
    ['Yggdrasil porridge','30','Жидкая мана'],
    ['Magically stuffed shroom','30','Концентрат маны'],
    ['Seeker aspic','20','Резерв маны'],
    ['Honey','50','Мёд Одина'],
    ['Cooked meat','50','Обычная еда'],
    ['Wood','200','На базу'],
    ['Surtling cores','15','Огонь Муспельхейма']
]);
html += `</div>`;

// Eras
html += `<div class="section"><h3 class="st">⚔️ Оружие по эрам</h3>`;

const eras = [
    {icon:'🪨',name:'Эра Камня → Эйктюр',open:true,items:[
        ['Основное','Staff of embers (огненные шары)'],['Второй посох','Staff of frost (ледяной контроль)'],
        ['Защита','Staff of protection (барьер)'],['Ближний бой','Flint knife (ритуальный кинжал)'],
        ['Броня','Leather armor set'],['Еда','Yggdrasil porridge + Magically stuffed shroom + Cooked meat']
    ],note:'Посох — единственное дальнобойное оружие. Нож можно использовать в любой момент.'},
    {icon:'🌲',name:'Эра Бронзы → Древний',items:[
        ['Основное','Staff of embers'],['Второй посох','Staff of frost'],
        ['Ближний бой','Bronze knife (Бронзовый нож)'],['Броня','Troll leather armor set (мантия невидимости)'],
        ['Еда','Yggdrasil porridge + Magically stuffed shroom + Queens jam']
    ],note:'Троллья броня — лёгкая, бонус к скрытности. Идеальна для мага: прячься, подкрадывайся, бей ножом в спину.'},
    {icon:'⚙️',name:'Эра Железа → Масса',items:[
        ['Основное','Staff of embers'],['Второй посох','Staff of frost'],
        ['Ближний бой','Abyssal razor (Бездонная бритва)'],['Броня','Root armor set (Корневая броня)'],
        ['Еда','Yggdrasil porridge + Magically stuffed shroom + Turnip stew']
    ],note:'⚠️ Эйтр-еда начинает заканчиваться! Root armor — первая «магическая» броня мага.'},
    {icon:'🏔️',name:'Эра Серебра → Моудер',items:[
        ['Основное','Staff of embers'],['Второй посох','Staff of frost'],
        ['Ближний бой','Silver knife (Серебряный нож)'],['Броня','Fenris armor set (Броня Фенрира)'],
        ['Еда','Yggdrasil porridge + Seeker aspic + Serpent stew']
    ],note:'Fenris armor — ПОВОРОТНЫЙ МОМЕНТ. Выглядит как тёмный маг, даёт бонус к скорости.'},
    {icon:'🌑',name:'Эра Чёрного Металла → Яглут',items:[
        ['Основное','Staff of embers'],['Второй посох','Staff of frost'],
        ['Ближний бой','Blackmetal knife (Нож чёрного металла)'],['Броня','Padded armor set (зачарованная ткань)'],
        ['Еда','Остатки эйтр-еды + Blood pudding + Lox meat pie']
    ],note:'⚠️ КРИЗИС МАНЫ. Эйтр-еда почти закончилась. Файерболы — только для серьёзных врагов. Нож в руки!'},
    {icon:'🌿',name:'Мистландс → Королева — ВОЗРОЖДЕНИЕ СИЛЫ',items:[
        ['Основное','Staff of embers (улучшенный!)'],['Второй','Staff of frost (улучшенный!)'],
        ['Третий','Dead raiser (призыв скелета!)'],['Защита','Staff of protection (улучшенный!)'],
        ['Ближний бой','Нож из панциря сикера'],['Броня','Eitr-weave armor set'],
        ['Плащ','Feather cape (крылья вёльвы)'],['Еда','Yggdrasil porridge + Magically stuffed shroom + Seeker aspic']
    ],note:'МАНА ВЕРНУЛАСЬ. Маг крафтит эйтр-еду сам. Бесконечная мана. Огонь, лёд, скелеты — ПОЛНАЯ СИЛА.'},
    {icon:'🌋',name:'Эшландс → Фадер — ПЛАМЯ МУСПЕЛЬХЕЙМА',items:[
        ['Основное','Staff of embers (улучшенный макс.)'],['Второй','Staff of frost (улучшенный макс.)'],
        ['Третий','Dead raiser (улучшенный!)'],['Защита','Staff of protection (улучшенный макс.)'],
        ['Ближний бой','Flametal knife (Нож из пламенного металла)'],['Броня','Eitr-weave armor set (улучшенная макс.)'],
        ['Плащ','Feather cape / Asksvin cape'],['Еда','Yggdrasil porridge + Magically stuffed shroom + Roasted crust']
    ],note:'ПИКОВАЯ СИЛА МАГА. Пламенный металл — вершина крафта. Все посохи на максимальном уровне.'}
];

eras.forEach(era => {
    let c = tbl(['Слот','Предмет'], era.items);
    if (era.note) c += `<div class="nt">${era.note}</div>`;
    html += acc(era.icon, era.name, null, c, era.open);
});
html += `</div>`;

// Boss Rewards
html += `<div class="section"><h3 class="st">🏆 Награды за боссов</h3>`;

const bosses = [
    {icon:'💀',name:'Эйктюр',sub:'1-й босс',
     quote:'Олень сгорел в пламени посоха. Один впечатлён.',
     loot:[['Yggdrasil porridge','10'],['Troll hides','30'],['Surtling cores','15'],['Fine wood','50']],
     bonus:'<strong>3 портала</strong> — вёльва знает тайны пространства'},
    {icon:'🌳',name:'Древний',sub:'2-й босс',
     quote:'Древний дух рассыпался в пепел. Болота открывают тайны.',
     loot:[['Magically stuffed shroom','15'],['Iron ingots','60'],['Root armor set (полный)','1'],['Chitin','30']],
     bonus:'<strong>Abyssal razor</strong> (3 ур.) — клинок из глубин бездны'},
    {icon:'💧',name:'Масса',sub:'3-й босс',
     quote:'Гниль заморожена посохом мороза. Горы ждут.',
     loot:[['Seeker aspic','10'],['Silver ingots','150'],['Fenris hair','15'],['Wolf pelts','20'],['Frost resistance mead','50']],
     bonus:'<strong>Fenris armor set</strong> (полный, 1 ур.) — броня тёмного мага'},
    {icon:'🐉',name:'Моудер',sub:'4-й босс',
     quote:'Дракон рухнул под градом ледяных осколков.',
     loot:[['Black metal ingots','80'],['Linen thread','80'],['Barley flour','60'],['Needle','40']],
     bonus:'<strong>Телепортация металлов</strong> + ещё 2 портала (итого 5)'},
    {icon:'👑',name:'Яглут — ВЕЛИКОЕ ВОСПОЛНЕНИЕ',sub:'5-й босс',
     quote:'Пятый Forsaken пал. Один возвращает вёльве полную силу.',
     loot:[['Refined eitr','50'],['Sap','50'],['Black cores','15'],['Soft tissue','40'],['Royal jelly','30'],['Dead raiser (посох)','1'],['Feather cape','1'],['Eitr-weave armor set','1']],
     bonus:'<strong>Неограниченные порталы</strong> + крафт эйтр-еды = бесконечная мана + <strong>Eitr-weave armor</strong>'},
    {icon:'👸',name:'Королева',sub:'6-й босс',
     quote:'Королева пала. Туманы Мистландс рассеялись. Впереди — пепел.',
     loot:[['Flametal ore','60'],['Ashwood','80'],['Morgen sinew','40'],['Asksvin hide','20']],
     bonus:'<strong>Flametal knife</strong> — путь в Эшландс открыт'},
    {icon:'🌋',name:'Фадер — ПОВЕЛИТЕЛЬ ПЕПЛА',sub:'7-й босс',
     quote:'Пламя Муспельхейма покорено. Вёльва сильнее всех миров. Один склоняет голову.',
     loot:[],
     bonus:'Сигрид возвращается в Асгард. <strong>Стрим окончен.</strong> 🔮'}
];

bosses.forEach(boss => {
    let c = `<div class="bq">"${boss.quote}"</div>`;
    if (boss.loot.length) c += tbl(['Награда','Кол-во'], boss.loot);
    c += `<div class="bn"><strong>Бонус:</strong> ${boss.bonus}</div>`;
    html += acc(boss.icon, boss.name, boss.sub, c, false);
});
html += `</div>`;

// ===== DEEP LORE =====
html += `<div class="lore-section">
<h3 class="st g">📜 Глубокий лор Сигрид Пеплоглазой</h3>

<div class="lore-block">
<div class="lore-chapter">
<div class="lore-chapter-icon">⚡</div>
<h4 class="lore-title">Сигрид и Тор: Битва у Врат Хельхейма</h4>
</div>
<div class="lore-text">
<p>Задолго до изгнания в Вальхейм, Сигрид сражалась бок о бок с Тором — и это не было случайностью. Когда мёртвые армии Хель прорвали Врата Хельхейма и хлынули в Мидгард, Один послал Тора остановить вторжение. Но Громовержец, привыкший крушить великанов молотом, оказался бессилен: мертвецы не чувствовали боли, а каждый поверженный воин поднимался вновь. Мьёльнир мог разбить кости, но не мог разорвать нити некромантии, связывавшие павших с волей Хель.</p>

<p>Один знал, что нужна вёльва. Он вызвал Сигрид — тогда ещё молодую провидицу, но уже владевшую потоками эйтра лучше любого мага Асгарда. <em>«Тор — мой молот, — сказал Всеотец. — Но молот бесполезен, если враг встаёт после каждого удара. Ты будешь его щитом и его огнём. Сожги нити мёртвых.»</em></p>

<p>Битва длилась три дня. Тор крушил ряды нежити Мьёльниром, а Сигрид стояла за его спиной, выжигая посохом углей некромантические связи. Каждый мертвец, которого Тор разбивал в прах, Сигрид запечатывала огнём — чтобы тот не поднялся снова. Они двигались как единое целое: удар молота — вспышка пламени, ледяной шквал — раскат грома. Воины Асгарда, наблюдавшие битву со стен, говорили, что никогда не видели такой связки — бог грома и смертная вёльва, сражающиеся как два клинка одного меча.</p>

<p>На третий день Сигрид совершила то, что не мог сделать даже Тор: она прошла сквозь ряды мертвецов, используя посох мороза, чтобы заморозить их на месте, добралась до самих Врат и <strong>запечатала их руной Иса</strong>, вплетённой в поток чистого эйтра. Врата захлопнулись. Армия мёртвых рассыпалась в прах.</p>

<p>Тор, не привыкший благодарить смертных, молча положил руку ей на плечо. Это было больше, чем любые слова Громовержца. С того дня он называл её <strong>«Пеплоглазая»</strong> — потому что после трёх дней непрерывного колдовства её глаза стали серыми, как пепел, и уже никогда не вернули прежний цвет. Это имя стало её титулом — знаком того, что она отдала часть себя ради победы.</p>

<div class="nt">⚡ Именно после битвы у Врат Хельхейма Один понял, что магия может победить там, где бессильна сталь — и запомнил это. Когда Отверженные Вальхейма начали набирать силу, он знал, кого послать.</div>
</div>
</div>

<div class="lore-divider">✦ ✦ ✦</div>

<div class="lore-block">
<div class="lore-chapter">
<div class="lore-chapter-icon">💀</div>
<h4 class="lore-title">Дар Одина: +1 жизнь за каждую победу</h4>
</div>
<div class="lore-text">
<p>Когда Один отправлял Сигрид в Вальхейм, он знал: десятый мир пожирает героев. Сотни берсерков, копейщиков и мечников уже погибли там, и ни один не вернулся. Вёльва была его последней ставкой — и Всеотец не мог позволить себе потерять её так же бездарно, как остальных.</p>

<p>Но у Одина есть правило: <em>он не дарит силу просто так</em>. Каждый дар — это сделка. Каждая милость — инвестиция.</p>

<h5 class="lore-subtitle">🔮 Механика: Нить Судьбы</h5>

<p>Перед изгнанием Один вплёл в душу Сигрид <strong>Нить Судьбы (Örlagaþráðr)</strong> — тончайшую руническую связь между вёльвой и Иггдрасилем, Мировым Древом. Эта нить работает как якорь: пока она цела, душа Сигрид привязана к Вальхейму и не может уйти в Хельхейм после смерти.</p>

<p>Но Нить Судьбы хрупка. В момент изгнания она выдерживает лишь <strong>одну смерть</strong> — одно воскрешение. Если Сигрид погибнет, Нить вытянет её душу обратно из тьмы и восстановит тело из эйтра Иггдрасиля. Но после этого Нить истончится и порвётся. Вторая смерть будет окончательной.</p>

<h5 class="lore-subtitle">⚔️ Почему +1 жизнь за босса?</h5>

<p>Каждый Отверженный (Forsaken) — это древнее существо, изгнанное богами в Вальхейм и заключённое в цепи. Когда Сигрид убивает Отверженного, происходит нечто важное: <strong>цепи, сковывавшие босса, высвобождают колоссальный поток эйтра</strong>. Этот эйтр течёт через Иггдрасиль — и Один, сидящий на троне Хлидскьяльв, перехватывает часть этой энергии.</p>

<p>Всеотец использует захваченный эйтр, чтобы <strong>вплести в Нить Судьбы Сигрид ещё одну петлю</strong> — дополнительный якорь, способный выдержать ещё одну смерть. Каждый убитый босс = ещё одна петля = ещё одна жизнь.</p>

<table>
<tr><th>Босс</th><th>Жизни после победы</th><th>Лор</th></tr>
<tr><td>Старт</td><td>1 жизнь</td><td class="lr">Изначальная Нить Судьбы — одна петля</td></tr>
<tr><td>💀 Эйктюр</td><td>2 жизни</td><td class="lr">Эйтр оленя укрепляет Нить</td></tr>
<tr><td>🌳 Древний</td><td>3 жизни</td><td class="lr">Древняя сила леса вплетена в якорь</td></tr>
<tr><td>💧 Масса</td><td>4 жизни</td><td class="lr">Гниль очищена, Нить крепнет</td></tr>
<tr><td>🐉 Моудер</td><td>5 жизней</td><td class="lr">Драконий эйтр — мощнейшая петля</td></tr>
<tr><td>👑 Яглут</td><td>6 жизней</td><td class="lr">Пламя Яглута закаляет Нить</td></tr>
<tr><td>👸 Королева</td><td>7 жизней</td><td class="lr">Нить пропитана силой Мистландс</td></tr>
<tr><td>🌋 Фадер</td><td>—</td><td class="lr">Все Отверженные пали. Сигрид свободна.</td></tr>
</table>

<h5 class="lore-subtitle">🪶 Как работает воскрешение?</h5>

<p>Когда Сигрид погибает, происходит следующее:</p>

<div class="lore-steps">
<div class="lore-step"><span class="lore-step-num">1</span><span class="lore-step-text"><strong>Хугин кричит.</strong> Ворон Одина, постоянно следящий за Сигрид из теней, издаёт пронзительный крик, который слышен по всему Вальхейму. Это сигнал Всеотцу.</span></div>
<div class="lore-step"><span class="lore-step-num">2</span><span class="lore-step-text"><strong>Нить натягивается.</strong> Душа Сигрид начинает скользить в Хельхейм, но Нить Судьбы удерживает её, как рыболовный крючок. Одна из петель начинает светиться золотым светом.</span></div>
<div class="lore-step"><span class="lore-step-num">3</span><span class="lore-step-text"><strong>Один произносит руну.</strong> Сидя на Хлидскьяльв, Всеотец активирует петлю. Эйтр Иггдрасиля устремляется по Нити к месту гибели Сигрид.</span></div>
<div class="lore-step"><span class="lore-step-num">4</span><span class="lore-step-text"><strong>Тело восстанавливается.</strong> Из потока эйтра формируется новое тело вёльвы — точная копия прежнего, со всеми знаниями и навыками. Процесс занимает несколько мгновений, но для Сигрид это ощущается как падение сквозь ледяную бездну.</span></div>
<div class="lore-step"><span class="lore-step-num">5</span><span class="lore-step-text"><strong>Петля сгорает.</strong> Использованная петля Нити рассыпается в пепел. Одной жизнью меньше. Хугин молча возвращается в тень.</span></div>
</div>

<div class="nt">💀 <strong>Если все петли израсходованы</strong> — Нить Судьбы обрывается. Душа Сигрид уходит в Хельхейм навсегда. Один теряет свою вёльву. Вальхейм остаётся непокорённым. <strong>Стрим окончен — Game Over.</strong></div>

<div class="lore-quote-block">
<div class="lore-quote-icon">🐦</div>
<div class="lore-quote-text"><em>«Хугин видит всё. Каждую смерть, каждое воскрешение. Он не жалеет Сигрид — он считает. Один считает вместе с ним. Когда петли закончатся, ворон просто улетит. И тьма поглотит вёльву навсегда.»</em><br><span class="lore-quote-attr">— Мунин, второй ворон Одина</span></div>
</div>
</div>
</div>

</div>`;

// Closing
html += `<div style="text-align:center;padding:20px;font-style:italic;color:var(--dim);font-size:.9rem">Эйтр течёт в моих венах. Пламя — в моих руках. Вальхейм — мой полигон. 🔮</div>`;

document.getElementById('app').innerHTML = html;

})();

// ===== HYMN PLAYER =====
function toggleHymn() {
    const audio = document.getElementById('hymn-audio');
    const btn = document.getElementById('hymn-play');
    if (audio.paused) {
        audio.play();
        btn.textContent = '⏸';
    } else {
        audio.pause();
        btn.textContent = '▶';
    }
}

function toggleMute() {
    const audio = document.getElementById('hymn-audio');
    const icon = document.querySelector('.hymn-vol-icon');
    const vol = document.getElementById('hymn-vol');
    if (audio.muted) {
        audio.muted = false;
        icon.textContent = '🔊';
        vol.value = audio.volume;
    } else {
        audio.muted = true;
        icon.textContent = '🔇';
        vol.value = 0;
    }
}

function fmtTime(s) {
    if (isNaN(s)) return '0:00';
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return m + ':' + (sec < 10 ? '0' : '') + sec;
}

document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('hymn-audio');
    const fill = document.getElementById('hymn-fill');
    const timeEl = document.getElementById('hymn-time');
    const vol = document.getElementById('hymn-vol');
    const progressWrap = document.getElementById('hymn-progress-wrap');
    const btn = document.getElementById('hymn-play');

    if (!audio) return;

    audio.volume = 0.7;

    audio.addEventListener('timeupdate', function() {
        const pct = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;
        fill.style.width = pct + '%';
        timeEl.textContent = fmtTime(audio.currentTime) + ' / ' + fmtTime(audio.duration);
    });

    audio.addEventListener('ended', function() {
        btn.textContent = '▶';
        fill.style.width = '0%';
    });

    vol.addEventListener('input', function() {
        audio.volume = this.value;
        audio.muted = false;
        document.querySelector('.hymn-vol-icon').textContent = this.value == 0 ? '🔇' : '🔊';
    });

    progressWrap.addEventListener('click', function(e) {
        if (!audio.duration) return;
        const rect = this.getBoundingClientRect();
        const pct = (e.clientX - rect.left) / rect.width;
        audio.currentTime = pct * audio.duration;
    });
});
