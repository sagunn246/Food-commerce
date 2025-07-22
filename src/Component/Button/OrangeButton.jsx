import React from 'react'

const OrangeButton = ({ title, ...props }) => {
  return (
    <div>
      <button
        className="bg-orange-500 hover:bg-amber-500 text-white rounded-xl cursor-pointer 
                   text-sm px-4 py-2
                   sm:text-base sm:px-5 sm:py-2.5
                   md:text-lg md:px-6 md:py-3
                   transition duration-200"
        {...props}
      >
        {title}
      </button>
    </div>
  )
}

export default OrangeButton
