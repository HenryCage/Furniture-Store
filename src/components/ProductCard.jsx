import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    const { id, name, image_path, price } = product;

    return (
        <Link to={`/product/${id}`} className="product-card" style={{ textDecoration: 'none', color: 'inherit' }}>
            <img src={image_path} alt={name} />
            <h3>{name}</h3>
            <p className="price">${Number(price).toFixed(2)}</p>
        </Link>
    )
}

export default ProductCard;