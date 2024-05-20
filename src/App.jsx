import "./App.css";

import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";
import UpdateProductForm from "./pages/UpdateProductForm";
import AddProductForm from "./pages/AddProductForm";
import { useState } from "react";
import jsonData from "./assets/products.json"

function App() {
  const [products, setProducts] = useState(jsonData);
  const handleUpdateProduct = (updatedProduct) => {
  
    const updatedProducts = products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
    setProducts(updatedProducts);
    
  };

  const addProduct = (product) => {
    const addedProducts = [...productsData, product];
 
    setProducts(addedProducts);
  };
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage productsData = {products} setProductsData={setProducts} />} />
        <Route
          path="/product/details/:productId"
          element={<ProductDetailsPage />}
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/add-product" element={<AddProductForm addProduct={addProduct} productsData={products} setProductsData = {setProducts}/>} />
        <Route path="/updateProduct/:productId" element={<UpdateProductForm productData = {products} handleUpdateProduct={handleUpdateProduct} />} />
      </Routes>
    </div>
  );
}

export default App;
