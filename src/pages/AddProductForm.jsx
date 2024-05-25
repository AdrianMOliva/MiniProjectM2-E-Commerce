import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./AddProductForm.css";
import { v4 as uuidv4 } from "uuid";

function AddProductForm({ addProduct, productsData, setProductsData }) {
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

  const handleTitle = (e) => setTitle(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleThumbnail = (e) => setThumbnail(e.target.value);
  const handlePrice = (e) => setPrice(e.target.value);
  const handleCategory = (e) => setCategory(e.target.value);
  const handleDiscount = (e) => setDiscount(e.target.value);
  const handleRating = (e) => setRating(e.target.value);
  const handleBrand = (e) => setBrand(e.target.value);
  const handleStock = (e) => setStock(e.target.value);

  const handleAddProduct = (event) => {
    event.preventDefault();
    const newProduct = {
      id: uuidv4(),
      title,
      description,
      thumbnail,
      category,
      price,
      discount,
      rating,
      brand,
    };

    setTitle("");
    setDescription("");
    setThumbnail("");
    setCategory("");
    setPrice("");
    setDiscount("");
    setRating("");
    setBrand("");
    setStock("");
    setProductsData([...productsData, newProduct]);
    nav("/");
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <form onSubmit={handleAddProduct} className="formStyle">
        <label>
          Title:
          <input type="text" value={title} onChange={handleTitle} />
        </label>
        <label>
          Description:
          <input type="text" value={description} onChange={handleDescription} />
        </label>
        <label>
          Category:
          <input type="text" value={category} onChange={handleCategory} />
        </label>
        <label>
          Image:
          <input type="text" value={thumbnail} onChange={handleThumbnail} />
        </label>
        <label>
          Price ($):
          <input type="number" value={price} onChange={handlePrice} />
        </label>
        <label>
          Discount (%):
          <input
            type="number"
            value={discount}
            min={"1"}
            max={"100"}
            onChange={handleDiscount}
          />
        </label>
        <label>
          Rating:
          <input
            type="number"
            value={rating}
            min={"0"}
            max={"5"}
            onChange={handleRating}
          />
        </label>
        <label>
          Brand:
          <input type="text" value={brand} onChange={handleBrand} />
        </label>
        <label>
          Stock:
          <input type="number" value={stock} min={"0"} onChange={handleStock} />
        </label>
        <button type="submit">Add</button>
      </form>
      <Footer />
    </>
  );
}

export default AddProductForm;
