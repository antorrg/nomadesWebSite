import { useEffect, useState } from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { getProjectById, getUserById } from "../redux/actions";
import FormEditPage from "../components/EditionContent/FormEditPage";
import FormEdit from '../Auth/userComponents/EditComponents/FormEdit';
import updateUser from '../Auth/authHelpers/UpdateUser'
import style from './styles/Update.module.css'


export default function Update (){
    const location = useLocation();
     const dispatch = useDispatch();
     const navigate = useNavigate();

     //Separamos la query del params y hacemos dos variables:
const queryParams = new URLSearchParams(location.search);
const type = queryParams.get("type"); //Obtener el type "user" o "project"
const id = location.pathname.split("/").pop(); // Obtener el ID de la URL
const [edit, setEdit] = useState(false)


useEffect(() => {
  if (type === "user") {
    dispatch(getUserById(id))
    setEdit(true)
  } else if (type === "project") {
    dispatch(getProjectById(id))
    setEdit(false)
  }
}, [type, dispatch, id, setEdit]);

const onClose= ()=>{navigate('/home')}

//*Logica de update de usuario >>>>>>>>>>><<<<<<
   const user = useSelector((state) => state.detailUsers);
   const userId =  user.id
   //console.log(userId)
   const [editedUser, setEditedUser] = useState({
    email: '',
    given_name: '',
    country: '',
    picture: '',
    role: '',
    enable: ''
  });

  useEffect(() => {
    if (user) {
      setEditedUser({
        email: user.email || '',
        given_name: user.givenName || '',
        country: user.country || '',
        picture: user.image || '',
        role: user.role || '',
        enable: user.enable || ''
      });
    }
  }, [user]);
  
    const handleInputChange = (name, value) => {
      const processedValue = name === "enable" ? value === "true" : value;
      setEditedUser((prevUser) => ({
        ...prevUser,
        [name]: processedValue,
      }));
    };
  
    const userSaveChanges = async () => {
        await updateUser(userId, editedUser, onClose)
        //onClose()
    }
   // console.log(userId)
   
//* Logica de update de paginas <<<<<<<<<<<<<<<<<<<<<<<<
    const project = useSelector((state) => state.singleProject);
    const [editedPage, setEditedPage] = useState({
      title: '',
      logo: '',
      landing: '',
      infoHeader: '',
      infoBody: '',
      url: ''
    });
  
    useEffect(() => {
      if (project?.info) {
        setEditedPage({
          title: project.info.title || '',
          logo: project.info.logo || '',
          landing: project.info.landing || '',
          infoHeader: project.info.infoHeader || '',
          infoBody: project.info.infoBody || '',
          url: project.info.url || ''
        });
      }
    }, [project]);
  
    const onInputChange = (name, value) => {
      setEditedPage((prevPage) => ({
        ...prevPage,
        [name]: value,
      }));
    };
    const onSaveChanges = async () => {
        console.log('soy la edicion: ', id, {editedPage})
        //onClose()
    }
  
    return(
       <div className={style.pepe}>
        {edit?
      <FormEdit id={userId} editedUser={editedUser} onInputChange={ handleInputChange} onSaveChanges={userSaveChanges } onClose={onClose}/>
      :
      <FormEditPage id={id} editedPage={editedPage} onInputChange={onInputChange} onSaveChanges={onSaveChanges} onClose={onClose}/>
       }
    </div>
    )
}
