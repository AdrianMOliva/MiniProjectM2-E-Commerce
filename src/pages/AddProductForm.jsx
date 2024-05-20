import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProductForm ()  {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [rating, setRating] = useState("");
  const [brand, setBrand] = useState("");

  const nav = useNavigate();

  const handleTitle = (e) => setTitle(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleThumbnail = (e) => setThumbnail(e.target.value);
  const handlePrice = (e) => setPrice(e.target.value);
  const handleDiscount = (e) => setDiscount(e.target.value);
  const handleRating = (e) => setRating(e.target.value);
  const handleBrand = (e) => setBrand(e.target.value);
  

  const handleAddProduct = async (event) => {
    event.preventDefault();
    const newProduct = { title, description, thumbnail };
    try {
      const response = await axios.post(
        "https://dummyjson.com/products/add",
        newProduct
      );
      nav("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleAddProduct}>
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
          Price:
          <input
            type="text"
            value={price}
            onChange={handlePrice}
          />
        </label>
        <label>
          Discount(%):
          <input
            type="text"
            value={discount}
            onChange={handleDiscount}
          />
        </label>
        <label>
          Rating:
          <input
            type="text"
            value={rating}
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
      <button>Add</button>
    </form>
  );
};

export default AddProductForm;