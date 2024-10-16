function convertTemperature() {
    let tempValue = parseFloat(document.getElementById('tempValue').value);
    let tempUnit = document.getElementById('tempUnit').value;
    let result;

    if (tempUnit === 'celsius') {
        result = (tempValue * 9/5) + 32;
        document.getElementById('tempResult').textContent = `${tempValue}°C es ${result.toFixed(2)}°F`;
    } else {
        result = (tempValue - 32) * 5/9;
        document.getElementById('tempResult').textContent = `${tempValue}°F es ${result.toFixed(2)}°C`;
    }
}

function convertCurrency() {
    let amount = parseFloat(document.getElementById('amount').value);
    let exchangeRate = 17.50;
    let result = amount * exchangeRate;

    document.getElementById('currencyResult').textContent = `$${amount} USD es $${result.toFixed(2)} MXN`;
}
