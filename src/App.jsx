

import './App.css';
import AddTodo from './component/AddTodo/AddTodo';
import TodoList from './component/TodoList/TodoList';

import TodoContext from './context/TodoContext';
import { useReducer } from 'react';
import todoReducer from './reducers/todoReducer';
import TodoDispatchContext from './context/todoDispatchContext';




function App() {
  
  // const [list,setList] =useState([
  //   {id:1,todoData:'todo 1',finished:false},
  //   {id:2, todoData:'todo 2',finished:false},
  // ]);
  const [list ,dispatch] = useReducer(todoReducer,[]);
  
  return (
    <>
      <TodoContext.Provider value={{list}}>
        <TodoDispatchContext.Provider value={{dispatch}}>
      
          <AddTodo/>
          
          <TodoList/>
        </TodoDispatchContext.Provider>
      
      </TodoContext.Provider>
    </>

  );
}

export default App;
