import { TodoAddButton } from './Components/Todoadd/todoadd';
import { TodoChart } from './Components/Todochart/todchart';
import { TodoCounter } from './Components/Todocounter/todocounter';
import { TodoItem } from './Components/Todoitem/todoitem';
import { TodoSearch } from './Components/Todosearch/todosearch';
import './styles/App.css';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <TodoCounter 
      todoCompleted={3} totalTodo={5}/>
      <TodoSearch/>
      <TodoChart>
        <TodoItem/>
      </TodoChart>
      <TodoAddButton/>
    </React.Fragment>
  );
}

export default App;
