(function(){
  const stored = localStorage.getItem('theme'); // 'dark'|'light'|null
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const useDark = stored === 'dark' ? true : stored === 'light' ? false : prefersDark;
  if(useDark) document.documentElement.classList.add('dark-mode');

 
  window.toggleTheme = function(){
    const isDark = document.documentElement.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };

  if(!stored && window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e=>{
      document.documentElement.classList.toggle('dark-mode', e.matches);
    });
  }
})();
