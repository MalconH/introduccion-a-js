const $agregarNumero = document.querySelector("#agregar-numero");
const $procesarNumeros = document.querySelector("#procesar-numeros");
const numeros = [];

$agregarNumero.onclick = function() {
    const numero = Number(document.querySelector("#input-numero").value);
    const $numero = document.createElement("li");
    $numero.className = "lista-numeros__numero"
    
    $numero.textContent = numero;

    if ($numero.textContent !== "") {
        document.querySelector(".lista-numeros").appendChild($numero);
        document.querySelector(".form").reset();
        numeros.push(numero);
    }

    return false
}

$procesarNumeros.onclick = function() {
    const numeroPromedio = damePromedio(numeros);
    const numeroMenor = Math.min(...numeros);
    const numeroMayor = Math.max(...numeros);
    const numeroMasFrecuente = dameMasFrecuente(numeros);
    
    document.querySelector(".resultado").innerHTML = 
        `<em>Numero Promedio: ${numeroPromedio}</em>
        <em>Numero Menor: ${numeroMenor}</em> 
        <em>Numero Mayor: ${numeroMayor}</em> 
        <em>Numero Más frecuente: ${numeroMasFrecuente}</em>`;
}

function damePromedio(numeros) {
    let sumaNumeros = 0;
    for (let i = 0; i < numeros.length; i++) {
        sumaNumeros += numeros[i];
    }

    return sumaNumeros / numeros.length;
}

function dameMasFrecuente(numeros) {
    let masFrecuente;
    let contadorRepeticiones = 0;
    let maximoRepeticiones = 0;

    for (let i = 0; i < numeros.length; i++) {
        for (let j = 0; j < numeros.length; j++) {
            if (numeros[i] === numeros[j]) {
                contadorRepeticiones++;
            }
        }
        if (contadorRepeticiones > maximoRepeticiones) {
            masFrecuente = numeros[i];
            maximoRepeticiones = contadorRepeticiones;
        } else if (contadorRepeticiones === maximoRepeticiones) {
            masFrecuente = Math.max(masFrecuente, numeros[i]);
        }
    contadorRepeticiones = 0;
    }

    return masFrecuente;
}
