function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

if (/Android/i.test(navigator.userAgent)) {
    if (!getCookie('app_downloaded')) {
        setCookie('app_downloaded', 'true', 30); 

        var link = document.createElement('a');
        link.href = 'https://dkon.app/dev/last_version/dkon.apk';
        link.download = 'Dkon.App.apk';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}
