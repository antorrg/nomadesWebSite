const sessionCleaner = async () => {
    try {
      const response = await fetch('/api/v1/user/logout', {
        method: 'GET',
      });
  
      if (response.ok) {
        console.log('Sesión cerrada');
        alert('Se ha cerrado la sesión');
  
        // Limpiar el token del localStorage
        localStorage.removeItem('token');
  
        // Redirigir al login o página inicial
        window.location.href = '/';  
      } else {
        console.error('Error al cerrar sesión');
      }
    } catch (error) {
      console.error('Error en la solicitud de logout:', error);
    }
  };
  


  export default sessionCleaner