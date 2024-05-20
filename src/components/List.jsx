import ListItem from "./ListItem";
import "./List.css";

function List({ productsData, onDelete }) {
  return (
    <>
      <ul className="itemList">
        {productsData.map((item) => (
          <ListItem key={item.id} productsData={item} onDelete={onDelete} />
        ))}
      </ul>
    </>
  );
}
export default List;
