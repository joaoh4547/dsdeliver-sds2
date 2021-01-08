import './styles.css'
import  './StepsHeader'
import StepsHeader from './StepsHeader';
import ProductsList from './ProductsList';
import { useEffect, useState } from 'react';
import { Product } from './Types';
import { fetchProducts } from '../api';

function Orders(){

    const [products, setProducts] = useState<Product[]>([]);
    console.log(products)
    useEffect(() => {
       fetchProducts().then(x => setProducts(x.data)).catch(e => console.log("teste"));
       
    },[]);

    return (
       
        <div className="orders-container">
            <StepsHeader/>
            <ProductsList products={products}/>
        </div>
    );
}

export default Orders;