
// Detectar si el dispositivo es una notebook
function esNotebook() {
    const anchoPantalla = window.innerWidth;
    const alturaPantalla = window.innerHeight;

    // Detectar por tamaño de pantalla típico de una notebook
    return anchoPantalla >= 1024 && alturaPantalla >= 600 && !/Tablet|Mobile/i.test(navigator.userAgent);
}

// Aplicar ajustes específicos para notebooks
function aplicarEstiloNotebook() {
    if (esNotebook()) {
        // Cambiar estilos para notebook
        document.body.className = 'notebook';

        // Opcional: Agregar un mensaje o ajustar diseño
        const contenedor = document.querySelector('.container');
        const mensajeNotebook = document.createElement('div');
        mensajeNotebook.textContent = 'Estás usando una notebook. Diseño optimizado para tu dispositivo.';
        mensajeNotebook.style.color = 'green';
        mensajeNotebook.style.fontWeight = 'bold';
        mensajeNotebook.style.textAlign = 'center';
        mensajeNotebook.style.marginBottom = '10px';

        if (contenedor) {
            contenedor.prepend(mensajeNotebook);
        }
    }
}

