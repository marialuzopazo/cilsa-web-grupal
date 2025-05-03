


function esTablet() {
    return /iPad|Tablet|Android(?!.*Mobile)/i.test(navigator.userAgent);
}

// Aplicar ajustes específicos para tablets
function aplicarEstiloTablet() {
    if (esTablet()) {
        // Cambiar estilos para tablet
        document.body.className = 'tablet';

        // Opcional: Agregar un mensaje o cambiar el diseño
        const contenedor = document.querySelector('.container');
        const mensajeTablet = document.createElement('div');
        mensajeTablet.textContent = 'Estás usando una tablet. Se ha ajustado el diseño.';
        mensajeTablet.style.color = 'blue';
        mensajeTablet.style.fontWeight = 'bold';
        mensajeTablet.style.textAlign = 'center';
        mensajeTablet.style.marginBottom = '10px';

        if (contenedor) {
            contenedor.prepend(mensajeTablet);
        }
    }
}

// Llamar a la función al cargar la página
document.addEventListener('DOMContentLoaded', aplicarEstiloTablet);