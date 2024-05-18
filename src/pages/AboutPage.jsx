import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import "./AboutPage.css";
function AboutPage() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div
        style={{ justifyContent: "center", alignItems: "center" }}
        className="aboutPage"
      >
        <h1>Mini E-Commerce Admin Project</h1>
        <img src="" alt="" />
        <h2>
          Student :
          <span style={{ textDecoration: "underline" }}> Adrian Martin</span>
        </h2>
        <p>
          GitHub :
          <a href="https://github.com/AdrianMOliva">
            https://github.com/AdrianMOliva
          </a>
        </p>
        <p>
          This mini project simulates an admin dashboard for an e-commerce
          platform. It allows you to manage a list of products, view detailed
          information for each product, and delete products as needed. The
          interface provides an intuitive way to oversee the product inventory,
          making it easier to keep the product listings up-to-date.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default AboutPage;
