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

var numOne = 2;
var numTwo = 5;
var operator;

// Operate function to call two numbers and operator function.
 
function operate (number) {
    return number;
};

operate(add(numOne, numTwo));

// Create function to populate display on digit click. Store display number in var.

let numberButtons = document.querySelectorAll('.number-btn');
let displayNum = document.querySelector('.display');
var currentNum = '';

numberButtons.forEach((number) => {
    number.addEventListener('click', (e) => {
        currentNum = displayNum.innerHTML = (e.target.getAttribute('data-num'));
    });
});