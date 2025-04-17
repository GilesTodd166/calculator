// Basic math functions, add, subtract, divide, multiply.

function add (a, b) {
    return a + b;
};

function subtract (a, b) {
    return a - b;
};

function divide (a, b) {
    return a / b;
};

function multiply (a, b) {
    return a * b;
};

// Variables for calculation operations, a, b, operator.



// Operate function to call two numbers and operator function.
 
function operate (a, b, mathOp) {
    let number = '';
        if (mathOp == '+') {
            number = a + b;
        } else if (mathOp == '-') { 
            number = a - b;
        } else if (mathOp == '/') {
            number = a / b;
        } else {
            number = a * b;
        }
        return number;
};

// Create function to populate display on digit click. Store display number in var.

let numberButtons = document.querySelectorAll('.number-btn');
let displayNum = document.querySelector('.display');
let firstNum = '';
let secondNum = '';
let operatorChoice = '';

let operatorButtons = document.querySelectorAll('.operator-btn');

let equalsButton = document.querySelector('.equals-btn');

numberButtons.forEach((number) => {
    number.addEventListener('click', (e) => {
        if (firstNum != '') {
            secondNum = displayNum.innerHTML = (e.target.getAttribute('data-num'));
        } else 
            firstNum = displayNum.innerHTML = (e.target.getAttribute('data-num'));
    });
});

operatorButtons.forEach((item) => {
    item.addEventListener('click', (e) => {
        operatorChoice = (e.target.getAttribute('data-ref'));
    });
});

equalsButton.addEventListener('click', () => {
    handleOperate();
});

console.log(firstNum);
console.log(operatorChoice);
console.log(secondNum);

// // Create function to store first number choice, 
// // operation choice and second number choice, 
// // pass to operate function on equal press.

function handleOperate (numOne, numTwo, operatorChoice) {
    if (firstNum != '' &&  secondNum != '' && operatorChoice != '') {
        operate(numOne, numTwo, operatorChoice);
        number = displayNum.innerHTML;
    };
};
