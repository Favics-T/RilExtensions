import React, { createContext, useState } from 'react'
import { extensionList } from './page';
export const ExtensionContext = createContext();

const ExtensionProvider = ({children }) => {
    const [filter, setFilter] = useState('all');
    const [extensions, setExtensions] = useState(extensionList);



  return (
    
      <ExtensionContext.Provider value={{
                                            filter,
                                            setFilter,
                                            extensions,
                                            setExtensions
                                         }}>
        {children}
      </ExtensionContext.Provider>
    
  )
}

export default ExtensionProvider
