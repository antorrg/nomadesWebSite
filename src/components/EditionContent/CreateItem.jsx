import { useState } from 'react';
import { Formulary, AreaText, VertContainer} from '../styles/LoginFormStyle';
import { Modal } from '../styles/LoginFormStyle';
import ImgUpFire from '../ImgUpFire';
import GenericButton from '../../Auth/userComponents/GenericButton/GenericButton'; 
import { sendingItem } from './EndpointPages';

export default function CreateItem({ pageId, onClose3 }) {
    const [item, setItem] = useState({
        img: "",
        text: "",
        id:pageId
    });

    const handleItemImageChange = (url) => {
        setItem((prevItem) => ({ ...prevItem, img: url }));
    };

    const handleItemChange = (event) => {
        const { name, value } = event.target;
        setItem((prevItem) => ({ ...prevItem, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Llama a la función para crear el ítem en la base de datos, por ejemplo:
        sendingItem(item, onClose3);
        console.log('soy el nuevo item: ',item);
    };

    return (
        <Modal>
        <Formulary>
            <section>
                <VertContainer>
                    <h4>Agregar Ítem:</h4>
                    <div>
                        <label htmlFor="item.img">Imagen:</label>
                        <ImgUpFire maxImages={1} uploadImgs={(url) => handleItemImageChange(url)} />
                    </div>
                    <label htmlFor="item.text">Texto:</label>
                    <AreaText
                        id="item.text"
                        name="text"
                        value={item.text}
                        onChange={handleItemChange}
                        required
                    />
                </VertContainer>
                <GenericButton onClick={handleSubmit} buttonText={'Enviar'} />
            </section>
            <GenericButton buttonText={'Cancelar'} onClick={onClose3} />
        </Formulary>
        </Modal>
    );
}
