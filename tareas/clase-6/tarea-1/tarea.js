/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

document.querySelector("#enviar-cantidad-integrantes").onclick = function (event) {
    const $cantidadIntegrantes = document.querySelector("#cantidad-integrantes");
    const cantidadIntegrantes = Number($cantidadIntegrantes.value);

    const errorIntegrantesIngresados = validarIntegrantesIngresados(cantidadIntegrantes);

    if (errorIntegrantesIngresados) {
        console.log(errorIntegrantesIngresados);
        return false;
    }


    borrarIntegrantesAnteriores();
    crearIntegrantes(cantidadIntegrantes);
    mostrarControles();
    ocultarResultados();

    $cantidadIntegrantes.value = "";
    event.preventDefault();
};

document.querySelector("#borrar").onclick = function () {
    resetear();
};

function crearIntegrantes(cantidadIntegrantes) {
    for (let i = 0; i < cantidadIntegrantes; i++) {
        crearIntegrante(i);
    }
}

function borrarIntegrantesAnteriores() {
    const $integrantesAnteriores = document.querySelectorAll(".integrante");

    for (let i = 0; i < $integrantesAnteriores.length; i++) {
        $integrantesAnteriores[i].remove();
    }
}

function mostrarControles() {
    const $divControles = document.querySelector(".controles");
    $divControles.classList.remove("hidden");
}
function ocultarControles() {
    const $divControles = document.querySelector(".controles");
    $divControles.classList.add("hidden");
}

function validarIntegrantesIngresados(integrantesIngresados) {
    const INTEGRANTES_MAXIMOS = 99;

    if (integrantesIngresados <= 0) {
        return "La cantidad de integrantes ingresados debe ser mayor que 0";
    }

    if (!/^[0-9]+$/.test(integrantesIngresados)) {
        return "La cantidad de integrantes ingresados debe ser un numero válido";
    }

    if (integrantesIngresados > INTEGRANTES_MAXIMOS) {
        return "La cantidad de integrantes ingresados no debe ser mayor a " + INTEGRANTES_MAXIMOS;
    }

    return "";
}

function validarEdad(edad) {
    const EDAD_MAXIMA = 199;

    if (edad <= 0) {
        return "La edad debe ser mayor que 0";
    }

    if (!/^[0-9]+$/.test(edad)) {
        return "La edad debe ser un número válido";
    }

    if (edad >= EDAD_MAXIMA) {
        return "La edad no puede ser mayor que " + EDAD_MAXIMA;
    }

    return "";
}

function validarSalario(salario) {
    if (salario <= 0) {
        return "El salario debe ser mayor que 0";
    }

    if (!/^[0-9]+$/.test(edad)) {
        return "El salario debe ser un monto válido";
    }

    return "";
}

function dameMayor(numeros) {
    let numeroMayor = numeros[0];

    for (let i = 0; i < numeros.length; i++) {
        numeros[i] >= numeroMayor ? numeroMayor = numeros[i] : "";
    }

    return numeroMayor;
}

function dameMenor(numeros) {
    let numeroMenor = numeros[0];

    for (let i = 0; i < numeros.length; i++) {
        numeros[i] <= numeroMenor ? numeroMenor = numeros[i] : "";
    }

    return numeroMenor;
}

function damePromedio(numeros) {
    if (numeros.length === 0) return 0;

    let sumaTotal = 0;

    for (let i = 0; i < numeros.length; i++) {
        sumaTotal += numeros[i];
    }

    return (sumaTotal / numeros.length).toFixed(2);
}

function mostrarResultados() {
    document.querySelector(".resultados").classList.remove("hidden");
}

function ocultarResultados() {
    document.querySelector(".resultados").classList.add("hidden");
}

function resetear() {
    borrarIntegrantesAnteriores();
    ocultarControles();
    ocultarResultados();
}

document.querySelector("#calcular").onclick = function () {
    const $edadesIntegrantes = document.querySelectorAll(".edad-integrante");
    const $salariosIntegrantes = document.querySelectorAll(".salario-integrante");
    const edadesIntegrantes = [];

    for (let i = 0; i < $edadesIntegrantes.length; i++) {
        const edad = Number($edadesIntegrantes[i].value);
        const error = validarEdad(edad);

        if (error) {
            console.log(`Integrante #${i}: ${error}`);
            return false;
        }

        edadesIntegrantes.push(edad);
    }

    document.querySelector("#edad-mayor").textContent = dameMayor(edadesIntegrantes);
    document.querySelector("#edad-menor").textContent = dameMenor(edadesIntegrantes);
    document.querySelector("#edad-promedio").textContent = damePromedio(edadesIntegrantes);
    mostrarResultados();

    return false;
};

function crearIntegrante(indice) {
    const $div = document.createElement("div");
    $div.className = "integrante";

    const $h3 = document.createElement("h3");
    $h3.className = "h3";
    $h3.textContent = `Integrante #${indice + 1}:`;

    const $label = document.createElement("label");
    $label.className = "label";
    $label.htmlFor = `edad-integrante-${indice + 1}`;
    $label.textContent = "Edad: ";

    const $input = document.createElement("input");
    $input.type = "number";
    $input.id = `edad-integrante-${indice + 1}`;
    $input.className = "input edad-integrante";
    $input.placeholder = "25...";

    $div.appendChild($h3);
    $div.appendChild($label);
    $div.appendChild($input);

    const $contenedorIntegrantes = document.querySelector(".integrantes");
    $contenedorIntegrantes.appendChild($div);
}
