document.getElementById('loanForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores del formulario
    const amount = parseFloat(document.getElementById('amount').value);
    const interest = parseFloat(document.getElementById('interest').value);
    const terms = parseInt(document.getElementById('terms').value);
    
    // Llamar a la función para calcular el total a pagar
    const totalPayment = calculateTotalPayment(amount, interest, terms);
    
    // Mostrar el resultado
    document.getElementById('result').innerText = `Total a pagar: $${totalPayment.toFixed(2)}`;
});

// Función para calcular el total a pagar
function calculateTotalPayment(amount, interest, terms) {
    const monthlyInterestRate = (interest / 100) / 12; // Tasa de interés mensual
    const monthlyPayment = (amount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -terms));
    
    let totalPayment = 0;

    // Calcular el total a pagar utilizando un ciclo
    for (let i = 0; i < terms; i++) {
        totalPayment += monthlyPayment; // Sumar el pago mensual
    }

    return totalPayment; // Retornar el total
}