import React from 'react'

const CardComponent = ({title,classname, description,img}) => {
  return (
    <div>
      <div className='bg-gray-900 p-4 rounded-2xl'>
        
        {/* name */}
        <div>
            <img src={img} alt={title} className='w-8' />
            {title}
        </div>

        {/* button and toggle  */}
        <div>

        </div>
      </div>
    </div>
  )
}

export default CardComponent
