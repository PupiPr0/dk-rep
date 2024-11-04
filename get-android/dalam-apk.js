/*const container = document.querySelector('.screenshot-container');

let scrollAmount = 0;
const scrollStep = 1; 


function autoScroll() {
    if (scrollAmount < container.scrollWidth - container.clientWidth) {
        container.scrollBy(scrollStep, 0);
        scrollAmount += scrollStep;
    } else {
        scrollAmount = 0; 
        container.scrollTo(0, 0); 
    }
}
setInterval(autoScroll, 50);
*/
const container = document.querySelector('.screenshot-container');
const images = document.querySelectorAll('.screenshot');

let scrollAmount = 0;
const scrollStep = 2; 
let imagesLoaded = 0;

function autoScroll() {
    if (scrollAmount < container.scrollWidth - container.clientWidth) {
        container.scrollBy(scrollStep, 0);
        scrollAmount += scrollStep;
    } else {
        scrollAmount = 0; 
        container.scrollTo(0, 0); 
    }
}

images.forEach((img) => {
    img.onload = () => {
        imagesLoaded++;
        if (imagesLoaded === images.length) {
            setInterval(autoScroll, 100); // Запускаем авто-прокрутку
        }
    };
    
    img.onerror = () => {
        console.error(`Ошибка загрузки изображения: ${img.src}`);
    };
});

images.forEach((img) => {
    if (img.complete) {
        imagesLoaded++;
    }
});
