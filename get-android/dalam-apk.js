const container = document.querySelector('.screenshot-container');

let scrollAmount = 0;

//const scrollStep = 1; 
const scrollStep = 2; 


function autoScroll() {
    if (scrollAmount < container.scrollWidth - container.clientWidth) {
        container.scrollBy(scrollStep, 0);
        scrollAmount += scrollStep;
    } else {
        scrollAmount = 0; 
        container.scrollTo(0, 0); 
    }
}

//setInterval(autoScroll, 50);
setInterval(autoScroll, 100); 
