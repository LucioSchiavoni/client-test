"use client";
import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import todoContext from '../context/todoContext';




  const signup = () => {

    const TodoContext = useContext(todoContext);
    const { signUpUser } = TodoContext;



    const formik = useFormik({
        initialValues: {
            message: '',
            name: '',
            email: '',
            pwd: '',
        },
        validationSchema: Yup.object({

            name: Yup.string().required("El nombre es obligatorio"),
            email: Yup.string().required("Campo Obligatorio").email("Debe ser un email Valido"),
            pwd: Yup.string().required("Campo Obligatorio")
            
        }),

        onSubmit: value => {
            const formData = new FormData();
            formData.append('name', value.name);
            formData.append('email', value.email);
            formData.append('pwd', value.pwd);
         
            signUpUser(formData)
        }

    })



  return (
<>
<div className='py-64 flex items-center  w-80 m-auto h-80  justify-center '>
<form onSubmit={formik.handleSubmit} className='mt-20 bg-base-100 p-10 text-white' method='POST'>
<div className='form-control mb-5'>
<label htmlFor="name">Nombre</label>
<input type="text"
                                    className='h-8 rounded-lg p-2 '
                                    id='name'
                                    placeholder='Nombre de Usuario'
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                        required
                                />
                                {formik.touched.name && formik.errors.name ? (
                                    <div className='text-white'>

                                        <p>{formik.errors.name}.</p>
                                    </div>
                                ) : null}
</div>
<div className='form-control mb-5'> 
    <label htmlFor="email">Correo</label>
      <input type="email"
                                    className='h-8 rounded-lg p-2'
                                    id='email'
                                    placeholder='Nombre de Usuario'
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                        required
                                />
                                {formik.touched.email && formik.errors.email ? (
                                    <div className='text-white'>

                                        <p>{formik.errors.email}.</p>
                                    </div>
                                ) : null}

</div>
<div className='form-control mb-5'> 
    <label htmlFor="pwd">Password</label>
         <input type="password"
                                    className='h-8 rounded-lg p-2'
                                    id='pwd'
                                        minLength="8"
                                        required
                                    placeholder='Contraseña'
                                    value={formik.values.pwd}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                <div> <p className='font-sans tracking-tight text-sm italic text-white'>No compartiremos tus datos con nadie.</p> </div>
                                {formik.touched.pwd && formik.errors.pwd ? (
                                    <div className='text-white'>

                                        <p>{formik.errors.pwd}.</p>
                                    </div>
                                ) : null}

</div>


    <button type='submit' className='w-24 h-10 bg-white text-black rounded-lg hover:scale-125 transition duration-300 delay-150'>Enviar</button>
</form>
</div>
</>
  )
}


export default signup;