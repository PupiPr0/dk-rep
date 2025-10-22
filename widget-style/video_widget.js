document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    
    if (urlParams.has('DKonVideo')) {
        const videoType = urlParams.get('DKonVideo');
        let cssLink = '';

        if (videoType === 'embed') {
            cssLink = 'https://res.dkon.app/widget-style/video-1.css';
        } else if (videoType === 'embednologo') {
            cssLink = 'https://res.dkon.app/widget-style/video-v2.css';
        }

        if (cssLink) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = cssLink;
            document.head.appendChild(link);
        }
    }
});
