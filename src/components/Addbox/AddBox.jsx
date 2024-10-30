import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCard } from '../../store/store'
const AddBox = () => {
  const [boxName,setBoxName]=useState('')
  const dispatch=useDispatch()
  return (
    <>
      <div style={{display:'block',marginTop:'50px'}}>
      <input type="text" placeholder='Add new list' onChange={(e)=>setBoxName(e.target.value)}/>
      <button onClick={()=>dispatch(addCard(boxName))}>Add to List</button>
      </div>
    </>
  )
}

export default AddBox