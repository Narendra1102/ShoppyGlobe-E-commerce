import { useDispatch } from "react-redux"
import { increaseQty,decreaseQty,removeFromCart } from "../utils/cartSlice"

function CartItem({item}){

  const dispatch=useDispatch()
  
  
  return(

    <div className="product-details">
      <div className="product-image">
        <img src={item.images?.[0]} width="200px" height="200px" loading="lazy"/>
      </div>
      
      <div class="product-info">
        <h2>{item.title}</h2>
        <h4>${item.price}</h4>
        <div className="cart-quantity">
            <button className="btn-cart" onClick={()=>dispatch(decreaseQty(item.id))}>-</button>

            {item.quantity}

            <button className="btn-cart" onClick={()=>dispatch(increaseQty(item.id))}>+</button>

            <button className="btn-cart" onClick={()=>dispatch(removeFromCart(item.id))}>
                Remove
            </button>
        </div>
        
      </div>

      
    </div>


  )
}

export default CartItem