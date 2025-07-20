import React from 'react'
import NavBar from '../../NavBar/NavBar'
import CartCard from './CartCard';
import { useEffect, useState } from 'react'
import { data } from 'react-router';
import totalAmount from '../../CustomFunction/totalAmount';
import OrangeButton from '../../Button/OrangeButton';
import CheckOutModal from './CheckOutModal';
const Cart = () => {

  let data = localStorage.getItem("cart");
  const [cart, setCart] = useState(JSON.parse(data))
  const [visible,setVisible]=useState(false)

  return (
    <div>
      <div>
      <NavBar />
      
      {cart.map((item, index) => (<CartCard item={item} key={index} setCart={setCart} />))}
      </div>
       <div className=' border-black mt-10 w-7xl m-auto border-2'></div>
      <div className='flex justify-around mt-10'>
        <div>
          <OrangeButton title={"Check out"} onClick={()=>setVisible((prev)=>!prev)} />
        </div>
       
        <div className='flex gap-2 items-center'>
          <div className='text-orange-500 font-bold text-2xl '>Total Amount: </div>
          <div className='text-2xl font-bold'>
            $ {totalAmount(cart)} 
          </div>
        </div>
      </div>
      {visible &&
      (<CheckOutModal setVisible={setVisible}/>)}
    </div>
  )
}

export default Cart
