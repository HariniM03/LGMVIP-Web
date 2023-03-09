let input = '';

function addInput(value) {
  input += value;
  document.getElementById('result').value = input;
}

function clearInput() {
  input = '';
  document.getElementById('result').value = '';
}

function calculate() {
  let result = eval(input);
  document.getElementById('result').value = result;
  input = '';
}
