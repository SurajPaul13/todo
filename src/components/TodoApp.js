import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, toggleTodo } from '../slices/todoSlice';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import '../styles/index.css';

const TodoApp = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo.todoItems);

  useEffect(()=> {
    localStorage.setItem('todo', JSON.stringify(todoList));
  },[todoList])

  const onAdd = (text) => {
    const todoItem = {
      id: Date.now(),
      text,
      isChecked: false,
    };

    dispatch(addTodo(todoItem));
  };

  const onDelete = (id) => dispatch(removeTodo(id));

  const onToggle = (id) => {
    console.log(`this is the ID: ${id}`);
    dispatch(toggleTodo(id));
  };

  return (
    <div className="todos-bg-container">
      <h1 className="todos-heading">Todos</h1>
      <h1 className="create-task-heading">
        Create <span className="create-task-heading-subpart">Task</span>
      </h1>
      <TodoForm onAdd={onAdd} />
      <h1 className="todo-items-heading">
        My <span className="todo-items-heading-subpart">Tasks</span>
      </h1>
      <TodoList todos={todoList} onToggle={onToggle} onDelete={onDelete}/>
    </div>
  );
};

export default TodoApp;
