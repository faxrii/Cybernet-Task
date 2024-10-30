import React, { useState } from 'react'
import classes from './style.module.css'
const Header = () => {
  return (
    <>
      <header>
         <div className="container">
         <h2 className={classes.heading}>Kanbon Board</h2>
      <input type="text" placeholder='search' className={classes.headingInput}/>
      
         </div>
      </header>
    </>
  )
}

export default Header