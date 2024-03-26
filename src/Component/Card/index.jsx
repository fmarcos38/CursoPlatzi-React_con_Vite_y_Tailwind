import React, { useContext } from "react"
import { ShoppingCartContext } from  '../../Context/index';
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'


const Card = ({title, price, /* image, description */}) => {

    const contexto = useContext(ShoppingCartContext);

    //funcion agrega prod al carrito
    const addProd = (title, price) => {
        const existeP = contexto.carrito.find(prod => prod.title === title);
        if(existeP){
            alert("ya existe");
        }else{
            contexto.setCarrito([...contexto.carrito, {title,price}]);
            contexto.setCount(contexto.count + 1);
        }
    };
    //funcion verif si el prod ya está cargado
    const existeProd = (title) => {
        const existeP = contexto.carrito.find(prod => prod.title === title)
        if (existeP) {
            return (
                <div
                    className='absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1'>
                    <CheckIcon className='h-6 w-6 text-white'></CheckIcon>
                </div>
            )
        } else {
            return (
                <div
                    className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
                    onClick={(e) => {
                        e.stopPropagation(); /* evita q al hacer click en el icono se abra detalle */
                        addProd(title, price);
                    }}
                >
                    {/* renderizo icono segun si está o no el prod en el carrito */}

                    <PlusIcon className='h-6 w-6 text-black'></PlusIcon>
                </div>
            )
        }
    };
    //funcion q abre el detalle y asigno la info al mismo
    const dataProd = (title, price) => {
        contexto.setIsProdDetailOpen(true);
        contexto.setProductToShow({
            title: title,
            price: price
        });
    };

    return (
        <div 
            className='bg-white cursor-pointer w-56 h-60 rounded-lg'
            onClick={() => dataProd(title,price)} /* al hacer click abre detalle */
        >
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
                    onClick={(e) => {
                        e.stopPropagation(); /* evita q al hacer click en el icono se abra detalle */
                        addProd(title, price);
                    }}
                >
                    {/* renderizo icono segun si está o no el prod en el carrito */}
                    {
                        existeProd(title)
                    }
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