const menu = document.querySelectorAll(".side--menu--headers>*");
const capi = document.querySelector(".side--menu--icon");
for(let a = 0; a < menu.length; a++)
{
    menu[a].addEventListener("click", ()=>{
        document.querySelector(".side--menu--inner").style.transform = "scaleY(0)";
        for(let i = 0; i < menu.length; i++)
        {
            menu[i].style.transform = "translateX(0)";
            
        }
        capi.style.top = `${3 * a}rem`;
        menu[a].style.transform = "translateX(3.5rem)";
        if(document.querySelectorAll(`.side--menu--headers>*:nth-child(${a})`).length != 0)
        {
            document.querySelector(".side--menu--inner").style.transform = "scaleY(1)";
            console.log("a")
        }
    });
}