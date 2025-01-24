/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import UpdateItem from "./UpdateItem";
import supabase from "../../services/supabase";
import { useNavigate } from "react-router-dom";

function CartItem({ cartItem, cartItemID, cartItemQuantity, totalPrice }) {
  const { id, image, brand, description, price } = cartItem;
  const navigate = useNavigate();

  async function handleDeleteCartItem() {
    const response = await supabase
      .from("cart_items")
      .delete()
      .eq("id", cartItemID);
    navigate("/cart");
  }

  return (
    <li className="py-4 border-b border-gray-300">
      <div className="flex items-start gap-4">
        <div className="w-24 h-24">
          <img
            src={image}
            alt={brand}
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        <div className="flex-1">
          <p className="text-lg font-semibold text-gray-800">{brand}</p>
          <p className="text-sm text-gray-600 mb-2">{description}</p>

          <UpdateItem
            id={id}
            cartItemQuantity={cartItemQuantity}
            cartItemID={cartItemID}
            price={price}
          />

          <p className="text-md font-medium text-gray-700 mt-2">
            Price:{" "}
            <span className="text-green-600 font-bold">₹{totalPrice}</span>
          </p>

          <button
            onClick={handleDeleteCartItem}
            className="mt-3 px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-md hover:bg-red-600 transition-colors duration-300"
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
