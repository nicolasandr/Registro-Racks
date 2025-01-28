// alerts.js
function confirmarDescarga(rutaArchivo, nombreArchivo) {
    Swal.fire({
        title: '¿Deseas descargar este archivo?',
        text: 'Confirma si realmente deseas iniciar la descarga.',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sí, descargar',
        cancelButtonText: 'Cancelar',
    }).then((result) => {
        if (result.isConfirmed) {
            // Mensaje de éxito y descarga del archivo
            Swal.fire({
                title: '¡Descarga iniciada!',
                text: 'Tu archivo se descargará en breve.',
                icon: 'success',
            }).then(() => {
                const enlace = document.createElement('a');
                enlace.href = rutaArchivo; // URL del archivo
                enlace.download = nombreArchivo; // Nombre del archivo
                enlace.click();
            });
        } else {
            // Mensaje si se cancela la descarga
            Swal.fire({
                title: 'Descarga cancelada',
                text: 'No se descargó el archivo.',
                icon: 'info',
            });
        }
    });
}
