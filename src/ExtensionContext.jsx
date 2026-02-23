import React, { createContext, useState } from 'react'
import { extensionList } from './page';
export const ExtensionContext = createContext();

const ExtensionProvider = ({children }) => {
    const [filter, setFilter] = useState('all');
    const [extensions, setExtensions] = useState(
        extensionList.map((ext,idx)=>
        ({...ext, originalIndex:idx })));

    const [toast, setToast] = useState(null);
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
                            const removed = prev.find(ext=> ext.name === name);
                           if(removed){                            
                                 setRemovedExtensions(e=>[...e, removed])
                                 setToast({name,message:`${removed.name} removed`, action:"undo"})
                           }
                     return        prev.filter(ext=> ext.name !== name)
                            })
                            setTimeout(()=> setToast(null),5000)
            }  
            
            const restoreExtension =(name)=>{
                    setRemovedExtensions(
                        prev=>{
                          const restored =  prev.find(e=> e.name === name);
                          if(restored){
                            setExtensions(e=> [...e, restored].sort((a,b)=> a.originalIndex - b.originalIndex));
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
                                            restoreExtension,
                                            toast,
                                            setToast
                                         }}>
        {children}
      </ExtensionContext.Provider>
    
  )
}

export default ExtensionProvider
