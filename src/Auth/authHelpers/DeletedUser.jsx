import axios from "axios";
import {HandlError,showSuccess, showError} from '../userComponents/HandlerError';
import setAuthHeader from '../userComponents/axiosUtils'


export default async function onDeleteUser (id) {
    try {
      const response = await axios.delete(`/user/${id}`, setAuthHeader());
      if (response.status === 200) {
        showSuccess("Usuario eliminado con exito");
        onClose(); // Cierra el modal después de guardar los cambios
      } else if (response.status === 400) {
        showError("Error al eliminar el usuario");
      }
    } catch (error) {
      if (error.response) {
        // Si hay una respuesta del servidor, muestra el mensaje de error correspondiente
        HandlError(error);
      } else {
        // Si no hay respuesta del servidor, muestra un mensaje de error genérico
        showError("Error al eliminar el usuario");
      }
    }
  };
