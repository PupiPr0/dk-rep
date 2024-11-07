//a.js
// Array with new image URLs
        const newImageUrls = [
            "https://res.dkon.app/img/apk-template/dkon.app_22baf5e25acc5cf1cf7bf582e9.png",
            "https://res.dkon.app/img/apk-template/dkon.app_1379675da369468aafg3fa72d4.png",
            "https://res.dkon.app/img/apk-template/dkon.app_4a1448e92d4b825ee414c2dg81.png",
            "https://res.dkon.app/img/apk-template/dkon.app_e7accc60a2d43ade9578188aea.png",
            "https://res.dkon.app/img/apk-template/dkon.app_d75f90fa5b104cb48g8g783f45.png",
            "https://res.dkon.app/img/apk-template/dkon.app_ae1ff86a8aa687aa8cf5f3c257.png",
            "https://res.dkon.app/img/apk-template/dkon.app_4a52e729dab5308733gd9b2c53.png",
            "https://res.dkon.app/img/apk-template/dkon.app_a53120ba94e5d8fa21e85b29g9.png"
        ];

        // We get all the images in the container
        const images = document.querySelectorAll('.screenshot');

        // Sorting through the images and replacing them with src
        images.forEach((img, index) => {
            if (newImageUrls[index]) {
                img.src = newImageUrls[index];
            }
        });
    
