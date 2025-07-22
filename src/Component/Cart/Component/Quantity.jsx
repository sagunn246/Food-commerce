import addQuantity from '../../localstorage/addQuantity'
import removeQuantity from '../../localstorage/removeQuantity'

function Quantity({ quantity, data, setCart, cartData }) {
    return (
        <div className='m-auto'>
            <div className='flex items-center gap-3 bg-gray-50 px-3 py-1 rounded-lg'>
                <button 
                    className='bg-green-500 hover:bg-green-600 w-8 h-8 text-white font-bold flex justify-center items-center rounded-md cursor-pointer transition-colors duration-200' 
                    onClick={() => removeQuantity(data, setCart)}
                >
                    <span className='text-sm'>-</span>
                </button>
                
                <span className='text-lg font-semibold text-gray-800 min-w-[1.5rem] text-center'>{quantity}</span>
                
                <button 
                    className='bg-red-500 hover:bg-red-600 h-8 w-8 rounded-md font-bold text-white flex justify-center items-center cursor-pointer transition-colors duration-200' 
                    onClick={() => addQuantity(data, setCart)}
                >
                    <span className='text-sm'>+</span>
                </button>
            </div>
        </div>
    )
}

export default Quantity