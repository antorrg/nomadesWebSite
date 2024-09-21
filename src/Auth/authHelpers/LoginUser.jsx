import axios from "axios";
import {HandlError,showSuccess, showError} from '../userComponents/HandlerError';
import setAuthHeader from '../userComponents/axiosUtils'


export default async function loginUser (userData,login) {
    const email = userData.email;
    const password = userData.password;
    try {
        const response = await axios.post(`/user/login`,{
            email,
            password,
        });
        if (response.status === 200) {
          console.log(response.data.data)
          const token = response.data.token;
          const user = response.data.user;
          login(user, token);
          //console.log(token)
          //console.log("Token almacenado en localStorage:", localStorage.getItem('validToken'));
      
            showSuccess('Login sucessfully')
            //console.log('token:',token)
            //console.log('user: ',user)
              return user;
        }
        } catch (error) {
          showError('Login fallido')
          //HandlError(error);
          throw error;
        }
     }  
