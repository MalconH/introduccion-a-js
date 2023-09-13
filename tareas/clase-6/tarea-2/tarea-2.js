/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels 
para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, 
menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

document.querySelector("#calcular").onclick = function (event) {
    const salariosIntegrantes = [];

    document.querySelector("#salario-anual-mayor").textContent = dameMayor(salarioIntegrantes);
    document.querySelector("#salario-anual-menor").textContent = dameMenor(salarioIntegrantes);
    document.querySelector("#salario-anual-promedio").textContent = damePromedio(salarioIntegrantes);
    document.querySelector("#salario-mensual-promedio").textContent = damePromedioMensual(salarioIntegrantes);
    mostrarResultados();

    return false;
};


function mostrarResultados() {

}

function crearIntegrantes() {

}

function crearIntegrante(indice) {

}
