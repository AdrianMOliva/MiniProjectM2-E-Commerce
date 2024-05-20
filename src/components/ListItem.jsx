import { Link } from "react-router-dom";
function ListItem({ productsData, onDelete }) {
  return (
    <li key={productsData.id} className="productItem">
      <Link
        
        to={`/product/details/${productsData.id}`}
        className="productLook"
      >
        <img src={productsData.thumbnail} />
        <span>
          {productsData.title} {productsData.stock > 70 ? "⬆️" : "⬇️"}
        </span>
        <span>{productsData.price}$</span>
      </Link>
      <button onClick={() => onDelete(productsData.id)}>Delete</button>
      <Link to={`/updateProduct/${productsData.id}`}>
        <button>Update Product</button>
      </Link>
    </li>
  );
}

export default ListItem;
