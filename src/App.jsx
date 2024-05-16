import "./App.css";
import { useState } from "react";
import jsonData from "./assets/products.json";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import List from "./components/List";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/product/details/:productId"
          element={<ProductDetailsPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
