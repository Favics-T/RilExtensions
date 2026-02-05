import React from 'react'
import CardComponent from './CardComponent'

const ExtentionCard = ({extensions,onToggle}) => {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full md:w-250'>
        {
            extensions.map((ext)=>(
             <CardComponent onToggle={onToggle} key={ext.name} title={ext.name} img={ext.logo} isActive={ext.isActive} description={ext.description} />
                
            ))
        }
      </div>
    </div>
  )
}

export default ExtentionCard

