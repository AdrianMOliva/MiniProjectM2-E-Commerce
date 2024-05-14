function ListItem({ item, onDelete }) {
  return (
    <li>
      <img src={item.images[0]} />
      <span>
        {item.title} {item.stock > 70 ? "⬆️" : "⬇️"}
      </span>
      <span>{item.price}$</span>
      <button onClick={() => onDelete(item.id)}>Delete</button>
    </li>
  );
}

export default ListItem;
