import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../utils/store";
import { setSearch } from "../utils/searchSlice";


function Header() {
  
  const dispatch=useDispatch()

  const cartItems=useSelector((store)=>store.cart.items)

  // Dispatch search text to Redux state
  function handleSearch(searchedText){
    dispatch(setSearch(searchedText))
  }

  return (
    <header className="header">
      <h2 className="logo">ShoppyGlobe</h2>

      <input
        className="search"
        type="text"
        placeholder="Search products..."
        onChange={(e)=>handleSearch(e.target.value)}/>
        
      <nav className="navbar">
        <Link to="/" style={{ textDecoration: "none",color:"white"}}>Home</Link>
        
        <Link to="/cart" className="cart-link">
           <FaShoppingCart />
           {cartItems.length > 0 && (
              <span className="cart-count">
                {cartItems.length}
              </span>
            )}
        </Link>
        
        {/* Cart text link */}
        <Link to="/cart" style={{textDecoration:"none",color:"white"}}>Cart</Link>
      </nav>
    </header>
  );
}

export default Header;