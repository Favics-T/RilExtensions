import React from 'react'
import ExtentionCard from './component/ExtentionCard'
import Nav from './component/Nav'
import ExtensionNav from './component/ExtensionNav'
import RemovedExtensions from './component/RemovedExtension'


const App = () => {
 
  return (
    <div className='bg-[#01071b]  text-white py-8 md:px-1 px-4  flex flex-col  justify-center items-center'>
    <div className='flex flex-col gap-4 md:gap-8'>
            <Nav />
    <ExtensionNav  />
    <ExtentionCard  />
    <RemovedExtensions />
   
    
    </div>
    
    </div>
  )}
export default App


