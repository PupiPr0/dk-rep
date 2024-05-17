window.addEventListener('DOMContentLoaded', (event) => {
    let dkonparam = new URLSearchParams(document.location.search.substring(1));
    let dkonref = dkonparam.get("referrer"); 
   // let results = document.cookie.match(/referrer=(.+?)(;|$)/);
  
  
switch (dkonref) {
  case null:
   // console.log('emty!');
    
   // let results = document.cookie.match(/referrer=(.+?)(;|$)/);
   // document.getElementById("referrer").value = results[1];
    break;

  default:
    console.log('Result.'+dkonref);
    
    document.cookie = "referrer="+dkonref+";max-age=2629743;path=/";
   // document.getElementById("referrer").value = qstring;
}

});
