console.log("uuUss");
const a = document.querySelectorAll("figure");

for(let i = 0; i < a.length; i++)
{
a[i].style.transform = "translate(${Math.random()*10},${Math.random() * 10});"
console.log(a[i].style.transform);
}

