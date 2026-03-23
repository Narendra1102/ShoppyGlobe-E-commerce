import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../utils/cartSlice";

function ProductItem({product}){
    
    const dispatch=useDispatch()
    function handleAddItem(product){
        dispatch(addToCart(product))
    }

    return (
        // Navigate to product detail page when card is clicked
        <Link to={`/product/${product.id}`} style={{ textDecoration: "none"}}>
            
            <div className="product-card">
                <img src={product.images[0]} alt="img" loading="lazy" width="200px" height="200px"/>
                <div className="product-det">
                    <h2 className="product-title">{product.title}</h2>
                    <h4>${product.price}</h4>
                </div>
                <div className='btn-container'>
                   <button onClick={()=>handleAddItem(product)} className="cart-btn">Add to Cart</button>
                </div>
            </div>
        </Link>
        
    )
        
    
}

export default ProductItem;