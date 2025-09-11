import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import './Shop.css'

const Shop = () => {
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://furniture-api.fly.dev/v1/products?limit=99");
        console.log("Fetched products:", response.data.data);
        setProducts(response.data.data || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    
    fetchProducts();
  }, []);


  
  return (
    <section className="shop">
      <h1 style={{ textAlign: 'center', fontSize: '3rem' }}>ALL PRODUCTS</h1>
      <div className="product-grids">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>Loading products...</p>
        )}
        
      </div>
    </section>
  );
};

export default Shop;