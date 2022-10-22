
let nombreDeUsuario
let contraseña
let nombreDeUsuarioConfirm
let contraseñaConfirm

nombreDeUsuario = prompt("Registre su nombre de usuario");
contraseña = prompt("Registre su contraseña");

while (confirm("¿Estos son sus datos? " + nombreDeUsuario + " " + contraseña) == false) {
    nombreDeUsuario = prompt("Registre su nombre de usuario");
    contraseña = prompt("Registre si contraseña");
}

nombreDeUsuarioConfirm = prompt("Ingrese su nombre de ususario para confirmar");
contraseñaConfirm = prompt("Ingrese su contraseña para confirmar");

while (nombreDeUsuarioConfirm != nombreDeUsuario || contraseñaConfirm != contraseña) {
    alert("Sus datos no coinciden");
    nombreDeUsuarioConfirm = prompt("Ingrese su nombre de usuario para confirmar");
    contraseñaConfirm = prompt("Ingrese su contraseña para confirmar");
}

alert("BIENVENIDO")

alert("REALICE SU COMPRA")


    let productoSeleccionado

    while (productoSeleccionado != "Almohada" && productoSeleccionado != "Mantel estampado" && productoSeleccionado != "Mantel liso" && productoSeleccionado != "Acolchado") {
        productoSeleccionado = prompt("Seleccione un producto: Almohada, Mantel estampado, Mantel liso, Acolchado")
        switch (productoSeleccionado) {
            case "Almohada":
                alert("Usted compró: Almohada")
                break;
            case "Mantel estampado":
                alert("Usted compró: Mantel estampado")
                break;
            case "Mantel liso":
                alert("usted compró: Mantel liso")
                break;
            case "Acolchado":
                alert("Usted compró: Acolchado")
                break;
            default:
                alert("El producto seleccionado no está disponible")
                break;
        }
    }



alert("GRACIAS POR SU COMPRA")





