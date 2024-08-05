import axios from "axios";
import {HandlError,showSuccess, showError} from '../userComponents/HandlerError';
import setAuthHeader from '../userComponents/axiosUtils'




export default async function createUser (userData, onClose) {
    const email = userData.email;
  const password = userData.password;
  const confirmPassword = userData.confirmPassword
  try {
    const response = await axios.post(`/user/create`, {
        email,
        password,
    })
    if (response.status === 201) {
      //const token = response.data.token;
      const user = response.data.data;
       showSuccess('User created successfully')
        onClose()
        //console.log(user)
        return user;
      }
  } catch (error) {
    HandlError(error);
    throw error;
  }
}

