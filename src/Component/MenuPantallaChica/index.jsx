import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context';



function MenuPantallaChica() {

    //para los estilos
    const activeStyle = 'underline underline-offset-4';

    const context = useContext(ShoppingCartContext);

    return (
        <>
            {
                context.btnOpen ? (
                    <div className='contMenuPCH'>
                        <ul className='flex items-center gap-3'>
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
                            <li>
                                <button onClick={() => context.setBtnOpen(false)}>X</button>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <>
                    </>
                )
            }
        </>        
    )
}

export default MenuPantallaChica;