import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <h2>Loading...</h2>;
  if (!product) return <h2>Product not found</h2>;

  return (
    <div style={containerStyle}>
      <img src={product.image} alt={product.title} style={imageStyle} />

      <div>
        <h2>{product.title}</h2>
        <h3>${product.price}</h3>
        <p>{product.description}</p>
        <div style={{ marginTop: "20px" }}>
          <button
            onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
          >
            -
          </button>

          <span style={{ margin: "0 15px" }}>{quantity}</span>

          <button onClick={() => setQuantity(prev => prev + 1)}>
            +
          </button>
        </div>
        <button
          style={buttonStyle}
          onClick={() => addToCart(product, quantity)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

const containerStyle = {
  display: "flex",
  gap: "40px",
  padding: "40px",
};

const imageStyle = {
  height: "300px",
  objectFit: "contain",
};

const buttonStyle = {
  marginTop: "20px",
  padding: "10px 20px",
  backgroundColor: "#222",
  color: "white",
  border: "none",
  cursor: "pointer"
};

export default ProductDetails;
