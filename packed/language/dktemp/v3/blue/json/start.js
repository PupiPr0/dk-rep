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
    const lang = userLang.startsWith('ru') ? 'ru' :
                 userLang.startsWith('pl') ? 'pl' :
                 userLang.startsWith('id') ? 'id' :
                 userLang.startsWith('uk') ? 'uk' :
                 userLang.startsWith('ar') ? 'ar' :
                 userLang.startsWith('ur') ? 'pk' : 
                 userLang.startsWith('hi') ? 'hi' :
                 userLang.startsWith('pt-BR') ? 'pt-br' : 
                 'en';  
    loadLanguage(lang);
    loadLanguage(lang);