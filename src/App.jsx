import "./App.css";

import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";
import UpdateProductForm from "./pages/UpdateProductForm";
import AddProductForm from "./pages/AddProductForm";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/product/details/:productId"
          element={<ProductDetailsPage />}
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/add-product" element={<AddProductForm/>} />
        <Route path="/updateProduct/:productId" element={<UpdateProductForm />} />
      </Routes>
    </div>
  );
}

export default App;
