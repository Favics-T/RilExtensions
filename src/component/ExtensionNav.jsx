import React, { useContext, useState } from 'react'
import Button from './Button'
import { ExtensionContext } from '../ExtensionContext'

const buttonList = [
    {   title:"All",
         value: 'all'
    },
    {
        title:"Active",
        value:'active'
    },
    {
        title:"Inactive",
        value: 'inactive'
    }
]

const ExtensionNav = () => {
const{filter, setFilter} = useContext(ExtensionContext)
  return (
    <div>
      <div className='flex md:flex-row flex-col md:gap-0 gap-2      
      justify-between items-center'>
        <h1 className='text-white font-bold text-2xl'>Extension List</h1>

        <div className='flex gap-1 md:gap-4'>
         {  buttonList.map(({title,value})=>(
            <Button key={value} title={title} isActiveButton={filter === value} onClick={()=>setFilter(value)} />
         ))}

        </div>
      </div>
    </div>
  )
}

export default ExtensionNav
