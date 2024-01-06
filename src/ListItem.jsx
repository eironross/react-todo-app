export function ListItem({title, completed, id, toggleTodo, handleDelete}) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button onClick={() => handleDelete(id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  );
}
