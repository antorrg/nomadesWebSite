import GenericButton from '../../Auth/userComponents/GenericButton/GenericButton'
import {FormularyContainer, FormCreate} from '../styles/LoginFormStyle'
import {sendingDel} from './EndpointPages'

export default function DeleteItem ({pageId, response, closeDel}){
  const {title} = response.info
   const handleDeleted = ()=>{
        sendingDel(pageId, closeDel)
   }
    return(
        <FormularyContainer>
        <FormCreate>
        <h3>Desea eliminar el proyecto {title}? </h3>
        <h4>Esta acción no podrá deshacerse</h4>
        <GenericButton buttonText={'Eliminar'} onClick={handleDeleted}/>
        <GenericButton buttonText={'Cancelar'} onClick={()=>closeDel()}/>
        </FormCreate>
        </FormularyContainer>
    )
}