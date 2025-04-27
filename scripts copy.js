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

// Create function to populate display on digit click. Store display number in var.

let firstNum = '';
let secondNum = '';
let operatorChoice = '';

let numberButtons = document.querySelectorAll('.number-btn');
let displayNum = document.getElementById('display');

let operatorButtons = document.querySelectorAll('.operator-btn');

let equalsButton = document.querySelector('.equals-btn');

let clearButton = document.querySelector('.clear-btn');
let delButton = document.querySelector('.del-btn');

let number = '';
    function operate (a, b, mathOp) {
        let aToInt = parseInt(a);
        let bToInt = parseInt(b);
            if (mathOp == '+') {
                number = (aToInt + bToInt);
            } else if (mathOp == '-') { 
                number = (a - b);
            } else if (mathOp == '/') {
                number = (a / b);
            } else {
                number = (a * b);
            }
            return number;
    };

numberButtons.forEach((number) => {
    number.addEventListener('click', (e) => {                                                                  
                if (operatorChoice == '') {
                    firstNum = displayNum.innerHTML += (e.target.getAttribute('data-num'));
                } else if (operatorChoice != '') {
                    secondNum += (e.target.getAttribute('data-num'));
                    displayNum.innerHTML = secondNum;
                }
    });
});

operatorButtons.forEach((item) => {
    item.addEventListener('click', (e) => {
        operatorChoice = (e.target.getAttribute('data-ref'));
        displayNum.innerHTML = operatorChoice;
            // if (displayNum.innerHTML = '') {
            //     operatorButtons.removeEventListener('click', e);
            // }
            // if (firstNum == '') {
            //     e.item.setAttribute('disabled');
            // };
    });
});

equalsButton.addEventListener('click', () => { // STOP - DISABLE BUTTONS CONDITIONALLY, BEFORE FIRTNUM HAS BEEN SET
   if (firstNum = '') {
            equalsButtons.removeEventListener('click');
        }
    operate(firstNum, secondNum, operatorChoice);
    displayNum.innerHTML = number;
        // if (firstNum == '') {
        //     equalsButton.removeEventListener('click', e);
        // }
});

clearButton.addEventListener('click', () => {
    displayNum.innerHTML = '';
    firstNum = '';
    secondNum = '';
    operatorChoice = '';
    number = '';
});

let updatedNum;
delButton.addEventListener('click', (e) => {
        if (number != '') {
            delButton.removeEventListener('click', e);
        } else if (secondNum == '') { 
            updatedNum = firstNum.slice(0, -1);
            displayNum.innerHTML = updatedNum;
            firstNum = updatedNum;
                // if (firstNum == '' || secondNum == '') {
                //     delButton.removeEventListener('click', e);
                // };
                // if (displayNum.innerHTML = '') {
                //     delButton.removeEventListener('click', e);
                // }
        } else {
            updatedNum = secondNum.slice(0, -1);
            displayNum.innerHTML = updatedNum;
            secondNum = updatedNum;
                if (secondNum == '') {
                    delButton.removeEventListener('click', e);
                };
        }
});

// // Create function to store first number choice, 
// // operation choice and second number choice, 
// // pass to operate function on equal press.

// function handleOperate (firstNum, secondNum, operatorChoice) {
//     if (firstNum != '' &&  secondNum != '' && operatorChoice != '') {
//         operate(firstNum, secondNum, operatorChoice);
//         number = displayNum.innerHTML;
//     }
// };

// console.log(firstNum);
// console.log(operatorChoice);
// console.log(secondNum);
// console.log(number);

// console.log(firstNum);
// console.log(secondNum);