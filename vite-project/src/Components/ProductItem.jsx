import { Link } from "react-router-dom";

function ProductItem({product}){
    
    return (
        <Link to={`/product/${product.id}`} style={{ textDecoration: "none"}}>
            <div className="product-card">
                <img src={product.images[0]} alt="img" loading="lazy" width="200px" height="200px"/>
                <div className="product-det">
                    <h2 className="product-title">{product.title}</h2>
                    <h4>${product.price}</h4>
                </div>
                
            </div>
        </Link>
        
    )
        
    
}

export default ProductItem;