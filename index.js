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
