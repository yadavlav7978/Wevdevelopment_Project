console.log("Hello")

let audio = new Audio('songs/1.mp3');
let masterplaybtn = document.getElementById('masterplaybtn');
let progresbar = document.getElementById('progresbar');
let songindx = 0;
let footer_song_name_id=document.getElementById('footersongname');
footer_song_name_id.innerText="Let me love you";


let songs = [

    { songname: "Let me love you", filepath: "songs/1.mp3", coverpath: "covers/1.jpg" },
    { songname: "Bol do no jara", filepath: "songs/2.mp3", coverpath: "covers/2.jpg" },
    { songname: "Barish", filepath: "songs/3.mp3", coverpath: "covers/3.jpg" },
    { songname: "Brown Munde", filepath: "songs/4.mp3", coverpath: "covers/4.jpg" },
    { songname: "No Love", filepath: "songs/5.mp3", coverpath: "covers/5.jpg" },
    { songname: "295", filepath: "songs/6.mp3", coverpath: "covers/6.jpg" },
    { songname: "We rollin", filepath: "songs/7.mp3", coverpath: "covers/7.jpg" },

]

masterplaybtn.addEventListener('click', () => {

    if (audio.paused || audio.currentTime <= 0) {
        audio.play();
        masterplaybtn.classList.remove('fa-circle-play');
        masterplaybtn.classList.add('fa-circle-pause');

    } else {
        audio.pause();
        masterplaybtn.classList.remove('fa-circle-pause');
        masterplaybtn.classList.add('fa-circle-play');
    }
});

audio.addEventListener('timeupdate', () => {
    let cur_progres_per = ((audio.currentTime / audio.duration) * 100);
    progresbar.value = cur_progres_per;
})

progresbar.addEventListener('change', () => {
    audio.currentTime = progresbar.value * audio.duration / 100;
});

let coverImages = Array.from(document.querySelectorAll('.coverimage'));
for (let i = 0; i < coverImages.length; i++) {

    coverImages[i].src = songs[i].coverpath;
}

let songname = Array.from(document.querySelectorAll('.songname'));

for (let i = 0; i < songname.length; i++) {
    songname[i].textContent = songs[i].songname;
}

let songicon = Array.from(document.querySelectorAll('.songadd'));

function makeallplay() {
    songicon.forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

songicon.forEach((element) => {
    element.addEventListener('click', (event) => {
        makeallplay();
        event.target.classList.remove('fa-play-circle');
        event.target.classList.add('fa-pause-circle');

        songindx = parseInt(event.target.id);

        audio.src = `songs/${songindx + 1}.mp3`;
        audio.currentTime = 0;
        audio.play();
        footer_song_name_id.innerText=songs[songindx].songname;
        masterplaybtn.classList.remove('fa-circle-play');
        masterplaybtn.classList.add('fa-circle-pause');

    })
})


document.getElementById('nextsong').addEventListener('click', () => {

    if (songindx >= 6) {
        songindx = 0;
    } else {
        songindx += 1;
    }
        audio.src = `songs/${songindx + 1}.mp3`;
        audio.currentTime = 0;
        audio.play();
        footer_song_name_id.innerText=songs[songindx].songname;
        masterplaybtn.classList.remove('fa-circle-play');
        masterplaybtn.classList.add('fa-circle-pause');

})

document.getElementById('previousong').addEventListener('click',()=>{
    if(songindx<=0){
        songindx=0;
    }else{
        songindx-=1;
    }

    audio.src = `songs/${songindx + 1}.mp3`;
    audio.currentTime = 0;
    audio.play();
    footer_song_name_id.innerText=songs[songindx].songname;
    masterplaybtn.classList.remove('fa-circle-play');
    masterplaybtn.classList.add('fa-circle-pause');
})







// let songadd = Array.from(document.querySelectorAll('.songadd'));

// for (let i = 0; i < songadd.length; i++) {
//     songadd[i].addEventListener('click', handleclick);
// }
// let curent_play_song = null;
// let curent_play_id = null;

// function handleclick(event) {

//     let elementid = event.target.id;
//     let indx = parseInt(elementid);
//     let song = songs[indx].filepath;

//     let button = document.getElementById(elementid);


//     if (curent_play_song !== null) {

//         let prev_button = document.getElementById(curent_play_id);
//         let audio = new Audio(song);                              // song variable is a string representing the file path, while curent_play_song is an Audio object that has a src property representing the file path.
//         // The two are not equivalent, so you can't compare them directly.
//         if (curent_play_song.src == audio.src) {
//             if (curent_play_song.paused) {
//                 curent_play_song.play();
//                 button.classList.remove('fa-circle-play');
//                 button.classList.add('fa-circle-pause');

//                 masterplaybtn.classList.remove('fa-circle-play');
//                 masterplaybtn.classList.add('fa-circle-pause');

//             } else {
//                 curent_play_song.pause();
//                 button.classList.remove('fa-circle-pause');
//                 button.classList.add('fa-circle-play');

//                 masterplaybtn.classList.remove('fa-circle-pause');
//                 masterplaybtn.classList.add('fa-circle-play');
//             }
//         } else {

//             curent_play_song.pause();
//             curent_play_song.currentTime = 0;
//             prev_button.classList.remove('fa-circle-pause');
//             prev_button.classList.add('fa-circle-play');

//             masterplaybtn.classList.remove('fa-circle-pause');
//             masterplaybtn.classList.add('fa-circle-play');

//             audio.play();
//             curent_play_song = audio;
//             curent_play_id = elementid;
//             button.classList.remove('fa-circle-play');
//             button.classList.add('fa-circle-pause');

//             masterplaybtn.classList.remove('fa-circle-play');
//             masterplaybtn.classList.add('fa-circle-pause');


//         }
//     } else {
//         let audio = new Audio(song);
//         audio.play();
//         curent_play_song = audio;
//         curent_play_id = elementid;
//         button.classList.remove('fa-circle-play');
//         button.classList.add('fa-circle-pause');

//         masterplaybtn.classList.remove('fa-circle-play');
//         masterplaybtn.classList.add('fa-circle-pause');


//     }

// }


