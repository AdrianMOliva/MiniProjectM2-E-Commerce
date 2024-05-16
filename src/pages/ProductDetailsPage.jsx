import jsonData from "../assets/products.json";
import { useParams } from "react-router-dom";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "./ProductDetailPage.css";

function ProductDetailsPage() {
  const { productId } = useParams();
  const selectedProduct = jsonData.find((product) => product.id === productId);

  return (
    <>
      <Navbar />
      <Sidebar />

      <div
        className="productDetailsPage"
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <img
          src={selectedProduct.thumbnail}
          alt={selectedProduct.title}
          style={{ width: "500px", height: "auto", marginRight: "40px" }}
        />
        <h2 style={{ marginRight: "40px", fontWeight: "bold" }}>
          {selectedProduct.title}
        </h2>
        <p style={{ marginRight: "40px" }}>{selectedProduct.description}</p>
        <p style={{ marginRight: "40px" }}>
          Category: {selectedProduct.category}
        </p>
        <p style={{ marginRight: "40px" }}>Price: ${selectedProduct.price}</p>
      </div>

      <Footer />
    </>
  );
}

export default ProductDetailsPage;
