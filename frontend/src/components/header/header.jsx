import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="company-name"><h1>E-Commerce</h1></div>
            <div>
                <Link to="/cart">Cart</Link>
                <Link to="/signin">Sign In</Link>
            </div>
        </header>
    )
}

export default Header;