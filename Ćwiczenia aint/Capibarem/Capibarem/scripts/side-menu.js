const menu = document.querySelectorAll(".side--menu--headers>*");
const capi = document.querySelector(".side--menu--icon");
for(let a = 0; a < menu.length; a++)
{
    menu[a].addEventListener("click", ()=>{
        document.querySelector(".side--menu--inner").classList.toggle("expand")
        for(let i = 0; i < menu.length; i++)
        {
            menu[i].classList.remove("moved");
            
        }
        capi.style.top = `${3 * a}rem`;
        menu[a].classList.toggle("moved");
        if(document.querySelectorAll(`.side--menu--headers>*:nth-child(${a})`).length != 0)
        {
            document.querySelector(".side--menu--inner").classList.add("expand")
            console.log("a")
        }
    });
}