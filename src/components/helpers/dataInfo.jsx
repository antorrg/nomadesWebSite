
const roles = (data) => {
    const roleMap = {
      0: 'Administrador',
      1: 'Usuario',
      2: 'Moderador'
    };
    return roleMap[data] || 'Desconocido';
  };

  const adapText = (email, MaxLength )=>{
    const truncatedEmail =
    email && email.length > MaxLength
      ? email.substring(0, MaxLength) + "..."
      : email;
    return truncatedEmail;
  }
 // adapText(email, 30)

 export default {
  roles,
  adapText,
 }