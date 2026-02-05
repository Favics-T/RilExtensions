import React, { useContext } from 'react';
import { ExtensionContext } from '../ExtensionContext';


const RemovedExtensions = () => {
  const { removedExtensions, restoreExtension } = useContext(ExtensionContext);

  if (removedExtensions.length === 0) return null;

  return (
    <div className='mt-16  '>
      <h2 className='text-xl font-bold mb-2'>Removed Extensions</h2>
      <div className='flex flex-wrap gap-4'>
        {removedExtensions.map(ext => (
          <div key={ext.name} className='bg-gray-700 p-4 rounded-xl flex items-center gap-4'>
            <p className='font-semibold'>{ext.name}</p>
            <button
              onClick={() => restoreExtension(ext.name)}
              className='bg-blue-500 px-2 py-1 rounded text-white'
            >
              Restore
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RemovedExtensions;
