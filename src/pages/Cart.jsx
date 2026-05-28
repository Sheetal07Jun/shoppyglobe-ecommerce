import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

function Cart() {
    const items = useSelector((state) => state.cart.items);

    const totalAmount = items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    /* ================= EMPTY CART ================= */
    if (items.length === 0) {
        return (
            <div className="empty-cart-wrapper">
                <div className="empty-cart-card">
                    <h2>Your cart is empty 🛒</h2>
                    <p>Looks like you haven't added anything yet.</p>

                    <Link to="/">
                        <button className="continue-btn">
                            Continue Shopping
                        </button>
                    </Link>
                </div>
            </div>
        );
    }

    /* ================= FILLED CART ================= */
    return (
        <div className="cart-page">
            <h1 className="cart-title">Your Cart</h1>

            <div className="cart-layout">

                {/* LEFT SIDE - ITEMS */}
                <div className="cart-items">
                    {items.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </div>

                {/* RIGHT SIDE - SUMMARY */}
                <div className="cart-summary-card">
                    <h2>Order Summary</h2>

                    <div className="summary-row">
                        <span>Items:</span>
                        <span>{items.length}</span>
                    </div>

                    <div className="summary-row total-row">
                        <span>Total:</span>
                        <span>${totalAmount.toFixed(2)}</span>
                    </div>

                    <Link to="/checkout">
                        <button className="checkout-btn">
                            Proceed to Checkout
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default Cart;