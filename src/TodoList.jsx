import { ListItem } from "./ListItem"

export function TodoList({ todos, handleDelete, toggleTodo  }) {
  return (
    <ul className="list">
      {todos.length === 0 && "No Data"}
      {todos.map((todo) => {
        return (
            <ListItem {...todo} key={todo.id} toggleTodo={toggleTodo} handleDelete={handleDelete} />
          
        );
      })}
    </ul>
  );
}
