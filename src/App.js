import { TodoAddButton } from './Components/Todoadd/todoadd';
import { TodoChart } from './Components/Todochart/todochart';
import { TodoCounter } from './Components/Todocounter/todocounter';
import { TodoItem } from './Components/Todoitem/todoitem';
import { TodoSearch } from './Components/Todosearch/todosearch';
import './styles/App.css';
import React from 'react';

const defaultTodos = [
  { text: 'Todo1', completed: true, type: 'sports'},
  { text: 'Todo2', completed: false, type: 'sports'},
  { text: 'Todo3', completed: true, type: 'sports'},
  { text: 'Todo4', completed: false, type: 'sports'},
  { text: 'Todo5', completed: false, type: 'sports'},
  { text: 'Todo6', completed: false, type: 'sports'},
  { text: 'Todo7', completed: false, type: 'sports'},
]

function App() {
  const [search, setSearch] = React.useState('');//state to todoSearch
  const [todos, setTodo] = React.useState(defaultTodos);//state to todoItem
  
  //completed todo + total todo
  const completedTodos = todos.filter( (todoCompleted) => 
    !!todoCompleted.completed
  ).length; 
  const totalTodos = todos.length;

  //search todos write by user
  const searchTodos = todos.filter( (todoSearch) => {
    const lowerTodoSearch = todoSearch.text.toLocaleLowerCase();
    const lowerSeach = search.toLocaleLowerCase()
    return lowerTodoSearch.includes(lowerSeach);//it keeps showing all because it returns true to an empty string
  }
  );

  //complete todos
  const completeTodo = (text) => {
    const newTodos = [...todos];//copy todos
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos[todoIndex].completed = true;
    setTodo(newTodos);
  };

  //delete todos

  return (
    <React.Fragment>
      <TodoCounter todoCompleted={completedTodos} totalTodo={totalTodos} />
      <TodoSearch search={search} setSearch={setSearch}/>
      <TodoChart>
        {searchTodos.map( todo => 
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          onComplete={() => completeTodo(todo.text)}
          completed={todo.completed}
          type={todo.type}
          />
        )}
      </TodoChart>
      <TodoAddButton />
    </React.Fragment>
  );
}

export default App;
