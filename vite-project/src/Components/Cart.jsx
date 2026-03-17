import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const CartItem = React.lazy(() => import('./CartItem'));

function Cart() {
  const items = useSelector(state => state.cart.items);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
  
  return (
    <div className="cart-page">
      
      <h2>Shopping Cart</h2>
      {items.length === 0 ? (
        <div className="empty-cart">
            <p>Your cart is empty.</p>
        </div>
        
      ) : (
        <div className="cart-details">
            <div className="cart-items">
              {
                items.map((item) => {
              
                   return <CartItem item={item} key={item.id}/>
              
                })
              }
          </div>
          <div className="cart-summary">
            <h3>Total: ${total.toFixed(2)}</h3>
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