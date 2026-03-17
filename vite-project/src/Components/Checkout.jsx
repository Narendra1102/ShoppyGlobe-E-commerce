import { useDispatch } from "react-redux"
import { clearCart } from "../utils/cartSlice"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";


function Checkout(){
  const items = useSelector(state => state.cart.items);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function placeOrder(e){
    e.preventDefault()

    alert("Order placed successfully")

    dispatch(clearCart())

    navigate("/")
  }

  return(

    <div className="checkout-container" onSubmit={placeOrder}>

      <form className="checkout-form">
        <h2>Checkout</h2>

        <input placeholder="Full Name" />
        <input placeholder="Address" />
        <input placeholder="Phone" />
        <input placeholder="Email" />

        <button className="place-order-btn">
          Place Order
        </button>
      </form>

      <div className="summary">
        <h2>Order Summary</h2>
        {items?.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          items.map(item => (
            <div key={item.id} className="summary-item">
              <span>{item.title}</span>
              <span>${item.price * item.quantity}</span>
            </div>
          ))
        )}
        

        <div className="summary-item total">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

    </div>

  )
}

export default Checkout