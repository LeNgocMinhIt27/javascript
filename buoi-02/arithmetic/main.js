function arithmetic(x, y) {
  return x + y;
}
function arithmetic1(x, y) {
  return x - y;
}
function arithmetic2(x, y) {
  return x * y;
}
function arithmetic3(x, y) {
  return x / y;
}
document.getElementById("demo").innerHTML = arithmetic(2, 3);
document.getElementById("demo1").innerHTML = arithmetic1(2, 3);
document.getElementById("demo2").innerHTML = arithmetic2(2, 3);
document.getElementById("demo3").innerHTML = arithmetic3(2, 3);
