"use client";
import { useContext, useState } from 'react';
import todoContext from '../context/todoContext';
import axios from 'axios';
const signup = () => {

    
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [hotel, setHotel] = useState('');
    const [fecha_inicio, setFecha_inicio] = useState('');
    const [fecha_fin, setFecha_fin] = useState('');
    const [barrio, setBarrio] = useState('');

  const TodoContext = useContext(todoContext);
  const{signUpUser} = TodoContext;

const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  
  formData.append('nombre', nombre);
  formData.append('email', email);
  formData.append('pwd', -pwd);
  formData.append('hotel', hotel);
  formData.append('fecha_inicio', fecha_inicio);
  formData.append('fecha_fin', fecha_fin);
  formData.append('barrio', barrio);

  try {
    ///Se puede hacer de esta manera (la cual no se esta usando)
    const response = await axios.post('http://localhost/php-pdo/controllers/turistController.php?post=HTML', formData, {
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
    <div className='m-auto w-4/12 text-white'>
        <div className='py-64 '>
    <form onSubmit={handleSubmit} className='glass p-10 text-sky-900 text-2xl font-extrabold ' method='POST'>
        <div className='form-control mb-4'>
                <label htmlFor="nombre">Nombre</label>
      <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" className='input input-info text-white' name='nombre' />
      
      </div>
      <div className='form-control mb-4'>
            <label htmlFor="email">Correo electrónico</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Correo electrónico" name='email'  className='input text-white input-info'/>
      </div>
      <div className='form-control mb-4'>
        <label htmlFor="pwd">Contraseña</label>
      <input type="password" value={pwd} onChange={(e) => setPwd(e.target.value)} placeholder="Contraseña" name='pwd' className='input input-info text-white'/>
      </div>
          <div className='form-control mb-4'>
                <label htmlFor="hotel">Hotel</label>
      <input type="text" value={hotel} onChange={(e) => setHotel(e.target.value)} placeholder="Hotel" className='input input-info text-white' name='hotel' />
      </div>
       <div className='form-control mb-4'>
                <label htmlFor="fecha_inicio">Fecha de llegada </label>
      <input type="date" className='input input-info' value={fecha_inicio} onChange={(e) => setFecha_inicio(e.target.value)}   name='fecha_inicio' />
      </div>
      <div className='form-control mb-4'>
                <label htmlFor="fecha_fin">Fecha de salida </label>
      <input type="date" className='input input-info' value={fecha_fin} onChange={(e) => setFecha_fin(e.target.value)}   name='fecha_fin' />
      </div>
        <div className='form-control mb-4'>
                <label htmlFor="hotel">Ubicacion</label>
      <input type="text" value={barrio} onChange={(e) => setBarrio(e.target.value)} placeholder="Ubicacion" className='input input-info text-white' name='barrio' />
      </div>
      <button type="submit" className='btn mt-10 bg-sky-900 glass hover:scale-125 transition-all duration-400 delay-150 hover:bg-sky-900'>Enviar</button>
    </form>
    </div>
    </div>
    
  );
};

export default signup;
