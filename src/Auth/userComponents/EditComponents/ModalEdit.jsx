import { useState } from "react";
import style from "../styles/Modal.module.css";
import FormEdit from "./FormEdit";
import * as us from '../../authHelpers/Auth'
import { useAuth } from "../../AuthContext/AuthContext";
import GenericButton from "../GenericButton/GenericButton";
import { showSuccess} from "../HandlerError";
import showConfirmationDialog from "../sweetAlert";


const EditWindow = ({ onClose, userEdit }) => {
  const { authenticated, user, logout } = useAuth();
  const { id, email, name, typeId, numberId, role, enable, country, picture } =
    userEdit;

  const [editedUser, setEditedUser] = useState({
    email,
    name,
    typeId,
    numberId,
    country,
    picture,
    role,
    enable,
  });

  //console.log(editedUser)

  const handleInputChange = (name, value) => {
    const processedValue = name === "enable" ? value === "true" : value;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: processedValue,
    }));
  };
  const resetUser = () => {
    if (user.id === id) {
      showSuccess(`Usuario actualizado con éxito. \n Inicia sesion nuevamente`);
      setTimeout(() => {
        logout();
      }, 4000);
    } else {
      showSuccess(`Usuario actualizado con éxito`);
      null;
    }
  };
  const handleSaveChanges = async () => {
      await us.updateUser(id, editedUser, onClose, resetUser)
  }

    

  const resetPassword = async () => {
    const confirmed = await showConfirmationDialog(
      "¿Está seguro de resetear la contraseña?"
    );
    if (confirmed) {
      us.onResetPass(id);
    }
  };

  const deleteUser = async () => {
    const confirmed = await showConfirmationDialog(
      `¿Está seguro de borrar este usuario? \n Esta accion no podrá deshacerse`
    );
    if (confirmed) {
      us.onDeleteUser(id);
    }
  };
 

  return (
    <div className={style.modal}>
      <div className={style.divButtons}>
        <GenericButton onClick={onClose} buttonText="Cancelar" />
        {authenticated && user.role === 0 ? (
          <>
            <GenericButton
              onClick={resetPassword}
              buttonText="Reset Password"
            />
            <GenericButton onClick={deleteUser} buttonText={"Borrar Usuario"} />
          </>
        ) : null}
      </div>
      {/* <h2 >Editar Usuario</h2> */}
      <FormEdit
        id={id}
        editedUser={editedUser}
        onInputChange={handleInputChange}
        onSaveChanges={handleSaveChanges}
        onClose={onClose}
        logout={logout}
      />
    </div>
  );
};

export default EditWindow;
