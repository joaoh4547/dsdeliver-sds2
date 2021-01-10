import { checkIsSelected } from "./helpers";
import ProductCard from "./ProductCard";
import { Product } from "./types";

type Props ={
    products: Product[],
    onSelectProduct: (product: Product) => void;
    selectedProducts:Product[]
}


function ProductsList({products, onSelectProduct,selectedProducts} : Props){


    
    return (
        
        <div className="orders-list-container">
            <div className="orders-list-items">
                {
                    products.map(x => (<ProductCard isSelected={checkIsSelected(selectedProducts,x)} key={x.id} product={x} onSelectProduct={onSelectProduct} />))
                }
            </div>
        </div>
    );
}

export default ProductsList;