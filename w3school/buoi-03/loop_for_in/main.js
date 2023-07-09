const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  txt += numbers[x] + "<br>"; 
}

document.getElementById("demo").innerHTML = txt;