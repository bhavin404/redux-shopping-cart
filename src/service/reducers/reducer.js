import { ADD_TO_CART } from "../constants"

const initialState={
    cardData:[]
}

export default function CardItems (initialState,action){
    switch(action.type){
        case ADD_TO_CART: 
            return{
                ...initialState,
                cardData:action.payload,
            }
            break;
        default:
            return initialState
    }
}