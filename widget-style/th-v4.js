(function(){
  const ALLOWED = new Set(['dark','solar','sepia','midnight','pink','grey','green','new-year','halloween','summer','marine']);

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

  window.setTheme = function(name){
    if(!name){ applyTheme(null); return; }
    if(!ALLOWED.has(name)) return;
    applyTheme(name);
  };
  window.clearTheme = function(){ window.setTheme(null); };

  const urlColor = getColorParam();
  if(urlColor !== null){
    if(urlColor === '') return;
    if(ALLOWED.has(urlColor)) applyTheme(urlColor);
    return;
  }

})();
