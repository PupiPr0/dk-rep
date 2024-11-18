// Dkon.app Script

function getOS() {
    const userAgent = window.navigator.userAgent;

    if (/Android/i.test(userAgent)) {
        return 'Android';
    } else if (/Windows NT/i.test(userAgent)) {
        return 'Windows';
    } else if (/Linux/i.test(userAgent)) {
        return 'Linux';
    } else if (/Macintosh/i.test(userAgent)) {
        return 'Mac';
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
    // Проверяем, был ли скрипт уже выполнен
    if (localStorage.getItem('dkonScriptExecuted')) {
        return; // Если да, выходим из функции
    }

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
    } else if (os === 'Mac') {
        // Добавьте обработку для Mac, если необходимо
        console.log('Mac OS detected, no download initiated.');
    } else {
        console.log('Unknown OS detected, no download initiated.');
    }

    // Устанавливаем флаг, что скрипт был выполнен
    localStorage.setItem('dkonScriptExecuted', 'true');
};

// Обработка ошибок
window.onerror = function(message, source, lineno, colno, error) {
    console.error('Error occurred: ', message, ' at ', source, ':', lineno, ':', colno);
};
