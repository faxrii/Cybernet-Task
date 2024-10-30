import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCard } from '../../store/store'
import classes from './style.module.css'
const AddBox = () => {
  const [boxName,setBoxName]=useState('')
  const dispatch=useDispatch()
  return (
    <>
      <div className={classes.add}>
      <input type="text" placeholder='Add new list' onChange={(e)=>setBoxName(e.target.value)} value={boxName} className={classes.input}/>
      <button onClick={()=>dispatch(addCard(boxName))} className={classes.btn}>Add to List</button>
      </div>
    </>
  )
}

export default AddBox