import React, { useContext } from 'react'
import CardComponent from './CardComponent'
import { ExtensionContext } from '../ExtensionContext'

const ExtentionCard = () => {
  const {filteredExtension, handleRemoveExtension,handleToggle} = useContext(ExtensionContext);
  

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full md:w-250'>
        {
            filteredExtension.map((ext)=>(
             <CardComponent onRemove={()=> handleRemoveExtension(ext.name)}
                           onToggle={()=>handleToggle(ext.name)}
                           key={ext.name} title={ext.name} 
                           img={ext.logo} isActive={ext.isActive}
                            description={ext.description} />
                
            ))
        }
      </div>
    </div>
  )
}

export default ExtentionCard

