document.addEventListener("DOMContentLoaded", function() {
        const baseUrl = 'https://res.dkon.app/packed/language/dosti/api/lang/';
        
        const userLang = navigator.language || navigator.userLanguage; 
        let langFile = `${baseUrl}hi.json`; 

        if (userLang.startsWith('ru')) {
            langFile = `${baseUrl}ru.json`; 
        } else if (userLang.startsWith('pt-BR')) {
            langFile = `${baseUrl}br.json`; 
        } else if (userLang.startsWith('en')) {
            langFile = `${baseUrl}ng.json`; 
        }
        fetch(langFile)
            .then(response => response.json())
            .then(data => {
                document.title = data.title;
                document.querySelector('meta[name="description"]').setAttribute("content", data.description);
                document.querySelector('meta[name="keywords"]').setAttribute("content", data.keywords);

                document.querySelector('h1').textContent = data.h1;
                document.querySelector('h2').textContent = data.h2;
                document.querySelector('.main p:nth-of-type(1)').innerHTML = data.p1;
                document.querySelector('.main p:nth-of-type(2)').innerHTML = data.p2;
                document.querySelector('.main p:nth-of-type(3)').innerHTML = data.p3;
            })
            .catch(error => console.error('Error download file languages:', error));
    });
