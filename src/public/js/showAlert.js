
export const showAlert = (message, type) => {
    // Crear un elemento div para la alerta
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`; // Clase CSS para estilo (puedes definir estilos en tu CSS)

    // Crear nodo de texto con el mensaje recibido
    const textNode = document.createTextNode(message);
    alertDiv.appendChild(textNode);

    // Agregar la alerta al DOM (por ejemplo, al cuerpo del documento)
    document.body.appendChild(alertDiv);

    // Eliminar la alerta después de unos segundos (opcional)
    setTimeout(() => {
        alertDiv.remove();
    }, 3000); // Eliminar la alerta después de 3 segundos (3000 milisegundos)
};

