import { FormularyContainer, FormCreate, Container, VertContainer, InputUpd, AreaText  } from "../styles/LoginFormStyle"
import ImgUpFire from '../ImgUpFire'
import {useState}from 'react'
import GenericButton from "../../Auth/userComponents/GenericButton/GenericButton";
import { createProject } from "./EndpointPages";


export default function CreatePage ({onClose}){

    const [page, setPage] = useState({
        title: "",
        landing: "",
        logo: "",
        info_header:"",
        info_body:"",
        url:"",
        items: [{img:"", text: ""}]
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPage((prevPage) => ({
            ...prevPage,
            [name]: value,
        }));
    };

    const handleItemChange = (index, event) => {
        const { name, value } = event.target;
        const items = [...page.items];
        items[index][name] = value;
        setPage({ ...page, items });
    };

    const handleImageChange = (name, url) => {
        setPage((prevPage) => ({
            ...prevPage,
            [name]: url,
        }));
    };

    const handleItemImageChange = (index, url) => {
        const items = [...page.items];
        items[index].img = url;
        setPage({ ...page, items });
    };
    const addItem = ()=>{
        setPage((prevPage)=>({
            ...prevPage,
            items: [...prevPage.items, {img: "", text: ""}]
        }));
    }
    const removeItem = (index)=>{
        setPage((prevPage)=>{
            const items = prevPage.items.filter((_, i)=> i !==index)
            return {...prevPage, items}
        })
    }
    const handleSubmit = (event)=>{
        event.preventDefault()
        createProject(page, onClose)
        //console.log({page})
    }
    return(
        <FormularyContainer>
        <FormCreate>
        <section>
            <h3>Ingresar Proyecto: </h3>
        <Container>
        <label htmlFor="landing">Landing image:</label>
        <ImgUpFire maxImages={1} maxWidth="9rem"uploadImgs={(url) => handleImageChange('landing', url)}/>
        </Container> 
        <Container>
        <label htmlFor="logo">Logo image:</label>
        <ImgUpFire maxImages={1} maxWidth= '3rem' uploadImgs={(url) => handleImageChange('logo', url)}/>
        </Container> 
        <Container>
        <label htmlFor="title">Title:</label>
        <InputUpd id='title' type='text' name='title' value={page.title} onChange={handleChange} required/>
        </Container>
        <Container>
        <label htmlFor="info_header">InfoHeader:</label>
        <AreaText  name="info_header" value={page.info_header} onChange={handleChange}required/>
        </Container> 
        <Container>
        <label htmlFor="info_body">InfoBody:</label>
        <AreaText  name="info_body" value={page.info_body} onChange={handleChange}required/>
        </Container>
        <Container>
        <label htmlFor="url">Url:</label>
        <InputUpd id='url' type='text' name='url' value={page.url} onChange={handleChange} placeholder="Url del proyecto..." required/>
        </Container> 
        <VertContainer>
        {page.items.map((item, index)=>(
        <div>
         <h4>Items: </h4>
         <div>
         <label htmlFor= {`item_img_${index}`}>Imagen:</label>
         <ImgUpFire maxImages={1} uploadImgs={(url) => handleItemImageChange(index, url)} />
         </div>
         <div>
         <label  htmlFor={`item_text_${index}`}>Texto: </label>
         <AreaText id={`item_text_${index}`} name="text" value={item.text} onChange={(event) => handleItemChange(index, event)} required/>
         </div>
         <GenericButton onClick={() => removeItem(index)} buttonText={'Eliminar'} disabled={page.items.length===1}/>
        </div>
        ))}
        </VertContainer>
        <Container>
        <GenericButton buttonText={'Cancelar'} onClick={onClose}/>
        <GenericButton type="button" onClick={addItem} buttonText={'Agregar'}/>
        <GenericButton type="button" onClick={handleSubmit} buttonText={'Enviar'}/>
        </Container>
        </section>
        </FormCreate>
        </FormularyContainer>
    )
}
