const inputContainer = document.querySelector('.input-container input');
const resultsContainer = document.querySelector('.results-container input');
const numberBtns = document.querySelectorAll('.number');
const operatorBtns = document.querySelectorAll('.operator');
let firstVal;
let secondVal;
let currentOperator;

function add(num1, num2) {
	return num1 + num2;
}

function subtract(num1, num2) {
	return num1 - num2;
}

function multiply(num1, num2) {
	return num1 * num2;
}

function divide(num1, num2) {
	return num1 / num2;
}

function operate(nums, operation) {
    const [num1, num2] = nums.map(Number)
    const result = window[operation](num1, num2)
    inputContainer.value = result
    firstVal = result;
    secondVal = ''
}

function displayValues(btn) {
    if (currentOperator !== undefined) inputContainer.value = ''
    inputContainer.value += btn
}

numberBtns.forEach(element => element.addEventListener('click', function() {displayValues(this.textContent)}));

operatorBtns.forEach(element => element.addEventListener('click', function() {
        if (firstVal == undefined) {
            firstVal = inputContainer.value
        } else {
            secondVal = inputContainer.value           
            if ((firstVal !== undefined) && (secondVal !== undefined) ) {
                operate([firstVal, secondVal], currentOperator) 
            } 
        } 
        currentOperator = this.getAttribute('data-operator');
}))

