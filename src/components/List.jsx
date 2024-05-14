import ListItem from "./ListItem";
function List({ data, onDelete }) {
  return (
    <ul>
      {data.map((item) => (
        <ListItem key={item.id} item={item} onDelete={onDelete} />
      ))}
    </ul>
  );
}
export default List;
