function add (num1, num2) {
	return num1 + num2;
}

function subtract (num1, num2) {
	return num1 - num2;
}

function multiply (num1, num2) {
	return num1 * num2;
}

function divide (num1, num2) {
	return num1 / num2;
}

function operate (nums, operation) {
    const [num1, num2] = nums
    return operation(num1, num2)
}