import { TodoAddButton } from './Components/Todoadd/todoadd';
import { TodoChart } from './Components/Todochart/todochart';
import { TodoCounter } from './Components/Todocounter/todocounter';
import { TodoItem } from './Components/Todoitem/todoitem';
import { TodoSearch } from './Components/Todosearch/todosearch';
import './styles/App.css';
import React from 'react';

const defaultTodos = [
  { text: 'Todo1', completed: true, description: 'todo today', type: 'sports'},
  { text: 'Todo2', completed: false, description: 'todo today', type: 'sports'},
  { text: 'Todo3', completed: false, description: 'todo today', type: 'sports'},
  { text: 'Todo4', completed: false, description: 'todo today', type: 'sports'},
  { text: 'Todo5', completed: false, description: 'todo today', type: 'sports'},
  { text: 'Todo6', completed: false, description: 'todo today', type: 'sports'},
  { text: 'Todo7', completed: false, description: 'todo today', type: 'sports'},
]

function App() {
  const [search, setSearch] = React.useState('');//state to todoSearch
  const [todo, setTodo] = React.useState(defaultTodos);//state to todoItem
  
  const completedTodos = todo.filter( (todoCompleted) => 
    !!todoCompleted.completed
  ).length; 

  const totalTodos = todo.length;

  return (
    <React.Fragment>
      <TodoCounter todoCompleted={completedTodos} totalTodo={totalTodos} />
      <TodoSearch search={search} setSearch={setSearch}/>
      <TodoChart>
        {defaultTodos.map( todo => 
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          description={todo.description}
          type={todo.type}
          />
        )}
      </TodoChart>
      <TodoAddButton />
    </React.Fragment>
  );
}

export default App;
