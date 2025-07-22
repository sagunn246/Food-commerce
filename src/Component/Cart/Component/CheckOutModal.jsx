import UserDetails from "./UserDetails";
import totalAmount from "../../CustomFunction/totalAmount";
import TextInput from "../../InputFields/TextInput";

const CheckOutModal = ({ visible, setVisible, product }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-50 p-2 sm:p-4">
      <div className="bg-white w-full max-w-md sm:max-w-lg lg:max-w-xl p-4 sm:p-6 lg:p-8 rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">Checkout Verification</h2>
        
        <div>
          <span className="text-lg sm:text-xl lg:text-2xl text-gray-800 block mb-3 sm:mb-4">Items</span>

          <div className="space-y-2 sm:space-y-3 max-h-40 sm:max-h-48 overflow-y-auto">
            {product.map((data, index) => (
              <div key={index}>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-gray-50 p-2 sm:p-3 rounded-lg gap-1 sm:gap-2">
                  <span className="font-medium text-gray-900 text-sm sm:text-base flex-1">{data?.name}</span>
                  <div className="flex justify-between sm:justify-end sm:gap-4 text-sm">
                    <div className="text-gray-600">
                      Qty: {data?.quantity}
                    </div>
                    <div className="text-gray-500 font-medium">${data?.caloriesPerServing}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-gray-200">
            <div className="font-bold text-base sm:text-lg">Total</div>
            <div className="font-bold text-base sm:text-lg text-green-600">${totalAmount(product)}</div>
          </div>
        </div>
        
        <div className="mt-4 sm:mt-6">
          <UserDetails />
        </div>
      </div>
    </div>
  );
};

export default CheckOutModal;