import React from 'react'
import CardComponent from './CardComponent'
import { extensionList } from '../page'

const ExtentionCard = () => {
  return (
    <div>
      <div className='grid grid-cols-3 gap-8 w-250'>
        {
            extensionList.map(({name,logo,description,isActive})=>(
             <CardComponent title={name} img={logo} isActive={isActive} description={description} />
                
            ))
        }
      </div>
    </div>
  )
}

export default ExtentionCard
