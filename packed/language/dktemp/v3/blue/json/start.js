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

            
                 'en';  
    loadLanguage(lang);
    loadLanguage(lang);
