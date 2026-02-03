import React from 'react'
import ExtentionCard from './component/ExtentionCard'
import Nav from './component/Nav'
import ExtensionNav from './component/ExtensionNav'
// import Card from './components/Card'

const App = () => {
  return (
    <div className='bg-[#01071b] text-white  flex flex-col  justify-center items-center'>
    <div className='flex flex-col gap-8'>
      <Nav />
    <ExtensionNav />
    <ExtentionCard />
    </div>
    
    </div>
  )
}

export default App
