import { XMarkIcon } from '@heroicons/react/24/solid'
import './styles.css'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import ItemCarrito from '../ItemCarrito'

const Carrito = () => {

    const contexto = useContext(ShoppingCartContext);

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
            <div className='px-6 overflow-y-scroll'>
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
        </aside>
    )
}

export default Carrito