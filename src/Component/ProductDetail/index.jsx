import { XMarkIcon } from '@heroicons/react/24/solid'
import './styles.css'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

const ProductDetail = () => {

    const contexto = useContext(ShoppingCartContext);

    return (
        <aside
            className={`${contexto.isProdDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div className='flex flex-row'>
                    <button onClick={() => contexto.setIsProdDetailOpen(false)}>
                        <XMarkIcon className='h-6 w-6 text-black cursor-pointer'></XMarkIcon>
                    </button>
                </div>
            </div>
            <figure className='px-6'>
                <img className='w-full h-full rounded-lg' src={contexto.productToShow.image} alt="not found" />
            </figure>
            <span className='font-medium text-2xl'>Price: ${contexto.productToShow.price}</span>
            <span className='font-medium text-md'>Producto: {contexto.productToShow.title}</span>
        </aside>
    )
}

export default ProductDetail