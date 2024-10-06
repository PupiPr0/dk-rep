(function() {
    const script = document.currentScript;

    // Функция для создания iframe
    function createIframe(src, width, height, border) {
        const iframe = document.createElement('iframe');
        iframe.src = src;
        iframe.style.width = width;
        iframe.style.height = height;
        iframe.style.border = border;
        iframe.setAttribute('scrolling', 'no');
        iframe.setAttribute('marginheight', '0');
        iframe.setAttribute('marginwidth', '0');
        return iframe;
    }

    // Обработка виджета
    const widgetName = script.getAttribute('dkon-widget');
    if (widgetName) {
        const iframe = createIframe(`https://dkon.app/dev/generate.widget.community?group=${widgetName}`, '350px', '400px', '0px #ffffff none');
        document.body.appendChild(iframe);
    }

    // Обработка поста
    const postData = script.getAttribute('data-dkon-post');
    if (postData) {
        const width = script.getAttribute('data-width') || '100%';
        const height = script.getAttribute('data-height') || '500px'; 
        const [name, id] = postData.split('/');

        const widgetContainer = document.createElement('div');
        widgetContainer.style.width = width;
        widgetContainer.style.height = height; 
        widgetContainer.style.overflow = 'hidden'; 

        const iframe = createIframe(`https://dkon.app/${name}/post/${id}/embed_widget`, '100%', '100%', 'none');
        widgetContainer.appendChild(iframe);

        script.parentNode.insertBefore(widgetContainer, script);
    }
})();
