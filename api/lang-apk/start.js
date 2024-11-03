 const userLang = navigator.language || navigator.userLanguage; 
        const defaultLang = 'en';
        const langFile = userLang.startsWith('ru') ? 'ru.json' : 
                         userLang.startsWith('pl') ? 'pl.json' : 
                         userLang.startsWith('id') ? 'id.json' : 
                         userLang.startsWith('ar') ? 'ar.json' : //
                         userLang.startsWith('hi') ? 'hi.json' : 
                         userLang.startsWith('ro') ? 'ro.json' : 
                         userLang.startsWith('pt-BR') ? 'pt-BR.json' : 
                         userLang.startsWith('pt') ? 'pt.json' :

                  userLang.startsWith('ja') ? 'ja.json' : 
                  userLang.startsWith('zh') ? 'zh.json' : // 
                  userLang.startsWith('ur') ? 'ur.json' : // 
                  userLang.startsWith('fa') ? 'fa.json' : // 
                  userLang.startsWith('uk') ? 'uk.json' : // 
         
                         'en.json';

        fetch(`https://res.dkon.app/api/lang-apk/${langFile}`)
            .then(response => response.json())
            .then(data => {
                document.getElementById('page-title').innerText = data.title;
                document.querySelector('header h1').innerText = data.header.h1;
                document.querySelector('header p').innerText = data.header.p;

                const features = data.features;
                Object.keys(features).forEach(key => {
                    document.querySelector(`.feature:nth-child(${Object.keys(features).indexOf(key) + 1}) h2`).innerText = features[key].h2;
                    document.querySelector(`.feature:nth-child(${Object.keys(features).indexOf(key) + 1}) p`).innerText = features[key].p;
                });

                document.querySelector('.cta h2').innerText = data.cta.h2;
                document.querySelector('.cta button').innerText = data.cta.button;

                                document.querySelector('footer p').innerHTML = `© 2024 Dalam Kontak. <a href="https://dkon.app/privacy" style="color: white;">${data.footer.privacy}</a> | <a href="https://dkon.app/support" style="color: white;">${data.footer.support}</a>`;
            })
            .catch(error => console.error('Error loading language file:', error));
