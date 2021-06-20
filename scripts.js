const inputContainer = document.querySelector('.input-container input');
const resultsContainer = document.querySelector('.results-container input');
const numberBtns = document.querySelectorAll('.number');
const operatorBtns = document.querySelectorAll('.operator');
let firstVal;
let secondVal;
let currentOperator;
let lastInput;

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
    if (num2 == 0) return 'Cannot divide by zero';
	return num1 / num2;
}

function operate(nums, operation) {
    const [num1, num2] = nums.map(Number)
    const result = window[operation.getAttribute('data-operator')](num1, num2)
    inputContainer.value = result
    firstVal = result;
    secondVal = ''
}

function displayValues(btn) {
    if (Array.from(operatorBtns).some(element => element.classList.contains('btns-active'))) {
        inputContainer.value = ''
        currentOperator.classList.toggle('btns-active')
    } 
    inputContainer.value += btn
}


numberBtns.forEach(element => element.addEventListener('click', function() {displayValues(this.textContent)}));

operatorBtns.forEach(element => element.addEventListener('click', function() {
    if (inputContainer.value !== '') {
        this.classList.toggle('btns-active')
        if (firstVal == undefined) {
            firstVal = inputContainer.value
        } else {
            secondVal = inputContainer.value         
            if ((firstVal !== undefined) && (secondVal !== undefined) ) {
                operate([firstVal, secondVal], currentOperator) 
            } 
        }
        if (this.textContent !== '=') currentOperator = this;
    }
        
}))

