
import './App.css';
import Header from './components/Header';
import { Todos } from './components/Todos';
import { Footer } from './components/Footer';
import { AddTodo as AddTodoComponent } from './components/AddTodo';
import { About } from './components/About';
import React, { useState, useEffect } from 'react';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];

  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo);
    //let index = todos.indexOf(todo)
    //todos.splice(index,1);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.getItem("todos", JSON.stringify(todos));
  }

  const AddTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    //const sno = todos.length === 0 ? 1 : todos[todos.length - 1].sno + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);




  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));

  }, [todos])

  return (
    <>
    <Router>
      <Header title="MyTodosList" searchBar={true} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddTodoComponent AddTodo={AddTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
      
      <Footer />
      </Router>
    </>
  );
}

export default App;
