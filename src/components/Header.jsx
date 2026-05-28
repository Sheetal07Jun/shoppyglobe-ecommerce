import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "../features/cart/cartSlice";

function Header() {
    const dispatch = useDispatch();

    const items = useSelector((state) => state.cart.items);
    const searchTerm = useSelector((state) => state.cart.searchTerm);

    const totalItems = items.reduce(
        (total, item) => total + item.quantity,
        0
    );

    return (
        <header className="modern-header">
            {/* Logo */}
            <div className="logo">
                <Link to="/">ShoppyGlobe</Link>
            </div>

            {/* Search */}
            <div className="header-search">
                <input
                    type="text"
                    placeholder="Search for products..."
                    value={searchTerm}
                    onChange={(e) =>
                        dispatch(setSearchTerm(e.target.value))
                    }
                />
            </div>

            {/* Navigation */}
            <nav className="header-nav">
                <Link to="/">Home</Link>

                <Link to="/cart" className="cart-link">
                    Cart
                    <span className="cart-badge">
                        {totalItems}
                    </span>
                </Link>
            </nav>
        </header>
    );
}

export default Header;