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

function expo(x, f) {
    return Number.parseFloat(x).toExponential(f);
};

function operate(firstNum, secondNum, operatorChoice) {
    secondNum = parseInt(secondNum);
    let calc;
    let calcExpo;
    if (operatorChoice == '+') {
        calc = add(firstNum, secondNum);
    } else if (operatorChoice == '-') {
        calc = subtract(firstNum, secondNum); 
    } else if (operatorChoice == 'x') {
        calc = multiply(firstNum, secondNum); 
    } else {
        calc = divide(firstNum, secondNum);
    }
    let calcStr = calc.toString();
    if (calcStr.length >= 15) {
        calcExpo = expo(calc, 11);
        result = calcExpo;
    } else {
    result = calc;
    };
};

let numberButtons = document.querySelectorAll('.number-btn');
let displayNum = document.getElementById('display');

let operatorButtons = document.querySelectorAll('.operator-btn');

let equalsButton = document.querySelector('.equals-btn');

let clearButton = document.querySelector('.clear-btn');

let decButton = document.querySelector('.dec-btn');

let currentDisplay;
let firstNum = '';
let secondNum = '';
let operatorChoice = '';
let operatorClicked = false;
let equalsClicked = false;
let result = '';
let firstStr = '';

numberButtons.forEach((number) => {
    number.addEventListener('click', (e) => {
        if (result != '' && equalsClicked) { // This allows continual operations
                clear();
            } else if (result != '' && secondNum == '') { // This resets display, so numbers dont stack to the right of previous results
                displayNum.innerHTML = currentDisplay = '';
            }
                if (result == '0') {
                    firstNum = '0';
                    displayNum.innerHTML = '';
                }
                    if ((e.target.getAttribute('data-num')) == '0' && currentDisplay == '0') {
                        displayNum.innerHTML -= 0;
                        return;
                    } else if (operatorClicked) {
                        secondStr = secondNum.toString();
                            if (secondStr.length <= 15) {
                                displayNum.innerHTML += (e.target.getAttribute('data-num'));
                                secondNum = currentDisplay = displayNum.innerHTML;
                            };
                    } else {
                        firstStr = firstNum.toString(13);
                            if (firstStr.length <= 15) {
                                displayNum.innerHTML += (e.target.getAttribute('data-num'));
                                firstNum = currentDisplay = displayNum.innerHTML;
                            };
            };
    });
});

operatorButtons.forEach((operator) => {
    operator.addEventListener('click', (e) => {
        displayNum.innerHTML = currentDisplay = ''; // Would like to remove this, leave firstNum on display
            if (firstNum != '' && operatorChoice != '' && secondNum != '') {
                operate(firstNum, secondNum, operatorChoice);
                displayNum.innerHTML = result;
                firstNum = Number(result);
                secondNum = '';
                operatorClicked = false; // Resets operator for continual operations
                operatorChoice = (e.target.getAttribute('data-ref')); 
            } else { 
                operatorChoice = (e.target.getAttribute('data-ref'));
            };
            operatorClicked = true;
    });
});

equalsButton.addEventListener('click', () => {
    if (firstNum == '0' && operatorChoice == '/' && secondNum == '0') {
        operate(firstNum, secondNum, operatorChoice);
        result = 'nope';
        displayNum.innerHTML = result;
        equalsClicked = true;
    };
    if (firstNum == '' || operatorChoice == '' || secondNum == '') {
        return;
    } else {
        operate(firstNum, secondNum, operatorChoice);
        displayNum.innerHTML = result;
    };
    equalsClicked = true;
});

decButton.addEventListener('click', () => {
    displayNum.innerHTML += '.';
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
    calc = '';
    calcSlice = '';
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