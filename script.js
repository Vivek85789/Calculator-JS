
const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.box');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        switch (value) {
            case 'AC':
                clearDisplay();
                break;
            case '←':
                backspace();
                break;
            case '=':
                calculate();
                break;
            case '×':
                appendToDisplay('*');
                break;
            case '÷':
                appendToDisplay('/');
                break;
            default:
                appendToDisplay(value);
        }
    });
});

function appendToDisplay(value) {
    screen.value += value;
}

function clearDisplay() {
    screen.value = '';
}

function backspace() {
    screen.value = screen.value.slice(0, -1);
}

function calculate() {
    try {
        screen.value = eval(screen.value);
    } catch (error) {
        screen.value = 'Error';
    }
}

