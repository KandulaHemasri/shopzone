import { Link } from "react-router-dom";
import "../App.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to ShopZone</h1>
        <p>
          Discover amazing products at the best prices.
          Shop smart. Shop easy.
        </p>

        <Link to="/shop">
          <button className="primary-btn home-btn">
            Start Shopping
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;