 const DEFAULT_COVER = "https://filecloud-48-ars-cont-st.dkon.app/wp-cont/cloud48/dkon.app_15a1555479c20d53_DKon.app_9dg3ce5151.jpg";
    const API = "https://front-music-api.dkon.app/?query=";
    const LANG_PATH = "https://res.dkon.app/music_player/lang/";

    let tracks = [], currentIndex = -1;
    let lang = "en"; 
    let t = {};     

    const audio = document.getElementById('audio');
    const playlistEl = document.getElementById('playlist');
    const searchInput = document.getElementById('music-search');
    const fixedPlayer = document.getElementById('fixed-player');

    const playPauseBtn = document.getElementById('play-pause-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const progressFill = document.getElementById('progress-fill');
    const currentTimeEl = document.getElementById('current-time');
    const durationEl = document.getElementById('duration');
    const volumeSlider = document.getElementById('volume');

    const fixedCover = document.getElementById('fixed-cover');
    const fixedTitle = document.getElementById('fixed-title');
    const fixedArtist = document.getElementById('fixed-artist');

    const trackElements = new Map();

/*
    function detectLanguage() {
        const userLang = (navigator.language || navigator.userLanguage || "en").toLowerCase();
        if (userLang.startsWith("ru")) return "ru";
        if (userLang.startsWith("pl")) return "pl";
        if (userLang.startsWith("id")) return "id";
        return "en";
    }
    */

function detectLanguage() {
    const userLang = (navigator.language || navigator.userLanguage || "en").toLowerCase();

    if (userLang.startsWith("ru")) return "ru";
    if (userLang.startsWith("pl")) return "pl";
    if (userLang.startsWith("id")) return "id";
    if (userLang.startsWith("zh")) return "zh";      
    if (userLang.startsWith("fa")) return "fa";      
    if (userLang.startsWith("hi")) return "hi";      
    if (userLang.startsWith("ko")) return "ko";      
    if (userLang.startsWith("tl") || userLang.includes("fil")) return "tl"; 
    if (userLang.startsWith("tr")) return "tr";      
    if (userLang.startsWith("uk")) return "uk";      
    if (userLang.startsWith("en")) return "en";      

    return "en";
}

    async function loadLanguage(code) {
        try {
            const res = await fetch(LANG_PATH + code + ".json");
            if (res.ok) {
                t = await res.json();
                lang = code;
            } else {
                throw new Error();
            }
        } catch (e) {
            const res = await fetch(LANG_PATH + "en.json");
            t = res.ok ? await res.json() : {
                title: "DKON Music",
                search_placeholder: "Search by title or artist...",
                nothing_found: "Nothing found",
                unknown_artist: "Unknown artist"
            };
            lang = "en";
        }
        applyTranslations();
    }

    function applyTranslations() {
        searchInput.placeholder = t.search_placeholder || "Search by title or artist...";
    }

    async function loadTracks(query = "") {
        try {
            const res = await fetch(API + encodeURIComponent(query));
            const data = await res.json();

            tracks = data
                .map(t => ({
                    ...t,
                    cover_url: t.cover_url?.trim() ? t.cover_url : DEFAULT_COVER
                }))
                .sort((a, b) => (b.id || 0) - (a.id || 0)); // от большего к меньшему

            render();
            if (currentIndex === -1 && tracks.length) play(0);
        } catch (e) {
            playlistEl.innerHTML = `<div class="text-center py-5 text-muted">${t.nothing_found || "Nothing found"}</div>`;
        }
    }

    function render() {
        if (!tracks.length) {
            playlistEl.innerHTML = `<div class="text-center py-5 text-muted">${t.nothing_found || "Nothing found"}</div>`;
            return;
        }

        tracks.forEach((track, i) => {
            let el = trackElements.get(i);
            if (!el) {
                el = document.createElement('div');
                el.className = 'track-item';
                el.innerHTML = `
                    <img src="${DEFAULT_COVER}" alt="cover">
                    <div style="flex:1; min-width:0;">
                        <div class="track-title">${track.title}</div>
                        <div class="track-artist">${track.artist || t.unknown_artist || 'Unknown artist'}</div>
                    </div>
                `;
                el.onclick = () => play(i);
                playlistEl.appendChild(el);
                trackElements.set(i, el);
            }
            el.querySelector('img').src = track.cover_url;
            el.querySelector('.track-title').textContent = track.title;
            el.querySelector('.track-artist').textContent = track.artist || (t.unknown_artist || 'Unknown artist');
            el.classList.toggle('playing', i === currentIndex);
        });

        for (let i = tracks.length; i < trackElements.size; i++) {
            trackElements.get(i)?.remove();
            trackElements.delete(i);
        }
    }

    function play(i) {
        if (i < 0 || i >= tracks.length) return;
        currentIndex = i;
        const track = tracks[i];

        audio.src = track.url;
        fixedCover.src = track.cover_url;
        fixedTitle.textContent = track.title;
        fixedArtist.textContent = track.artist || (t.unknown_artist || 'Unknown artist');

        audio.play().then(() => {
            playPauseBtn.innerHTML = '<i class="fa fa-pause fa-lg"></i>';
            fixedPlayer.style.display = 'block';
            render();
        });
    }

    function toggle() {
        if (audio.paused) {
            audio.play();
            playPauseBtn.innerHTML = '<i class="fa fa-pause fa-lg"></i>';
        } else {
            audio.pause();
            playPauseBtn.innerHTML = '<i class="fa fa-play fa-lg"></i>';
        }
    }

    function format(s) {
        const m = Math.floor(s / 60);
        const sec = Math.floor(s % 60);
        return `${m}:${sec.toString().padStart(2,'0')}`;
    }

    audio.addEventListener('timeupdate', () => {
        if (audio.duration) {
            const percent = (audio.currentTime / audio.duration) * 100;
            progressFill.style.width = percent + '%';
            currentTimeEl.textContent = format(audio.currentTime);
        }
    });
    audio.addEventListener('loadedmetadata', () => durationEl.textContent = format(audio.duration || 0));
    audio.addEventListener('ended', () => play((currentIndex + 1) % tracks.length));

    progressFill.parentElement.onclick = e => {
        const rect = e.currentTarget.getBoundingClientRect();
        const pos = (e.clientX - rect.left) / rect.width;
        audio.currentTime = pos * audio.duration;
    };

    playPauseBtn.onclick = toggle;
    prevBtn.onclick = () => play((currentIndex - 1 + tracks.length) % tracks.length);
    nextBtn.onclick = () => play((currentIndex + 1) % tracks.length);
    volumeSlider.oninput = () => audio.volume = volumeSlider.value / 100;

    let timer;
    searchInput.oninput = () => {
        clearTimeout(timer);
        timer = setTimeout(() => loadTracks(searchInput.value.trim()), 400);
    };

    (async () => {
        const detected = detectLanguage();
        await loadLanguage(detected);
        loadTracks();
    })();
