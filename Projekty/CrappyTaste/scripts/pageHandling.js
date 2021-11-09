document.documentElement.style.setProperty('--var', `rgb(${(Math.random()*155)+100},${(Math.random()*155)+100},${(Math.random()*155)+100})`);

const audioplayer = document.getElementsByTagName("audio")[0];
const songInfo = document.getElementById("songInfo");

audioplayer.volume = 0.1;
const randomSongId = Math.floor(Math.random()*songs.length);
const randomSong = songs[randomSongId];
document.getElementsByClassName("randomsong")[0].innerHTML =
 `<button style="width:50%;margin:0;" onclick="playSong(${randomSongId})">
 <img style = "width:100%;margin:1%;border-radius:10px" 
 src = ${(songs[randomSongId].image == ""? `https://placekitten.com/${Math.round(Math.random()*1000+500)}/${Math.round(Math.random()*500+400)}` : songs[randomSongId].image)}></button>
 <p>${randomSong.name} - ${randomSong.author}</p>`

var currentlyPlaying = 0;

 function renderSongs()
 {
    var a = `<div class="row">` ;
    var x =document.getElementById("SongList");
    
    for(let i = 0; i < songs.length; i++)
    {
        const img = (songs[i].image == ""? `https://placekitten.com/${Math.round(Math.random()*1000+500)}/${Math.round(Math.random()*400+400)}` : songs[i].image); 
        a+=`<div class = "col-lg">
        <button onclick="playSong(${i})" class="songimgbutton" style="background-image: url(${img});"></button>
        <button class = "p" onclick="playSong(${i})">${songs[i].name}<br />${songs[i].author}</button>
        </div>`;
        if((i+1)%3==0)
        a+=`</div><div class="row">`
       
    }
    a+="</div>";
    x.innerHTML+=a;
    console.log(x);
 }
 
 

function playSong(id)
{
    audioplayer.src = songs[id].path;
    songInfo.innerHTML = `${songs[id].name} - ${songs[id].author}`;
    currentlyPlaying = id;
}
function nextOrPrevious(n)
{
    playSong(currentlyPlaying+n);
}

renderSongs();