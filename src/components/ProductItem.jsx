import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";
import { useState } from "react";

function ProductItem({ product }) {
    const dispatch = useDispatch();

    const [added, setAdded] = useState(false);

    return (
        <div className="product-card">
            <img
                src={product.thumbnail}
                alt={product.title}
                loading="lazy"
                width="200"
            />

            <h3>{product.title}</h3>
            <p>${product.price.toFixed(2)}</p>

            <Link to={`/product/${product.id}`}>
                <button className="view-btn">View Details</button>
            </Link>

            <button className="add-btn"
                onClick={() => {
                    dispatch(addToCart(product));
                    setAdded(true);
                    setTimeout(() => setAdded(false), 1000);
                }}
            >
                {added ? "Added ✓" : "Add to Cart"}
            </button>
        </div>
    );
}

export default ProductItem;