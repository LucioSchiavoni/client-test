"use client";  //A partir de ahora en nextjs debemos usar este "use client"
import React, { useReducer} from "react";
import todoContext from './todoContext'
import clienteAxios from "../config/axios";
import { REGISTRO_ERROR, REGISTRO_EXITOSO } from "../types/types";
import todoReducer from "./todoReducer";
import axios from "axios";


const URI = "http://localhost/php-api/controllers/userController.php?formatoPost=HTML";
const TodoState = ({children}) => {

    const initialState = {
        message:null,
    name:null,
    email:null,
    pwd:null,
    }

    const [state, dispatch] = useReducer(todoReducer, initialState);

    //Registrar nuevos usuarios
    const signUpUser = async datos => {
        try {
            //Uso la funcion cliente axios para traer la api e usarla luego en otro componente.  //Se le pasa el endpoint que se necesita para la respectiva funcion, aqui traemos el endopint de formatoPost creado en la api de PHP
            const respuesta = await clienteAxios.post('?formatoPost=HTML',datos);
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


    return(
        <todoContext.Provider value={{signUpUser, 
        name:state.name,
        email:state.email,
        pwd: state.pwd,
        message:state.message,}}>
            {children}
        </todoContext.Provider>
    )
}


export default TodoState;