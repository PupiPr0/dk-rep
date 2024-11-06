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
                  userLang.startsWith('zh') ? 'zh.json' : 
                  userLang.startsWith('ur') ? 'ur.json' : 
                  userLang.startsWith('fa') ? 'fa.json' : 
                  userLang.startsWith('uk') ? 'uk.json' :

                  userLang.startsWith('de') ? 'de.json' : 
                  userLang.startsWith('fr-CA') ? 'fr-CA.json' : 
                  userLang.startsWith('fr-BE') ? 'fr-BE.json' : 
                  userLang.startsWith('fr') ? 'fr.json' : 
                  userLang.startsWith('he') ? 'he.json' : 

                  userLang.startsWith('bn') ? 'bn.json' : 
                  userLang.startsWith('af') ? 'af.json' : 
                  userLang.startsWith('ms') ? 'ms.json' : 
                  userLang.startsWith('mk') ? 'mk.json' :  
                  userLang.startsWith('no') ? 'no.json' : 


userLang.startsWith('it') ? 'it.json' :  
userLang.startsWith('lv') ? 'lv.json' :  
userLang.startsWith('lt') ? 'lt.json' :  
userLang.startsWith('be') ? 'be.json' :  
userLang.startsWith('tr') ? 'tr.json' :  
userLang.startsWith('kk') ? 'kk.json' :  

userLang.startsWith('le') ? 'le.json' :  
userLang.startsWith('bg') ? 'bg.json' :  
userLang.startsWith('el') ? 'el.json' :  
userLang.startsWith('dz') ? 'dz.json' :  
userLang.startsWith('mr') ? 'mr.json' :  
userLang.startsWith('sy') ? 'sy.json' :  
userLang.startsWith('ve') ? 've.json' :  
userLang.startsWith('ly') ? 'ly.json' :  
userLang.startsWith('zw') ? 'zw.json' :  
userLang.startsWith('sd') ? 'sd.json' :  
         

         userLang.startsWith('ye') ? 'ye.json' :  
         userLang.startsWith('am') ? 'am.json' :  


         
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
