import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function UpdateProductForm () {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [rating, setRating] = useState("");
  const [brand, setBrand] = useState("");

  const { productId } = useParams();

  useEffect(() => {
    const updateOne = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${productId}`
        );
        
        setTitle(response.title);
        setDescription(response.description);
        setThumbnail(response.thumbnail);
        setPrice(response.price);
        setDiscount(response.discount);
        setRating(response.rating);
        setBrand(response.brand);
      } catch (err) {
        console.log(err);
      }
    };
    updateOne();
  }, [productId]);

  const handleUpdateProduct = async (event) => {
    //stop the form from refreshing
    event.preventDefault();
    const newProduct = { title, description, thumbnail, price, discount, rating, brand };
    try {
      const response = await axios.put(
        `https://dummyjson.com/products/${productId}`,
        newProduct
      );
      console.log("this is the update", response);
    } catch (error) {
      console.log(error);
    }
  };
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
          Description:
          <input
            type="text"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
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
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </label>
        <button>Update</button>
      </form>
    </div>
  );
};