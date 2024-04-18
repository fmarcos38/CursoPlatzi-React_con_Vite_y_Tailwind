import React, { useContext, useState } from 'react'
import Layout from '../../Component/Layout';
import './signIn.css';
import { ShoppingCartContext } from '../../Context';
import { useNavigate } from 'react-router-dom';

function SingIn() {

  const [user, setUser] = useState({name: "", email: "", password: ""});
  const [error, setError] = useState({name: "", email: "", pass: ""});
  const context = useContext(ShoppingCartContext);
  const navigate = useNavigate();

  const handleOnChage = (e) => {
      if(e.target.id === 'name'){
        setUser({...user, name: e.target.value});
      }
      if(e.target.id === 'email'){
        setUser({...user, email: e.target.value});
      }
      if(e.target.id === 'pass'){
        setUser({...user, password: e.target.value});
      }
      
  };

  //funcion validaciones
  const validacionesForm = () => {
    const errors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(user.name === ""){
      error.name = "Inrese su nombre";
    }

    if (!emailRegex.test(user.email)) {
        errors.email = 'Email no válido';
    }

    if (user.password.length < 6) {
        errors.password = 'La contraseña debe tener al menos 6 caracteres';
    }
    setError(errors);
    return Object.keys(errors).length === 0;
};

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validacionesForm()) {
      const stringifyUser = JSON.stringify(user);
      localStorage.setItem('account', stringifyUser);
      const stringifiedSignOut = JSON.stringify(true)
      localStorage.setItem('sign-out', stringifiedSignOut);

      context.setAccount(user);
      context.setSignOut(true);

      if (context.account.name) {
        alert("User creado con exito");
        navigate('/login');
      } else {
        alert("Algo salió mal");
      }
    }
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <label className='input-label'>Your name: </label>
        <input type='text' id='name' value={user.name} onChange={(e) => {handleOnChage(e)}} className='input-field'/>
        <label>Your email: </label>
        <input type='text' id='email' value={user.email} onChange={(e) => {handleOnChage(e)}} className='input-field'/>
        {error.email && <span>{error.email}</span>}
        <label>Your password: </label>
        <input type='text' id='pass' value={user.password} onChange={(e) => {handleOnChage(e)}} className='input-field'/>
        {error.password && <span>{error.password}</span>}

        <button type='submit' className='btnCreate'>Create user</button>
      </form>
    </Layout>
  )
}

export default SingIn


//localStorage.removeItem('account')
//localStorage.removeItem('sign-out')