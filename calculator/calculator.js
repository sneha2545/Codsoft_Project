let displayValue = "0";

function updateDisplay() {
    document.getElementById("display").textContent = displayValue;
}

function clearDisplay() {
    displayValue = "0";
    updateDisplay();
}

function appendInput(value) {
    if (displayValue === "0" && value !== ".") {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}

function calculateResult() {
    try {
        displayValue = eval(displayValue).toString();
    } catch (error) {
        displayValue = "Error";
    }
    updateDisplay();
}
