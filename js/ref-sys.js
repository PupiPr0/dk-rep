window.addEventListener('DOMContentLoaded', (event) => {
    let params = new URLSearchParams(document.location.search.substring(1));
    let qstring = params.get("referrer"); 
    let results = document.cookie.match(/referrer=(.+?)(;|$)/);
    document.getElementById("referrer").value = results[1];
  
switch (qstring) {
  case null:
    console.log('nulls!');
    
    let results = document.cookie.match(/referrer=(.+?)(;|$)/);
    document.getElementById("referrer").value = results[1];
    break;

  default:
    console.log('Result.'+qstring);
    
    document.cookie = "referrer="+qstring+";max-age=2629743";
    document.getElementById("referrer").value = qstring;
}

});
