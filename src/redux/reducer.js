import {
    INFO,
    DETAIL_INFO,
    CLEAN_DETAIL,
    SINGLE_PROJECT,
    USERS,
    USER_BY_ID,

} from './actions.js'

const count= 12;

const initialState = {
    info :  [],
    allInfo:[],
    loading: true,
    totalPages:1,
    currentPage:1,
    singleProject:[],
    detail:[],
    users:[],
    detailUsers:[],


};

const reducer = (state= initialState, {type, payload})=>{
    switch(type){
        case INFO:
            return{
                ...state,
                info: payload,
                allInfo: payload,
                totalPages: Math.ceil(payload.length / count),
                loading: false,
            }
        
        case DETAIL_INFO:
            return {
                ...state,
                detail: payload,
                loading: false,
            }
        case SINGLE_PROJECT:
            return{
                ...state,
                singleProject: payload,
                loading: false,
            };
        case CLEAN_DETAIL:
            return {
                ...state,
                detail: payload,
                singleProject:payload,
                detailUsers: payload,
            }
        case USERS:
            return {
                ...state,
                users: payload,
                loading:false
            }
        case USER_BY_ID:
            return {
                ...state,
                detailUsers: payload,
                loading: false,
            }
       
        default : 
        return{
            ...state
        }
    }
}

export default reducer;