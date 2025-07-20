import addQuantity from '../../localstorage/addQuantity'
import removeQuantity from '../../localstorage/removeQuantity'

function Quantity({ quantity, data, setCart, cartData }) {

    return (
        <div>
            <div className='flex gap-10 text-3xl '>
                <div className='bg-green-500 w-12 h-10 text-white font-bold flex justify-center rounded-xl cursor-pointer '><button className='cursor-pointer' onClick={() => removeQuantity(data, setCart)} >-</button></div>
                {quantity}
                <div className='bg-red-500 h-10 w-12 rounded-xl font-bold text-white flex justify-center cursor-pointer  '><button className='cursor-pointer' onClick={() => addQuantity(data, setCart,)}>+</button></div>
            </div>

        </div>
    )
}

export default Quantity
