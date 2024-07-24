import {
  PRODUCT,
  PRODUCT_BY_ID,
  ITEM,
  CLEAN_DETAIL,
} from './actions.js'



const initialState = {
   product: [],
   productById: [],
   item : [],
   loading: true,
};

const rootReducer = (state= initialState, {type, payload})=>{
    switch(type){
        case PRODUCT :
            return {
             product : payload,
             loading: false,
            }
        case PRODUCT_BY_ID:
            return {
                productById: payload,
                loading : false,
            }
        case CLEAN_DETAIL:
            return {
                productById : payload,
            }
        case ITEM:
            return {
                item : payload,
                loading : false,
            }
       
        default : 
        return{
            ...state
        }
    }
}

export default rootReducer;