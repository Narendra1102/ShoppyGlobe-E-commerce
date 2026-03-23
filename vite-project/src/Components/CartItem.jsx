import { useDispatch } from "react-redux"
import { increaseQty,decreaseQty,removeFromCart } from "../utils/cartSlice"

function CartItem({item}){
  // Initialize Redux dispatch function
  const dispatch=useDispatch()
  
  
  return(

    <div className="product-details">
      {/* Product image section */}
      <div className="product-image">
        <img src={item.images?.[0]} width="200px" height="200px" loading="lazy"/>
      </div>

      {/* Product information section */}
      <div class="product-info">
        <h2>{item.title}</h2>
        <h4>${item.price}</h4>

        {/* Quantity control buttons */}
        <div className="cart-quantity">
            {/* Decrease item quantity */}
            <button className="btn-cart" onClick={()=>dispatch(decreaseQty(item.id))}>-</button>

            {/* Display current quantity */}
            {item.quantity}

            {/* Increase item quantity */}
            <button className="btn-cart" onClick={()=>dispatch(increaseQty(item.id))}>+</button>
            
            {/* Remove item from cart */}
            <button className="btn-cart" onClick={()=>dispatch(removeFromCart(item.id))}>
                Remove
            </button>
        </div>
        
      </div>

      
    </div>


  )
}

export default CartItem