document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submitButton');
    const confirmModal = document.getElementById('confirmModal');
    const confirmBtn = document.getElementById('confirmBtn');
    const cancelBtn = document.getElementById('cancelBtn');
    const updateForm = document.getElementById('updateForm');
  
    // Mostrar el modal cuando se hace clic en "Actualizar"
    submitButton.addEventListener('click', () => {
      confirmModal.style.display = 'flex'; // Mostrar el modal
    });
  
    // Si el usuario hace clic en "Actualizar" en el modal
    confirmBtn.addEventListener('click', async () => {
      confirmModal.style.display = 'none'; // Ocultar el modal
  
      // Aquí iría la lógica para enviar el formulario
      // Puedes llamar a la función handleSubmit que ya tienes definida
      handleSubmit();
    });
  
    // Si el usuario hace clic en "Cancelar" en el modal
    cancelBtn.addEventListener('click', () => {
      confirmModal.style.display = 'none'; // Ocultar el modal
    });
    
    // Rest of the existing JavaScript functionality...
    // Here is where you can place the handleSubmit function
  });
  