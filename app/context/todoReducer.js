// Aqui va el manejo de Types
import { REGISTRO_EXITOSO, REGISTRO_ERROR } from "../types/types";

export default (state, action) => {
    switch(action.type){
        case REGISTRO_EXITOSO:
        case REGISTRO_ERROR:
            return{
                ...state,
                message: action.payload
            }
            
            default:
                return state;
    }
}