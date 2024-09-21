import {
    LANDING,
    PRODUCT,
    PRODUCT_BY_ID,
    CLEAN_STATE,
    ITEM,
} from './actions'

const initialState = {
    Landing:[],
    Products:[],
    ProductId:[],
    Item:[],
    Users:[]

}


const reducer = (state = initialState, {type, payload})=>{
    switch(type){
        case LANDING:
            return {
                ...state,
                Landing: payload,
            }
        case PRODUCT:
            return {
                ...state,
                Products: payload,
            }
        case PRODUCT_BY_ID:
            return {
                ...state,
                ProductId:payload,
            }
        case ITEM:
            return {
                ...state,
                Item:payload
            }
        case CLEAN_STATE:
            return {
                ...state,
                Item:payload,
                ProductId:payload,
            }
        default:
            return {
                ...state,
            }
    }
}

export default reducer