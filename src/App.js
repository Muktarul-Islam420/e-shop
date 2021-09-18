import React, { useEffect, useState } from 'react'
//import Products from './components/Products/Products'
import {Products, Navbar} from './components'
import {commerce} from './lib/commerce';

function App() {
    const [products, setProducts] = useState([]);


    const fetchProducts = async () => {
        const {data} = await commerce.products.list()
    
        setProducts(data);
    }

    useEffect(() => {
        fetchProducts();
    })
    console.log(products)
    
    return (
        <div>
            <Products/>
            <Navbar/>
        </div>
    )
}

export default App
