import React, { useContext } from 'react'
import Layout from '../../Component/Layout'
import Card from '../../Component/Card';
import { ShoppingCartContext } from '../../Context';

function Home() {

    const contexto = useContext(ShoppingCartContext);

    //funcion para mostrar SI hay busqueda o no
    const renderView = () => {
        if (contexto.filteredItems?.length > 0) {
            return ( 
                contexto.filteredItems?.map(prod => (
                    <Card
                        key={prod.id} 
                        image={prod.images[0]}
                        title={prod.title} 
                        price={prod.price}
                        category={prod.category.name}
                        description={prod.description}
                    />
                ))
            )
        }else{
            return (
                <div>We don't have anything :(</div>
            )
        }
    }

    return (
        <Layout>
            <div className='flex items-center justify-center relative w-80 mb-4'>
                <h1 className='font-medium text-xl'>Exclusive Products</h1>
            </div>
            <input
                type="text"
                placeholder='Search a product'
                className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
                onChange={(event) => contexto.setSearchByTitle(event.target.value)} 
            />
            <div className='grid gap-1 grid-cols-3 w-full max-w-screen-md'>
            {
                renderView()
            }
            </div>

            {/*  */}            
        </Layout>
    )
}

export default Home