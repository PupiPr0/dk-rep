const container = document.querySelector('.screenshot-container');

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
