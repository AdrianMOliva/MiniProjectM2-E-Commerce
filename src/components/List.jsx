import ListItem from "./ListItem";
import "./List.css";
function List({ data, onDelete }) {
  return (
    <ul className="itemList">
      {data.map((item) => (
        <ListItem key={item.id} item={item} onDelete={onDelete} />
      ))}
    </ul>
  );
}
export default List;
