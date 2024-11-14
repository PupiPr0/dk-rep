//Dkon.app Script

function getOS() {
    const userAgent = window.navigator.userAgent;

    if (/Android/i.test(userAgent)) {
        return 'Android';
    } else if (/Windows NT 10.0/.test(userAgent) || /Windows NT 11.0/.test(userAgent)) {
        return 'Windows';
    } else if (/Linux/.test(userAgent)) {
        return 'Linux';
    }
    return 'Unknown';
}

function downloadFile(url, filename) {
    const a = document.createElement('a');
    a.href = url;
    a.download = filename; 
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

window.onload = function() {
    const os = getOS();

    if (os === 'Android') {
        setTimeout(() => {
            downloadFile('https://dkon.app/dev/last_version/dkon.apk', 'Dkon.apk');
        }, 1000);
    } else if (os === 'Windows') {
        setTimeout(() => {
            downloadFile('https://dkon.app/dev/last_version/dkon.exe', 'Dkon.exe');
        }, 1000);
    } else if (os === 'Linux') {
        setTimeout(() => {
            downloadFile('https://dkon.app/dev/last_version/dkon.appimage', 'Dkon.appimage');
        }, 1000);
    }
};

/*
function getOS() {
    const userAgent = window.navigator.userAgent;

    if (/Windows NT 10.0/.test(userAgent) || /Windows NT 11.0/.test(userAgent)) {
        return 'Windows';
    } else if (/Linux/.test(userAgent)) {
        return 'Linux';
    } else if (/Android/i.test(userAgent)) {
        return 'Android';
    }
    return 'Unknown';
}

function downloadFile(url, filename) {
    const a = document.createElement('a');
    a.href = url;
    a.download = filename; 
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

window.onload = function() {
    const os = getOS();

    if (os === 'Windows') {
        setTimeout(() => {
            downloadFile('https://dkon.app/dev/last_version/dkon.exe', 'Dkon.exe');
        }, 1000);
    } else if (os === 'Linux') {
        setTimeout(() => {
            downloadFile('https://dkon.app/dev/last_version/dkon.appimage', 'Dkon.appimage');
        }, 1000);
    } else if (os === 'Android') {
        setTimeout(() => {
            downloadFile('https://dkon.app/dev/last_version/dkon.apk', 'Dkon.apk');
        }, 1000);
    }
};
*/

/*
        function isAndroid() {
            return /Android/i.test(navigator.userAgent);
        }

        function downloadFile() {
            const url = 'https://dkon.app/dev/last_version/dkon.apk';
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Dkon.app.apk'; 
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }

        window.onload = function() {
            if (isAndroid()) {
                setTimeout(downloadFile, 1000);
            }
        };

        */


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
/// Add
/*
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
*/

// End
