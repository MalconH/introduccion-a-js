/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels 
para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, 
menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

const $form = document.querySelector("form");

document.querySelector("#agregar").onclick = function () {
    let cantidadIntegrantes = document.querySelectorAll(".integrante").length;

    agregarIntegrante(cantidadIntegrantes + 1);
    mostrarControles();
};

document.querySelector("#quitar").onclick = function () {
    const $integrantes = document.querySelectorAll(".integrante");

    if ($integrantes.length === 1) {
        ocultarControles();
    }

    quitarUltimoIntegrante();
};

document.querySelector("#calcular").onclick = function (event) {
    const salarios = obtenerSalarios();
    let contadorErrores = 0;

    // Itera todos los inputs para verificar que no tengan errores
    for (let i = 0; i < salarios.length; i++) {
        const error = validarSalario(salarios[i]);
        if (error) { // Si hay un error en un salario
            manejarError(error, i);
            contadorErrores++;
        } else {
            borrarError(i);
        }
    }

    if (contadorErrores) { // Si hay errores no sigue ejecutando
        return false;
    }

    mostrarSalario("mayor", dameMayor(salarios));
    mostrarSalario("menor", dameMenor(salarios));
    mostrarSalario("promedio-anual", damePromedio(salarios));
    mostrarSalario("promedio-mensual", (damePromedio(salarios) / 12).toFixed(2));
    mostrarResultados();

    event.preventDefault();
};

document.querySelector("#reset").onclick = function () {
    ocultarControles();
    ocultarResultados();

    while (document.querySelectorAll(".integrante").length !== 0) {
        quitarUltimoIntegrante();
    }
};

// Cada integrante consiste de un <div> con una <label> y un <input> dentro.
function agregarIntegrante(indice) {
    const $integrantes = document.querySelector(".integrantes");
    const $integrante = document.createElement("div");
    $integrante.className = "integrante";

    const $labelSalario = document.createElement("label");
    $labelSalario.textContent = `Salario del integrante #${indice}`;
    $labelSalario.htmlFor = `salario-${indice}`;
    $labelSalario.className = "form-label";

    const $inputSalario = document.createElement("input");
    $inputSalario.type = "number";
    $inputSalario.id = `salario-${indice}`;
    $inputSalario.name = `salario-${indice}`;
    $inputSalario.placeholder = "25.000";
    $inputSalario.className = "form-control";

    $integrante.appendChild($labelSalario);
    $integrante.appendChild($inputSalario);
    $integrantes.appendChild($integrante);
}

function quitarUltimoIntegrante() {
    const $integrantes = document.querySelectorAll(".integrante");
    const cantidadIntegrantes = $integrantes.length;

    if (cantidadIntegrantes !== 0) {
        $integrantes[cantidadIntegrantes - 1].remove();
    }
}

function mostrarControles() {
    document.querySelector(".controles").classList.remove("d-none");
}

function ocultarControles() {
    document.querySelector(".controles").classList.add("d-none");
}

function mostrarResultados() {
    document.querySelector(".resultados").classList.remove("d-none");
}

function ocultarResultados() {
    const $resultados = document.querySelector(".resultados");
    $resultados.classList.add("d-none");
    $resultados.innerHTML = "";
}

function obtenerSalarios() {
    const $salarios = document.querySelectorAll(".integrante input");
    const salarios = [];

    for (let i = 0; i < $salarios.length; i++) {
        salarios.push(Number($salarios[i].value));
    }

    return salarios;
}

function validarSalario(salario) {
    const salarioValido = /^\d+\.?\d*$/; // Numeros naturales y decimales positivos

    if (salario === 0) {
        return "El salario no puede ser 0";
    }
    if (!salarioValido.test(salario)) { // Si el salario no es válido
        return "El salario ingresado no es válido";
    }

    return "";
}

// El indice que toma es para saber qué integrante tiene el error.
function manejarError(error, indice) {
    const $input = document.querySelector(`#salario-${indice + 1}`);

    if (!$input.classList.contains("is-invalid")) {
        $input.classList.add("is-invalid");

        const $infoError = document.createElement("span");
        $infoError.textContent = error;
        $infoError.className = "invalid-feedback";

        $input.parentElement.appendChild($infoError);
    }
}

function borrarError(indice) {
    const $input = document.querySelector(`#salario-${indice + 1}`);
    $input.classList.remove("is-invalid");

    if ($input.nextElementSibling) {
        $input.nextElementSibling.remove();
    }
}

function mostrarSalario(tipo, valor) {
    document.querySelector(`#salario-${tipo}`).textContent = valor;
}
