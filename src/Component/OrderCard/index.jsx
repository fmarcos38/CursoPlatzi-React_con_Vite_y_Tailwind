import { ChevronRightIcon } from '@heroicons/react/24/solid'

const OrderCard = props => {
    const { totalPrice, totalProds } = props

    return (
        <div className="flex justify-between items-center mb-3 border border-black rounded-lg p-6 w-100">
            <div className='flex justify-between w-full'>
                <p className='flex flex-col'>
                    <span className='font-light'>Fecha: 01.02.23</span>
                    <span className='font-light'>Total productos: {totalProds} articles</span>
                </p>
                <p className='flex items-center gap-2'>
                    <span className='font-medium text-1xl'>Total compra: ${totalPrice}</span>
                    <ChevronRightIcon className='h-6 w-6 text-black cursor-pointer' />
                </p>
            </div>
        </div>
    )
}

export default OrderCard