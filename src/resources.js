const storedTodo = localStorage.getItem('todo')
export const initialState = storedTodo ?
JSON.parse(storedTodo) : [];
