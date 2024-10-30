import React from 'react'
import { useState } from 'react'
import { IoIosClose } from "react-icons/io";
const BoxContent = () => {
    const [todoInput,setToDoInput]=useState('')
    const[todos,setTodos]=useState([])
    const clickHandler=()=>{
        setTodos(state=>[...state,todoInput])
        setToDoInput('')
      }
  return (
    <>
      <div>
            <ul>
              {
                todos.map((item,i)=>(
                  <li key={i}>
                      {item} 
                      <IoIosClose/>
                  </li>
                ))
              }
            
            </ul>
            <input type="text" onChange={(e)=>setToDoInput(e.target.value)} />
           <button onClick={clickHandler}>Add Card</button>
        </div>
    </>
  )
}

export default BoxContent