import "./App.css";
import { useState } from "react";
import jsonData from "./assets/products.json";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import List from "./components/List";
//import HomePage from "./pages/HomePage";

function App() {
  const [data, setData] = useState(jsonData);

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);

    setData(updatedData);
  };
  return (
    <div>
      <Navbar />
      <Sidebar />
      {/*<div className="pages">
        <HomePage />
      </div>*/}
      <List data={data} onDelete={handleDelete} />
      <Footer />
    </div>
  );
}

export default App;
