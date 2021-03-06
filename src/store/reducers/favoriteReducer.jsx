import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from "../actions/favoriteActions";
import { favoriteItems } from "../initialValues/favoriteItems";
import { toast } from "react-toastify";

const initialState = {
    favoriteItems : favoriteItems
}

export default function favoriteReducer(state=initialState,{type,payload}){
    switch (type) {
        case ADD_TO_FAVORITE:
            let advert = state.favoriteItems.find(c=>c.advert.id === payload.id)
            if (advert) {
                    toast.info(`Daha önce eklenmiş!!`)
                    return{
                        ...state
                    }
            } else {      
                toast.success(`${payload.id} sepete eklendi!!`)                          
                return {
                    ...state,
                    favoriteItems:[...state.favoriteItems,{advert:payload}]                   
                }
            }

        case REMOVE_FROM_FAVORITE:
            return{
                ...state,
                favoriteItems:state.favoriteItems.filter(c=>c.advert.id !== payload.id)
            }
    
        default:
            return state;
    }
}