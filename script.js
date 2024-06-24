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
    case 'clear':
      deleteCharacter();
      break;
    case 'allClear':
      console.clear()
      clearAll();
      break;
    case 'negative':
      populate('-');
      break;
    case 'operator':
      b = parseFloat(display.textContent) || 0;
      if (operator == null)
        a = b;
      else
        a = operate(a, operator, b);
      console.log(operator + b);
      console.log(a);
      clearDisplay();
      operator = event.target.textContent;
      break;
    case 'operate':
      if (operator == null) {
        a = parseFloat(display.textContent) || 0;
        break;
      }
      b = parseFloat(display.textContent) || 0;
      a = operate(a, operator, b);
      clearDisplay();
      populate('' + a)
      operator = null;
      break;
    default: 
      populate(event.target.textContent)
  }
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