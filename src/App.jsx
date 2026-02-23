import React, { useContext } from 'react'
import ExtentionCard from './component/ExtentionCard'
import Nav from './component/Nav'
import ExtensionNav from './component/ExtensionNav'
import RemovedExtensions from './component/RemovedExtension'
import ConfirmDeleteModal from './component/ConfirmDeleteModal'
import { ExtensionContext } from './ExtensionContext'

const App = () => {
  const { deleteTarget, cancelRemoveExtension, confirmRemoveExtension } = useContext(ExtensionContext);

  return (
    <div className='bg-[#01071b] text-white py-8 md:px-1 px-4 flex flex-col justify-center items-center min-h-screen'>
      <div className='flex flex-col gap-4 md:gap-8'>
        <Nav />
        <ExtensionNav />
        <ExtentionCard />
        <RemovedExtensions />
      </div>

      <ConfirmDeleteModal
        open={Boolean(deleteTarget)}
        name={deleteTarget}
        onCancel={cancelRemoveExtension}
        onConfirm={confirmRemoveExtension}
      />
    </div>
  )
}

export default App
