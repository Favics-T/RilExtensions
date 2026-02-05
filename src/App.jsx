import React, { useState } from 'react'
import ExtentionCard from './component/ExtentionCard'
import Nav from './component/Nav'
import ExtensionNav from './component/ExtensionNav'
import { extensionList } from './page'


const App = () => {
    const[extensions, setExtensions] = useState(extensionList);
    const [filter, setFilter] = useState('all');


 const filteredExtension = extensions.filter(ext=>{
      if(filter === 'active') return ext.isActive
       if (filter === 'inactive') return !ext.isActive
       return true
 })

 const handleToggle = (name)=>{
  setExtensions(prev=>
     prev.map(ext=>
      ext.name === name?{...ext, isActive:!ext.isActive}:ext
  ))

 }

  return (
    <div className='bg-[#01071b]  text-white py-8 md:px-1 px-4  flex flex-col  justify-center items-center'>
    <div className='flex flex-col gap-4 md:gap-8'>
            <Nav />
    <ExtensionNav filter={filter} setFilter={setFilter} />
    <ExtentionCard onToggle={(name)=>handleToggle(name)} extensions={filteredExtension} />
    
    </div>
    
    </div>
  )}
export default App


