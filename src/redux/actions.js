import axios from 'axios'
import setAuthHeader from '../Auth/userComponents/axiosUtils.js'

export const INFO = 'INFO';
export const DETAIL_INFO = 'DETAIL_INFO'
export const CLEAN_DETAIL = 'CLEAN_DETAIL'
export const SINGLE_PROJECT = 'SINGLE_PROJECT'
export const USERS = 'USERS';
export const USER_BY_ID= 'USER_BY_ID';


export const getInfo = ()=> async(dispatch) => {
    try{
    const response = await axios(`/project`)
    const data = response.data;
    return dispatch({
        type: INFO,
        payload: data
    })
}catch(error){
    console.error(error.message)
    //alert('data not found')
}
}
export const getProjectById = (id)=>async(dispatch)=>{
    try {
        const response = await axios(`/project/${id}`)
        return dispatch({
            type: SINGLE_PROJECT,
            payload:response.data
        });
    } catch (error) {
        console.error(error)
        //alert('data not found')
    }
 }
 export const getById = (id)=>async(dispatch)=>{
    try {
        const response = await axios(`/project/item/${id}`)
        return dispatch({
            type: DETAIL_INFO,
            payload:response.data
        });
    } catch (error) {
        console.error(error)
        //alert('data not found')
    }
 }
export const getUsers = ()=>async(dispatch)=>{
    try {
        const response = await axios(`/user`, setAuthHeader())
        return dispatch({
            type: USERS,
            payload: response.data
        })
    } catch (error) {
        console.error(error)
        alert('data not found')
    }
}
export const getUserById = (id)=>async(dispatch)=>{
    try {
        const response = await axios(`/user/${id}`, setAuthHeader())
        return dispatch({
            type: USER_BY_ID,
            payload: response.data
        })
    } catch (error) {
        console.error(error)
        alert('data not found')
    }
}

export const cleanDetail = ()=>{
    return {
        type: CLEAN_DETAIL,
        payload: [],
    };
};
