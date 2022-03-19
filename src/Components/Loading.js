import React, { useContext, useState } from 'react'
import { Mode } from '../App'
const Loading = () => {
  const mode=useContext(Mode);

  
  return (
    <div className="loaderContainer" style={{background:"transparent"}}>
        <h1 style={mode.mode=="Light"? {color:"#000"}:{color:"#fff"}}>Loading News...</h1>
    </div>
  )
}

export default Loading