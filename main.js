
let nombreDeUsuario
let contraseña
let nombreDeUsuarioConfirm
let contraseñaConfirm

nombreDeUsuario = prompt("Registre su nombre de usuario")
contraseña = prompt("Registre su contraseña")

while (confirm("¿Estos son sus datos? " + nombreDeUsuario + " " + contraseña) == false) {
    nombreDeUsuario = prompt("Registre su nombre de usuario");
    contraseña = prompt ("Registre si contraseña");
}

nombreDeUsuarioConfirm = prompt ("Ingrese su nombre de ususario para confirmar");
contraseñaConfirm = prompt ("Ingrese su contraseña para confirmar")

while(nombreDeUsuarioConfirm != nombreDeUsuario || contraseñaConfirm != contraseña){
    alert ("Sus datos no coinciden");
    nombreDeUsuarioConfirm = prompt ("Ingrese su nombre de usuario para confirmar");
    contraseñaConfirm = prompt ("Ingrese su contraseña para confirmar");
}

alert ("BIENVENIDO")









