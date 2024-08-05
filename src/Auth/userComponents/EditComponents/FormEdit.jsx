import { useState } from "react";
import style from "../styles/Form.module.css";
import { Formulary, Form, FormContUser} from "../../../components/styles/LoginFormStyle";
import GenericButton from "../GenericButton/GenericButton";
import { useAuth } from "../../AuthContext/AuthContext";
import EditPass from "./EditPass";
import showConfirmationDialog from "../sweetAlert";
import ImgUpFire from "../../../components/ImgUpFire";

const FormEdit = ({id, editedUser,onInputChange,onSaveChanges,onClose,logout}) => {
  const [imageUrl, setImageUrl] = useState(editedUser.picture);
  //console.log('soy el form ',imageUrl)

  const onImageChange = (url) => {
    setImageUrl(url);
    //console.log(setImageUrl)
    onInputChange("picture", url);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onInputChange(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const confirmed = await showConfirmationDialog(
      "¿Está seguro de actualizar el usuario?"
    );
    if (confirmed) {
      // Si el usuario hace clic en "Aceptar", ejecutar la funcion:
      onSaveChanges();
    }
  };

  return (
    <FormContUser>
    <Formulary>
      <h3>Editar Usuario</h3>
      <GenericButton onClick={onClose} buttonText="Cancelar" />
      <label>
        {imageUrl && (<img style={{ maxWidth: "120px" }} src={imageUrl} alt="Current User"/> )}
      </label>
      <ImgUpFire maxImages={1} uploadImgs={onImageChange} />
      <Form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="given_name"
            value={editedUser.given_name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={editedUser.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          País:
          <input
            type="text"
            name="country"
            value={editedUser.country}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Rol:
          <select
            name="role"
            value={editedUser.role}
            onChange={handleInputChange}
          >
            <option value={0}>Admin</option>
            <option value={1}>Usuario</option>
            <option value={2}>Moderador</option>
          </select>
        </label>
        <label>
          Estado:
          <select
            name="enable"
            value={editedUser.enable}
            onChange={handleInputChange}
          >
            <option value={true}>Activo</option>
            <option value={false}>Bloqueado</option>
          </select>
        </label>
        <GenericButton type="submit" buttonText="Guardar cambios" />
      </Form>
      <hr></hr>
      <EditPass id={id} onClose={onClose} logout={logout} />
    </Formulary>
    </FormContUser>
  );
};

export default FormEdit;

// - Parámetros:
//   - email: `string`
//   - password: `string`
//   - nickname: `string`
//   - given_name: `string`
//   - picture: `string`
//   - country: `string`
//   - role `number`(selecciona)
//   - enable `boolean`(selecciona)
