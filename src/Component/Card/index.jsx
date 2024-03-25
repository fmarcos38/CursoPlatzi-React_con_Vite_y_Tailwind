import React, { useContext } from "react"
import { ShoppingCartContext } from  '../../Context/index';
import { NavLink } from "react-router-dom";
import { PlusIcon } from '@heroicons/react/24/solid'
const Card = ({title, price}) => {


    const contexto = useContext(ShoppingCartContext);

    return (
        <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
            <figure className='relative mb-2 w-full h-4/5'>
                <span 
                    className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'
                    >
                        Electronics
                </span>
                
                
                <img 
                    className='w-full h-full object-cover rounded-lg' 
                    src={"https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt='headphones' 
                />
                
                
                <div 
                    className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
                    onClick={() => contexto.setCount(contexto.count + 1)}
                >
                    <PlusIcon className='h-6 w-6 text-black'></PlusIcon>
                </div>
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>{title}</span>
                <span className='text-lg font-medium'>{price}</span>
            </p>
        </div>
    )
}

export default Card