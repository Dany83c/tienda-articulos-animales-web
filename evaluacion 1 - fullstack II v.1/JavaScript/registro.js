// Ocultar mensajes al inicio
document.getElementById("pNombre").hidden = true
document.getElementById("pCorreo").hidden = true
document.getElementById("pTelefono").hidden = true
document.getElementById("pconCorreo").hidden = true
document.getElementById("pconta").hidden = true
document.getElementById("pconcontra").hidden = true

if (!localStorage.getItem("usuarios")) {
    localStorage.setItem("usuarios", JSON.stringify([]))
}


document.addEventListener("DOMContentLoaded", () => {

// cuaando click en "registrar"
document.getElementById("enviar").addEventListener("click", (e) => {
    let valido = true

    // Validar nombre
    let cantidad = document.getElementById("usuario").value.length
    if (cantidad < 4 || cantidad > 10) {
        document.getElementById("pNombre").innerHTML = "Nombre no válido"
        document.getElementById("pNombre").hidden = false  
        valido = false
    }

    // Validar correo
    let correo = document.getElementById("corro").value
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    if (!regex.test(correo)) {
        document.getElementById("pCorreo").innerHTML = "Correo no válido"
        document.getElementById("pCorreo").hidden = false
        valido = false
    }

    // Validar confirmación de correo
    let correo2 = document.getElementById("concorron").value
    if (correo !== correo2 || correo2 === "") {
        document.getElementById("pconCorreo").hidden = false
        valido = false
    }

    // Validar contraseña
    let contrac = document.getElementById("contra").value
    if (contrac.length < 4 || contrac.length > 12) {
        document.getElementById("pconta").hidden = false
        valido = false
    }

    // Validar confirmación de contraseña
    let contraceva = document.getElementById("contracon").value
    if (contrac !== contraceva || contraceva === "") {
        document.getElementById("pconcontra").hidden = false
        valido = false
    }

    // Validar teléfono (si no está vacío)
    let valor = document.getElementById("tele").value
    if (valor !== "" && !(valor >= 900000000 && valor <= 999999999)) {
        document.getElementById("pTelefono").hidden = false
        
    }

    if (!valido) {
        e.preventDefault()
    }
    //guardar usuario si todo esta correcto en el registro
    if (valido){
        let nuevoUsuario = {
                nombre: document.getElementById("usuario").value.trim(),
                correo: document.getElementById("corro").value.trim(),
                contra: document.getElementById("contra").value.trim(),
                telefono: document.getElementById("tele").value.trim(),
                region: document.getElementById("regi").value,
                comuna: document.getElementById("comu").value
            }
            // Leer usuarios existentes
            let usuarios = JSON.parse(localStorage.getItem("usuarios")) || []

            // Agregar el nuevo
            usuarios.push(nuevoUsuario)

            // Guardar de nuevo en localStorage
            localStorage.setItem("usuarios", JSON.stringify(usuarios))

            alert("Usuario registrado con éxito!")
            // Limpiar formulario
            document.querySelector("form").reset() 
        }
    })


    //INICIAR SESION
    
    const iniciarSesionBtn = document.getElementById('btn-iniciar-sesion');

    // on click
    iniciarSesionBtn.addEventListener('click', (e) => {
        e.preventDefault() // Prevenir el envío del formulario por defecto

        // Obtener los valores de los campos de email y contraseña
        const emailInput = document.getElementById('ini-correo');
        const contrasenaInput = document.getElementById('ini-contra');
        const email = emailInput.value;
        const contrasena = contrasenaInput.value;

        // Recuperar los datos del usuario del localStorage
        const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) ||[]
        const usuarioEncontrado = usuariosGuardados.find(user => 
            user.email === email && user.contrasena === contrasena
        )

        // Verificar si el usuario existe en el localStorage
        if (usuarioEncontrado) {
            alert('¡Inicio de sesión exitoso!')
           
            
        }
        if(usuariosGuardados.find(user => 
            user.email === email || user.contrasena === contrasena)){ 
            alert('Credenciales incorrectas. Por favor, verifique su email y contraseña.')
            
        }else{
            alert('El usuario no está registrado. Por favor, registrese primero.')
        }

    
    });



})

// Validadores de tiempo real, guia para el nuevo usuario

// Usuario
document.getElementById("usuario").addEventListener("keyup", () => {
    let cantidad = document.getElementById("usuario").value.length
    if (cantidad < 4 || cantidad > 10) {
        document.getElementById("usuario").classList.add("is-invalid")
        document.getElementById("usuario").classList.remove("is-valid")
        document.getElementById("pNombre").hidden = false
    } else {
        document.getElementById("usuario").classList.add("is-valid")
        document.getElementById("usuario").classList.remove("is-invalid")
        document.getElementById("pNombre").hidden = true
    }
})

// Correo
document.getElementById("corro").addEventListener("keyup", () => {
    let correo = document.getElementById("corro").value
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    if (!regex.test(correo)) {
        document.getElementById("corro").classList.add("is-invalid")
        document.getElementById("corro").classList.remove("is-valid")
        document.getElementById("pCorreo").hidden = false
    } else {
        document.getElementById("corro").classList.add("is-valid")
        document.getElementById("corro").classList.remove("is-invalid")
        document.getElementById("pCorreo").hidden = true
    }
})

// Confirmar correo
document.getElementById("concorron").addEventListener("keyup", () => {
    let correo1 = document.getElementById("corro").value
    let correo2 = document.getElementById("concorron").value
    if (correo1 !== correo2 || correo2 === "") {
        document.getElementById("concorron").classList.add("is-invalid")
        document.getElementById("concorron").classList.remove("is-valid")
        document.getElementById("pconCorreo").hidden = false
    } else {
        document.getElementById("concorron").classList.add("is-valid")
        document.getElementById("concorron").classList.remove("is-invalid")
        document.getElementById("pconCorreo").hidden = true
    }
})

// Contraseña
document.getElementById("contra").addEventListener("keyup", () => {
    let contrac = document.getElementById("contra").value
    if (contrac.length < 4 || contrac.length > 12) {
        document.getElementById("contra").classList.add("is-invalid")
        document.getElementById("contra").classList.remove("is-valid")
        document.getElementById("pconta").hidden = false
    } else {
        document.getElementById("contra").classList.add("is-valid")
        document.getElementById("contra").classList.remove("is-invalid")
        document.getElementById("pconta").hidden = true
    }
})

// Confirmar contraseña
document.getElementById("contracon").addEventListener("keyup", () => {
    let contrac = document.getElementById("contra").value
    let contraceva = document.getElementById("contracon").value
    if (contrac !== contraceva || contraceva === "") {
        document.getElementById("contracon").classList.add("is-invalid")
        document.getElementById("contracon").classList.remove("is-valid")
        document.getElementById("pconcontra").hidden = false
    } else {
        document.getElementById("contracon").classList.add("is-valid")
        document.getElementById("contracon").classList.remove("is-invalid")
        document.getElementById("pconcontra").hidden = true
    }
})

// Teléfono opcional, si no se escribe no se valida
document.getElementById("tele").addEventListener("keyup", () => {
    let valor = document.getElementById("tele").value
    if (valor >= 900000000 && valor <= 999999999) {
        document.getElementById("tele").classList.add("is-valid")
        document.getElementById("tele").classList.remove("is-invalid")
        document.getElementById("pTelefono").hidden = true
    } else if (valor !== "") {
        document.getElementById("tele").classList.add("is-invalid")
        document.getElementById("tele").classList.remove("is-valid")
        document.getElementById("pTelefono").hidden = false
    } else {
        document.getElementById("tele").classList.remove("is-valid", "is-invalid")
        document.getElementById("pTelefono").hidden = true
    }
})
document.getElementById("pCorreo").hidden = true
document.getElementById("pTelefono").hidden = true
document.getElementById("pconCorreo").hidden = true
document.getElementById("pconta").hidden = true
document.getElementById("pconcontra").hidden = true

document.getElementById("enviar").addEventListener("click",()=>{
    var cantidad = document.getElementById("usuario").value.length

    if(cantidad < 4 || cantidad > 10){
        document.getElementById("lanombre").innerHTML="nombre no valido"
        return false
    }else{
        var correo = document.getElementById("corro").value  
        var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/ 
        if(!regex.test(correo)){  
        document.getElementById.innerHTML="correo no valido"
    }else{  
        document.getElementById("corro").classList.add("is-valid")  
        document.getElementById("corro").classList.remove("is-invalid")  
        document.getElementById("pCorreo").hidden = true  
    }  
    }

})
document.getElementById("usuario").addEventListener("keyup", ()=>{
    var cantidad = document.getElementById("usuario").value.length
    if(cantidad < 4 || cantidad > 10){
        document.getElementById("usuario").classList.add("is-invalid")
        document.getElementById("usuario").classList.remove("is-valid")
        document.getElementById("pNombre").hidden = false
        document.getElementById("pNombre").style.color = "#dc3545"
    }else{
        document.getElementById("usuario").classList.add("is-valid")
        document.getElementById("usuario").classList.remove("is-invalid")
        document.getElementById("pNombre").hidden = true
    }
})
document.getElementById("corro").addEventListener("keyup", ()=>{  
    var correo = document.getElementById("corro").value  
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/  

    if(!regex.test(correo)){  
        document.getElementById("corro").classList.add("is-invalid")  
        document.getElementById("corro").classList.remove("is-valid")  
        document.getElementById("pCorreo").hidden = false  
        document.getElementById("pCorreo").style.color = "#dc3545"  
    }else{  
        document.getElementById("corro").classList.add("is-valid")  
        document.getElementById("corro").classList.remove("is-invalid")  
        document.getElementById("pCorreo").hidden = true  
    }  
})

document.getElementById("tele").addEventListener("keyup", ()=>{
    var valor = document.getElementById("tele").value
    console.log(valor)
    if(valor > 900000000 && valor < 999999999){
        document.getElementById("tele").classList.add("is-valid")
        document.getElementById("tele").classList.remove("is-invalid")
        document.getElementById("pTelefono").hidden = true
    }else{
        document.getElementById("tele").classList.add("is-invalid")
        document.getElementById("tele").classList.remove("is-valid")
        document.getElementById("pTelefono").hidden = false
        document.getElementById("pTelefono").style.color = "#dc3545"
    }
})
document.getElementById("concorron").addEventListener("keyup", ()=>{  
    var correo1 = document.getElementById("corro").value  
    var correo2 = document.getElementById("concorron").value  

    if(correo1 !== correo2 || correo2 === ""){  
        document.getElementById("concorron").classList.add("is-invalid")  
        document.getElementById("concorron").classList.remove("is-valid")  
        document.getElementById("pconCorreo").hidden = false  
        document.getElementById("pconCorreo").style.color = "#dc3545"  
    }else{  
        document.getElementById("concorron").classList.add("is-valid")  
        document.getElementById("concorron").classList.remove("is-invalid")  
        document.getElementById("pconCorreo").hidden = true  
    }  
})

document.getElementById("contracon").addEventListener("keyup", ()=>{  
    var contrac = document.getElementById("contra").value  
    var contraceva = document.getElementById("contracon").value  

    if(contrac !== contraceva || contraceva === ""){  
        document.getElementById("contracon").classList.add("is-invalid")  
        document.getElementById("contracon").classList.remove("is-valid")  
        document.getElementById("pconcontra").hidden = false  
        document.getElementById("pconcontra").style.color = "red"  
    }else{  
        document.getElementById("contracon").classList.add("is-valid")  
        document.getElementById("contracon").classList.remove("is-invalid")  
        document.getElementById("pconcontra").hidden = true  
    }  
})



