import { Loading } from '../Components/Loading/loading';
import { Error } from '../Components/Error/error'
import { TodoAddButton } from '../Components/Todoadd/todoadd';
import { TodoChart } from '../Components/Todochart/todochart';
import { TodoCounter } from '../Components/Todocounter/todocounter';
import { TodoItem } from '../Components/Todoitem/todoitem';
import { TodoSearch } from '../Components/Todosearch/todosearch';
import { useLocalStorage } from '../hooks/uselocalstorage';
import '../styles/App.css';
import React from 'react';
import { EmptyTodo } from '../Components/Emptytodo/emptytodo';
import { Modal } from '../Components/Modal/modal';
import { TodoForm } from '../Components/Fomrtodo/formtodo';
import { DontResult } from '../Components/Dontresult/dontresult';

function App() {
  const [search, setSearch] = React.useState('');//state to todoSearch
  const {storage :todos, 
        saveStorage :saveTodoState, 
        loading, 
        error} = useLocalStorage('TODO_APP_v1', []);//state to todoItem
  
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
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodoState(newTodos);
  };

  //delete todos
  const deleteTodo = (text) => {
    const newTodos = [...todos];//copy todos
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex,1);//delete todo
    saveTodoState(newTodos);
  };

  //modal
  const [openModal, setOpenModal] = React.useState(false);

  //add ToDo
  const addTodo = (text, type) => {
    const newTodos = [...todos];//copy todos
    newTodos.push({
      text,
      type,
      completed: false,
    });
    saveTodoState(newTodos);
  }

  return (
    <React.Fragment>
      <TodoCounter todoCompleted={completedTodos} totalTodo={totalTodos} />
      <TodoSearch search={search} setSearch={setSearch}/>
      <TodoChart>
        {loading && !error && <Loading/>}
        {error && <Error/>}
        {(!loading && searchTodos.length === 0) && (!error) && (!search) && <EmptyTodo/>}
        {(search && searchTodos.length === 0) && <DontResult/>}

        {searchTodos.map( todo => 
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          onComplete={() => completeTodo(todo.text)}
          completed={todo.completed}
          onDelete={() => deleteTodo(todo.text)}
          type={todo.type}
          />
        )}
      </TodoChart>
      <TodoAddButton setOpenModal={setOpenModal}/>
      {openModal && (
        <Modal>
          <TodoForm setOpenModal={setOpenModal} addTodo={addTodo}/>
        </Modal>
      )}
    </React.Fragment>
  );
}

export default App;
