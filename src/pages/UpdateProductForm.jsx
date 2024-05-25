import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import "./UpdateProductForm.css";

function UpdateProductForm({ productsData, handleUpdateProduct }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [rating, setRating] = useState("");
  const [brand, setBrand] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");

  const nav = useNavigate();
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    const product = productsData.find((p) => p.id === productId);
    if (product) {
      setProduct(product);
      setTitle(product.title);

      setTitle(product.title);
      setDescription(product.description);
      setThumbnail(product.thumbnail);
      setPrice(product.price);
      setDiscount(product.discount);
      setRating(product.rating);
      setBrand(product.brand);
      setStock(product.stock);
      setCategory(product.category);
    }
  }, [productId]);

  const handleUpdate = (event) => {
    event.preventDefault();
    const updatedProduct = {
      id: parseInt(productId),
      title,
      description,
      thumbnail,
      category,
      price,
      discount,
      rating,
      brand,
      stock,
    };
    handleUpdateProduct(updatedProduct);
    nav("/");
  };
  return (
    <>
      <Navbar />
      <Sidebar />

      <form onSubmit={handleUpdate} className="updateFormstyle">
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </label>
        <label>
          Image:
          <input
            type="text"
            value={thumbnail}
            onChange={(e) => {
              setThumbnail(e.target.value);
            }}
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </label>
        <label>
          Discount(%):
          <input
            type="number"
            value={discount}
            min={"1"}
            max={"100"}
            onChange={(e) => {
              setDiscount(e.target.value);
            }}
          />
        </label>
        <label>
          Rating:
          <input
            type="number"
            value={rating}
            min={"0"}
            max={"5"}
            onChange={(e) => {
              setRating(e.target.value);
            }}
          />
        </label>
        <label>
          Brand:
          <input
            type="text"
            value={brand}
            onChange={(e) => {
              setBrand(e.target.value);
            }}
          />
        </label>
        <label>
          Stock:
          <input
            type="number"
            value={stock}
            min={"0"}
            onChange={(e) => {
              setStock(e.target.value);
            }}
          />
        </label>
        <button>Update</button>
      </form>

      <Footer />
    </>
  );
}

export default UpdateProductForm;
