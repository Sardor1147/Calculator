function hisobla() {
  var num1 = document.getElementById("numOne").value || 0;
  var num2 = document.getElementById("numTwo").value || 0;
  var action = document.getElementById("action").value;
  document.getElementById("result").value = eval(num1 + action + num2);
}
