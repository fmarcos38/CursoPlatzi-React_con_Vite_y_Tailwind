import { createContext, useState, useEffect } from 'react'

export const ShoppingCartContext = createContext();

//Inicializar variables account y sign-out en localStorage
export const initializeLocalStorage = () => {
    const accountInLocalStorage = localStorage.getItem('account')
    const signOutInLocalStorage = localStorage.getItem('sign-out')
    let parsedAccount
    let parsedSignOut

    if (!accountInLocalStorage) {
        localStorage.setItem('account', JSON.stringify({}))
        parsedAccount = {}
    } else {
        parsedAccount = JSON.parse(accountInLocalStorage)
    }

    if (!signOutInLocalStorage) {
        localStorage.setItem('sign-out', JSON.stringify(false))
        parsedSignOut = false
    } else {
        parsedSignOut = JSON.parse(signOutInLocalStorage)
    }
}

export const ShoppingCartProvider = ({children}) => {

    // My account
    const accountInLocalStorage = localStorage.getItem('account');
    const parsedAccount = JSON.parse(accountInLocalStorage)
    const signOutInLocalStorage = localStorage.getItem('sign-out');
    const parsedSignOut = JSON.parse(signOutInLocalStorage)
    //userLog
    const [account, setAccount] = useState(parsedAccount); 
    // Sign out
    const [signOut, setSignOut] = useState(parsedSignOut); 
    //estado para los productos
    const [products, setProducts] = useState(null); 
    //estado para filtrar
    const [filteredItems, setFilteredItems] = useState(null);
    // estado busca x titulo
    const [searchByTitle, setSearchByTitle] = useState(null);
    //estado para buscar por categoría
    const [ searchByCategory, setSearchByCategory] = useState(null);
    //estado para el carrito(almacena los prods)
    const [carrito, setCarrito] = useState([]);  
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
    //estado para el Boton Menu desplegable
    const [btnOpen, setBtnOpen] = useState(false); console.log("open:", btnOpen)
    

    //filtra por titulo
    const filteredItemsByTitle = (products, searchByTitle) => {
        return products?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }
    //filtra por categoría
    const filteredItemsByCategory = (products, searchByCategory) => {
        return products?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
    }
    //combinación de filtros
    const filterBy = (searchType, products, searchByTitle, searchByCategory) => {
        if (searchType === 'BY_TITLE') {
            return filteredItemsByTitle(products, searchByTitle)
        }

        if (searchType === 'BY_CATEGORY') {
            return filteredItemsByCategory(products, searchByCategory)
        }

        if (searchType === 'BY_TITLE_AND_CATEGORY') {
            return filteredItemsByCategory(products, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }

        if (!searchType) {
            return products
        }
    }
    
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
    
    //para los filtros
    useEffect(() => {
        if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', products, searchByTitle, searchByCategory))
        if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', products, searchByTitle, searchByCategory))
        if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', products, searchByTitle, searchByCategory))
        if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, products, searchByTitle, searchByCategory))
    }, [products, searchByTitle, searchByCategory])

    return (
        <ShoppingCartContext.Provider value={{
            account,
            setAccount,
            signOut,
            setSignOut,
            products,
            setProducts,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            searchByCategory,
            setSearchByCategory,
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
            btnOpen, 
            setBtnOpen,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}