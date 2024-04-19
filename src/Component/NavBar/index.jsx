import React, { useContext, useEffect } from "react"
import { ShoppingCartContext } from  '../../Context/index';
import { NavLink } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import './nav.css';



function NavBar() {
    //para los estilos
    const activeStyle = 'underline underline-offset-4';

    const context = useContext(ShoppingCartContext);

    const handleSignOut = () => {
        //pongo sign-out en false
        const stringifiedSignOut = JSON.stringify(false);
        localStorage.setItem('sign-out', stringifiedSignOut);
        context.setSignOut(false);
        //borro user del localStorage
        localStorage.setItem('account', JSON.stringify({}))
    }

    //funcion q retorna NavLink SignIn o SingOut
    const SignInOrOut = () => {
        if(!context.signOut){
            return(
                <NavLink to='/sign-in' className={({ isActive }) => isActive ? activeStyle : undefined }>
                    Sign In
                </NavLink>
            )
        }else{
            return(
                <ul className='flex items-center gap-3'>
                    {/* name userLog */}
                    <li className='text-black/60'>
                        <p>
                            Hola, <b>{context.account.name}</b>
                        </p>
                    </li>
                    {/* my orders */}
                    <li>
                        <NavLink to='/my-orders' className={({ isActive }) => isActive ? activeStyle : undefined}>
                            My Orders
                        </NavLink>
                    </li>
                    {/* my account */}
                    <li>
                        <NavLink to='/my-account' className={({ isActive }) => isActive ? activeStyle : undefined}>
                            My Account
                        </NavLink>
                    </li>
                    {/* logout */}
                    <li>
                        <NavLink to='/sign-in' className={({ isActive }) => isActive ? activeStyle : undefined} 
                            onClick={() => handleSignOut()}
                            >
                            Sign out
                        </NavLink>
                    </li>
                    {/* carrito */}
                    <li className="flex">
                        <NavLink to={'/carrito'} className={({ isActive }) => isActive ? activeStyle : undefined}>
                            <ShoppingCartIcon className='h-6 w-6 text-black cursor-pointer'
                                onClick={() => context.setIsCarritoOpen(true)}
                            >
                            </ShoppingCartIcon>
                            {context.count}
                        </NavLink>
                    </li>
                </ul>
            )
        }
    };


    return (
        <nav>
            <div className='contBarraPantalla flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
                {/* items izq */}
                <ul className='flex items-center gap-3'>
                    {/* logo */}
                    <li className='font-semibold text-lg'>
                        <NavLink to='/home' className={({ isActive }) => isActive ? activeStyle : undefined}>
                            Shopi
                        </NavLink>
                    </li>
                    {/* All */}
                    <li>
                        <NavLink to='/all' className={({ isActive }) => isActive ? activeStyle : undefined}>
                            All
                        </NavLink>
                    </li>
                    {/* categoria clothes */}
                    <li>
                        <NavLink
                            to='/clothes'
                            className={({ isActive }) => isActive ? activeStyle : undefined}
                            onClick={() => context.setSearchByCategory('clothes')}
                        >
                            Clothes
                        </NavLink>
                    </li>
                    {/* categoria electronic */}
                    <li>
                        <NavLink
                            to='/electronics'
                            className={({ isActive }) => isActive ? activeStyle : undefined}
                            onClick={() => context.setSearchByCategory('electronics')}
                        >
                            Electronics
                        </NavLink>
                    </li>
                    {/* categoria furnitures */}
                    <li>
                        <NavLink
                            to='/furniture'
                            className={({ isActive }) => isActive ? activeStyle : undefined}
                            onClick={() => context.setSearchByCategory('furniture')}
                        >
                            Furnitures
                        </NavLink>
                    </li>
                    {/* categoria toy */}
                    <li>
                        <NavLink
                            to='/toys'
                            className={({ isActive }) => isActive ? activeStyle : undefined}
                            onClick={() => context.setSearchByCategory('toys')}
                        >
                            Toys
                        </NavLink>
                    </li>
                    {/* categoria others */}
                    <li>
                        <NavLink
                            to='/others'
                            className={({ isActive }) => isActive ? activeStyle : undefined}
                            onClick={() => context.setSearchByCategory('others')}
                        >
                            Others
                        </NavLink>
                    </li>
                </ul>

                {/* items der */}
                {
                    SignInOrOut()
                }
            </div>

            {/* menu Pantalla chica */}
            <div className="contMenuH">
                <div className="menuIzq">
                    <ul>
                        {/* Logo */}
                        <li>
                            <NavLink to='/home' className={({ isActive }) => isActive ? activeStyle : undefined} >
                                Logo
                            </NavLink>
                        </li>
                        {/* menu desplegable */}
                        <li class="">
                            <button onClick={() => context.setBtnOpen(true)}>Menu</button>
                        </li>
                    </ul>
                </div>

                {/* menu desp Derecho */}
                <div className="menuDer">
                    <ul>
                        <li>
                            menu
                        </li>
                        <li>
                            <NavLink to={'/carrito'} className={({ isActive }) => isActive ? activeStyle : undefined}>
                                <ShoppingCartIcon className='h-6 w-6 text-black cursor-pointer'
                                    onClick={() => context.setIsCarritoOpen(true)}
                                >
                                </ShoppingCartIcon>
                                {context.count}
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


export default NavBar