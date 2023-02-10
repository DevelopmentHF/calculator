// ============================================================================
// Math operation functions
// ============================================================================
const add = function(num1, num2) {
    return num1 + num2;
}

const subtract = function(num1, num2) {
    return num1 - num2;
}

const multiply = function(num1, num2) {
    return num1 * num2;
}

const divide = function(num1, num2) {
    // check for divide by zero errors
    if (num2 == 0) {
        return "ERROR";
    } else {
        return num1 / num2;
    }
}

// ============================================================================
// Button functionality
// ============================================================================

let prevNum = 0;
let curNum = 0;
let operation = '';

// Writes clicked number onto the screen
const displayValueElement = document.querySelector("#displayValue");
const numButtons = document.querySelectorAll(".num");
numButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (displayValueElement.textContent == '0') {
            displayValueElement.textContent = btn.textContent;
        } else {
            displayValueElement.textContent = displayValueElement.textContent.concat(btn.textContent);
        }
    });
});

// Clears the screen
const clearScreen = function() {
    displayValueElement.textContent = '0';
    prevNum = 0;
    curNum = 0;
    operation = '';
};
const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener('click', () => {
    clearScreen();
});

// Deletes last number written
const delBtn = document.querySelector("#delete");
delBtn.addEventListener('click', () => {
    if (displayValueElement.textContent.length != 1) {
        displayValueElement.textContent = displayValueElement.textContent.slice(0, -1);
    } else {
        displayValueElement.textContent = '0';
    }
});

// Operation button functionality
const savePrevNum = function() {
    prevNum = Number(displayValueElement.textContent);
    displayValueElement.textContent = '0';
};
const operationBtns = document.querySelectorAll(".operation");
operationBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        savePrevNum();
        operation = btn.id;
        console.log(operation);
    });
});

// Equals button
const equalsBtn = document.querySelector("#equals");
equalsBtn.addEventListener('click', () => {
    curNum = Number(displayValueElement.textContent);
    console.log(`operation=${operation} , prevnum = ${prevNum}, curnum = ${curNum}`);
    if (operation == 'add') {
        displayValueElement.textContent = add(prevNum, curNum).toString();
    } else if (operation == 'subtract') {
        displayValueElement.textContent = subtract(prevNum, curNum).toString();
    } else if (operation == 'multiply') {
        displayValueElement.textContent = multiply(prevNum, curNum).toString();
    } else if (operation == 'divide') {
        displayValueElement.textContent = divide(prevNum, curNum).toString();
    }
});