import './style.css';
import ru from './locales/ru.js';
import en from './locales/en.js';

const locales = { ru, en };

function getStoredLang() {
    try { return localStorage.getItem('vhlm-lang'); } catch { return null; }
}

function detectLang() {
    const stored = getStoredLang();
    if (stored && locales[stored]) return stored;
    const nav = (navigator.language || '').slice(0, 2).toLowerCase();
    return nav === 'ru' ? 'ru' : 'en';
}

let currentLang = detectLang();

function setLang(lang) {
    currentLang = lang;
    try { localStorage.setItem('vhlm-lang', lang); } catch {}
    render();
}

// Expose for onclick in HTML
window.setLang = setLang;
window.toggleHymn = toggleHymn;
window.toggleMute = toggleMute;

function acc(icon, name, sub, content, open) {
    return `<div class="ac${open?' open':''}" onclick="this.classList.toggle('open')">
    <div class="ac-h"><span class="i">${icon}</span><span class="n">${name}${sub?` <span style="font-family:Inter;font-size:.75rem;color:var(--dim)">${sub}</span>`:''}</span><span class="t">▼</span></div>
    <div class="ac-b"><div class="ac-c">${content}</div></div></div>`;
}

function tbl(headers, rows) {
    let h = `<table><tr>${headers.map(x=>`<th>${x}</th>`).join('')}</tr>`;
    const loreIdx = headers.indexOf('Лор') !== -1 ? headers.indexOf('Лор') : headers.indexOf('Lore');
    rows.forEach(r => { h += `<tr>${r.map((c,i)=>`<td${i===loreIdx&&loreIdx!==-1?' class="lr"':''}>${c}</td>`).join('')}</tr>`; });
    return h + '</table>';
}

function render() {
    const t = locales[currentLang];

    // Update html lang
    document.documentElement.lang = t.htmlLang;

    // Update meta
    document.title = t.meta.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = t.meta.description;
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = t.meta.title;
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.content = t.meta.description;
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.content = t.meta.ogLocale;
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.content = t.meta.twitterTitle;
    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.content = t.meta.twitterDescription;

    // Update hero & footer
    document.querySelector('.hero h1').textContent = t.heroTitle;
    document.querySelector('.footer').innerHTML = t.footer;

    // Update lang switcher active state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });

    // ===== BUILD HTML =====
    let html = '';

    // Character header
    html += `<div class="ch">
<div class="ico">🔮</div>
<h2>${t.charName}</h2>
<div class="ttl">${t.charTitle}</div>
<div class="qt">${t.charQuote}</div>
<div class="df">${t.charDifficulty}</div>
</div>`;

    // Hymn player
    html += `<div class="hymn-player">
<div class="hymn-header">
<span class="hymn-icon">🎵</span>
<div class="hymn-info">
<div class="hymn-title">${t.hymnTitle}</div>
<div class="hymn-sub">${t.hymnSub}</div>
</div>
</div>
<audio id="hymn-audio" preload="metadata">
<source src="sigrid-hymn.wav" type="audio/wav">
${t.hymnAudioFallback}
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
<span>${t.hymnLyricsToggle}</span><span class="hymn-lyrics-arrow">▼</span>
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
    html += `<div class="dsc">${t.description}</div>`;

    // Backstory
    html += `<div class="dsc" style="border-left:3px solid var(--gold);background:linear-gradient(135deg,var(--card),#1a1520)">
<h3 class="st g">${t.backstoryTitle}</h3>
<p style="margin-bottom:12px">${t.backstoryP1}</p>
<p style="margin-bottom:12px">${t.backstoryP2}</p>
<div class="nt">${t.backstoryNote}</div>
</div>`;

    // Rules
    html += `<div class="section"><h3 class="st">${t.rulesTitle}</h3><div class="rg">`;
    t.rules.forEach(r => { const cls = r[0]===2?'sp':r[0]?'ok':'no'; html += `<div class="rc ${cls}"><b>${r[1]}</b><span>${r[2]}</span></div>`; });
    html += `</div></div>`;

    // DevCommands
    html += `<div class="dev">
<h3>${t.devTitle}</h3>
<p>${t.devDesc}</p>
<div class="lbl">${t.devSkillsLabel}</div>
<div class="cmd">raiseskill ElementalMagic 50\nraiseskill BloodMagic 50\nraiseskill Run 40\nraiseskill Sneak 30\nraiseskill Knives 30\nraiseskill Dodge 30</div>
<div class="lbl">${t.devLootLabel}</div>
<div class="cmd">spawn StaffFireball 1\nspawn StaffIceShards 1\nspawn StaffShield 1\nspawn KnifeFlint 1\nspawn HelmetDverger 1\nspawn ArmorLeatherChest 1\nspawn ArmorLeatherLegs 1\nspawn HelmetLeather 1\nspawn CapeDeerHide 1\nspawn YggdrasilPorridge 30\nspawn MagicallyStuffedShroom 30\nspawn SeekerAspic 20\nspawn Honey 50\nspawn CookedMeat 50\nspawn Wood 200\nspawn SurtlingCore 15</div>
<div class="nt">${t.devNote}</div>
</div>`;

    // Starter Kit
    html += `<div class="kit"><h3>${t.kitTitle}</h3>`;
    html += tbl(t.kitHeaders, t.kitItems);
    html += `</div>`;

    // Eras
    html += `<div class="section"><h3 class="st">${t.erasTitle}</h3>`;
    t.eras.forEach(era => {
        let c = tbl([t.erasSlotHeader, t.erasItemHeader], era.items);
        if (era.note) c += `<div class="nt">${era.note}</div>`;
        html += acc(era.icon, era.name, null, c, era.open);
    });
    html += `</div>`;

    // Boss Rewards
    html += `<div class="section"><h3 class="st">${t.bossTitle}</h3>`;
    t.bosses.forEach(boss => {
        let c = `<div class="bq">"${boss.quote}"</div>`;
        if (boss.loot.length) c += tbl([t.bossRewardHeader, t.bossQtyHeader], boss.loot);
        c += `<div class="bn"><strong>${t.bossBonusLabel}</strong> ${boss.bonus}</div>`;
        html += acc(boss.icon, boss.name, boss.sub, c, false);
    });
    html += `</div>`;

    // ===== DEEP LORE =====
    html += `<div class="lore-section">
<h3 class="st g">${t.loreTitle}</h3>

<div class="lore-block">
<div class="lore-chapter">
<div class="lore-chapter-icon">${t.loreThorIcon}</div>
<h4 class="lore-title">${t.loreThorTitle}</h4>
</div>
<div class="lore-text">
<p>${t.loreThorP1}</p>
<p>${t.loreThorP2}</p>
<p>${t.loreThorP3}</p>
<p>${t.loreThorP4}</p>
<p>${t.loreThorP5}</p>
<div class="nt">${t.loreThorNote}</div>
</div>
</div>

<div class="lore-divider">✦ ✦ ✦</div>

<div class="lore-block">
<div class="lore-chapter">
<div class="lore-chapter-icon">${t.loreFateIcon}</div>
<h4 class="lore-title">${t.loreFateTitle}</h4>
</div>
<div class="lore-text">
<p>${t.loreFateP1}</p>
<p>${t.loreFateP2}</p>

<h5 class="lore-subtitle">${t.loreFateMechanicTitle}</h5>
<p>${t.loreFateMechanicP1}</p>
<p>${t.loreFateMechanicP2}</p>

<h5 class="lore-subtitle">${t.loreFateWhyTitle}</h5>
<p>${t.loreFateWhyP1}</p>
<p>${t.loreFateWhyP2}</p>

${tbl(t.loreFateTableHeaders, t.loreFateTableRows)}

<h5 class="lore-subtitle">${t.loreFateResTitle}</h5>
<p>${t.loreFateResIntro}</p>

<div class="lore-steps">
${t.loreFateResSteps.map((step, i) => `<div class="lore-step"><span class="lore-step-num">${i+1}</span><span class="lore-step-text">${step}</span></div>`).join('')}
</div>

<div class="nt">${t.loreFateResNote}</div>

<div class="lore-quote-block">
<div class="lore-quote-icon">🐦</div>
<div class="lore-quote-text"><em>${t.loreFateResQuote}</em><br><span class="lore-quote-attr">${t.loreFateResQuoteAttr}</span></div>
</div>
</div>
</div>

</div>`;

    // Closing
    html += `<div style="text-align:center;padding:20px;font-style:italic;color:var(--dim);font-size:.9rem">${t.closing}</div>`;

    document.getElementById('app').innerHTML = html;

    // Re-bind audio player after re-render
    bindAudioPlayer();
}

// ===== HYMN PLAYER =====
function toggleHymn() {
    const audio = document.getElementById('hymn-audio');
    const btn = document.getElementById('hymn-play');
    if (!audio) return;
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
    if (!audio) return;
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

function bindAudioPlayer() {
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
}

// Initial render
render();
