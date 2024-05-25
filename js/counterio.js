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
    $.get(`https://socket.dkon.app/api/v5.8/method/dkon.stats.posts?id=${ip}&${port}`, (result) => {
        if (result.hasOwnProperty('posts')) {
        //   $(".dkonstats").html(parseFloat(result.posts).toFixed(0)); // 0 ->2
           $(".dkonstats").html(result.posts);  
        } else {
           $(".dkonstatss").html("Server isn't online!");
  
        }
    });
};

!function(a) {
  }(jQuery);
