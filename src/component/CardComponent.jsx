import React from 'react'
import { LiaToggleOnSolid } from "react-icons/lia";
import { CgToggleOn } from "react-icons/cg";

const CardComponent = ({title, description,img,isActive,onToggle}) => {
  return (
    <div>
      <div className='bg-gray-900 w-full flex flex-col gap-8 p-4 rounded-2xl'>
              {/* name */}
        <div className='flex gap-2  '>
           <img src={img} alt="" className='h-10
           ' />
           <div className='flex flex-col gap-1'>
            <h1 className='text-lg font-bold'>{title}</h1>
            <p className='text-sm font-[]'>{description}</p>
           </div>
        </div>

        {/* button and toggle  */}
        <div className='flex justify-between items-center'>
            <button className='text-[12px] border px-4 py-1 rounded-2xl'>Remove</button>
            <button onClick={()=>onToggle(title)} className={`text-2xl ${isActive ? 'text-blue-600' : 'text-red-500'}`}>
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
