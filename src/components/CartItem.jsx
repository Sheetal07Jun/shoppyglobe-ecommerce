import { useDispatch } from "react-redux";
import {
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
} from "../features/cart/cartSlice";

function CartItem({ item }) {
    const dispatch = useDispatch();

    return (
        <div className="cart-item-card">

            {/* LEFT IMAGE */}
            <div className="cart-item-image">
                <img src={item.thumbnail} alt={item.title} />
            </div>

            {/* CENTER DETAILS */}
            <div className="cart-item-details">
                <h3>{item.title}</h3>

                <p className="cart-price">
                    ${item.price} × {item.quantity}
                </p>

                <div className="cart-actions">
                    <div className="quantity-controls">
                        <button onClick={() => dispatch(decreaseQuantity(item.id))}>−</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                    </div>

                    <button
                        className="remove-btn"
                        onClick={() => dispatch(removeFromCart(item.id))}
                    >
                        Remove
                    </button>
                </div>
            </div>

            {/* RIGHT TOTAL */}
            <div className="cart-item-total">
                ${(item.price * item.quantity).toFixed(2)}
            </div>

        </div>
    );
}

export default CartItem;