function ListItem({ item, onDelete }) {
  return (
    <li>
      {item.text} {item.isCompleted ? "✔️" : "❌"}
      <button onClick={() => onDelete(item.id)}>Delete</button>
    </li>
  );
}

export default ListItem;
