function calculateInterest() {
    // Obtener valores de los campos del formulario
    let capital = parseFloat(document.getElementById('capital').value);
    let rate = parseFloat(document.getElementById('rate').value) / 100;
    let time = parseFloat(document.getElementById('time').value);
    let compounds = parseFloat(document.getElementById('compounds').value);

    // Fórmula del interés compuesto
    let amount = capital * Math.pow((1 + rate / compounds), compounds * time);

    // Mostrar el resultado
    document.getElementById('result').textContent = `Monto final: $${amount.toFixed(2)}`;
}

