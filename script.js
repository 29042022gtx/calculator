let calculator = document.querySelector('#calculator');
calculator.addEventListener('click', clickCalculator);
let display = document.querySelector('#display');
display.addEventListener('keyup', typeIn)
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
    case 'point':
      addPoint();
      break;
    case 'operator':
      pressOperator(event.target.textContent);
      break;
    case 'operate':
      pressOperate();
      break;
    default: 
      populate(event.target.textContent)
  }
}

function typeIn(event) {
  if (event.key == 'Shift')
    return;
  console.log(event.key);
  let operatorList = '+-*/%'
  if (operatorList.includes(event.key)) {
    pressOperator(event.key);
  } else if (event.key == 'Enter' || event.key == '=') {
    pressOperate();
  } else if (event.key == 'Escape') {
    clearAll();
  }
}

function pressOperate() {
  if (process())
        populate(a)
      operator = null;
}

function pressOperator(key) {
  process();
  operator = key;
}

function process() {
  b = parseFloat(getDisplayContent()) || 0;

  if (operator == '/' && b == 0) {
    clearAll();
    populate('Divide by 0!');
    return false;
  }

  if (operator == null)
    a = b
  else
    a = round(operate(a, operator, b), 5);

  console.warn(operator + b);
  console.log(a);

  clearDisplay();
  return true;
}

function getDisplayContent() {
  return display.value
}

function addPoint() {
  if (!getDisplayContent().includes('.'))
    populate('.')
}

function round(n, d) {
  d = 10**d
  return Math.round(n * d) / d
}

function clearAll() {
  a = 0;
  b = 0;
  operator = null;
  clearDisplay()
}

function deleteCharacter() {
  display.value = getDisplayContent().slice(0, -1)
}

function populate(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = ''
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