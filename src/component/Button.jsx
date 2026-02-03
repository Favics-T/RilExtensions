import React from "react"

const Button = ({title,isActive,onClick}) => {
    
    
  return (
    <button onClick={onClick}  className={`bg-gray-700 hover:pointer px-4 py-2 rounded-xl
                                            ${isActive ? 'bg-red-700' : 'bg-gray-700'}`}>
        {title}</button>
  )}

export default Button

