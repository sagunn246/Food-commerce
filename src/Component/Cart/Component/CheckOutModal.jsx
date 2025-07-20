const CheckOutModal = ({ visible, setVisible }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-50 p-4">
      <div className="bg-white w-full max-w-2xl p-8 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Checkout Complete</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 font-semibold text-gray-700">Full name</label>
            <input
              type="text"
              placeholder="Enter your first and last name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-gray-700">Region</label>
            <input
              type="text"
              placeholder="Please enter your region"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-gray-700">Phone Number</label>
            <input
              type="tel"
              placeholder="Please enter your phone number"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-gray-700">City</label>
            <input
              type="text"
              placeholder="Please enter your city"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-gray-700">Building / House No / Floor / Street</label>
            <input
              type="text"
              placeholder="Please enter"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-gray-700">Area</label>
            <input
              type="text"
              placeholder="Please enter your area"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-2 font-semibold text-gray-700">Colony / Suburb / Locality / Landmark</label>
            <input
              type="text"
              placeholder="Please enter"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-2 font-semibold text-gray-700">Address</label>
            <input
              type="text"
              placeholder="For Example: House# 123, Street# 123, ABC Road"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button
            className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-200 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            onClick={() => setVisible((prev) => !prev)}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOutModal;