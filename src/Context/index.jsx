import { createContext, useState, useEffect } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    
    //estado para los productos
    const [products, setProducts] = useState(null); console.log("products: ",products)
    //estado para filtrar
    const [filteredItems, setFilteredItems] = useState(null);console.log("filteredItems: ",filteredItems)
    // estado busca x titulo
    const [searchByTitle, setSearchByTitle] = useState(null);console.log("searchByTitle: ",searchByTitle)
    //estado para buscar por categoría
    const [ searchByCategory, setSearchByCategory] = useState(null); console.log("searchByCategory: ",searchByCategory)
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
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}