const $ingresar = document.querySelector("#ingresar");

$ingresar.onclick = function () {
    const $infoUsuario = document.querySelector("#info-usuario");
    const nombreUsuario = document.querySelector("#nombre-usuario").value;
    const primerNombreUsuario = nombreUsuario.slice(0, nombreUsuario.indexOf(" ")+1)
    const apellidoUsuario = document.querySelector("#apellido-usuario").value;
    const edadUsuario = document.querySelector("#edad-usuario").value;

    if (nombreUsuario && apellidoUsuario && edadUsuario) {
        $infoUsuario.textContent = `Nombre(s): ${nombreUsuario}
                                    Apellido: ${apellidoUsuario}
                                    Edad: ${edadUsuario}`;
    } else {
        $infoUsuario.textContent = "Por favor, completá todos los campos antes de ingresar"
    }
    

    if (primerNombreUsuario) {
        document.querySelector("#titulo").textContent = `Bienvenido, ${primerNombreUsuario}`;
    } else {
        document.querySelector("#titulo").textContent = "";
    }
    
    return false;
}
