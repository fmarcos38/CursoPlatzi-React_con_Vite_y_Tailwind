import { TrashIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';



const ItemCarrito = props => {   
    const { title, imageUrl, price } = props;

    const contexto = useContext(ShoppingCartContext);

    //funcion elim prod carrito
    const elimProd = (title) => {
        const newCarrito = contexto.carrito.filter(p => p.title != title);
        contexto.setCarrito(newCarrito);
        contexto.setCount(newCarrito);
    };

    return (
        <div className="flex flex-col items-center mb-3">
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-30'>
                    <img 
                        className='w-full h-full rounded-lg object-cover' 
                        src="https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt={title} />
                </figure>
                <p className='text-sm font-small'>{title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>${price}</p>
                <button>-</button>
                <p>cantItems</p>
                <button>+</button>
                <TrashIcon 
                    className='h-4 w-4 text-black cursor-pointer'
                    onClick={() => elimProd(title)}
                ></TrashIcon>
            </div>
        </div>
    )
}

export default ItemCarrito





/* import React from 'react'

function ItemCarrito({title, price}) {
    return (
        <div className='flex flex-col'>
            <span>title: {title}</span>
            <span>Price: ${price}</span>
        </div>
    )
}

export default ItemCarrito */