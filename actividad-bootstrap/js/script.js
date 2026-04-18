document.addEventListener("DOMContentLoaded", function () {

    // BOTONES MODAL (aunque no tengas la clase no rompe nada)
    let botones = document.querySelectorAll(".btn-modal");

    botones.forEach(boton => {
        boton.addEventListener("click", function () {
            let modal = new bootstrap.Modal(document.getElementById("miModal"));
            modal.show();
        })
    });

    // VALIDACION FORMULARIO
    document.getElementById("loginForm").addEventListener("submit", function (e) {
        e.preventDefault()

        let email = document.getElementById("email").value
        let password = document.getElementById("password").value
        let message = document.getElementById("mesage")

        const USER_DEFAULT = "prueba@gmail.com"
        const PASSWORD_DEFAULT = "123456"

        if (email === "" || password === "") {
            message.innerHTML = "Todos los campos son obligatorios!"
            message.className = "text-warning"
        }
        else if (email === USER_DEFAULT && password === PASSWORD_DEFAULT) {
            message.innerHTML = "Bienvenido al sistema"
            message.className = "text-success"
        }
        else {
            message.innerHTML = "Error: Usuario o contraseña inválidos!"
            message.className = "text-danger"
        }
    });

});