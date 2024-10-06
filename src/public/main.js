import './js/bootstrap.bundle.min.js'
import Swal from './js/sweetalert2.esm.all.min.js'
import './js/sidebars.js'
import './js/contact.js'
import  {handleLoginForm} from'./js/signIn.js'
import sessionCleaner from './js/sessionCleaner.js'


//Swal.fire('Hola!', 'Esto es una prueba', 'success');
document.addEventListener('DOMContentLoaded', () => {
    handleLoginForm();
    
    // Aquí puedes añadir más formularios si lo necesitas en el futuro
    // handleContactForm();
    const logoutButton = document.getElementById('logout-button');
    if (logoutButton) {
      logoutButton.addEventListener('click', (event) => {
        event.preventDefault();  // Prevenir el comportamiento por defecto
        sessionCleaner();        // Llamar a la función de limpieza de sesión
      });
    }
  });

console.log('aca estoy en el main')