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

let currentDisplay;
let firstNum = '';
let secondNum = '';
let operatorChoice = '';
let operatorClicked = false;
let equalsClicked = false;
let result = '';

numberButtons.forEach((number) => {
    number.addEventListener('click', (e) => {
        if (result != '' && equalsClicked) { // This allows continual operations
            clear();
        } else if (result != '' && secondNum == '') { // This resets display, so numbers dont stack to the right of previous results
            displayNum.innerHTML = currentDisplay = '';
        }
            if ((e.target.getAttribute('data-num')) == '0' && currentDisplay == '0') {
                displayNum.innerHTML -= 0;
                return;
            } else if (operatorClicked) {
                displayNum.innerHTML += (e.target.getAttribute('data-num'));
                secondNum = currentDisplay = parseInt(displayNum.innerHTML);
            } else {
                displayNum.innerHTML += (e.target.getAttribute('data-num'));
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
                secondNum = '';
                displayNum.innerHTML = result;
                operatorClicked = false; // Resets operator for continual operations
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
    equalsClicked = true;
});

clearButton.addEventListener('click', () => {
    firstNum = '';
    secondNum = '';
    operatorChoice = '';
    result = '';
    currentDisplay = '';
    displayNum.innerHTML = '';
    operatorClicked = false;
    equalsClicked = false;
});

function clear() {
    firstNum = '';
    secondNum = '';
    operatorChoice = '';
    result = '';
    currentDisplay = '';
    displayNum.innerHTML = '';
    operatorClicked = false;
    equalsClicked = false;
}