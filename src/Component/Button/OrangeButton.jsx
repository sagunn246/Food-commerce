import React from 'react'

const OrangeButton = ({title, ...props}) => {
  return (
    <div >
    <button className='bg-orange-500 hover:bg-amber-500 cursor-pointer text-white px-5 py-3  rounded-xl' {...props} >{title}</button>
      
    </div>
  )
}

export default OrangeButton
