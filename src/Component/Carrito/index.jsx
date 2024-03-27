import { XMarkIcon } from '@heroicons/react/24/solid'
import './styles.css'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import ItemCarrito from '../ItemCarrito'
import { totalPrice } from '../../utils';
import { Link } from 'react-router-dom'

const Carrito = () => {

    const contexto = useContext(ShoppingCartContext);

    //creo objeto con toda la info de la orden de compra
    const handleComprar = () => {
        const orden = {
            date: '14/01/83',
            products: contexto.carrito,
            totalProds: contexto.carrito.length,
            totalPrice: totalPrice(contexto.carrito)
        };
        contexto.setOrden([...contexto.orden, orden]);
        contexto.setCarrito([]);
        contexto.setCount(0);
        contexto.searchByTitle(null);
    };


    return (
        <aside
            className={`${contexto.isCarritoOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Carrito de compras</h2>
                <div className='flex flex-row'>
                    <button onClick={() => contexto.setIsCarritoOpen(false)}>
                        <XMarkIcon className='h-6 w-6 text-black cursor-pointer'></XMarkIcon>
                    </button>
                </div>
            </div>
            <div className='px-6 overflow-y-scroll flex-1'>
            {
                contexto.carrito[0] ?
                contexto.carrito.map(prod => {
                    return(
                        <ItemCarrito key={prod.title} title={prod.title} price={prod.price}/>
                    )
                }) :
                <p>No hay prods en el carrito</p>
            }
            </div>
            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-ligth'>Total compra: </span>
                    <span className='font-medium text-2xl'>${totalPrice(contexto.carrito)}</span>
                </p>
                <Link to={'/my-order/last'}>
                    <button
                        className='bg-black py-3 text-white w-full rounded-lg'
                        onClick={() => handleComprar()}
                    >
                        Comprar
                    </button>
                </Link>
            </div>
        </aside>
    )
}

export default Carrito