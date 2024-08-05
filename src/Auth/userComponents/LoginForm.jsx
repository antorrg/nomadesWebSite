import {Formulary, ButtonEye, ErrorMsg} from '../../components/styles/LoginFormStyle'
import style from './styles/LoginForm.module.css'
import {useAuth} from '../AuthContext/AuthContext'
import { useState, useEffect } from "react";
import GenericButton from './GenericButton/GenericButton';
import { useNavigate } from "react-router-dom";
import {ValidLogin} from './internalUtils/Validate';
import {loginUser}from '../authHelpers/Auth'


const LoginForm = ({showModal}) => {
  
  const {login, authenticated, user}=useAuth();
  const navigate = useNavigate();
  //----------------------------------------
  //const [showForm, setShowForm] = useState(true);
  const [showPassword, setShowPassword]= useState(false)


 
  //-------------------------------------------------

  const onClose= ()=>{
    navigate("/home")
  }
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
    setError({
      ...error,
      [name]: ValidLogin({ ...input, [name]: value })[name],
    });
  }
  
  const handleSubmit = async(event)=>{
    event.preventDefault();
    
    const user = await loginUser(input,login);
    setInput({
      email: "",
      password: "",
    });
    if(authenticated){
      navigate("/home");
      
    }
    //}
  }
  const permit= (!input.email.trim() ||!input.password.trim() ||error.email|| error.password)? true :null;
 
  
  return (
    <Formulary>
        <div>
        <GenericButton onClick={onClose} buttonText={'Cancelar'}/>
        </div>
      
          <>
      <form onSubmit={(event) => handleSubmit(event)}>
        <br/>
        <div >
          <label > Email: </label>
          <input
            type="text"
            placeholder="email"
            value={input.email}
            name="email"
            autoComplete="off"
            onChange={(event) => handleChange(event)}
            className=''
            />
          {error.email && <ErrorMsg>{error.email}</ErrorMsg>}
        </div>
        <br/>
        <div>
          <label > Password: </label>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="password"
            value={input.password}
            name="password"
            autoComplete="off"
            onChange={(event) => handleChange(event)}
            className=''
          />
          <ButtonEye type= 'button' onClick={()=>{setShowPassword(!showPassword)}} className={style.buttonEye}>
          <i className={showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'}></i>
          </ButtonEye>
          {error.password && <ErrorMsg>{error.password}</ErrorMsg>}
        </div>
        <br/>
        <GenericButton type='submit' buttonText={'Iniciar Sesion'} disabled={permit}/> {/*en lugar de null va permit*/}
      </form>
      <label > No tiene cuenta? Registrese: </label>
      <br></br>
      <GenericButton onClick={()=>{showModal()}} buttonText={'Crear Usuario'}/>
      </>
     
    </Formulary>
  );
};

export default LoginForm


