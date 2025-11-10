// Perbaiki tautan di komentar. 10 11 2025
function makeLinksClickable() {
            const mediaContent = document.querySelectorAll('.media-content');

            mediaContent.forEach(element => {
                const html = element.innerHTML;
                const regex = /https?:\/\/[^\s]+/g; 
                const newHtml = html.replace(regex, (url) => `<a href="https://dkon.app/go/?to=${url}" target="_blank" rel="nofollow">${url}</a>`);
                element.innerHTML = newHtml;
            });
        }
        makeLinksClickable();
