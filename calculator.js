// Arithmetic functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    // Prevent division by zero
    if (number2 === 0) {
        return "Cannot divide by zero";
    }
    return number1 / number2;
}

// Helper to get numbers
function getNumbers() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    return { number1, number2 };
}

// Event listeners for buttons
document.getElementById('add').addEventListener('click', function() {
    const { number1, number2 } = getNumbers();
    document.getElementById('calculation-result').textContent = add(number1, number2);
});

document.getElementById('subtract').addEventListener('click', function() {
    const { number1, number2 } = getNumbers();
    document.getElementById('calculation-result').textContent = subtract(number1, number2);
});

document.getElementById('multiply').addEventListener('click', function() {
    const { number1, number2 } = getNumbers();
    document.getElementById('calculation-result').textContent = multiply(number1, number2);
});

document.getElementById('divide').addEventListener('click', function() {
    const { number1, number2 } = getNumbers();
    document.getElementById('calculation-result').textContent = divide(number1, number2);
});
