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

    validarInput(inputNombre);
    validarInput(inputEmail);
    validarInput(inputRut);
    validarInput(inputFechaNacimiento);
    validarInput(selectGenero);
    validarInput(inputDireccion);
    validarInput(selectNacionalidad);
    validarInput(inputFoto);
    validarInput(inputContrasena);
    validarInput(inputRepetirContrasena);
};

function validarInput(input) {
    if (input.value == '') {
        input.classList.add('is-invalid');
    } else {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
    };
};

function limpiarFormulario() {
    const formulario = document.getElementById('formularioRegistro');
    formulario.querySelectorAll('input, select').forEach(elemento => elemento.value = '');
    formulario.querySelectorAll('input, select').forEach(elemento => elemento.classList.remove('is-valid', 'is-invalid'));
};