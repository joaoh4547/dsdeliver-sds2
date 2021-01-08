import ProductCard from "./ProductCard";
import { Product } from "./Types";

type Props ={
    products: Product[]
}


function ProductsList({products} : Props){

    
    return (
        
        <div className="orders-list-container">
            <div className="orders-list-items">
                {
                    products.map(x => (<ProductCard key={x.id} product={x} />))
                }
            </div>
        </div>
    );
}

export default ProductsList;