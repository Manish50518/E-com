/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

function OrderSummary({ cartdata, showBtn }) {
  const navigate = useNavigate();

  const totalCartProduct = cartdata.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalCartPrice = cartdata.reduce(
    (sum, item) => sum + item.total_price,
    0
  );

  function handleCheckout() {
    navigate("/checkout");
  }

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg w-full">
      <header className="text-xl font-bold text-gray-800 mb-4">
        Order Summary
      </header>
      <div className="space-y-4">
        <div className="flex justify-between text-gray-600">
          <span>Products ({totalCartProduct})</span>
          <span className="font-medium">₹{totalCartPrice}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Shipping Price</span>
          <span className="font-medium">₹30</span>
        </div>
        <hr className="border-gray-300" />
        <div className="flex justify-between text-lg font-semibold text-gray-800">
          <span>Total Amount</span>
          <span>₹{totalCartPrice + 30}</span>
        </div>
      </div>
      {showBtn && (
        <button
          onClick={handleCheckout}
          className="mt-6 w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Go To Checkout
        </button>
      )}
    </div>
  );
}

export default OrderSummary;
