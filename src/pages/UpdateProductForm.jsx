
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateProductForm ({data, handleUpdateProduct}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [rating, setRating] = useState("");
  const [brand, setBrand] = useState("");

  

  const { productId } = useParams();

  useEffect(() => {
    
    if (data && data.id === productId) {
      setTitle(product.title);
      setDescription(product.description);
      setThumbnail(product.thumbnail);
      setPrice(product.price);
      setDiscount(product.discount);
      setRating(product.rating);
      setBrand(product.brand);
    }
  }, [productId, data]);

  
  return (
    <div>
      <h2>Update Form</h2>

      <form onSubmit={handleUpdateProduct}>
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
          Price:
          <input
            type="text"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </label>
        <label>
          Discount(%):
          <input
            type="text"
            value={discount}
            onChange={(e) => {
              setDiscount(e.target.value);
            }}
          />
        </label>
        <label>
          Rating:
          <input
            type="text"
            value={rating}
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
        <button>Update</button>
      </form>
    </div>
  );
};

export default UpdateProductForm;