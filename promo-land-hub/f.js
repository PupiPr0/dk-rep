//f.js footer
const currentDomain = window.location.hostname;

if (currentDomain === 'ukropenweb.github.io' || currentDomain === 'ukrop11enweb.github.io') {
    window.location.href = 'https://dkon.app/?ref';
}


const newImageUrls = [
            "https://res.dkon.app/img/apk-template/dkon.app_22baf5e25acc5cf1cf7bf582e9.png",
            "https://res.dkon.app/img/apk-template/dkon.app_1379675da369468aafg3fa72d4.png",
            "https://res.dkon.app/img/apk-template/dkon.app_4a1448e92d4b825ee414c2dg81.png",
            "https://res.dkon.app/img/apk-template/dkon.app_e7accc60a2d43ade9578188aea.png",
            "https://res.dkon.app/img/apk-template/dkon.app_d75f90fa5b104cb48g8g783f45.png",
            "https://res.dkon.app/img/apk-template/dkon.app_ae1ff86a8aa687aa8cf5f3c257.png",
            "https://res.dkon.app/img/apk-template/dkon.app_4a52e729dab5308733gd9b2c53.png",
            "https://res.dkon.app/img/apk-template/dkon.app_a53120ba94e5d8fa21e85b29g9.png",
            "https://res.dkon.app/img/apk-template/dkon.app_de5e352869bf5053428464624e.png" 
];

// We get a container for images
const container = document.querySelector('.screenshot-container');

// We clean the container if necessary
container.innerHTML = '';

// Creating new images and adding them to the container
newImageUrls.forEach(url => {
    const img = document.createElement('img');
    img.src = url;
    img.className = 'screenshot'; // Add Class
    container.appendChild(img); // Add Img
});
