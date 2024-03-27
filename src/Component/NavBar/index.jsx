import React, { useContext } from "react"
import { ShoppingCartContext } from  '../../Context/index';
import { NavLink } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'


function NavBar() {
    //para los estilos
    const activeStyle = 'underline underline-offset-4';

    const contexto = useContext(ShoppingCartContext);

    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
            {/* items izq */}
            <ul className='flex items-center gap-3'>
                {/* logo */}
                <li className='font-semibold text-lg'>
                    <NavLink to='/' 
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                        onClick={() => contexto.setSearchByCategory()}>
                        Shopi
                    </NavLink>
                </li>
                {/* Home */}
                <li>
                    <NavLink 
                        to='/' 
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                        onClick={() => contexto.setSearchByCategory()}
                    >
                        All
                    </NavLink>
                </li>
                {/* categoria clothes */}
                <li>
                    <NavLink 
                        to='/clothes' 
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                        onClick={() => contexto.setSearchByCategory('clothes')}
                    >
                        Clothes
                    </NavLink>
                </li>
                {/* categoria electronic */}
                <li>
                    <NavLink 
                        to='/electronics' 
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                        onClick={() => contexto.setSearchByCategory('electronics')}
                    >
                        Electronics
                    </NavLink>
                </li>
                {/* categoria furnitures */}
                <li>
                    <NavLink 
                        to='/furniture' 
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                        onClick={() => contexto.setSearchByCategory('furniture')}
                    >
                        Furnitures
                    </NavLink>
                </li>
                {/* categoria toy */}
                <li>
                    <NavLink 
                        to='/toys' 
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                        onClick={() => contexto.setSearchByCategory('toys')}
                    >
                        Toys
                    </NavLink>
                </li>
                {/* categoria others */}
                <li>
                    <NavLink
                        to='/others'
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                        onClick={() => contexto.setSearchByCategory('others')}
                    >
                        Others
                    </NavLink>
                </li>
            </ul>
            {/* items der */}
            <ul className='flex items-center gap-3'>
                <li className='text-black/60'>
                    teff@platzi.com
                </li>
                <li>
                    <NavLink to='/my-orders' className={({ isActive }) => isActive ? activeStyle : undefined }>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/my-account'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/sing-in'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Sign In
                    </NavLink>
                </li>
                <li className="flex">
                    <ShoppingCartIcon 
                        className='h-6 w-6 text-black cursor-pointer'
                        onClick={() => contexto.setIsCarritoOpen(true)}
                    >
                    </ShoppingCartIcon> 
                    {contexto.count}
                </li>
            </ul>
        </nav>
    )
}


export default NavBar