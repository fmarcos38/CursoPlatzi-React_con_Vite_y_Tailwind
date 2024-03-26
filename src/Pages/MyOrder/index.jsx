import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import Layout from '../../Component/Layout'
import { ShoppingCartContext } from '../../Context'
import ItemCarrito from '../../Component/ItemCarrito';
import { ChevronLeftIcon } from '@heroicons/react/24/solid'

function MyOrder() {

  const contexto = useContext(ShoppingCartContext);


  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-6'>
        <Link to='/my-orders' className='absolute left-0'>
          <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer' />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className='flex flex-col w-80'>
        {
          contexto.orden?.slice(-1)[0].products.map(product => (
            <ItemCarrito
              key={product.title}
              id={product.id}
              title={product.title}
              imageUrl={product.images}
              price={product.price}
            />
          ))
        }
      </div>
    </Layout>
  )
}

export default MyOrder
