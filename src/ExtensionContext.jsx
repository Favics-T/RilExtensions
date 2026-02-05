import React, { createContext, useState } from 'react'
import { extensionList } from './page';
export const ExtensionContext = createContext();

const ExtensionProvider = ({children }) => {
    const [filter, setFilter] = useState('all');
    const [extensions, setExtensions] = useState(extensionList);
    const [removedExtensions, setRemovedExtensions ] = useState([]);
        const filteredExtension =  
            extensions.filter(ext=>{    
                    if(filter === 'active') return ext.isActive;
                    if(filter === 'inactive') return !ext.isActive;
                    return true;
            }) 

            const handleToggle = (name)=>{
                setExtensions(prev=> 
                    prev.map(ext=> ext.name == name ? {...ext, isActive:!ext.isActive}:ext)
                )
            }

            const handleRemoveExtension = (name)=>{
                     setExtensions( prev=>{
                            const removed = prev.find(ext=> ext.name == name);
                           if(removed) setRemovedExtensions(e=>[...e, removed])
                     return        prev.filter(ext=> ext.name !== name);
            })}  
            
            const restoreExtension =(name)=>{
                    setRemovedExtensions(
                        prev=>{
                          const restored =  prev.find(e=> e.name == name);
                          if(restored){
                            setExtensions(e=> [...e, restored]);
                           return prev.filter(p=> p.name !== name)
                          }
                          return prev
                        }
                    )
            }
            
            
           
        

  return (
    
      <ExtensionContext.Provider value={{
                                            filter,
                                            setFilter,
                                            extensions,
                                            setExtensions,
                                            filteredExtension,
                                            handleToggle,
                                            handleRemoveExtension ,
                                            removedExtensions, 
                                            setRemovedExtensions, 
                                            restoreExtension
                                         }}>
        {children}
      </ExtensionContext.Provider>
    
  )
}

export default ExtensionProvider
