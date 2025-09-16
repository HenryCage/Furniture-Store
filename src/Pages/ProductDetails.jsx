import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProductsDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(`https://furniture-api.fly.dev/v1/products/${id}`);
        setProduct(response.data.data);
      } catch (error) {
        console.error('Error fetching product: ', error);
      }
    };
    getProduct();
  }, [id]);

  if (!product) return <i style={{fontSize:"2rem"}}>Loading……</i>;

  const handleAddToCart = () => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingIndex = storedCart.findIndex(item => item.sku === product.sku);

    if (existingIndex >= 0) {
      storedCart[existingIndex].quantity += quantity;
    } else {
      storedCart.push({
        sku: product.sku,
        name: product.name,
        price: product.price,
        image_path: product.image_path,
        quantity: quantity
      });
    }

    localStorage.setItem("cart", JSON.stringify(storedCart));
    window.dispatchEvent(new Event('cartUpdated'));

    alert(`${quantity} x "${product.name}" added to cart!`);
  };

  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="product-details-container">
      <div className="product-image">
        <img src={product.image_path} alt={product.name} />
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <h2>${Number(product.price).toLocaleString()}</h2>

        <div className="cart-actions">
            <div className="selectQuantity">
                <button onClick={decrement}> - </button>
                <span style={{paddingRight: '10px', paddingLeft: '10px'}}>{quantity}</span>
                <button onClick={increment}> + </button>
            </div>
            <button onClick={handleAddToCart} className="add-cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;