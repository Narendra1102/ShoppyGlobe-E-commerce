import ProductItem from "./ProductItem";
import useFetch from "../utils/useFetch";
import { useSelector } from "react-redux";

function ProductList(){
    
    // Custom hook to fetch all products
    const products = useFetch();

    // Get search text from Redux store
    const searchText = useSelector(state => state.search.text);

    // Filter products based on search input
    const filteredProducts=products.filter((product)=>{
        return product.title.toLowerCase().includes(searchText.toLowerCase())
    })

    return (
        <div className="product-list">
            {/* Show products if available after filtering */}
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
