import "./App.css";
import {useState} from 'react';
import Header from "./components/Header.js";
import TodoList from "./components/todolist.js";



function App() {
  const [todos, setTodos] = useState([]);
  function addTodos(TodoName) {
    const newTodo = [...todos,{name: TodoName, isComplete: true}];
    setTodos(newTodo);
  } 

  function handleToggleComplete(name) {
    const newTodo = todos.map((todo) => {
      if (todo.name === name) {

        return{...todo, isComplete: !todo.isComplete
      };
    }else{return todo;
    }
  });
    setTodos(newTodo);
  }

  function handleDeleteTodo(name){
    const newTodos = todos.filter((todo) => todo.name !== name);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <Header onAddTodo={addTodos}/>
      <TodoList todos={todos} onToggleComplete={handleToggleComplete} onDelete={handleDeleteTodo}/>
    </div>
  );
}

export default App;
