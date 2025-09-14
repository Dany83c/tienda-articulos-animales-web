//INICIAR SESION
    document.addEventListener("DOMContentLoaded", () => {
    

    const iniciarSesionBtn = document.getElementById('btn-iniciar-sesion');

    // on click
    iniciarSesionBtn.addEventListener('click', (e) => {
        e.preventDefault() // Prevenir el envío del formulario por defecto

        // Obtener los valores de los campos de email y contraseña
        const emailInput = document.getElementById('ini-correo')
        const contrasenaInput = document.getElementById('ini-contra')
        const email = emailInput.value;
        const contrasena = contrasenaInput.value;

        // Recuperar los datos del usuario del localStorage
        const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) ||[]
        const usuarioEncontrado = usuariosGuardados.find(user => 
            user.correo === email && user.contra === contrasena
        )

        // Verificar si el usuario existe en el localStorage
        if (usuarioEncontrado) {
            alert('¡Inicio de sesión exitoso!')
        }
        
        if(usuarioEncontrado === undefined){
            alert('El usuario no está registrado. Por favor, registrese primero.')
        }

    
    })

})