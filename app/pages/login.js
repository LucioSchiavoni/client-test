// Componente de inicio de sesión en Next.js
"use client"
import { useContext, useState } from 'react';
import todoContext from '../context/todoContext';
import turistAxios from '../config/turistAxios';
import axios from 'axios';
function login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const TodoContext = useContext(todoContext);
  const {loginUser} = TodoContext;

  const handleLogin = async values => {

    const response = await axios.post('http://localhost/php-pdo/controllers/turistController.php?login=HTML', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    // const data = await response.json();

    const logindata = new FormData();
    logindata.append('email', values.email);
    logindata.append('pwd', values.password)


    loginUser(logindata)
    
  };

  return (
    
    <form onSubmit={handleLogin} method='POST'>
    <div className='h-screen m-auto w-5/12 p-4'>
        <div className='form-control mb-4'>
        <label htmlFor="email">Correo</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name='email' />
      </div>
    
      <div className='form-control mb-4'>
        <label htmlFor="pwd">Password</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name='pwd'/>
      </div>
      <button type='submit' className='btn'>Iniciar sesión</button>
    </div>
    </form>
  );
}

export default login;
