(function(){
  const ALLOWED = new Set(['dark','solar','sepia','midnight','pink']);

  function getColorParam(){
    const params = new URLSearchParams(location.search);
    return params.has('color') ? params.get('color') : null;
  }

  function applyTheme(name){
    const html = document.documentElement;
    Array.from(html.classList).forEach(c=>{
      if(c.startsWith('theme-')) html.classList.remove(c);
    });
    if(name) html.classList.add('theme-' + name);
  }

  window.setTheme = function(name, persist = true){
    if(!name){ applyTheme(null); if(persist) localStorage.removeItem('theme'); return; }
    if(!ALLOWED.has(name)) return;
    applyTheme(name);
    if(persist) try{ localStorage.setItem('theme', name); }catch(e){}
  };
  window.clearTheme = function(){ window.setTheme(null); };

  const urlColor = getColorParam();
  if(urlColor !== null){
    if(urlColor === '') return;
    if(ALLOWED.has(urlColor)){
      applyTheme(urlColor);
      try{ localStorage.setItem('theme', urlColor); }catch(e){}
    }
    return;
  }

  try{
    const stored = localStorage.getItem('theme');
    if(stored && ALLOWED.has(stored)) applyTheme(stored);
  }catch(e){}
})();
