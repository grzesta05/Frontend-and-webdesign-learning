const listOfElements = document.querySelectorAll(".sticky--menu--element");
const ind = document.querySelector(".sticky--shit");
for(let i = 0; i < listOfElements.length; i++)
{
    listOfElements[i].addEventListener("click", ()=>{
        ind.style.left = `${listOfElements[i].clientWidth * i}px`;
    });
}