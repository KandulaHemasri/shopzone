import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>Loading products...</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h2 className="shop-title">Our Products</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px"
      }}>
        {products.map(product => (
          <div key={product.id} style={{
            border: "1px solid #ccc",
            padding: "15px",
            textAlign: "center"
          }}>
            <img src={product.image} alt={product.title} height="200" width="150" />
            <h4>{product.title}</h4>
            <p>${product.price}</p>
            <Link to={`/product/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;