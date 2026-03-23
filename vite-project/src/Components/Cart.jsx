import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// Lazy load CartItem component for better performance
const CartItem = React.lazy(() => import('./CartItem'));

function Cart() {
  // Get cart items from Redux store
  const items = useSelector(state => state.cart.items);

  // Calculate total price of all items in cart
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
  
  return (
    <div className="cart-page">

      {/* Cart page heading */}
      <h2>Shopping Cart</h2>
      {/* Check whether cart is empty */}
      {items.length === 0 ? (
        <div className="empty-cart">
            <p>Your cart is empty.</p>
        </div>
        
      ) : (
        <div className="cart-details">
            {/* Left section: display all cart items */}
            <div className="cart-items">
              {
                items.map((item) => {
              
                   return <CartItem item={item} key={item.id}/>
              
                })
              }
          </div>
          {/* Right section: cart summary */}
          <div className="cart-summary">
            <h3>Total: ${total.toFixed(2)}</h3>
            {/* Navigate to checkout page */}
            <Link to="/checkout">
              <button className='order-btn'>Place Order</button>
            </Link>
          </div>
          
        </div>
      )}
    </div>
  );
}

export default Cart;