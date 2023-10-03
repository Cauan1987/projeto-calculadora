let display = document.getElementById("display");

function anexar(valor) {
    valorNoDisplay += valor;
    document.getElementById("display").value = valorNoDisplay;
}

function limpar() {
    valorNoDisplay = "";
    document.getElementById("display").value = valorNoDisplay;
}

function calcular() {
    try {
        const resultado = eval(valorNoDisplay); 
        valorNoDisplay = resultado.toString();
        document.getElementById('display').value = valorNoDisplay;
    } catch (erro) {
        valorNoDisplay = 'Erro';
        document.getElementById('display').value = valorNoDisplay;
    }
}





