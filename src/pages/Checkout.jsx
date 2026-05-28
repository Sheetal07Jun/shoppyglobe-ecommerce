import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Checkout() {
    const items = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [orderPlaced, setOrderPlaced] = useState(false);

    const totalAmount = items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        setOrderPlaced(true);
        dispatch(clearCart());

        setTimeout(() => {
            navigate("/");
        }, 2000);
    };

    if (orderPlaced) {
        return <h2>Order placed successfully 🎉</h2>;
    }

    return (
        <div>
            <h1>Checkout</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email" required />
                <input type="text" placeholder="Address" required />

                <h3>Order Summary</h3>
                {items.map((item) => (
                    <p key={item.id}>
                        {item.title} x {item.quantity}
                    </p>
                ))}

                <h2>Total: ${totalAmount.toFixed(2)}</h2>

                <button type="submit">Place Order</button>
            </form>
        </div>
    );
}

export default Checkout;