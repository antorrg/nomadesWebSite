/* global bootstrap: false */
export const sessionCleaner = ()=>{
  console.log('yo funciono')
  localStorage.removeItem('token')
}

document.addEventListener('DOMContentLoaded', () => {
  const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  
  tooltipTriggerList.forEach(tooltipTriggerEl => {
    // Inicializar los tooltips con Bootstrap
    new bootstrap.Tooltip(tooltipTriggerEl);
  });
});