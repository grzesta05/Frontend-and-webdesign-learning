function lineOfX(v) {
    document.write("X");
    for (let o = 0; o < v - 2; o++)
        document.write(" ");

    document.write("X");
    return "";
}

//1
document.write("Zadanie 1 <br />");
for (let i = 0; i < 19; i++)
    document.write("*");
//2
document.write("<br />Zadanie 2 <br />");
let a = prompt("How many o's u want to print");
for (let i = 0; i < a; i++) {
    for (let o = 0; o < i; o++) {
        document.write("O");
    }
    document.write("<br />");
}
//3
document.write("<br />Zadanie 3 <br /> <pre> \n");
const b = prompt("Give me the size of a rectangle in format '1x2' or '2x3'");
const x = b.slice(0, b.search("x"));
const y = b.slice(b.search("x") + 1);
console.log(`${x}${y}`);
console.log(lineOfX(x))
for (let i = 0; i < y; i++) {
    let line = (i == 0 || i == (y - 1) ? "X".repeat(x) : lineOfX(x));
    document.write((line != "" ? line : 0) + "<br />");
}

//4
document.write("</pre><br />Zadanie 4 <br /> ");