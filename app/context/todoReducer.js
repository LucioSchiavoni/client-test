// Aqui va el manejo de Types
import { REGISTRO_EXITOSO, REGISTRO_ERROR, LOGIN_ERROR, LOGIN_EXITOSO, USUARIO_AUTENTICADO } from "../types/types";

export default (state, action) => {
    switch(action.type){
        case REGISTRO_EXITOSO:
        case REGISTRO_ERROR:
            case LOGIN_ERROR:
            return{
                ...state,
                message: action.payload
            }
            case LOGIN_EXITOSO:
            return {
                ...state,
                autenticado: true
            }
            case USUARIO_AUTENTICADO: 
            return {
                ...state,
                usuario: action.payload
            }
            default:
                return state;
    }
}