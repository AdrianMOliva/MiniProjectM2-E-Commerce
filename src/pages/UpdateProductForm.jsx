
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateProductForm ({productData, handleUpdateProduct}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [rating, setRating] = useState("");
  const [brand, setBrand] = useState("");

  const nav = useNavigate();
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    const product = productData.find((p) => p.id === productId);
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
    }
    
  }, [productId]);

  const handleUpdate = (event) => {
    event.preventDefault();
    const updatedProduct = { title, description, thumbnail, price, discount, rating, brand };
    handleUpdateProduct(updatedProduct);
    nav("/");
  };
  return (
    <div>
      <h2>Update Form</h2>

      <form onSubmit={handleUpdate}>
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
            min={"1"} max={"100"}
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
            min={"0"} max={"5"}
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