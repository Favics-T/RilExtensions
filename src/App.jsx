import React from 'react'
import ExtentionCard from './component/ExtentionCard'
import Nav from './component/Nav'
// import Card from './components/Card'

const App = () => {
  return (
    <div className='bg-[#01071b] h-screen gap-8 text-white  flex flex-col justify-center items-center'>
    <Nav />
    <ExtentionCard />
    </div>
  )
}

export default App
