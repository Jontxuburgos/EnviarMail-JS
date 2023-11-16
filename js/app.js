document.addEventListener('DOMContentLoaded', function(){

    const email = {
        email: '',
        asunto: '',
        mensaje: ''
    }

    //Seleccionar los elementos de la Interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');

    //Asignar Eventos 
    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);

    function validar(e) {

        if (e.target.value.trim() === '') {//.trim elimina los espacios en blanco innecesarios
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            return;
        } 

        if (e.target.id === 'email' && !validarEmail(e.target.value)) {
            mostrarAlerta('El email no es válido', e.target.parentElement)
            return;
        };

        limpiarAlerta(e.target.parentElement);

        //Asignar valores
        email[e.target.name] = e.target.value.trim().toLowerCase();
        // asunto[e.target.name] = asignarValores();
        // mensaje[e.target.name] = asignarValores();

        // function asignarValores() {
        //     e.target.value.trim().toLowerCase();
        // }

        //Comprobar Email
        comprobarEmail();

    };

    function mostrarAlerta(mensaje, referencia) {
        limpiarAlerta(referencia);

        //Generar Alerta en HTML
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center')

        //Inyectar el error al formulario
        referencia.appendChild(error);
    }

    function limpiarAlerta(referencia) {
        //Comprueba si ya existe un alerta
        const alerta = referencia.querySelector('.bg-red-600');
        if (alerta) {
            alerta.remove();
        }
    }

    function validarEmail (email) {
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/  // <---Expresion regular validacion Email
        const resultado = regex.test(email);
        return resultado;

    }

    function comprobarEmail() {
        console.log(Object.values(email).includes(''));
    };


});

