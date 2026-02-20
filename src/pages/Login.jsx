import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/checkout");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <p>Please login to continue</p>

        <button className="login-btn" onClick={handleLogin}>
          Login as Guest
        </button>
      </div>
    </div>
  );
}

export default Login;
