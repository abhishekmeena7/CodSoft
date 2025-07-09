
const inputField = document.querySelector('.input');
const buttons = document.querySelectorAll('.button');


function handleInput(value) {
    if (value === 'AC') {
        inputField.value = ''; 
    } else if (value === '=') {
        try {
            inputField.value = eval(inputField.value); 
        } catch (error) {
            inputField.value = 'Error'; 
        }
    } else {
        inputField.value += value; 
    }
}


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'G') {
            window.open('https://gemini.google.com', '_blank'); 
        } else if (value === 'C' && inputField.value === '') {
            window.open('https://chat.openai.com', '_blank'); 
        } else {
            handleInput(value); 
        }
    });
});


window.addEventListener('keydown', (event) => {
    const key = event.key;
    const validKeys = [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        '.', '+', '-', '*', '/', '%', '=', 'Enter', 'Backspace', 'Delete', 'c', 'C'
    ];

    if (validKeys.includes(key)) {
        if (key === 'Enter' || key === '=') {
            handleInput('=');
        } else if (key === 'Backspace' || key === 'Delete') {
            inputField.value = inputField.value.slice(0, -1); 
        } else if (key.toLowerCase() === 'c') {
            handleInput('C');
        } else {
            handleInput(key);
        }
    }


    if (key.toLowerCase() === 'g') {
        window.open('https://gemini.google.com', '_blank'); 
    } else if (key.toLowerCase() === 'c' && inputField.value === '') {
        window.open('https://chat.openai.com', '_blank'); 
    }
});
