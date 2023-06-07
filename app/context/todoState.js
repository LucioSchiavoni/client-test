"use client";  //A partir de ahora en nextjs debemos usar este "use client"
import React, { useReducer} from "react";
import todoContext from './todoContext'
import turistAxios from "../config/turistAxios";
import { REGISTRO_ERROR, REGISTRO_EXITOSO, USUARIO_AUTENTICADO, LOGIN_ERROR, LOGIN_EXITOSO } from "../types/types";
import todoReducer from "./todoReducer";




const TodoState = ({children}) => {

    const initialState = {
        autenticado: null,
        usuario: null,
    }

    const [state, dispatch] = useReducer(todoReducer, initialState);

    //Registrar nuevos usuarios
    const signUpUser = async datos => {
        try {
            //Uso la funcion cliente axios para traer la api e usarla luego en otro componente.  //Se le pasa el endpoint que se necesita para la respectiva funcion, aqui traemos el endopint de formatoPost creado en la api de PHP
            const respuesta = await turistAxios.post('?post=HTML',datos);
            dispatch({
                type: REGISTRO_EXITOSO, 
                payload: respuesta.data.msg
            });
      
        } catch (error) {
            dispatch({
                type: REGISTRO_ERROR,
                payload: error.response.data.msg
            })
        }
        
    }
    
//Login
 const loginUser = async datos => {
        try {
            const respuesta = await turistAxios.post('?login=HTML', datos);
            dispatch({
                type: LOGIN_EXITOSO,
                payload: respuesta.data
            })
        
        } catch (error) {
            dispatch({
                type: LOGIN_ERROR,
                payload: error.response.data.msg
            })
        }
    }
//Autenticado
 const usuarioAutenticado = async () => {
        
        try {
            const respuesta = await turistAxios.post('?login=HTML');
            
            dispatch({
                type: USUARIO_AUTENTICADO,
                payload: respuesta.data.usuario
            })
        } catch (error) {
            dispatch({
                type: LOGIN_ERROR,
                payload: error.response.data.msg
            })
        }
    }


    return(
        <todoContext.Provider value={{signUpUser, loginUser ,usuarioAutenticado,
       }}>
            {children}
        </todoContext.Provider>
    )
}


export default TodoState;