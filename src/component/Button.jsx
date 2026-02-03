import React from 'react'

const Button = ({title}) => {

    const active =()=>{

    }
  return (
    <button onClick={active} className={`bg-gray-700 hover:pointer px-4 py-2 rounded-xl`}>
        {title}</button>
  )}

export default Button
