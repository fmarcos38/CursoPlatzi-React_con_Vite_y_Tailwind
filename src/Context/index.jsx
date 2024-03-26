import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    
    //estado para el carrito(almacena los prods)
    const [carrito, setCarrito] = useState([]); console.log("carrito:", carrito);
    //estado para el contador de items del carrito
    const [count, setCount] = useState(0); 
    //estado para abrir/cerrar Carrito
    const [isCarritoOpen, setIsCarritoOpen] = useState(false);
    //estado para el detalle del producto
    const [isProdDetailOpen, setIsProdDetailOpen] = useState(false);    
    // Product Detail · Show Product
    const [productToShow, setProductToShow] = useState({});
    //estado para la orden de compras
    const [orden, setOrden] = useState([]);


    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            carrito,
            setCarrito,
            isCarritoOpen,
            setIsCarritoOpen,
            isProdDetailOpen,
            setIsProdDetailOpen,
            productToShow,
            setProductToShow,
            orden,
            setOrden,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}