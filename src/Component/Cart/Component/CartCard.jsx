import React from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";
import removeFromCart from '../../localstorage/removeFromCart';
import Quantity from './Quantity';
import OrangeButton from '../../Button/OrangeButton';
const CartCard = ({ item, setCart }) => {
  
    return (
        <div>
<div className='border border-gray-200 max-w-7xl mx-auto shadow-lg pt-4 px-6 pb-4 rounded-lg'>
    <div className='flex justify-between items-center gap-10'>
        <img src={item?.image} alt={item?.name} className='h-48 w-48 rounded-2xl object-cover p-2' />

        <div className='flex-1'>
            <div className='text-2xl font-bold mb-2'>{item?.name}</div>
            <div className='text-gray-500 text-sm mb-4'>{item?.mealType}</div>
            <div className='text-red-500 text-2xl font-bold mb-6'>$ {item?.caloriesPerServing}</div>
         
            <OrangeButton title={"Order now"} />
              
              <div className='flex justify-center'>
                 <Quantity quantity={item?.quantity} data={item} setCart={setCart}/>
            </div>
        </div>
 
        <RiDeleteBin5Line
            className='text-3xl text-red-500 cursor-pointer hover:text-red-700 transition'
            onClick={() => removeFromCart(item, setCart, )}
        />
       
    </div>
</div>

        </div>
    )
};

export default CartCard
