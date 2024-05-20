import { useState } from "react";
import jsonData from "../assets/products.json";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import List from "../components/List";

function HomePage() {
  const [data, setData] = useState(jsonData);

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);

    setData(updatedData);
  };

  const addProduct = (product) => {
    const addedProducts = [...products, product];
 
    setProducts(addedProducts);
  };

  return (
    <>
      <Navbar />
      <Sidebar />

      <List data={data} onDelete={handleDelete} addProduct={addProduct} updatedProduct = {updatedProduct} />
      <Footer />
    </>
  );
}

export default HomePage;
