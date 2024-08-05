import { useState } from "react";
import { Formulary, Form,Container,InputUpd,AreaText,FormularyContainer,} from "../styles/LoginFormStyle";
import GenericButton from "../../Auth/userComponents/GenericButton/GenericButton";
import showConfirmationDialog from "../../Auth/userComponents/sweetAlert";
//import Cloudinary2 from '../Cloudinary2';
import ImgUpFire from "../ImgUpFire";
//import CloudinaryUpload from '../Cloudinary2';

export default function FormEditPage({
  editedPage,
  onInputChange,
  onSaveChanges,
  onClose,
}) {
  let logoImage= editedPage.logo
  let logoLanding= editedPage.landing
  const [imageIco, setImageIco] = useState(logoImage);
  const [imageLand, setImageLand] = useState(logoLanding);
console.log('edicion: ',imageIco)
  const onImageIco = (url) => {
    setImageIco(url);
    //console.log(setImageUrl)
    onInputChange("logo", url);
  };
  const onImageLand = (url) => {
    setImageLand(url);
    //console.log(setImageUrl)
    onInputChange("landing", url);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onInputChange(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const confirmed = await showConfirmationDialog(
      "¿Está seguro de actualizar la información?"
    );
    if (confirmed) {
      // Si el usuario hace clic en "Aceptar", ejecutar la funcion:
      onSaveChanges();
    }
  };

  return (
    <FormularyContainer>
    <Formulary>
      <Container>
        <label>Logo:</label>
        {imageIco && (
          <img style={{ maxWidth: "70px" }} src={imageIco} alt="Current User" />
        )}
        <ImgUpFire maxImages={1} uploadImgs={onImageIco} />
      </Container>
      <Container>
        <label>Landing:</label>
        {imageLand && (
          <img
            style={{ maxWidth: "160px" }}
            src={imageLand}
            alt="Current User"
          />
        )}
        <ImgUpFire maxImages={1} uploadImgs={onImageLand} />
      </Container>
      <Form onSubmit={handleSubmit}>
        <Container>
          <label style={{ marginRight: "1.5rem" }}>Titulo:</label>
          <InputUpd
            type="text"
            name="title"
            value={editedPage.title}
            onChange={handleInputChange}
          />
        </Container>
        <Container>
          <label style={{ marginRight: "1rem" }}>InfoHeader:</label>
          <AreaText
            name="infoHeader"
            value={editedPage.infoHeader}
            onChange={handleInputChange}
          />
        </Container>
        <Container>
          <label style={{ marginRight: "1.5rem" }}>InfoBody: </label>
          <AreaText
            name="infoBody"
            value={editedPage.infoBody}
            onChange={handleInputChange}
          />
        </Container>
        <Container>
          <label style={{ marginRight: "1.5rem" }}>Url: </label>
          <InputUpd
            type="text"
            name="url"
            value={editedPage.url}
            onChange={handleInputChange}
          />
        </Container>
        <Container>
        <label>
          Estado:
          <select
            name="enable"
            value={editedPage.enable}
            onChange={handleInputChange}
          >
            <option value={true}>Activo</option>
            <option value={false}>Bloqueado</option>
          </select>
        </label>
        </Container>
        <br></br>
        <GenericButton type="submit" buttonText="Guardar cambios" />
      </Form>
      <GenericButton onClick={onClose} buttonText="Cancelar" />
    </Formulary>
    </FormularyContainer>
  );
}
