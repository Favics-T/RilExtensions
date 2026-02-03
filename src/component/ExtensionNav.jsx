import React from 'react'
import Button from './Button'

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

const ExtensionNav = ({filter, setFilter}) => {
  return (
    <div>
      <div className='flex md:flex-row md:justify-between items-center'>
        <h1 className='text-white font-bold text-2xl'>Extension List</h1>

        <div className='flex gap-4'>
         {  buttonList.map(({title,value})=>(
            <Button key={value} title={title} isActive={filter === value} onClick={()=>setFilter(value)} />
         ))}
        </div>
      </div>
    </div>
  )
}

export default ExtensionNav
