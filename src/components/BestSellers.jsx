import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './BestSellers.css'

const BestSelling = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://furniture-api.fly.dev/v1/products");
        console.log("Fetched products:", response.data);
        setProducts(response.data.data || []);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false); 
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="best-selling">
      <h2>Best Selling</h2>

      {loading && <p><i>Loading products...</i></p>}

      {error && <p className="error">{error}</p>}

      <div className="product-grid">
        {!loading && !error && products.slice(0, 4).map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image_path} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <Link to={`/products/${product.id}`} className="btn">View Details</Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BestSelling;