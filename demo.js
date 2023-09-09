const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click",()=>{
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});


const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})


let playBtn = document.querySelector('.play-movie');
let video = document.querySelector('.video-container');
let myVideo = document.querySelector('#myVideo');
let closeBtn = document.querySelector('.close')

playBtn.onclick = () =>{
    video.classList.add("show-video");
    myVideo.play();
};

closeBtn.onclick = () =>{
    video.classList.remove("show-video");
    myVideo.pause();
};


