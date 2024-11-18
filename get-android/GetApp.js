// Dkon.app Script

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
    if (localStorage.getItem('dkonScriptExecuted')) {
        return; 
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
    }

    localStorage.setItem('dkonScriptExecuted', 'true');
};

window.onerror = function(message, source, lineno, colno, error) {
    console.error('Error occurred: ', message, ' at ', source, ':', lineno, ':', colno);
};
