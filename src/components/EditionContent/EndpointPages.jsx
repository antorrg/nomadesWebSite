import axios from "axios";
import {HandlError,showSuccess, showError} from '../../Auth/userComponents/HandlerError';
import setAuthHeader from '../../Auth/userComponents/axiosUtils'


export const updateProject = async({id, editedUser, onClose, resetUser})=> {
    //Lógica para guardar los cambios
    try {
      // Realiza la solicitud PUT con Axios
      const response = await axios.put(
        `/project/${id}`,
        editedUser,
        setAuthHeader()
      );

      if (response.status === 200) {
        showSuccess(`Usuario actualizado con éxito`)
        onClose(); // Cierra el modal después de guardar los cambios
        resetUser();
      } else {
        showError("Error al actualizar el usuario");
      }
    } catch (error) {
      HandlError({ error: error.message });
      console.error("Error al actualizar el usuario:", error);
    }
  };


export const createProject = async(page, onClose)=>{
  console.log('soy el body ahora',{page})
  try {
    const response = await axios.post(
      `/project/create`,
      page,
      setAuthHeader()
    );
    if (response.status === 201) {
      showSuccess(`Proyecto añadido con éxito`)
      onClose(); // Cierra el modal después de guardar los cambios
    } else {
      showError("Error al añadir el proyecto");
    }
  } catch (error) {
    HandlError({ error: error.message });
    console.error("Error al añadir el proyecto:", error);
  }
} 

export const sendingItem = async(item, onClose3)=>{
  try {
    const response = await axios.post(
      `/project/item/create`,
      item,
      setAuthHeader()
    );
    if (response.status === 201) {
      showSuccess(`Item añadido con éxito`)
      setTimeout(()=>{
        onClose3(); // Cierra el modal después de guardar los cambios
      },1000)
      
    } else {
      showError("Error al añadir el item");
    }
  } catch (error) {
    HandlError({ error: error.message });
    console.error("Error al añadir el item:", error);
  }
}

export const sendingDel = async(id, closeDel)=>{
  try {
    const response = await axios.delete(
      `/project/${id}`,
      setAuthHeader()
    );
    if (response.status === 200) {
      showSuccess(`Item eliminado con éxito`)
      setTimeout(()=>{
        closeDel(); // Cierra el modal después de guardar los cambios
      },1000)
      
    } else {
      showError("Error al eliminar el item");
    }
  } catch (error) {
    HandlError({ error: error.message });
    console.error("Error al eliminar el item:", error);
  }
}