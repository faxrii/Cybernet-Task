import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IoIosClose } from "react-icons/io";
import { removeCard } from '../../store/store'
import BoxContent from '../BoxContent/BoxContent';
import classes from './style.module.css'
const ToDoBox = () => {

  const card=useSelector((state)=>state.card.value)
  const dispatch=useDispatch()
  console.log(card)
  return (
   <>
   <ul className={classes.listToDo}>
      {
        card && card.map((item)=>(
        <li key={item.id} className={classes.cardItem}>
         
          <h3 className={classes.heading}>{item.name} <IoIosClose className={classes.icon} onClick={()=>dispatch(removeCard(item))}/></h3>
          <BoxContent/>
      </li>
        ))
      }
   </ul>
      
      
      
    </>
  )
}

export default ToDoBox