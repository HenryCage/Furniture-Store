// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function Shop() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     const getProducts = async () => {
//       try {
//         const response = await axios.get("https://furniture-api.fly.dev/v1/products?limit=100");
//         setProducts(response.data.data || []);
//       }
      
//       catch (err) {
//         console.error("Error fetching products:", err);
//         setError("Failed to load products");
//       } 
      
//       finally {
//         setLoading(false);
//       }
//     }

//     getProducts();
//   }, []);


//   return (
//     <section className="all-products">
//       <h1>All Products</h1>

//       {loading && <p>Loading products…</p>}
//       {error && <p className="error">{error}</p>}

//       <div className="product-grid">
//         {products.map((p) => {
//           const title = p.name;
//           const img = p.image_path;
//           const price = p.price ?? 0;

//           return (
//             <article key={p.id ?? title} className="product-card">
//               <img src={img} alt={title} />
//               <h3>{title}</h3>
//               <p className="price">${Number(price).toFixed(2)}</p>
//             </article>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import './Shop.css'

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://furniture-api.fly.dev/v1/products?limit=99");
        setProducts(response.data.data || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    
    fetchProducts();
  }, []);

  return (
    <section className="shop">
      <h1 style={{ textAlign: 'center' }}>ALL PRODUCTS</h1>
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
// This code defines a Shop component that fetches and displays products using a reusable ProductCard component.