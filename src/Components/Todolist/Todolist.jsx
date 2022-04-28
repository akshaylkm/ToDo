import React from 'react';
import Todos from './Todos';
// import {data} from '../../DummyData';

function Todolist(props) {
  return <div className='basis-1/2'>
    <div className='p-1 sm:p-8 h-16'>
    <h1 className=' pt-4 text-center sm:text-left text-2xl font-bold'>TODO LIST</h1>
    <div>
    {/* <input className=' border-2 mt-4 p-1' placeholder='Search' type="search" /> */}
    </div>
    {props.todos.map(todo=>(<Todos
     key={todo.id}
     title ={todo.title}
     description ={todo.description}
     />))}
    
    </div>
      </div>;
}

export default Todolist;
