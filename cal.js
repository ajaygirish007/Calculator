let input = document.getElementById("input");

function addToInput(val) {
  input.value += val;
}
function clearInput() {
  input.value = "";
}
function calculate() {
  let equation = input.value;
  let result = eval(equation);
  input.value = result;
}
