import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

function ProductDetail() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products/${id}`);
                if (!response.ok) throw new Error("Failed to fetch product");

                const data = await response.json();
                setProduct(data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchProduct();
    }, [id]);

    if (error) return <h2 className="error-box">{error}</h2>;
    if (!product) return <h2>Loading...</h2>;

    return (
        <div className="product-detail-wrapper">
            <div className="product-detail-card">

                {/* LEFT IMAGE */}
                <div className="product-detail-image">
                    <img src={product.thumbnail} alt={product.title} />
                </div>

                {/* RIGHT CONTENT */}
                <div className="product-detail-content">
                    <h1 className="detail-title">{product.title}</h1>

                    <p className="detail-description">
                        {product.description}
                    </p>

                    <div className="detail-price">
                        ${product.price}
                    </div>

                    <button
                        className="detail-add-btn"
                        onClick={() => dispatch(addToCart(product))}
                    >
                        Add to Cart
                    </button>
                </div>

            </div>
        </div>
    );
}

export default ProductDetail;