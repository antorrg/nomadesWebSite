import { Formulary, ButtonEye, ErrorMsg } from "../../components/styles/LoginFormStyle";
import { useState } from "react";
//import { useNavigate } from "react-router-dom";
import { ValidCreate } from './internalUtils/Validate';
import { createUser } from '../authHelpers/Auth'
import GenericButton from './GenericButton/GenericButton';
import showConfirmationDialog from './sweetAlert';



const SignInForm = ({ onClose }) => {

  const [showPassword, setShowPassword]= useState(false)
  const [input, setInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });


  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));

    setError({
      ...error,
      [name]: ValidCreate({ ...input, [name]: value })[name],
    });
  };

  const handleConfirmation = async (e) => {
    const validationErrors = ValidCreate(input);
    setError(validationErrors);
    if (Object.values(validationErrors).every((error) => error === "")) {
      await createUser(input, onClose);
      setInput({
        email: "",
       password: "",
       confirmPassword: "",
      });
    }
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    const confirmed = await showConfirmationDialog('¿Está seguro de crear el usuario?');
    if (confirmed) {
        // Si el usuario hace clic en "Aceptar", realizar la acción de cambiar la contraseña
        handleConfirmation();
        
    }
  };

  const permit =
    !input.email.trim() ||
    !input.password.trim() ||
    !input.confirmPassword.trim()||
    error.email ||
    error.password ||
    error.confirmPassword;



  return (
    <Formulary>
      <form onSubmit={handleSubmit}>
      <h2 >REGISTRO</h2>
        <div>
          <label> EMAIL </label>
          <input
            type="text"
            value={input.email}
            name="email"
            autoComplete="off"
            onChange={(event) => handleChange(event)}
            className=''
          />
          {error.email && <ErrorMsg>{error.email}</ErrorMsg>}
        </div>
        <div>
          <label > Password: </label>
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder="password"
        value={input.password}
        name="password"
        autoComplete="off"
        onChange={(event) => handleChange(event)}
      />
       <ButtonEye type= 'button' onClick={()=>{setShowPassword(!showPassword)}}>
          <i className={showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'}></i>
          </ButtonEye>
      {error.password && <ErrorMsg>{error.password}</ErrorMsg>}
      </div>
        <div>
          <label > Confirm Pass: </label>
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder="confirm password"
        value={input.confirmPassword}
        name="confirmPassword"
        autoComplete="off"
        onChange={(event) => handleChange(event)}
        className=''
      />
       <ButtonEye type= 'button' onClick={()=>{setShowPassword(!showPassword)}}>
          <i className={showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'}></i>
          </ButtonEye>
      {error.confirmPassword && <ErrorMsg>{error.confirmPassword}</ErrorMsg>}
    </div> 
        <div>
          <GenericButton type='submit' buttonText={'CREAR USUARIO'} disabled={permit}/>
        </div>
      </form>
          <GenericButton onClick={onClose} buttonText={'CANCELAR'} />
    </Formulary>
  );
};

export default SignInForm;

