import React from "react";
import { useState } from "react";
import "./Todo.css";
const Todo = () => {
  const [item, setItem] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodoIndex, setEditTodoIndex] = useState(-1);
  const handleAdd = () => {
    if (item.trim() !== "") {
      if (editTodoIndex !== -1) {
        const updatedTodo = todos.map((todo) =>
          todo.id === editTodoIndex ? { ...todo, data: item } : todo
        );
        setTodos(updatedTodo);
        setItem("");
      } else {
        setTodos([...todos, { data: item, id: new Date() }]);
        setItem("");
      }
    }
  };
  const delHandle = (id) => {
    const newTodo = todos.filter((item) => item.id !== id);
    setTodos(newTodo);
  };
  const editHandle = (id) => {
    const newlist = todos.filter((item) => item.id === id);
    setItem(newlist[0].data);
    setEditTodoIndex(newlist[0].id);
  };
  return (
    <div className="container">
      <div className="todobox">
        <h2>Todo List App</h2>
        <div className="inputfield">
          <input
            type="text"
            onChange={(e) => setItem(e.target.value)}
            value={item}
          />
          <button className="add__btn" onClick={handleAdd}>
            add
          </button>
        </div>
        <ul>
          {todos.map((item) => {
            return (
              <div>
                <li>
                  <p>{item.data}</p>
                  <div>
                  <button onClick={() => delHandle(item.id)}>del</button>
                  <button className="edit__btn" onClick={() => editHandle(item.id)}>edit</button>
                  </div>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
