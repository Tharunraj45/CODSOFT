const display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {

    let expression = display.value;
    let result;
    if (expression.includes("+")) {
        let parts = expression.split("+");
        result = Number(parts[0]) + Number(parts[1]);
    }

    else if (expression.includes("-")) {
        let parts = expression.split("-");
        result = Number(parts[0]) - Number(parts[1]);
    }

    else if (expression.includes("*")) {
        let parts = expression.split("*");
        result = Number(parts[0]) * Number(parts[1]);
    }

    else if (expression.includes("/")) {
        let parts = expression.split("/");
        let num1 = Number(parts[0]);
        let num2 = Number(parts[1]);

        if (num2 === 0) {
            result = "Error";
        } else {
            result = num1 / num2;
        }
    }

    display.value = result;
}