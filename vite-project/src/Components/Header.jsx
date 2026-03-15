import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import useFetch from "../utils/useFetch";

function Header() {
  
  return (
    <header className="header">
      <h2 className="logo">ShoppyGlobe</h2>

      <input
        className="search"
        type="text"
        placeholder="Search products..."
      />

      <nav className="navbar">
        <Link to="/" style={{ textDecoration: "none",color:"white"}}>Home</Link>
        
        <Link to="/checkout" style={{ textDecoration: "none",color:"white",marginLeft:"40px"}}>Checkout</Link>
        <Link to="/cart" style={{ textDecoration: "none",color:"white",marginLeft:"40px"}}>
           <FaShoppingCart/>
        </Link>
      </nav>
    </header>
  );
}

export default Header;