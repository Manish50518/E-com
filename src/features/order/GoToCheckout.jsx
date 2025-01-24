import { useLoaderData } from "react-router-dom";
import OrderSummary from "./OrderSummary";

function GoToCheckout() {
  const cartdata = useLoaderData();
  const showBtn = false;

  return (
    <div className="checkout mx-auto max-w-7xl p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <OrderSummary cartdata={cartdata} showBtn={showBtn} />
        </div>

        <form className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <label htmlFor="fname" className="block text-sm font-medium">
                First name
              </label>
              <input
                type="text"
                name="fname"
                id="fname"
                required
                className="w-full mt-1 p-2 border rounded-md"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="lname" className="block text-sm font-medium">
                Last name
              </label>
              <input
                type="text"
                name="lname"
                id="lname"
                className="w-full mt-1 p-2 border rounded-md"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="femail" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              name="femail"
              id="femail"
              className="w-full mt-1 p-2 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="faddress" className="block text-sm font-medium">
              Address
            </label>
            <input
              type="text"
              name="faddress"
              id="faddress"
              className="w-full mt-1 p-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="faddress2" className="block text-sm font-medium">
              Address 2
            </label>
            <input
              type="text"
              name="faddress2"
              id="faddress2"
              className="w-full mt-1 p-2 border rounded-md"
            />
          </div>

          <div className="flex gap-4 mb-4">
            <div className="w-1/3">
              <label htmlFor="fcountry" className="block text-sm font-medium">
                Country
              </label>
              <select
                name="fcountry"
                id="fcountry"
                className="w-full mt-1 p-2 border rounded-md"
              >
                <option value="select">Select</option>
                <option value="India">India</option>
              </select>
            </div>
            <div className="w-1/3">
              <label htmlFor="fstate" className="block text-sm font-medium">
                State
              </label>
              <select
                name="fstate"
                id="fstate"
                className="w-full mt-1 p-2 border rounded-md"
              >
                <option value="select">Select</option>
                <option value="Karnataka">Karnataka</option>
              </select>
            </div>
            <div className="w-1/3">
              <label htmlFor="fzip" className="block text-sm font-medium">
                ZIP
              </label>
              <input
                type="text"
                name="fzip"
                id="fzip"
                className="w-full mt-1 p-2 border rounded-md"
              />
            </div>
          </div>

          <hr className="my-6" />

          <h2 className="text-lg font-semibold mb-4">Payment</h2>
          <div className="mb-4">
            <label htmlFor="namecard" className="block text-sm font-medium">
              Name on card
            </label>
            <input
              type="text"
              id="namecard"
              name="namecard"
              className="w-full mt-1 p-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="cardnum" className="block text-sm font-medium">
              Credit card number
            </label>
            <input
              type="number"
              name="cardnum"
              id="cardnum"
              className="w-full mt-1 p-2 border rounded-md"
            />
          </div>
          <div className="flex gap-4 mb-6">
            <div className="w-1/2">
              <label htmlFor="cardexp" className="block text-sm font-medium">
                Expiration
              </label>
              <input
                type="text"
                id="cardexp"
                name="cardexp"
                className="w-full mt-1 p-2 border rounded-md"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="cardcvv" className="block text-sm font-medium">
                CVV
              </label>
              <input
                type="number"
                name="cardcvv"
                id="cardcvv"
                className="w-full mt-1 p-2 border rounded-md"
              />
            </div>
          </div>

          <hr className="my-6" />

          <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors duration-200">
            Continue to checkout
          </button>
        </form>
      </div>
    </div>
  );
}

export default GoToCheckout;
