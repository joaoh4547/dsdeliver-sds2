import './styles.css'
import  './StepsHeader'
import StepsHeader from './StepsHeader';
import ProductsList from './ProductsList';
import { useEffect, useState } from 'react';
import { OrderLocationData, Product } from './Types';
import { fetchProducts } from '../api';
import OrderLocation from './OrderLocation';

function Orders(){

    const [products, setProducts] = useState<Product[]>([]);
    const [orderLocation,setOrderLocation] = useState<OrderLocationData>()
    console.log(products)
    useEffect(() => {
       fetchProducts().then(x => setProducts(x.data)).catch(e => console.log("teste"));
       
    },[]);
    console.log(orderLocation)
    return (
       
        <div className="orders-container">
            <StepsHeader/>
            <ProductsList products={products}/>
            <OrderLocation onChangeLocation={location => setOrderLocation(location)}/>
        </div>
    );
}

export default Orders;