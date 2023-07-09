let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}

document.getElementById("demo").innerHTML = text;
// continute
let text1 = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text1 += "The number is " + i + "<br>";
}
document.getElementById("demo1").innerHTML = text1;