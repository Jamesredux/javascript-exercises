function add (a,b) {
	return a + b;	
}

function subtract (a, b) {
	return a - b
}

function sum (array) {
	let sumTotal = 0
	array.forEach(number => {
		sumTotal += number;
	});
	return sumTotal;
}

function multiply (array) {
	firstNumber = array[0]
	for (i = 1; i < array.length; i++) {
		firstNumber *= array[i];
	}
	return firstNumber;
}

function power(a, b) {
	return a**b;
	
}

function factorial(a) {
	if (a == 0) {
		return 1
	} else {
		let factSum = a;
		for(i = (a-1); i > 0; i--) {
			factSum *= i;
		}
		return factSum;
	};

}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}