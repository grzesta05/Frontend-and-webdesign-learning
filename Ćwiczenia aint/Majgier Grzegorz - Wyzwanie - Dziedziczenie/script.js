console.log("Daję ci okejkę");
const a0 = ["1", "3", "1", "4", "0"];
const a1 = ["1", "0", "2", "0", "2"];
const a2 = ["1", "0", "3", "0", "2"];
const a = [a0,a1,a2];
function functionYN()
{
    document.getElementById("solution").style.display = "none";
    document.getElementById("nie").style.display = "inline";
    document.getElementById("tak").style.display = "inline";
    myGuesses();
}

function myGuesses()
{
  const tab = document.querySelectorAll(".red");
  for(let i = 0; i <= 2; i++)
  {
    const thtab = tab[i].querySelectorAll("th");
    for(let o = 0; o < thtab.length; o++)
    {
      thtab[o].innerHTML = a[i][o];
      thtab[o].style.color = "red";
    }
  }
}
