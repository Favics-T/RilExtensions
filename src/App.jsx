import React, { useState } from 'react'
import ExtentionCard from './component/ExtentionCard'
import Nav from './component/Nav'
import ExtensionNav from './component/ExtensionNav'
import { extensionList } from './page'


const App = () => {
  const [filter, setFilter] = useState('all');

 const filteredExtension = extensionList.filter(ext=>{
      if(filter === 'active') return ext.isActive
       if (filter === 'inactive') return !ext.isActive
       return true
 })

  return (
    <div className='bg-[#01071b] text-white py-8 md:px-1 px-4  flex flex-col  justify-center items-center'>
    <div className='flex flex-col gap-4 md:gap-8'>
      <Nav />
    <ExtensionNav filter={filter} setFilter={setFilter} />
    <ExtentionCard extensions={filteredExtension} />
    </div>
    
    </div>
  )}
export default App


