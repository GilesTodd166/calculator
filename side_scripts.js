

function operate (a, b, mathOp) {
    let number;
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

operate(5, 5, '+');


let number = 0;
    function operate (a, b, mathOp) {
        
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

    function handleOperate (firstNum, secondNum, operatorChoice) {
      if (firstNum != '' &&  secondNum != '' && operatorChoice != '') {
          operate(firstNum, secondNum, operatorChoice);
          number = displayNum.innerHTML;
      };
  };

  numberButtons.forEach((number) => {
   number.addEventListener('click', (e) => {
       if (firstNum != '') {
           secondNum = displayNum.innerHTML = (e.target.getAttribute('data-num'));
       } else 
           firstNum = displayNum.innerHTML = (e.target.getAttribute('data-num'));
   });
});


delButton.addEventListener('click', () => {
    let updatedNum;
    updatedNum = displayNum.innerHTML = Math.floor(firstNum / 10);
    //displayNum.innerHTML = Math.floor(firstNum / 10);
        if (secondNum = '') { 
            firstNum = updatedNum;
        } else {
            secondNum = updatedNum;
        }
});

let updatedNum;
delButton.addEventListener('click', () => {
    updatedNum = Math.floor(firstNum / 10);
    //displayNum.innerHTML = Math.floor(firstNum / 10);
        if (secondNum != '') { 
            firstNum = updatedNum;
            displayNum.innerHTML = firstNum;
        } else {
            secondNum = updatedNum;
            displayNum.innerHTML = secondNum;
        }
});

// This is very close, just doesnt handle fully deleting the secondNum and reentering new numbers.
let updatedNum;
delButton.addEventListener('click', () => {
        if (secondNum == '') { 
            updatedNum = Math.floor(firstNum / 10);
            displayNum.innerHTML = updatedNum;
            firstNum = updatedNum;
        } else {
            updatedNum = Math.floor(secondNum / 10);
            displayNum.innerHTML = updatedNum;
            secondNum = updatedNum;
        }
            if (firstNum === 0 || secondNum ===  0) {
                displayNum.innerHTML = '';
            }
});