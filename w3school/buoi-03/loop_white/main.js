//while
let text = "";
let i = 0;
while (i < 10) {
  text += "<br>The number is " + i;
  i++;
}
document.getElementById("demo").innerHTML = text;
// do while
let text1 = ""
let i1 = 0;

do {
  text1 += "<br>The number is " + i1;
  i1++;
}
while (i1 < 10);  

document.getElementById("demo1").innerHTML = text1;
