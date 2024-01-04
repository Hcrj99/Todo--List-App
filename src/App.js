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
  return (
    <React.Fragment>
      <TodoCounter todoCompleted={3} totalTodo={5} />
      <TodoSearch />
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
