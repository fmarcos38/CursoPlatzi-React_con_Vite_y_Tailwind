import React, { useEffect, useState } from 'react'
import Layout from '../../Component/Layout'
import Card from '../../Component/Card';
import { urlApi } from '../../Api/url';

function Home() {

    const [products, setProducts] = useState(null);

    //consumo de la API - con fetch
    useEffect(() => {
        try {
            fetch('https://api.escuelajs.co/api/v1/products')
                .then(response => response.json())
                .then(data => setProducts(data)); 
        } catch (error) {
            console.log('error al conectar a la api: ', error);
        }
    },[]); 

    return (
        <Layout>
            Home
            <div className='grid gap-1 grid-cols-3 w-full max-w-screen-md'>
            {
                products?.map(prod => {
                    return <Card 
                                key={prod.id} image={prod.images[0]} 
                                title={prod.title} price={prod.price}
                                description={prod.description}/>
                })
            }
            </div>
        </Layout>
    )
}

export default Home