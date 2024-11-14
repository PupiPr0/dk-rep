function loadLanguage(lang) {
        fetch(`https://res.dkon.app/packed/language/dktemp/v3/blue/json/${lang}.json`)  
            .then(response => response.json())
            .then(data => {
                document.getElementById('page-title').innerText = data.title;
                document.querySelector('meta[name="description"]').setAttribute("content", data.description);
                document.getElementById('header-h1').innerText = data.h1;
                document.getElementById('header-h2').innerHTML = data.h2;
                document.getElementById('paragraph-1').innerHTML = data.p1;
                document.getElementById('paragraph-2').innerHTML = data.p2;
                document.getElementById('paragraph-3').innerHTML = data.p3;
                document.getElementById('footer-text').innerHTML = data.footer;
            })
            .catch(error => console.error('Error loading language file:', error));
    }
    const userLang = navigator.language || navigator.userLanguage; 
    const lang = userLang.startsWith('la') ? 'la' :
                 userLang.startsWith('pt') ? 'pt' :
                 userLang.startsWith('el') ? 'el' :
                 userLang.startsWith('ru') ? 'ru' :
                 userLang.startsWith('pl') ? 'pl' :
                 userLang.startsWith('id') ? 'id' :
                 userLang.startsWith('uk') ? 'uk' :
                 userLang.startsWith('ar') ? 'ar' :
                 userLang.startsWith('ur') ? 'pk' : 
                 userLang.startsWith('hi') ? 'hi' :
                 userLang.startsWith('pt-BR') ? 'pt-br' : 
                 userLang.startsWith('de') ? 'de' :
                 userLang.startsWith('fr') ? 'fr' :
                 userLang.startsWith('zh') ? 'zh' :
                 userLang.startsWith('ja') ? 'ja' :
                 userLang.startsWith('bn') ? 'bn' : 
                 userLang.startsWith('he') ? 'he' : 
                 userLang.startsWith('be') ? 'be' :  
                 userLang.startsWith('ms') ? 'ms' :  
                 userLang.startsWith('tr') ? 'tr' :  
                 userLang.startsWith('es') ? 'es' : 
                 userLang.startsWith('fi') ? 'fi' :  
                 userLang.startsWith('az') ? 'az' : 
                 userLang.startsWith('tk') ? 'tk' :
                 userLang.startsWith('nl') ? 'nl' :
                 userLang.startsWith('it') ? 'it' :  
                 userLang.startsWith('sv') ? 'sv' :  
                 userLang.startsWith('da') ? 'da' :  
                 userLang.startsWith('no') ? 'no' :  
                 userLang.startsWith('cs') ? 'cs' :  
                 userLang.startsWith('sk') ? 'sk' :  
                 userLang.startsWith('ro') ? 'ro' : 
                 userLang.startsWith('ca') ? 'ca' :  
                 userLang.startsWith('tl') ? 'tl' :  
            
                 'en';  
    loadLanguage(lang);
    loadLanguage(lang);


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
