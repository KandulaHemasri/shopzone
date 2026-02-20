import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import { FaShoppingCart } from "react-icons/fa";
import "../App.css";

function Navbar() {
  const { cart } = useContext(CartContext);
  const { isLoggedIn, logout } = useContext(AuthContext);

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart" className="cart-link">
          <FaShoppingCart className="cart-icon" />
          <span className="cart-text">Cart</span>

          {totalItems > 0 && (
            <span className="cart-badge">
              {totalItems}
            </span>
          )}
        </Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div>
        {isLoggedIn ? (
          <button className="danger-btn" onClick={logout}>
            Logout
          </button>
        ) : (
          <Link to="/login" style={{ color: "white" }}>
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;