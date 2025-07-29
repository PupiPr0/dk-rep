document.addEventListener("DOMContentLoaded", function() {
    const videos = document.querySelectorAll("video");
    videos.forEach(video => {
        video.setAttribute("preload", "none");
        video.addEventListener("click", function() {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });
        video.addEventListener("play", function() {
            video.load();
        });
    });
});
