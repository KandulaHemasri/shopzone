import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="container">
        <h2>Your Cart is Empty <span>&#128722;</span></h2>
      </div>
    );
  }

  return (
    <div className="container">
      <h2 style={{ marginBottom: "20px" }}>Shopping Cart</h2>

      {cart.map((item) => (
        <div key={item.id} className="cart-card">
          
          {/* LEFT SIDE */}
          <div className="cart-details">
            <h4>{item.title}</h4>
            <p>Price: ₹{item.price}</p>
            <p>Quantity: {item.quantity}</p>

            <button
              className="danger-btn"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="cart-image">
            <img src={item.image} alt={item.title} />
          </div>

        </div>
      ))}

      <div className="card">
        <h3>Total: ₹{totalPrice.toFixed(2)}</h3>
        <button
          className="primary-btn"
          onClick={() => navigate("/checkout")}
        >
          Move to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;