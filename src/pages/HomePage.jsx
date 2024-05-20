import { useState } from "react";
import jsonData from "../assets/products.json";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import List from "../components/List";
import { useNavigate } from "react-router-dom";
import AddProductForm from "./AddProductForm";

function HomePage({productsData, setProductsData}) {
  const nav = useNavigate();

  const handleDelete = (id) => {
    const updatedData = productsData.filter((item) => item.id !== id);

    setProductsData(updatedData);
  };

  

  
  return (
    <>
      <Navbar />
      <Sidebar />
      
      <List productsData={productsData} onDelete={handleDelete}  />
      <Footer />
    </>
  );
}

export default HomePage;
