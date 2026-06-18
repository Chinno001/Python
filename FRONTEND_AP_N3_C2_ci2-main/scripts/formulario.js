function validarFormulario(){
    const inputNombre = document.getElementById('inputNombre');
    const inputEmail = document.getElementById('inputEmail');
    const inputRut = document.getElementById('inputRut');
    const inputFechaNacimiento = document.getElementById('inputFechaNacimiento');
    const selectGenero = document.getElementById('selectGenero');
    const inputDireccion = document.getElementById('inputDireccion');
    const selectNacionalidad = document.getElementById('selectNacionalidad');
    const inputFoto = document.getElementById('inputFoto');
    const inputContrasena = document.getElementById('inputContrasena');
    const inputRepetirContrasena = document.getElementById('inputRepetirContrasena');
    
    if(inputNombre.value == ''){
        inputNombre.classList.add('is-invalid');
    }else{
        inputNombre.classList.remove('is-invalid');
    };
    if(inputEmail.value == ''){
        inputEmail.classList.add('is-invalid');
    }else{
        inputEmail.classList.remove('is-invalid');
    };
    if(inputRut.value == ''){
        inputRut.classList.add('is-invalid');
    }else{
        inputRut.classList.remove('is-invalid');
    };
    if(inputFechaNacimiento.value == ''){
        inputFechaNacimiento.classList.add('is-invalid');
    }else{
        inputFechaNacimiento.classList.remove('is-invalid');
    };
    if(selectGenero.value == ''){
        selectGenero.classList.add('is-invalid');
    }else{
        selectGenero.classList.remove('is-invalid');
    };
    if(inputDireccion.value == ''){
        inputDireccion.classList.add('is-invalid');
    }else{
        inputDireccion.classList.remove('is-invalid');
    };
    if(selectNacionalidad.value == ''){
        selectNacionalidad.classList.add('alerta');
    }else{
        selectNacionalidad.classList.remove('alerta');
    };
    if(inputFoto.value == ''){
        inputFoto.classList.add('is-invalid');
    }else{
        inputFoto.classList.remove('is-invalid');
    };
    if(inputContrasena.value == ''){
        inputContrasena.classList.add('is-invalid');
    }else{
        inputContrasena.classList.remove('is-invalid');
    };
    if(inputRepetirContrasena.value == ''){
        inputRepetirContrasena.classList.add('is-invalid');
    }else{
        inputRepetirContrasena.classList.remove('is-invalid');
    };
};