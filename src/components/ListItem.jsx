function ListItem({ item, onDelete }) {
  return (
    <li className="productLook">
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
