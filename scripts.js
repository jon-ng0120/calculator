'use strict'
const inputContainer = document.querySelector('.input-container input');
const resultsContainer = document.querySelector('.results-container input');
const previewBtns = document.querySelectorAll('.number, .operator')
const numberBtns = document.querySelectorAll('.number');
const operatorBtns = document.querySelectorAll('.operator')
const operatorBtnsContent = Array.from(operatorBtns).map(element => element.textContent);
const clearBtn = document.querySelector('.clear');
const deleteBtn = document.querySelector('.delete')
const negativeBtn = document.querySelector('.negative')
let firstVal = '';
let secondVal = '';
let currentOperator = ''

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

function equals() {
    if (firstVal !== '') resultsContainer.value = firstVal
}

function operate(nums, operation) {
    const [num1, num2] = nums.map(Number)
    const result = window[operation](num1, num2) 
    firstVal = result;
    console.log(result);
}

function displayNumber(num) {
    if (inputContainer.value.slice(-1) == '=') {
        clear()
    }

    if (firstVal == '' && resultsContainer.value == '0') resultsContainer.value = ''
    if (operatorBtnsContent.includes(num)) {
        inputContainer.value += resultsContainer.value + num
    } else {
        resultsContainer.value += num
    } 
}

function negative() {
    resultsContainer.value *= -1
}

function clear() {
    firstVal = 0;
    secondVal = 0;
    firstVal = '';
    secondVal = '';
    currentOperator = '';
    inputContainer.value = '';
    resultsContainer.value = '0'
}

function del() {
    resultsContainer.value = resultsContainer.value.slice(0, -1)
}

negativeBtn.addEventListener('click', function() {negative()})

deleteBtn.addEventListener('click', function() {del()})

clearBtn.addEventListener('click', function() {clear()})

numberBtns.forEach(element => element.addEventListener('click', function() {
        displayNumber(this.textContent) 
}))


operatorBtns.forEach(element => element.addEventListener('click', function() {
    // if (resultsContainer.value !== '0') {
        if (firstVal == '') {
            firstVal = resultsContainer.value;
            displayNumber(this.textContent)
            resultsContainer.value = '';
            currentOperator = this.getAttribute('data-operator')
        } else {
            secondVal = resultsContainer.value
            displayNumber(this.textContent)
            resultsContainer.value = '';

            if ((firstVal !== '') && (secondVal !== '') ) {
                operate([firstVal, secondVal], currentOperator) 
            }
            currentOperator = this.getAttribute('data-operator')       
    // }
}
    
}))
document.querySelector('.equals').addEventListener('click', function() {
    equals()
})