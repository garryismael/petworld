const video = document.querySelector("video");
const playBtn = document.querySelector(".play");
const pauseBtn = document.querySelector(".pause");
const blurBg = document.querySelector(".blur");

function play() {
    pauseBtn.style.display = "inline-block";
    playBtn.style.display = "none";
    blurBg.style.background = "transparent";
    video.play();
}

function pause() {
    pauseBtn.style.display = "none";
    playBtn.style.display = "inline-block";
    blurBg.style.background = "rgba(255, 255, 255, 0.5)";
    video.pause();
}

playBtn.addEventListener("click", (e) => {
    play();
})

pauseBtn.addEventListener("click", (e) => {
    pause();
})

