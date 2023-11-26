import logo from './logo.svg';
import './App.css';
import ToDoList from './Compontent/ToDoList'
import { Context } from './Context';
import { useContext } from 'react';

function App() {
  const Cont = useContext(Context)
  return (
    <ToDoList />





  )
}

export default App;
