import React from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";
import removeFromCart from '../../localstorage/removeFromCart';
import Quantity from './Quantity';
import OrangeButton from '../../Button/OrangeButton';

const CartCard = ({ item, setCart }) => {
    return (
        <div className="mb-2">
            <div className='border m-auto border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 p-3 rounded-lg bg-white max-w-sm w-full'>
                <div className='flex items-center gap-3'>
                    {/* Image */}
                    <img
                        src={item?.image}
                        alt={item?.name}
                        className='h-16 w-16 rounded-lg object-cover flex-shrink-0'
                    />

                    {/* Content */}
                    <div className='flex-1 min-w-0'>
                        <div className='flex items-start justify-between gap-2'>
                            <div className='flex-1 min-w-0'>
                                <h3 className='text-sm font-semibold text-gray-800 truncate'>{item?.name}</h3>
                                <span className='inline-block bg-gray-100 px-2 py-0.5 rounded-full text-xs text-gray-600 mt-1'>{item?.mealType}</span>
                                <div className='text-orange-600 text-sm font-bold mt-1'>$ {item?.caloriesPerServing}</div>
                            </div>
                            
                            {/* Delete button */}
                            <RiDeleteBin5Line
                                className='text-lg text-gray-400 hover:text-red-500 cursor-pointer transition-colors duration-200 flex-shrink-0'
                                onClick={() => removeFromCart(item, setCart)}
                            />
                        </div>

                        {/* Quantity and Order button */}
                        <div className='flex items-center justify-between mt-2 gap-2'>
                            <Quantity quantity={item?.quantity} data={item} setCart={setCart} />
                            <div className='flex-shrink-0'>
                                <OrangeButton title={"Order"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CartCard