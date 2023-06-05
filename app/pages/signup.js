"use client";
import { useContext, useState } from 'react';
import todoContext from '../context/todoContext';
import axios from 'axios';
const signup = () => {

    const [ci, setCi] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [fnac, setFnac] = useState('');
    const [email, setEmail] = useState('');
    const [clave, setClave] = useState('');
    const [sexo, setSexo] = useState('');

  const TodoContext = useContext(todoContext);
  const{signUpUser} = TodoContext;

const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append('ci', ci);
  formData.append('nombre', nombre);
  formData.append('apellido', apellido);
  formData.append('fnac', fnac);
  formData.append('email', email);
  formData.append('clave', clave);
  formData.append('sexo', sexo);

  try {
    ///Se puede hacer de esta manera (la cual no se esta usando)
    const response = await axios.post('http://localhost/php-api/controllers/userController.php?formatoPost=HTML', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
///O tambien se puede hacer con el useContext, traigo la funcion y se utiliza para guardar el usuario(la manera que la estoy usando actualmente)
    signUpUser(formData) 
  } catch (error) {
    console.error(error);
  }
};

  return (
    <div className='m-auto w-80 text-white'>
        <div className='py-64 '>
    <form onSubmit={handleSubmit} className='glass p-10 text-sky-900 text-2xl font-extrabold ' method='POST'>
        <div className='form-control mb-4'>
                <label htmlFor="ci">Cedula</label>
      <input type="text" value={ci} onChange={(e) => setCi(e.target.value)} placeholder="Cedula" className='input input-info text-white' name='ci' />
      
      </div>
        <div className='form-control mb-4'>
                <label htmlFor="nombre">Nombre</label>
      <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" className='input input-info text-white' name='nombre' />
      
      </div>
        <div className='form-control mb-4'>
                <label htmlFor="apellido">Apellido</label>
      <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} placeholder="Apellido" className='input input-info text-white'  name='apellido' />
      </div>
          <div className='form-control mb-4'>
                <label htmlFor="fnac">Fecha de nacimiento</label>
      <input type="text" value={fnac} onChange={(e) => setFnac(e.target.value)} placeholder="Fecha de nacimiento" className='input input-info text-white' name='fnac' />
      </div>
 
      <div className='form-control mb-4'>
            <label htmlFor="email">Correo electrónico</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Correo electrónico" name='email'  className='input text-white input-info'/>
      </div>
      <div className='form-control mb-4'>
        <label htmlFor="clave">Contraseña</label>
      <input type="password" value={clave} onChange={(e) => setClave(e.target.value)} placeholder="Contraseña" name='clave' className='input input-info text-white'/>
      </div>
          <div className='form-control mb-4'>
                <label htmlFor="sexo">Genero</label>
      <input type="text" value={sexo} onChange={(e) => setSexo(e.target.value)} placeholder="Genero" className='input input-info text-white' name='sexo' />
      </div>
      <button type="submit" className='btn mt-10 bg-sky-900 glass hover:scale-125 transition-all duration-400 delay-150 hover:bg-sky-900'>Enviar</button>
    </form>
    </div>
    </div>
    
  );
};

export default signup;
