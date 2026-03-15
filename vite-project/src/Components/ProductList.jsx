import ProductItem from "./ProductItem";
import useFetch from "../utils/useFetch";

function ProductList(){
    
    const products=useFetch()

    return (
        <div className="product-list">
            <ProductItem products={products}/>
        </div>
    )
}

export default ProductList;
