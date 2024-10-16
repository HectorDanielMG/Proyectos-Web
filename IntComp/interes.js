function calculateInterest() {
    let P = parseFloat(document.getElementById('principal').value);
    let r = parseFloat(document.getElementById('rate').value) / 100;
    let t = parseFloat(document.getElementById('time').value);
    let n = parseFloat(document.getElementById('n').value);

    let A = P * Math.pow((1 + r / n), n * t);

    document.getElementById('result').textContent = `El monto total después de ${t} años es: $${A.toFixed(2)}`;
}
 
