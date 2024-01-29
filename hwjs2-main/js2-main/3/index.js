document.getElementById('verificarBtn').addEventListener('click', verificarPassword);

function verificarPassword() {
    var digit1 = document.getElementById('digit1').value;
    var digit2 = document.getElementById('digit2').value;
    var digit3 = document.getElementById('digit3').value;

    var seleccion = digit1 + digit2 + digit3;
    var resultadoParrafo = document.getElementById('resultado');

    if (seleccion === '911') {
        resultadoParrafo.textContent = 'Password 1 correcto';
    } else if (seleccion === '714') {
        resultadoParrafo.textContent = 'Password 2 correcto';
    } else {
        resultadoParrafo.textContent = 'Password incorrecto';
    }
}