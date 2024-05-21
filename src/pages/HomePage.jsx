import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import List from "../components/List";

function HomePage({ productsData, setProductsData }) {
  const handleDelete = (id) => {
    const updatedData = productsData.filter((item) => item.id !== id);

    setProductsData(updatedData);
  };

  return (
    <>
      <Navbar />
      <Sidebar />

      <List productsData={productsData} onDelete={handleDelete} />
      <Footer />
    </>
  );
}

export default HomePage;
