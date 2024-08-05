import { useState } from "react";
import style from "../../Auth/userComponents/styles/Modal.module.css";
import { Modal } from "../styles/ModalStyle";
import FormEditPage from "./FormEditPage";

export default function ModalEditPage({ onClose, pageEdit }) {
  const { id, title, logo, landing, infoHeader, infoBody, url } = pageEdit;

  const [editedPage, setEditedPage] = useState({
    title,
    logo,
    landing,
    infoHeader,
    infoBody,
    url,
  });

  console.log(editedPage)

  const onInputChange = (name, value) => {
    //const processedValue = name === "enable" ? value === "true" : value;
    setEditedPage((prevPage) => ({
      ...prevPage,
      [name]: value,
    }));
  };

  const onSaveChanges = async () => {
    console.log("soy la edicion: ", id, { editedPage });
  };

  return (
    <Modal>
      <FormEditPage
        id={id}
        editedPage={editedPage}
        onInputChange={onInputChange}
        onSaveChanges={onSaveChanges}
        onClose={onClose}
      />
    </Modal>
  );
}
