import React from 'react';

const ConfirmDeleteModal = ({ open, name, onCancel, onConfirm }) => {
  if (!open) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4'>
      <div className='w-full max-w-md rounded-xl bg-gray-900 p-6 text-white shadow-xl'>
        <h2 className='text-lg font-semibold'>Delete extension?</h2>
        <p className='mt-2 text-sm text-gray-300'>
          {`Are you sure you want to delete ${name}? You can still restore it from the Removed Extensions list.`}
        </p>
        <div className='mt-6 flex justify-end gap-3'>
          <button
            onClick={onCancel}
            className='rounded-lg border border-gray-500 px-4 py-2 text-sm hover:bg-gray-800'
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className='rounded-lg bg-red-600 px-4 py-2 text-sm hover:bg-red-700'
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
