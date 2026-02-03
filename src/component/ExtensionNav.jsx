import React from 'react'
import Button from './Button'

const buttonList = [
    {title:"All"},
    {title:"Active"},
    {title:"Inactive"}
]

const ExtensionNav = () => {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <h1 className='text-white font-bold text-2xl'>Extension List</h1>

        <div className='flex gap-4'>
         {  buttonList.map(({title})=>(
            <Button title={title} />
         ))}
        </div>
      </div>
    </div>
  )
}

export default ExtensionNav
