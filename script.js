function addToInput(value) {
  document.getElementById('result').value += value;
}

function clearInput() {
  document.getElementById('result').value = '';
}

function calculate() {
  var input = document.getElementById('result').value;
  var output = eval(input);
  document.getElementById('result').value = output;
}
