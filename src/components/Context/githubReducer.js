import {GET_USERS,GET_USER, SEARCH_USERS} from './types'

    export default (action,state)=>{
        switch (action.type) {
            case GET_USERS:
                return{
                    ...state,
                    users:action.payload,
                   
                }
                case GET_USER:
                    return{
                        ...state,
                        users:action.payload,
                       
                    }
                    case SEARCH_USERS:
                        return{
                            ...state,
                            users:action.payload,
                           
                        }
                default:
                    return state
        }
       
    }
