import { useState, useEffect } from "react";
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const removeItem = (sku) => {
    const updatedCart = cartItems.filter(item => item.sku !== sku);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const grandTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  if (cartItems.length === 0) return <p style={{ textAlign: "center" }}>Your cart is empty.</p>;

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.sku} className="cart-item">
            <img src={item.image_path} alt={item.name} />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>Price: ${item.price.toLocaleString()}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Total: ${(item.price * item.quantity).toLocaleString()}</p>
              <button onClick={() => removeItem(item.sku)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <h2 className="grand-total">Grand Total: ${grandTotal.toLocaleString()}</h2>
    </div>
  );
};

export default Cart;
