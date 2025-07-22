import React, { useRef } from 'react'

const TextInput = ({ label, placeholder, ref, error }) => {
    const inputRef = useRef();
    return (
        <div>
            <div>
                <div className='pt-3'><span className='font-bold'>{label}</span>
                    <div className=''>
                        <input ref={ref} type="text" placeholder={placeholder} className='outline-none text-sm w-full p-2 rounded-sm border border-gray-500' />
                    </div>
                    <div className='text-red-600'>
                        {error && ("Invalid details")}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TextInput
