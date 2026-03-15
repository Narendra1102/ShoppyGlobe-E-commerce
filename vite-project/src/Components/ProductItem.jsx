import { Link } from "react-router-dom";

function ProductItem({products}){
    
    return (
        products.map((product)=>{
            
            return (
                <div className="product-card" key={product.id}>
                    <img src={product.images[0]} alt="img" loading="lazy" width="200px" height="200px"/>
                    <div>
                        <h2 className="product-title">{product.title}</h2>
                        <b>${product.price}</b>
                        <div className="btns">
                            <Link to={`/product/${product.id}`}>
                                <button className="det-btn">Details</button>
                            </Link>

                            
                        </div>
                    </div>
                    
                </div>
            )
        })
    )
}

export default ProductItem;