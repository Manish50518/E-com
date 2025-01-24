import CartItem from "./CartItem";
import { getCartItems } from "../../services/apiProducts";
import { useLoaderData, useNavigate } from "react-router-dom";

import OrderSummary from "../order/OrderSummary";

function Cart() {
  const cart = useLoaderData();
  const navigate = useNavigate();
  const showBtn = true;

  return (
    <div className="p-6 bg-gray-50 min-h-screen flex justify-center">
      <div className="max-w-5xl w-full">
        <header className="text-center text-4xl font-bold text-gray-800 mb-6">
          Cart
        </header>
        <hr className="border-t-4 border-blue-500 w-16 mx-auto mb-8" />
        <hr className="border-t-2 border-gray-200 mb-6" />
        {cart.length !== 0 ? (
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <ul className="w-full md:w-3/5 flex flex-col gap-6">
              {cart.map((cartItem) => (
                <CartItem
                  cartItem={cartItem.product}
                  key={cartItem.id}
                  cartItemID={cartItem.id}
                  totalPrice={cartItem.total_price}
                  cartItemQuantity={cartItem.quantity}
                />
              ))}
            </ul>
            <div className="w-full md:w-2/5">
              <OrderSummary cartdata={cart} showBtn={showBtn} />
            </div>
          </div>
        ) : (
          <div className="text-center mt-12">
            <p className="text-xl text-gray-600">Oops! Your cart is empty!!!</p>
            <button
              onClick={() => navigate("/products")}
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export async function loader() {
  const cart = getCartItems();
  return cart;
}

export default Cart;
