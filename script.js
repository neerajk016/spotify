let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "assets/1.mp3", coverPath: "assets/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "assets/2.mp3", coverPath: "assets/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "assets/3.mp3", coverPath: "assets/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "assets/4.mp3", coverPath: "assets/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "assets/5.mp3", coverPath: "assets/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "assets/2.mp3", coverPath: "assets/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "assets/2.mp3", coverPath: "assets/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "assets/2.mp3", coverPath: "assets/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "assets/2.mp3", coverPath: "assets/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "assets/4.mp3", coverPath: "assets/10.jpg"},
]

let songItems = Array.from(document.getElementsByClassName('songItem'));
songItems.forEach((e,i) => {
    e.getElementsByTagName("img")[0].src=songs[i].coverPath;
    e.getElementsByClassName("songName")[0].innerText=songs[i].songName;  
});


let audioElement = new Audio('assets/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');



masterPlay.addEventListener("click",()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
        
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
        

    }
})

audioElement.addEventListener("timeupdate",()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration) *100)
    myProgressBar.value=progress
    
})


myProgressBar.addEventListener("change",()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})



const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        index=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`assets/${index}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
})



document.getElementById('next').addEventListener('click', ()=>{
    if(index>=9){
        index = 0
    }
    else{
        index += 1;
    }
    audioElement.src = `assets/${index+1}.mp3`;
    masterSongName.innerText = songs[index].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})



document.getElementById('previous').addEventListener('click', ()=>{
    if(index<=0){
        index = 0
    }
    else{
        index -= 1;
    }
    audioElement.src = `assets/${index+1}.mp3`;
    masterSongName.innerText = songs[index+1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})