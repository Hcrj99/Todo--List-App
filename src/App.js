import { TodoAdd } from './Components/Todoadd/todoadd';
import { TodoChart } from './Components/Todochart/todchart';
import { TodoCounter } from './Components/Todocounter/todocounter';
import { TodoItem } from './Components/Todoitem/todoitem';
import { TodoSearch } from './Components/Todosearch/todosearch';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <TodoCounter/>
      <TodoSearch/>
      <TodoChart>
        <TodoItem/>
      </TodoChart>
      <TodoAdd/>
    </div>
  );
}

export default App;
