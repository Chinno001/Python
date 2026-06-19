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
        inputNombre.classList.add('is-valid');
    };
    if(inputEmail.value == ''){
        inputEmail.classList.add('is-invalid');
    
    }else{
        inputEmail.classList.remove('is-invalid');
        inputEmail.classList.remove('is-valid');
    };
    if(inputRut.value == ''){
        inputRut.classList.add('is-invalid');
    
    }else{
        inputRut.classList.remove('is-invalid');
        inputRut.classList.remove('is-valid');
    };
    if(inputFechaNacimiento.value == ''){
        inputFechaNacimiento.classList.add('is-invalid');

    }else{
        inputFechaNacimiento.classList.remove('is-invalid');
        inputFechaNacimiento.classList.add('is-valid');
    };
    if(selectGenero.value == ''){
        selectGenero.classList.add('is-invalid');
    }else{
        selectGenero.classList.remove('is-invalid');
        selectGenero.classList.add('is-valid');
    };
    if(inputDireccion.value == ''){
        inputDireccion.classList.add('is-invalid');
    }else{
        inputDireccion.classList.remove('is-invalid');
        inputDireccion.classList.add('is-valid');
    };
    if(selectNacionalidad.value == ''){
        selectNacionalidad.classList.add('is-invalid');
    }else{
        selectNacionalidad.classList.remove('is-invalid');
        selectNacionalidad.classList.add('is-valid');
    };
    if(inputFoto.value == ''){
        inputFoto.classList.add('is-invalid');
    }else{
        inputFoto.classList.remove('is-invalid');
        inputFoto.classList.add('is-valid');
    };
    if(inputContrasena.value == ''){
        inputContrasena.classList.add('is-invalid');
    }else{
        inputContrasena.classList.remove('is-invalid');
        inputContrasena.classList.add('is-valid');
    };
    if(inputRepetirContrasena.value == ''){
        inputRepetirContrasena.classList.add('is-invalid');
    }else{
        inputRepetirContrasena.classList.remove('is-invalid');
        inputRepetirContrasena.classList.add('is-valid');
    };
};