import { Link } from "react-router-dom"
import { BsCart4 } from "react-icons/bs";
import { useState, useEffect } from "react";
import './Navbar.css'

function Navbar() {
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    const updateCart = () => {
      const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
      const totalItems = storedCart.reduce((sum, item) => sum + item.quantity, 0);
      console.log("Cart Updated! Total items:", totalItems)
      setCartItems(totalItems);
    }
    updateCart();
    window.addEventListener("cartUpdated", updateCart);
    return () => window.removeEventListener("cartUpdated", updateCart);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo"><Link to='/'>Panto</Link></div>

      <ul className="nav-links">
        <li><Link to="/products">Furnitures</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className="cart">
        <Link to="/cart" className="cart-link">
          <BsCart4 size={22} color="white" />
          {cartItems > 0 && <span className="cart-count">{cartItems}</span>}
        </Link>
      </div>
    </nav>
  );
}


export default Navbar