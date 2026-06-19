// mensajeError.style.display = 'none';

function validarFormulario() {
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
    let formularioValido = true;

    if (!validarInput(inputNombre)) {
        formularioValido = false;
    };
    if (!validarInput(inputEmail) || !validarEmail(inputEmail)) {
        formularioValido = false;
    };
    if (!validarInput(inputRut)) {
        formularioValido = false;
    };
    if (!validarInput(inputFechaNacimiento)) {
        formularioValido = false;
    };
    if (!validarInput(selectGenero)) {
        formularioValido = false;
    };
    if (!validarInput(inputDireccion)) {
        formularioValido = false;
    };
    if (!validarInput(selectNacionalidad)) {
        formularioValido = false;
    };
    if (!validarInput(inputFoto) || !validarFoto(inputFoto)) {
        formularioValido = false;
    };
    if (!validarInput(inputContrasena) || !validarContrasenaSegura(inputContrasena)) {
        formularioValido = false;
    };
    if (!validarInput(inputRepetirContrasena)) {
        formularioValido = false;
    };

    if (formularioValido) {
        alert('Formulario Válido!\nEnviando datos al servidor!')
    } else {
        alert('Formulario Inválido!\nRevise los campos en rojo!.')
    }
};

function validarInput(input) {
    if (input.value == '') {
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
        return false;
    } else {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        return true;
    };
};

function validarEmail(input) {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (regexEmail.test(input.value)) {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        return true;
    } else {
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        return false;
    }
};

function validarContrasenaSegura(input) {
    const regexContrasenaSegura = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
    if (regexContrasenaSegura.test(input.value)) {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        return true;
    } else {
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
        return false;
    }
};

function validarFoto(input) {
    const tiposPermitidos = [
        'image/jpeg',
        'image/png'
    ];
    const archivo = input.files[0];
    if (archivo) {
        if (tiposPermitidos.includes(archivo.type)) {
            input.classList.remove('is-invalid');
            input.classList.add('is-valid');
            return true;
        } else {
            input.classList.remove('is-valid');
            input.classList.add('is-invalid');
            return false;
        }
    }
};

function limpiarFormulario() {
    const formulario = document.getElementById('formularioRegistro');
    formulario.querySelectorAll('input, select').forEach(elemento => elemento.value = '');
    formulario.querySelectorAll('input, select').forEach(elemento => elemento.classList.remove('is-valid', 'is-invalid'));
};