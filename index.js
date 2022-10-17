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
let storedOperator = '';

for (let btn of buttons) {
    btn.addEventListener('click', function() {
        display.textContent += this.value;

        let val = this.value;

        if(this.classList.contains('number')) {
            inputNumber += val;
        } else if (this.classList.contains('operator')) {
            
            if(number1 === '') {
              number1 = inputNumber;
              inputNumber = '';  
            } else if(number1) {
                number2 = inputNumber;
                inputNumber = '';
            } 
            
            if(clickedOperator === '') {
                clickedOperator = val;
            } else if(clickedOperator) {
                storedOperator = clickedOperator;
                clickedOperator = val;
            }
            
            
        }

        while(number1 && number2 && storedOperator) {
            let a = Number(number1);
            let b = Number(number2);

            var operateFunctions = {
                '+': function(a, b) { return a + b },
                '-': function(a, b) { return a - b },
                 // ...
                 //
                 //
            };

           

            

            result += operateFunctions[storedOperator](a, b);
            display.textContent = '';
            display.textContent = result;
            display.textContent += clickedOperator;
            number1 = result;
            result = '';
            number2 = '';
            storedOperator = '';
            
            break;
        }  

        console.log(number1, clickedOperator, number2); 

    }
    )};

     
        
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