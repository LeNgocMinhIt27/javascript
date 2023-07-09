document.getElementById("myBtn").addEventListener("click", function () {
  alert("Hello World!");
});
var x = document.getElementById("myBtn1");
x.addEventListener("click", myFunction);
x.addEventListener("click", someOtherFunction);

function myFunction() {
  alert("Hello World!");
}

function someOtherFunction() {
  alert("This function was also executed!");
}

var x = document.getElementById("myBtn2");
x.addEventListener("mouseover", myFunction);
x.addEventListener("click", mySecondFunction);
x.addEventListener("mouseout", myThirdFunction);

function myFunction() {
  document.getElementById("demo").innerHTML += "Moused over!<br>";
}

function mySecondFunction() {
  document.getElementById("demo1").innerHTML += "Clicked!<br>";
}

function myThirdFunction() {
  document.getElementById("demo2").innerHTML += "Moused out!<br>";
}
