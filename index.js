// add
function add (num1, num2) {
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
let operators = document.querySelectorAll('.operator');
let display = document.querySelector('#display');
let buttons = document.querySelectorAll('button');

let inputNumber = '';
let number1 = '';
let number2 = '';
let clickedOperator = '';
let result = '';


for (let btn of buttons) {
    btn.addEventListener('click', function() {
        display.textContent += this.value;

        let val = this.value;

        if(this.classList.contains('number')) {
            inputNumber += val;
        } else if (this.classList.contains('operator')) {
            clickedOperator += val;
        }
    }
    )};

        /* 
        HOW TO GET NUMBER
            IF CLASS CONTAINS 'number'
            STORE VALUE UNTIL NO LONGER NUMBER

        function add(a,b) {
            return a + b;
        }
        

        function operate(number1, operator, number2)
            add() or substract() depending on which operator
        
        */

        
        
/* 
    if(this.classList.contains('number')) {

            inputNumber += val;

            
        } else if (this.classList.contains('operator')) {
            clickedOperator += val;

            if(!result) {
                storedNumber = inputNumber;
            } else {
                storedNumber = result;
            }

            //storedNumber = inputNumber;

            inputNumber = '';

           



            
        } else if (this.classList.contains('equal') && storedNumber) {

            let a = Number(storedNumber);
            let b = Number(inputNumber);

            var operators = {
                '+': function(a, b) { return a + b },
                '-': function(a, b) { return a - b },
                 // ...
                 //
                 //
            };

           

            

            result += operators[clickedOperator](a, b);
            storedNumber = '';
            inputNumber = '';

            clickedOperator = '';
            alert(result);






        }

        console.log(storedNumber, clickedOperator, inputNumber);  */
 





    






    /* inputNumber1 += val;
    console.log(inputNumber1); */


/* 
Each time a user clicks a number, save the number in variable 1.
Until an operator is pressed, stop adding numbers to that variable.
Save operator. 
Numbers after operator is pressed, is saved to variable 2.
When operator or equal is pressed after:
    => Calculate variable 1, operator, variable 2.
    => display the result
    => add result to variable 1.
If next input is number => restart/clear
If next input is operator => varable 1, operator, variable 2. 

let number1 = '';
let number2 = '';
let operator = '';
currentNumber = '';

If(button= number and number1=empty) {
    number1 += button.value
} else if (button=operator) {
    operator= button.value
    currentNumber = number1;
} else if(button=number and number1=hasnumber and operator=hasvalue) {
    number2 += button.value
} else if ((button=operator || button=equal) && number1=value && number2=value) {
    calculate(operator, number1, number2);
    number1 = '';
    number1 = result of calculation.
    number2 = '';
}

IF (BUTTON=OPERATOR) {
    LET OP = OPERATOR
    LET V1 = VALUE;
    LET VALUE = 0;

} ELSE IF () {
    
    
}

EACH TIME USER CLICKS , SAVE VALUE IN ARRAY.
IF OPERATOR/EQUAL IS CLICKED. PUSH VALUES FROM ARRAY TO A VARIABLE.
CLEAR ARRAY AND NEXT NUMBERS IS SAVED IN ARRAY.






*/