import { useState } from "react";
import jsonData from "../assets/products.json";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import List from "../components/List";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const nav = useNavigate();
  const [data, setData] = useState(jsonData);

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);

    setData(updatedData);
  };

  const addProduct = (product) => {
    const addedProducts = [...data, product];
 
    setData(addedProducts);
  };

  const handleUpdateProduct = (event) => {
    event.preventDefault();
    const updatedProduct = { title, description, thumbnail, price, discount, rating, brand };
    
      nav("/");
   setData(updatedProduct)
  };
  return (
    <>
      <Navbar />
      <Sidebar />

      <List data={data} onDelete={handleDelete} addProduct={addProduct} updatedProduct = {handleUpdateProduct} />
      <Footer />
    </>
  );
}

export default HomePage;
