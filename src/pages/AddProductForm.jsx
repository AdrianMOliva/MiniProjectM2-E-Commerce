
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./AddProductForm.css"

function AddProductForm ({handleAddProduct})  {
    

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [rating, setRating] = useState("");
  const [brand, setBrand] = useState("");

 

  const handleTitle = (e) => setTitle(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleThumbnail = (e) => setThumbnail(e.target.value);
  const handlePrice = (e) => setPrice(e.target.value);
  const handleDiscount = (e) => setDiscount(e.target.value);
  const handleRating = (e) => setRating(e.target.value);
  const handleBrand = (e) => setBrand(e.target.value);
  

 
  return (
    <>
    <Navbar />
    <Sidebar />
    <form onSubmit={handleAddProduct} className="formStyle">
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={handleTitle}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={handleDescription}
        />
      </label>
      <label>
        Image:
        <input
          type="text"
          value={thumbnail}
          onChange={handleThumbnail}
        />
      </label>
      <label>
          Price ($):
          <input
            type="number"
            value={price}
            onChange={handlePrice}
          />
        </label>
        <label>
          Discount (%):
          <input
            type="number"
            value={discount}
            min={"1"} max={"100"}
            onChange={handleDiscount}
          />
        </label>
        <label>
          Rating:
          <input
            type="number"
            value={rating}
            min={"0"} max={"5"}
            onChange={handleRating}
          />
        </label>
        <label>
          Brand:
          <input
            type="text"
            value={brand}
            onChange={handleBrand}
          />
        </label>
      <button type="submit">Add</button>
    </form>
    <Footer/>
    </>);
  
};

export default AddProductForm;