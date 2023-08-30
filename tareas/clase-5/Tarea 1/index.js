const $calcularSalarioMensual = document.querySelector("#calcular-salario-mensual");
const $salarioMensual = document.querySelector("#salario-mensual");
const $error = document.querySelector(".error");

$calcularSalarioMensual.onclick = function() {
    const salarioAnual = Number(document.querySelector("#salario-anual").value);
    const salarioMensual = calcularSalarioMensual(salarioAnual);

    if (salarioAnual > 0) {
        $error.classList.add("oculto");
        $salarioMensual.value = salarioMensual;
    } else {
        $error.textContent = "Ingresa un número válido";
        $error.classList.remove("oculto");  
    }

    return false;
}

function calcularSalarioMensual(salarioAnual) {
    return salarioAnual / 12;
}
