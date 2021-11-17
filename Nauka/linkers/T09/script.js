const colors = ['Red', 'Green', 'Blue'];

    function resetStyle(obj,a)
    {
      
        for(let i = 0; i < colors.length; i++)
            if(colors[i]!=a){
            document.getElementsByTagName("img")[i].src = `icons/${colors[i]}-ico.png`;
            }
    }
    function color(obj, id)
    {
        id -=1;
        console.log(id);
        resetStyle(obj,colors[id]);
        obj.src = "icons/white-ico.png";
        const a = document.getElementsByClassName("color");
        document.getElementById("colorbg").style.backgroundColor = colors[id];
        document.getElementById("colorbg").style.color = "white";
        var txt = colors[id];
        txt[0].toUpperCase();
        document.getElementById("page-header").innerHTML = `${txt} page`
                for(let i = 0; i < a.length; i++)
                {
                    a[i].style.color = colors[id];
                }
               
            
        }
    