function calcularIMC(){
    var peso = parseFloat(document.getElementById('pesoInput').value);
    var altura = parseFloat(document.getElementById('alturaInput').value);

    if(isNaN(peso) || isNaN(altura)||peso<=0||altura<=0){
        document.getElementById('resultado').innerText='Por favor,ingresa un peso y una altura';
        return;
    }

    var imc=peso/(altura*altura);
    var resultadoDiv = document.getElementById('resultado');


    switch (true) {
        case (imc<18.5):
            resultadoDiv.innerText='Estas en el rango de peso Insuficiente'
            break;
        case(imc<=24.9):
            resultadoDiv.innerText='Estas en el rango de peso Saludable'
            break;
        case (imc<=29.9):
            resultadoDiv.innerText='Estas en el rango de peso Sobrepeso'
            break;
            default:
                resultadoDiv.innerText='Estas en el rango de Obesidad'
            break;
    }
}
