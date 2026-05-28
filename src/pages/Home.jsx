import { useState } from "react";
import useProducts from "../hooks/useProducts";
import ProductItem from "../components/ProductItem";
import { useSelector } from "react-redux";

function Home() {
    const { products, loading, error } = useProducts();
    const searchTerm = useSelector((state) => state.cart.searchTerm);
    const [sortOption, setSortOption] = useState("");

    // Filtering + Sorting Logic
    const filteredProducts = products
        .filter((product) =>
            product.title
                .toLowerCase()
                .includes((searchTerm || "").toLowerCase())
        )
        .sort((a, b) => {
            if (sortOption === "low") return a.price - b.price;
            if (sortOption === "high") return b.price - a.price;
            return 0;
        });

    // Loading State
    if (loading) {
        return (
            <div className="center-message">
                <h2>Loading products...</h2>
            </div>
        );
    }

    // Error State
    if (error) {
        return (
            <div className="center-message">
                <h2>Something went wrong 😕</h2>
                <p>{error}</p>
            </div>
        );
    }

    return (
        <div className="page-container">

            {/* ================= HERO SECTION ================= */}
            <div className="modern-hero">
                <div className="hero-content">

                    <div className="hero-text">
                        <span className="hero-badge">NEW ARRIVALS</span>

                        <h1>Discover Amazing Products</h1>

                        <p>
                            Shop the Latest Trends in Electronics, Fashion,
                            Home Essentials and More.
                        </p>

                        <button
                            className="hero-btn"
                            onClick={(e) => {
                                e.target.blur();
                                window.scrollTo({
                                    top: 700,
                                    behavior: "smooth",
                                });
                            }}
                        >
                            Shop Now
                        </button>
                    </div>

                    <div className="hero-image">
                        {products.length > 0 && (
                            <img
                                src={products[0].thumbnail}
                                alt={products[0].title}
                            />
                        )}
                    </div>

                </div>
            </div>

            {/* ================= FEATURED SECTION ================= */}
            <div className="products-section">

                <div className="section-header">
                    <h2 className="section-title">Featured Products</h2>
                    <span className="view-all">View All →</span>
                </div>

                {/* Controls Row */}
                <div className="products-controls">
                    <p className="result-count">
                        {filteredProducts.length} products found
                    </p>

                    <select
                        className="sort-dropdown"
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                    >
                        <option value="">Sort By</option>
                        <option value="low">Price: Low to High</option>
                        <option value="high">Price: High to Low</option>
                    </select>
                </div>

                {/* Product Grid */}
                {filteredProducts.length === 0 ? (
                    <div className="no-products">
                        <h3>No products found 😢</h3>
                        <p>Try searching something else.</p>
                    </div>
                ) : (
                    <div className="product-grid">
                        {filteredProducts.map((product) => (
                            <ProductItem
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>
                )}

            </div>

        </div>
    );
}

export default Home;