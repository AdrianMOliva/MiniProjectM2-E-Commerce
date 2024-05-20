import jsonData from "../assets/products.json";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "./ProductDetailPage.css";

function ProductDetailsPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const fetchOneProduct = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/${productId}`
        );
        const parsed = await response.json();

        setProduct(parsed);
      } catch (err) {
        console.log("there was an error, fetching one product", err);
      }
    };
    fetchOneProduct();
  }, [productId]);

  return (
    <>
      <Navbar />
      <Sidebar />

      <div className="productDetailsPage">
        <img
          src={product.thumbnail}
          alt={product.title}
          style={{
            width: "500px",
            height: "300px",
            border: "5px solid rgb(11, 11, 123)",
          }}
        />
        <h2 style={{ fontWeight: "bold" }}>{product.title}</h2> 
        <h4>{product.rating}⭐</h4>
        <p style={{ fontStyle: "oblique" }}>{product.description}</p>
        <p
          style={{
            display: "inline-block",
            backgroundColor: "rgb(28, 68, 178)",
          }}
        >
          Category: {product.category}
        </p>
        <p>Brand: <span style={{fontWeight: "bold"}}>{product.brand}</span></p>
        <p style={{}}>Price: ${product.price}</p>
        <p>Discount : {product.discountPercentage}%</p>
        
      </div>

      <Footer />
    </>
  );
}

export default ProductDetailsPage;
