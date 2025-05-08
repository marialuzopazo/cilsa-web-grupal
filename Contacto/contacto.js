function validarFormulario() {
    const nombre = document.getElementById("nombre").value.trim();
    const celular = document.getElementById("celular").value.trim();
    const asunto = document.getElementById("asunto").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    // Validar que los campos no estén vacíos
    if (!nombre || !celular || !asunto || !mensaje) {
        alert("Todos los campos son obligatorios. Por favor, completalos.");
        return false;
    }

    const nombreRegex = /^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]{2,}$/;
    if (!nombreRegex.test(nombre)) {
        alert("Por favor, ingresá un nombre válido (solo letras y espacios, mínimo 2 caracteres).");
        return false;
    }

    const celularRegex = /^\+?[\d\s\-()]{7,20}$/;
    if (!celularRegex.test(celular)) {
        alert("Por favor, ingresá un número de celular válido.");
        return false;
    }

    if (asunto.length < 3) {
        alert("El asunto debe tener al menos 3 caracteres.");
        return false;
    }

    if (mensaje.length < 10) {
        alert("El mensaje debe tener al menos 10 caracteres.");
        return false;
    }

    return true;
}
