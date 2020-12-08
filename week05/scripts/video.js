window.onload = function(){
    let video = documant.getElementById("myVideo");

    let playBtn = document.getElementById("playBtn");
    playBtn.addEventListener("click", function(){
        video.play();
    } );

    let pauseBtn = document.getElementById("pauseBtn");
    pauseBtn.addEventListener("click", function(){
        video.play();
    });
};