  function makeLinksClickable() {
        const mediaContent = document.querySelectorAll('.media-content');
            mediaContent.forEach(element => {
                const html = element.innerHTML;
                const regex = /https?:\/\/[^\s]+/g; 
                const newHtml = html.replace(regex, (url) => {
                    const DKonUrl = btoa(url); 
                    return `<a href="https://dkon.app/go?hash=${DKonUrl}" target="_blank" rel="nofollow">${url}</a>`;
                });
                element.innerHTML = newHtml;
            });
  }
makeLinksClickable();
