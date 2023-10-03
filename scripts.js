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
        const resultado = eval(valorNoDisplay); //pega uma expressão numerica na string e calcula
        valorNoDisplay = resultado.toString(); //transforma o "resultado" em uma string
        document.getElementById('display').value = valorNoDisplay;
    } catch (erro) {
        valorNoDisplay = 'Erro';
        document.getElementById('display').value = valorNoDisplay;
    }
}





