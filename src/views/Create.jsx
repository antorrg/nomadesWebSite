import {useNavigate} from 'react-router-dom'
import CreatePage from '../components/EditionContent/CreatePage'
import {Modal}from '../components/styles/ModalStyle'

export default function Create (){
    const navigate = useNavigate()
    const onClose=()=>{navigate('/home')}
    
    return (
        <CreatePage onClose={onClose}/> 
    )
}