import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";

const ProductDetails = () => {
    const { id } = useParams();
    const [products, setProducts] = useState(null);

    useEffect(() => {
        const getproducts = async () => {
            try {
                const response = await axios.get(`https://furniture-api.fly.dev/v1/products/${id}`);
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching product: ', error)
            }
        }
        getproducts()
    }, [id])

    if (!products) return <i>Loading......</i>

    return (
        <div className="post-details">
            <img src={products.image_path} alt={products.name} />
            <h1>{products.name}</h1>
            <p>{products.description}</p>
            <h2>${products.price}</h2>
        </div>
    )
}

export default ProductDetails