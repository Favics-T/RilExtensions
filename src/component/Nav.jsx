import React from 'react'
import Logo from '../assets/images/logo.svg'
import Icon from '../assets/images/icon-sun.svg'
const Nav = () => {
  return (
    <div className=' w-250 bg-gray-900 p-4 rounded-2xl flex items-center justify-between'>
       <img src={Logo} alt="" />
       <div className='bg-gray-800 flex p-2 rounded-xl'>
            <img src={Icon} alt="" />
       </div>
       
      
    </div>
  )
}

export default Nav
