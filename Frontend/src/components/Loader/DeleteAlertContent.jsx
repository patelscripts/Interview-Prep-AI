import React from 'react'

const DeleteAlertContent = ({content, onDelete}) => {
  return (
    <div className='p-5'>
      <p className='text-[14px]'>{content}</p>
      <div className='flex justify-center mt-6'>
        <button
        type='button'
        className='cursor-pointer text-center border p-1 rounded-lg bg-red-500 text-white font-semibold'
        onClick={onDelete}
        >
            Delete
        </button>
      </div>
    </div>
  )
}

export default DeleteAlertContent
