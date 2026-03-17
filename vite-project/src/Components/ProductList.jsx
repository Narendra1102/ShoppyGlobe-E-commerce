import ProductItem from "./ProductItem";
import useFetch from "../utils/useFetch";
import { useSelector } from "react-redux";

function ProductList(){
    
    const products=useFetch()

    const searchText=useSelector(state=>state.search.text)

    const filteredProducts=products.filter((product)=>{
        return product.title.toLowerCase().includes(searchText.toLowerCase())
    })

    return (
        <div className="product-list">
            {filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
                  <ProductItem key={product.id} product={product} />
                ))
            ) :
            (
                <h2>No products found</h2>
            )
            }

        </div>
    )
}

export default ProductList;
