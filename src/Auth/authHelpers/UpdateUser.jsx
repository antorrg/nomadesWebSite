import axios from "axios";
import {HandlError,showSuccess, showError} from '../userComponents/HandlerError';
import setAuthHeader from '../userComponents/axiosUtils'


export default async function updateUser (userId, editedUser, onClose) {
  //console.log(userId)
    //Lógica para guardar los cambios
    try {
      // Realiza la solicitud PUT con Axios
      const response = await axios.put(
        `/user/${userId}`,
        editedUser,
        setAuthHeader()
      );
      if (response.status === 200) {
        showSuccess(`Usuario actualizado con éxito`)
        await onClose(); // Cierra el modal después de guardar los cambios
      } else {
        showError("Error al actualizar el usuario");
      }
    } catch (error) {
      HandlError({ error: error.message });
      console.error("Error al actualizar el usuario:", error);
    }
  };


