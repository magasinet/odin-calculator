// add
const add = function(num1, num2) {
    return num1 + num2;
};

//subtract
const subtract = function(num1, num2) {
    return num1 - num2;
};

//multiply
const multiply = function(num1, num2) {
    return num1 * num2;
};

//divide
const divide = function(num1, num2) {
    return num1 / num2;
};


function operate(operator, num1, num2) {
    return operator(num1, num2);
}


let numbers = document.querySelectorAll('.number');

/* numbers.forEach(numberBtn => {
    numberBtn.addEventListener('click', () => {
        console.log(numberBtn.value);
    });
}); */

let operators = document.querySelectorAll('.operator');

/* operators.forEach(operatorBtn => {
    operatorBtn.addEventListener('click', () => {
        console.log(operatorBtn.value);
    });
});
 */

let inputNumber = '';
let clickedOperator = '';

let display = document.querySelector('#display');

let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        display.textContent += button.textContent;
        
        //return button.value;
        //displayValue += button.value;

/*         if(button.classList.contains('number')) {
            number += button.value;
        } else if (button.classList.contains('operator')) {
            operator = button.value;
            number1 = number;
            number = '';
        } else if (button.classList.contains('equal')) {
           
            console.log(operate(add, parseFloat(number), parseFloat(number1)));
        } */
       

    });
});


