let calculator = document.querySelector('#calculator');
calculator.addEventListener('click', clickCalculator);
let display = document.querySelector('#display');
let a = 0;
let b = 0;
let operator = null


function clickCalculator(event = new Event()) {
  switch (event.target.id) {
    case 'calculator':
    case 'display':
      break;
    case 'delete':
      deleteCharacter();
      break;
    case 'clear':
      console.clear()
      clearAll();
      break;
    case 'negative':
      populate('-');
      break;
    case 'operator':
      b = parseFloat(display.textContent) || 0;
      if (operator == null)
        a = b
      else
        a = round(operate(a, operator, b), 5);
      console.warn(operator + b);
      console.log(a);
      clearDisplay();
      operator = event.target.textContent;
      break;
    case 'operate':
      b = parseFloat(display.textContent) || 0;
      if (operator == null)
        a = b
      else
        a = round(operate(a, operator, b), 5);

      console.warn(operator + b);
      console.log(a);

      clearDisplay();
      populate('' + a)
      operator = null;
      break;
    default: 
      populate(event.target.textContent)
  }
}

function round(n, d) {
  d = 10**d
  return Math.round(n * d) / d
}

function deleteCharacter() {
  display.textContent = display.textContent.slice(0, -1)
}

function clearDisplay() {
  display.textContent = ''
}

function clearAll() {
  a = 0;
  b = 0;
  operator = null;
  clearDisplay()
}

function populate(val) {
  display.textContent += val;
}

function operate(a, operator, b) {
  switch (operator) {
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    case '%':
      return remainder(a, b)
    default:
      return add(a, b);
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function remainder(a, b) {
  return a % b;
}