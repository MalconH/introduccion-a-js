function dameMayor(numeros) {
    let nroMayor = numeros[0];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] >= nroMayor) {
            nroMayor = numeros[i];
        }
    }

    return nroMayor;
}

function dameMenor(numeros) {
    let nroMenor = numeros[0];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] <= nroMenor) {
            nroMenor = numeros[i];
        }
    }

    return nroMenor;
}

function damePromedio(numeros) {
    let sumaTotal = 0;

    for (let i = 0; i < numeros.length; i++) {
        sumaTotal += numeros[i];
    }

    return (sumaTotal / numeros.length).toFixed(2);
}
