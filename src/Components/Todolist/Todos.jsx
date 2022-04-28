import React from 'react'
import {DeleteForever} from "@mui/icons-material"
function Todos(props) {
  return (
    <div className=' h-auto bg-slate-100  mt-8 flex rounded-md shadow-lg'>
      <div className=' flex justify-center items-center basis-16'>
        <input className='w-6 h-6' type="checkbox" name="" id="" />
      </div>
      <div className=' basis-4/5 p-2'>
        <h1 className=' font-semibold'>{props.title}</h1>
        <p>{props.description}</p>
      </div>
      <div className=' flex justify-center items-center'>
        <button><DeleteForever/></button>
      </div>
    </div>
  )
}

export default Todos