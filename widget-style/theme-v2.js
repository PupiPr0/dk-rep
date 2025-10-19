(function(){
  const ALLOWED = new Set(['dark','solar','sepia','midnight']);

  function getColorParam(){
    const q = location.search.replace(/^\?/, '');
    if(!q) return null;
    const params = new URLSearchParams(q);
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
    if(persist) localStorage.setItem('theme', name);
  };
  window.clearTheme = function(){ window.setTheme(null); };

  // main logic
  const urlColor = getColorParam(); // null | '' | value
  if(urlColor !== null){ 
    if(urlColor === '') return;
    if(ALLOWED.has(urlColor)) {
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
