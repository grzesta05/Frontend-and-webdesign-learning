document.documentElement.style.setProperty('--var', `rgb(${(Math.random()*155)+100},${(Math.random()*155)+100},${(Math.random()*155)+100})`);

const audioplayer = document.getElementsByTagName("audio")[0];
const songInfo = document.getElementById("songInfo");

audioplayer.volume = 0.1;
const randomSongId = Math.floor(Math.random()*songs.length);
const randomSong = songs[randomSongId];

document.getElementsByClassName("randomsong")[0].innerHTML = `<button style="width:50%;margin:0;" onclick="playSong(${randomSongId})"><img style = "width:100%;margin:1%;border-radius:100px" src = ${randomSong.image}></button><p>${randomSong.name} - ${randomSong.author}</p>`

function playSong(id)
{
    audioplayer.src = songs[id].path;
    songInfo.innerHTML = `${songs[id].name} - ${songs[id].author}`;
}