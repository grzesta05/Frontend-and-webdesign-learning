console.log("uuUss");
var a = document.getElementsByTagName("figure");

for(let i = 0; i < a.length; i++)
{
a[i].style.transform =  `translate(${Math.random()*50}%,${Math.random() * 50}%) rotate(${((Math.random() * 50) - 25)* Math.random()*2}deg)`;
console.log(a[i]);
}

