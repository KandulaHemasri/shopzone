import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "../App.css";

function Checkout() {
  const { cart, setCart } = useContext(CartContext);
  const [success, setSuccess] = useState(false);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleOrder = () => {
    setSuccess(true);
    setCart([]);
  };

  const total = cart.reduce(
  (acc, item) => acc + item.price * item.quantity,
  0
);
  if (success) {
    return (
      <div className="container">
        <div className="card" style={{ textAlign: "center" }}>
          <h2 style={{ color: "green" }}>&#127881; Order Successful!</h2>
          <p>Thank you for your purchase.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h2 style={{ marginBottom: "20px" }}>Checkout</h2>

      {cart.map((item) => (
        <div key={item.id} className="cart-card">
          
          <div className="cart-details">
            <h4>{item.title}</h4>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ₹{item.price}</p>
          </div>

          <div className="cart-image">
            <img src={item.image} alt={item.title} />
          </div>

        </div>
      ))}

      <div className="card">
        <h3>Total: ₹{totalPrice.toFixed(2)}</h3>
        <button className="success-btn" onClick={handleOrder}>
          Place Order
        </button>
      </div>
    </div>
  );
}

export default Checkout;