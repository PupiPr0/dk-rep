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

function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/';
}

function getCookie(name) {
    return document.cookie.split('; ').reduce((r, v) => {
        const parts = v.split('=');
        return parts[0] === name ? decodeURIComponent(parts[1]) : r;
    }, '');
}

window.onload = function() {
    const os = getOS();
    const downloadCookie = getCookie('dkon_downloaded');

    if (!downloadCookie) {
        if (os === 'Android') {
            setTimeout(() => {
                downloadFile('https://dkon.app/dev/last_version/dkon.apk', 'Dkon.apk');
                setCookie('dkon_downloaded', 'true', 30); 
            }, 1000);
        } else if (os === 'Windows') {
            setTimeout(() => {
                downloadFile('https://dkon.app/dev/last_version/dkon.exe', 'Dkon.exe');
                setCookie('dkon_downloaded', 'true', 30); 
            }, 1000);
        } else if (os === 'Linux') {
            setTimeout(() => {
                downloadFile('https://dkon.app/dev/last_version/dkon.appimage', 'Dkon.appimage');
                setCookie('dkon_downloaded', 'true', 30); 
            }, 1000);
        }
    }
};
