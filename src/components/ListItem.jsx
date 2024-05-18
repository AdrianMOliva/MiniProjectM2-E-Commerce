import { Link } from "react-router-dom";
function ListItem({ item, onDelete }) {
  return (
    <li className="productItem">
      <Link
        key={item.id}
        to={`/product/details/${item.id}`}
        className="productLook"
      >
        <img src={item.images[0]} />
        <span>
          {item.title} {item.stock > 70 ? "⬆️" : "⬇️"}
        </span>
        <span>{item.price}$</span>
      </Link>
      <button onClick={() => onDelete(item.id)}>Delete</button>
    </li>
  );
}

export default ListItem;
