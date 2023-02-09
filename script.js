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
// Show clicked numbers on screen
// ============================================================================
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