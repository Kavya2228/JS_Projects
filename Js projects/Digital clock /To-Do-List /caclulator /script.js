let expression = '';

function appendValue(value) {
  expression += value;
  document.getElementById('display').value = expression;
}

function clearDisplay() {
  expression = '';
  document.getElementById('display').value = '';
}

function calculate() {
  try {
    const result = eval(expression);
    if (!isNaN(result)) {
      document.getElementById('display').value = result;
    } else {
      throw new Error('Invalid expression');
    }
    expression = '';
  } catch (error) {
    document.getElementById('display').value = 'Error';
    expression = '';
  }
}
