$(document).ready(() => {
    let ip = $(".dkonstats").attr("data-ip");
    let port = $(".dkonstats").attr("data-port");
    if (port == "" || port == null) port = "443";
    if (ip == "" || ip == null) return console.error("Error ");
    updatePlayercount(ip, port);
    setInterval(() => {
        updatePlayercount(ip, port);
    }, 7000);
});

const updatePlayercount = (ip, port) => {
    $.get(`https://dkon.app/api/v5.7/method/dkon.stats.posts?id=${ip}&${port}`, (result) => {
        if (result.hasOwnProperty('posts')) {
           $(".dkonstats").html(parseFloat(result.posts).toFixed(2));
        } else {
           $(".dkonstatss").html("Server isn't online!");
  
        }
    });
};

!function(a) {
  }(jQuery);
