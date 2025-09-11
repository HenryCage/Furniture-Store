import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import './ProductCard.css';

const ProductCard = ({ product }) => {
  	const { sku, name, image_path, price } = product;
	const [quantity, setQuantity] = useState(1);

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
		<div>
			<Link to={`/products/${sku}`} className="product-card-link">
				<div className="product-card">
					<img src={image_path} alt={name} />
					<h3>{name}</h3>
					<p className="price">${Number(price).toLocaleString()}</p>
				</div>
			</Link>
			<div className="cart-actions">
					<div className="selectQuantity" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
						<button onClick={decrement}> - </button>
						<span style={{paddingRight: '10px', paddingLeft: '10px'}}>{quantity}</span>
						<button onClick={increment}> + </button>
					</div>
				<button onClick={handleAddToCart} className="add-cart-btn">Add to Cart</button>
			</div>
		</div>
	);
};

export default ProductCard;
