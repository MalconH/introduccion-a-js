const $clase = document.querySelector(".clase");
const $agregarClase = document.querySelector("#agregar-clase");
const $quitarClase = document.querySelector("#quitar-clase");
const $calcularTiempoTotal = document.querySelector("#calcular-tiempo-total");
let nroDeClases = document.querySelectorAll(".clase").length;


// Agrega una nueva clase
$agregarClase.onclick = function() {
    nroDeClases++;

    const clonClase = $clase.cloneNode(true);
    clonClase.firstElementChild.textContent = "Clase " + nroDeClases;
    document.querySelector("#clases").appendChild(clonClase);
}

// Quita la última clase
$quitarClase.onclick = function() {
    nroDeClases--;

    const $clases = document.querySelector("#clases");
    $clases.removeChild($clases.lastElementChild);
}

$calcularTiempoTotal.onclick = function() {
    // NodeList de los inputs del form
    const $inputsHoras = document.querySelectorAll(".horas");
    const $inputsMinutos = document.querySelectorAll(".minutos");
    const $inputsSegundos = document.querySelectorAll(".segundos");

    // Array con los values de los inputs
    let horas = [];
    let minutos = [];
    let segundos = [];

    // Resultado a mostrar
    let horasTotales = 0;
    let minutosTotales = 0;
    let segundosTotales = 0;

    // Paso los values del NodeList de Inputs a un array de numeros
    for (let i = 0; i < $inputsSegundos.length; i++) {
        segundos.push(Number($inputsSegundos[i].value));
        segundosTotales += segundos[i];

    }

    for (let i = 0; i < $inputsMinutos.length; i++) {
        minutos.push(Number($inputsMinutos[i].value));
        minutosTotales += minutos[i];
    }

    for (let i = 0; i < $inputsHoras.length; i++) {
        horas.push(Number($inputsHoras[i].value));
        horasTotales += horas[i];
    }

    // Remuevo los segundos o minutos sobrantes y los convierto a la unidad que le sigue.
    while (segundosTotales >= 60) {
        segundosTotales -= 60;
        minutosTotales++;
    }

    while (minutosTotales >= 60) {
        minutosTotales -= 60;
        horasTotales++;
    }

    document.querySelector("#resultado").textContent = `${horasTotales}:${minutosTotales}:${segundosTotales}`;
    
    return false;
}
