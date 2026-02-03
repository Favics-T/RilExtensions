import React from 'react'
import { LiaToggleOnSolid } from "react-icons/lia";
import { CgToggleOn } from "react-icons/cg";

const CardComponent = ({title, description,img,isActive}) => {
  return (
    <div>
      <div className='bg-gray-900 flex flex-col gap-8 p-4 rounded-2xl'>
        
        {/* name */}
        <div className='flex gap-2 justify-center items-center'>
           <img src={img} alt="" />
           <div className='flex flex-col gap-1'>
            <h1 className='text-lg font-bold'>{title}</h1>
            <p className='text-sm font-[]'>{description}</p>
           </div>
        </div>

        {/* button and toggle  */}
        <div className='flex justify-between items-center'>
            <button className='text-sm border px-2 rounded-2xl'>Remove</button>
            <button className={`text-2xl ${isActive ? 'text-gray-600' : 'text-red-500'}`}>
                 {
                isActive ? <LiaToggleOnSolid />  :<CgToggleOn />
            }
            </button>
           
        </div>
      </div>
    </div>
  )
}

export default CardComponent
