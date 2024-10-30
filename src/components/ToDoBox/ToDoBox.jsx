import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IoIosClose } from "react-icons/io";
import { removeCard } from '../../store/store'
import BoxContent from '../BoxContent/BoxContent';
const ToDoBox = () => {

  const card=useSelector((state)=>state.card.value)
  const dispatch=useDispatch()
  console.log(card)
  return (
   <>
   <ul>
      {
        card && card.map((item)=>(
        <li key={item.id}>
         
          <h3>{item.name} <IoIosClose onClick={()=>dispatch(removeCard(item))}/></h3>
          <BoxContent/>
      </li>
        ))
      }
   </ul>
      
      
      
    </>
  )
}

export default ToDoBox