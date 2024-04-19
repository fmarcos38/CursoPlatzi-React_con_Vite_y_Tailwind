import React, { useContext } from 'react'
import './home.css';
import Card from '../../Component/Card';
import { ShoppingCartContext } from '../../Context';

function Home() {

    const contexto = useContext(ShoppingCartContext);
    //proteccion de ruta
    // Account
    const signOut = localStorage.getItem('sign-out')
    const parsedAccount = JSON.parse(signOut);


    return (
        <div className='contGralHome'>
            {
                !parsedAccount ? (
                    <>
                        <p>
                            <b>Debes estar registrado para ver nuestros Productos</b>
                        </p>
                    </>
                ) : (
                    <div className="contHome">
                        <div className='flex items-center justify-center relative w-80 mb-4'>
                            <h1 className='font-medium text-xl'>Exclusive Products</h1 >
                        </div >
                        <input type="text" placeholder='Search a product' 
                            className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
                            onChange={(event) => contexto.setSearchByTitle(event.target.value)}
                        />
                        <div className='contCards'>
                            {
                                contexto.filteredItems ? 
                                contexto.filteredItems.map(prod => (
                                    <Card 
                                        key={prod.id} 
                                        image={prod.images[0]}
                                        title={prod.title} 
                                        price={prod.price}
                                        category={prod.category.name}
                                        description={prod.description}
                                    />
                                )) : (
                                    <div>We don't have anything</div>
                                )
                            }
                        </div>
                    </div>
                )
            }
        </div >
    )
}

export default Home