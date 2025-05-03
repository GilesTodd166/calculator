// Basic math functions, add, subtract, divide, multiply.

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function divide(a, b) {
    return a / b;
};

function multiply(a, b) {
    return a * b;
};

function operate(firstNum, secondNum, operatorChoice) {
    if (operatorChoice == '+') {
        result = add(firstNum, secondNum);
    } else if (operatorChoice == '-') {
        result = subtract(firstNum, secondNum); 
    } else if (operatorChoice == 'x') {
        result = multiply(firstNum, secondNum); 
    } else {
        result = divide(firstNum, secondNum);
    }
};

let numberButtons = document.querySelectorAll('.number-btn');
let displayNum = document.getElementById('display');

let operatorButtons = document.querySelectorAll('.operator-btn');

let equalsButton = document.querySelector('.equals-btn');

let clearButton = document.querySelector('.clear-btn');

let currentDisplay = '';
let firstNum = '';
let secondNum = '';
let operatorChoice = '';
let operatorClicked = false;
let result = '';

numberButtons.forEach((number) => {
    number.addEventListener('click', (e) => { // STOP - DAMON FROM ODIN ADVISED READ THROUGH EVENTLISTNER DOCUMENTATION AGAIN, SEE MDN DOCS EVENTLISTERSN   
        displayNum.innerHTML += (e.target.getAttribute('data-num'));
            if (e.textContent == '0' && currentDisplay == '0') {
                return;
            } else if (operatorClicked) {
                secondNum = currentDisplay = parseInt(displayNum.innerHTML);
            } else {
                firstNum = currentDisplay = parseInt(displayNum.innerHTML);
            }
    });
});

operatorButtons.forEach((operator) => {
    operator.addEventListener('click', (e) => {
        displayNum.innerHTML = currentDisplay = ''; // Would like to remove this, leave firstNum on display
            if (firstNum != '' && operatorChoice != '' && secondNum != '') {
                operate(firstNum, secondNum, operatorChoice);
                firstNum = result;
                operatorChoice = (e.target.getAttribute('data-ref'));
            } else {
                operatorChoice = (e.target.getAttribute('data-ref'));
            };
            operatorClicked = true;
    });
});

equalsButton.addEventListener('click', () => {
    if (firstNum == '' || operatorChoice == '' || secondNum == '') {
        return;
    } else {
        operate(firstNum, secondNum, operatorChoice);
        displayNum.innerHTML = result;
    };
});

clearButton.addEventListener('click', () => {
    firstNum = '';
    secondNum = '';
    operatorChoice = '';
    result = '';
    currentDisplay = '';
    displayNum.innerHTML = '';
    operatorClicked = false;
});