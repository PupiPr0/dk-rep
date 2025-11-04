(function() {
    const script = document.currentScript;

    function createIframe(src, width, height, border, id) {
        const iframe = document.createElement('iframe');
        iframe.src = src;
        iframe.style.width = width;
        iframe.style.height = height;
        iframe.style.border = border;
        iframe.setAttribute('scrolling', 'no');
        iframe.setAttribute('marginheight', '0');
        iframe.setAttribute('marginwidth', '0');
        iframe.setAttribute('allow', 'fullscreen');
        iframe.setAttribute('allowfullscreen', '');
        if (id) {
            iframe.id = id;  
        }
        return iframe;
    }

    function appendColorParam(url, color) {
        if (color === null) return url;          
        if (color === '') return url;            
        return url + (url.indexOf('?') === -1 ? '?' : '&') + 'color=' + encodeURIComponent(color);
    }

    const widgetName = script.getAttribute('dkon-widget');
    if (widgetName) {
        const src = `https://dkon.app/dev/generate.widget.community?group=${encodeURIComponent(widgetName)}`;
        const iframe = createIframe(src, '350px', '366px', '0px #ffffff none');
        script.parentNode.insertBefore(iframe, script);
    }

    const postData = script.getAttribute('data-dkon-post');
    if (postData) {
        const width = script.getAttribute('data-width') || '100%';
        const height = script.getAttribute('data-height') || '500px';
        const colorAttr = script.getAttribute('data-dkon-color'); 
        const parts = postData.split('/');
        const name = parts[0] || '';
        const id = parts[1] || '';

        const widgetContainer = document.createElement('div');
        widgetContainer.style.width = width;
        widgetContainer.style.height = height;
        widgetContainer.style.overflow = 'hidden';

        let src = `https://dkon.app/${encodeURIComponent(name)}/post/${encodeURIComponent(id)}/embed_widget`;
        src = appendColorParam(src, colorAttr);

        const DKonDate = Math.floor(Date.now() / 1000); 
        const uniqueId = `DKon.app-${name}-${id}-${DKonDate}`; 
        const iframe = createIframe(src, '100%', '100%', 'none', uniqueId);
        widgetContainer.appendChild(iframe);

        script.parentNode.insertBefore(widgetContainer, script);
    }
})();
