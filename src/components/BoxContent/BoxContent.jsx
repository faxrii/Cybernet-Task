import React from 'react'
import { useState } from 'react'
import { IoIosClose } from "react-icons/io";
import classes from './style.module.css'
const BoxContent = () => {
    const [todoInput,setToDoInput]=useState('')
    const[todos,setTodos]=useState([])
    const clickHandler=()=>{
        if(todoInput.trim()){
            setTodos(state=>[...state,{todo:todoInput,id:Math.random()}])
            setToDoInput('')
        }
       
      }
    const removeHandler=(id)=>{
       setTodos(state=>state.filter((item)=>{return item.id!=id}))
    }
  return (
    <>
      <div>
            <ul>
              {
                todos.map((item)=>(
                  <li key={item.id} className={classes.toDoItem}>
                      {item.todo} 
                      <IoIosClose onClick={()=>removeHandler(item.id)} className={classes.icon}/>
                  </li>
                ))
              }
            
            </ul>
            <input type="text" onChange={(e)=>setToDoInput(e.target.value)} value={todoInput} className={classes.toDoInput} />
           <button onClick={clickHandler} className={classes.btn}>Add Card</button>
        </div>
    </>
  )
}

export default BoxContent