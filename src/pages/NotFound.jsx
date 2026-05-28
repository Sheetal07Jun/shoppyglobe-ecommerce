import Header from "../components/Header";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <>
            <Header />
            <div className="notfound-page">
                <h1>404 - Page Not Found</h1>
                <p>The page you are looking for does not exist.</p>
                <Link to="/">
                    <button className="back-home-btn">Go Back Home</button>
                </Link>
            </div>
        </>
    );
}

export default NotFound;