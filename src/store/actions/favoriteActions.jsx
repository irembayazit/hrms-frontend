export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE"
export const REMOVE_FROM_FAVORITE = "REMOVE_FROM_FAVORITE"

export function addToFavorite(advert){
    return{
        type : ADD_TO_FAVORITE,
        payload : advert
    }
}

export function removeFromFavorite(advert){
    return{
        type : REMOVE_FROM_FAVORITE,
        payload : advert
    }
}