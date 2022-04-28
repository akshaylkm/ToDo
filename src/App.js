import React, { useState } from "react";
import Todo from "./Components/Todo/Todo";
import Todolist from "./Components/Todolist/Todolist";
function App() {
  const[todolistData,setTodolistData]=useState([]);
  const saveTodoDataHandler=(enterdTodoData)=>{
   setTodolistData((prevTodolistdata)=>{
    return [...prevTodolistdata,enterdTodoData]
   });
    };
  
  return <div>
    <div className=" p-3 sm:p-16 flex-wrap sm:flex h-screen ">
    <Todo onSaveTodoData={saveTodoDataHandler}/>
    <Todolist todos={todolistData}/>
    </div>
    </div>;
}

export default App;
