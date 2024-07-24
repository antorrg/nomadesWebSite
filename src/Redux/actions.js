import axios from 'axios'
//import setAuthHeader from '../Auth/userComponents/axiosUtils.js'

export const PRODUCT = 'PRODUCT';
export const PRODUCT_BY_ID = 'PRODUCT_BY_ID';
export const ITEM = 'ITEM';
export const CLEAN_DETAIL = 'CLEAN_DETAIL';
 

export const getProduct = ()=> async(dispatch) => {
    try{
    const response = await axios(`/`)
    const data = response.data;
    return dispatch({
        type: PRODUCT,
        payload: data
    })
}catch(error){
    console.error(error.message)
    //alert('data not found')
}
}
export const getProductById = (id)=>async(dispatch)=>{
    try {
        const response = await axios(`/${id}`)
        return dispatch({
            type: PRODUCT_BY_ID,
            payload:response.data
        });
    } catch (error) {
        console.error(error)
        //alert('data not found')
    }
 }
 export const getItem = (id)=>async(dispatch)=>{
    try {
        const response = await axios(`/item/${id}`)
        return dispatch({
            type: ITEM,
            payload:response.data
        });
    } catch (error) {
        console.error(error)
        //alert('data not found')
    }
 }


export const cleanDetail = ()=>{
    return {
        type: CLEAN_DETAIL,
        payload: [],
    };
};
