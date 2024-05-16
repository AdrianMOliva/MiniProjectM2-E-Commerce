import ListItem from "./ListItem";
import "./List.css";
import { Link } from "react-router-dom";
function List({ data, onDelete }) {
  return (
    <>
      <ul className="itemList">
        {data.map((item) => (
          <Link
            style={{
              textDecoration: "none",
              color: "white",
            }}
            key={item.id}
            to={`/product/details/${item.id}`}
          >
            <ListItem item={item} onDelete={onDelete} />
          </Link>
        ))}
      </ul>
    </>
  );
}
export default List;
