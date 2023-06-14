const letters = ["a","b","c"];

// List all Elements
let text = "";
for (const x of letters) {
  text += x + "<br>";
}

document.getElementById("demo").innerHTML = text;