import Swal from './sweetalert2.esm.all.min.js'

export function handleLoginForm() {
  const loginForm = document.querySelector('#loginForm');
  if (!loginForm) return; // Si no existe, no ejecuta la función

  loginForm.addEventListener('submit', async function(event) {
    event.preventDefault(); 
    const email = document.querySelector('#floatingInput').value;
    const password = document.querySelector('#floatingPassword').value;

    try {
      const response = await fetch('/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (response.status === 200) {
        localStorage.setItem('token', result.token);
        //alert('login succesfully')
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Verificación exitosa. Bienvenido/a!!',
          showConfirmButton: false,
          timer: 1800,
        });
        setTimeout(() => {
          window.location.href = '/admin';
        }, 2000);
      } else {
        displayError(result.error, response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });
}

function displayError(errorMessage, status) {
  document.querySelector('main').innerHTML = `
    <div class="modalContainer">
    <div class='modalFailed'>
    <h1>Error ${status}</h1>
    <h2>${errorMessage}</h2>
    <strong>Por favor intente de nuevo</strong>
    </div>
    </div>
  `;
  setTimeout(() => {
    window.location.reload();
  }, 2000);
}


// document.querySelector('form').addEventListener('submit', async function(event) {
//     event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

//     const email = document.querySelector('#floatingInput').value;
//     const password = document.querySelector('#floatingPassword').value;

//     // Aquí puedes agregar tu lógica para manejar el envío del formulario
//     //console.log('Email:', email);
//     //console.log('Password:', password);
//     try {
//       const response = await fetch('/api/v1/user/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ email, password })
//       });
  
//       const result = await response.json();
     
  
//       if (response.status === 200) {
//           // Almacenar el token en localStorage
//           localStorage.setItem('token', result.token);
//         // Swal.fire({
//         //   position: "center",
//         //   icon: "success",
//         //   title: "Verificacion exitosa. Bienvenido/a!!",
//         //   showConfirmButton: false,
//         //   timer: 1800,
//         // });
//         setTimeout(() => {
//           window.location.href = '/admin';
//         }, 2000);
      
//       } else {
//         // Mostrar mensaje de error
//         //console.log('Soy Result: ',result)
//         document.querySelector('main').innerHTML = `
//           <div class="modalContainer">
//           <div class='modalFailed'>
//           <h1>Error ${response.status}</h1>
//           <h2>${result.error}</h2>
//           <strong>Por favor intente de nuevo</strong>
//           </div>
//           </div>
//         `;
  
//         // Volver a mostrar el formulario después de 2 segundos
//         setTimeout(() => {
//           window.location.reload();
//         }, 2000);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }

// });
