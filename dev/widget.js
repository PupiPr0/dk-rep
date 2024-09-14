(function() {
    const script = document.currentScript;

    const postData = script.getAttribute('data-dkon-post');
    const width = script.getAttribute('data-width') || '100%';
    const height = script.getAttribute('data-height') || '500px'; 

    const [name, id] = postData.split('/');

    const widgetContainer = document.createElement('div');
    widgetContainer.style.width = width;
    widgetContainer.style.height = height; 
    widgetContainer.style.overflow = 'hidden'; 

    const iframe = document.createElement('iframe');
    iframe.src = `https://dkon.app/${name}/post/${id}/embed_widget`;
    iframe.style.width = '100%';
    iframe.style.height = '100%'; 
    iframe.style.border = 'none';
    
    iframe.setAttribute('scrolling', 'no');
    iframe.setAttribute('marginheight', '0');
    iframe.setAttribute('marginwidth', '0');

    widgetContainer.appendChild(iframe);

    script.parentNode.insertBefore(widgetContainer, script);
})();
