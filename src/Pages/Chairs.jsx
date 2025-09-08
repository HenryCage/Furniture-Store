import { useEffect, useState } from "react";
import axios from "axios";

export default function Chairs() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchChairs = async () => {
      try {
        const res = await axios.get("https://furniture-api.fly.dev/v1/products");
        const filtered = res.data.data.filter(
          (item) => item.category?.toLowerCase() === "chairs"
        );
        setProducts(filtered);
      } catch (err) {
        console.error("Error fetching chairs:", err);
      }
    };

    fetchChairs();
  }, []);

  return (
    <div className="category-page">
      <h1>Chairs</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
