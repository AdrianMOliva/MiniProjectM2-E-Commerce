import jsonData from "../assets/products.json";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "./ProductDetailPage.css";

function ProductDetailsPage({ productsData, setProductsData }) {
  const { productId } = useParams();

  const [foundProduct, setFoundProduct] = useState({});

  useEffect(() => {
    const product = productsData.find(
      (product) => product.id === parseInt(productId)
    );
    setFoundProduct(product);
  }, [productsData, productId]);

  return (
    <>
      <Navbar />
      <Sidebar />

      <div className="productDetailsPage">
        <img
          src={foundProduct.thumbnail}
          alt={foundProduct.title}
          style={{
            width: "500px",
            height: "300px",
            border: "5px solid rgb(11, 11, 123)",
          }}
        />
        <h2 style={{ fontWeight: "bold" }}>{foundProduct.title}</h2>
        <h4>{foundProduct.rating}⭐</h4>
        <p style={{ fontStyle: "oblique" }}>{foundProduct.description}</p>
        <p
          style={{
            display: "inline-block",
            backgroundColor: "rgb(28, 68, 178)",
          }}
        >
          Category: {foundProduct.category}
        </p>
        <p>
          Brand:{" "}
          <span style={{ fontWeight: "bold" }}>{foundProduct.brand}</span>
        </p>
        <p style={{}}>Price: ${foundProduct.price}</p>
        <p>Discount : {foundProduct.discountPercentage}%</p>
        <p>Stock: {foundProduct.stock}</p>
      </div>

      <Footer />
    </>
  );
}

export default ProductDetailsPage;
