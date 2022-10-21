
//Variables
let nombreDeUsuario
let contraseña
let nombreDeUsuarioConfirm
let contraseñaConfirm

nombreDeUsuario = prompt("Registre su nombre de ususario")
contraseña = prompt("Registre su contraseña")

while (confirm("¿Estos son sus datos?") != nombreDeUsuario && contraseña) {
    nombreDeUsuario = prompt("Registre su nombre de ususario")
    contraseña = prompt("Registre su contraseña")
}

nombreDeUsuario = nombreDeUsuarioConfirm
contraseña = contraseñaConfirm

if (nombreDeUsuario == nombreDeUsuarioConfirm && contraseña == contraseñaConfirm) {
    prompt("Ingrese su nombre de usuario")
    prompt("Ingrese su contraseña")
}

while (confirm("¿Estos son sus datos?") != nombreDeUsuarioConfirm && contraseñaConfirm) {
    prompt("Ingrese su nombre de usuario")
    prompt("Ingrese su contraseña")
}

alert("BIENVENIDO")










