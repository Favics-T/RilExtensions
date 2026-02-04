import React from 'react'
import Logo from '../assets/images/logo.svg'
import Icon from '../assets/images/icon-sun.svg'
const Nav = () => {
  return (
    <div className='  bg-gray-900 w-full md:p-4 p-1 rounded-2xl flex items-center justify-between'>
       <img src={Logo} alt="Logo" className='' />
       <div className='bg-gray-800 flex p-2 rounded-xl'>
            <img src={Icon} alt=""  />
       </div>
       
      
    </div>
  )
}

export default Nav
