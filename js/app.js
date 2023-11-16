document.addEventListener('DOMContentLoaded', function(){
    //Seleccionar los elementos de la Interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');

    //Asignar Eventos 
    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);

    function validar(e) {
        if (e.target.value.trim === '') {//.trim elimina los espacios en blanco innecesarios
            
            
            
            console.log('vacio');
        } else {
            console.log('lleno');
        }
    };
});

