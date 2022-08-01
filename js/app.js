function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        // console.log('got 3 dig', pin);
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();

    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-number');

    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }

})

// submit

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumber = document.getElementById('typed-number').value;

    // notification id
    const successMessage = document.getElementById('notify-success');
    const fileError = document.getElementById('notify-file');

    if (pin == typedNumber) {

        successMessage.style.display = 'block';
        fileError.style.display = 'none';
    }
    else {

        successMessage.style.display = 'none';
        fileError.style.display = 'block';
    }
}