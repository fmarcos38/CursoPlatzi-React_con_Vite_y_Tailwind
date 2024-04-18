import React, { useContext, useState } from 'react';
import Layout from '../../Component/Layout';
import './logIn.css';
import { ShoppingCartContext } from '../../Context';
import { useNavigate } from 'react-router-dom';

function LogIn() {

    const [user, setUser] = useState({email: "", pass: ""});
    const [error, setError] = useState({email: "", pass: ""});
    const [msj, setMsj] = useState({email: "", pass: ""});
    const context = useContext(ShoppingCartContext);
    const navigate = useNavigate();

    const handleOnChage = (e) => {
        if(e.target.id === "emailLog"){ setUser({...user, email: e.target.value})}
        if(e.target.id === "passLog"){ setUser({...user, pass: e.target.value})}
    };

    //funcion validaciones
    const validacionesForm = () => {
        const errors = {};

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(user.email)) {
            errors.email = 'Email no válido';
        }

        if (user.pass.length < 6) {
            errors.pass = 'La contraseña debe tener al menos 6 caracteres';
        }
        setError(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(validacionesForm()){
            if(user.email !== context.account.email){ setMsj({ email: "Email no registrado"})}
            else if(user.pass !== context.account.password){ setMsj({pass: "Pass incorrecta"})}
            else {
                navigate('/home');
            }
        }

        
    };

    return (
        <Layout>
            <div className='contLoin'>
                <form onSubmit={handleSubmit} className='formLogin'>
                    <label>Your email: </label>
                    <input type='text' id='emailLog' value={user.email} onChange={(e) => { handleOnChage(e) }} className={error.name ? "errorInput" : "input-field"} />
                    {error.email && <span>{error.email}</span>}
                    {msj.email && <span>{msj.email}</span>}
                    <label>Your password: </label>
                    <input type='text' id='passLog' value={user.pass} onChange={(e) => { handleOnChage(e) }} className='input-field' />
                    {error.pass && <span>{error.pass}</span>}
                    {msj.pass && <span>{msj.pass}</span>}
                    <button type='submit' className='btnCreate'>Login</button>
                </form>
            </div>
        </Layout>
    )
}

export default LogIn