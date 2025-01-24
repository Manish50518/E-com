// import { useDispatch } from "react-redux";
// import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

import { useNavigate } from "react-router-dom";
import supabase from "../../services/supabase";

// eslint-disable-next-line react/prop-types
function UpdateItem({ cartItemID, cartItemQuantity, price }) {
  const navigate = useNavigate();

  async function handleDecreaseItem() {
    if (cartItemQuantity === 1) {
      await supabase.from("cart_items").delete().eq("id", cartItemID);
    } else {
      const { data, error } = await supabase
        .from("cart_items")
        .update({
          quantity: (cartItemQuantity -= 1),
          total_price: cartItemQuantity * price,
        })
        .eq("id", cartItemID)
        .select();
      console.log(cartItemQuantity);
      console.log(cartItemQuantity * price);
    }
    navigate("/cart");
  }

  async function handleIncreasItem() {
    const { data, error } = await supabase
      .from("cart_items")
      .update({
        quantity: (cartItemQuantity += 1),
        total_price: cartItemQuantity * price,
      })
      .eq("id", cartItemID)
      .select();
    console.log(cartItemQuantity);
    console.log(cartItemQuantity * price);
    navigate("/cart");
  }

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={handleDecreaseItem}
        className="px-3   bg-blue-300 text-gray-700 rounded-md text-2xl font-bold hover:bg-blue-400 transition-colors duration-200"
      >
        -
      </button>

      <span className="text-lg font-medium text-gray-800">
        {cartItemQuantity}
      </span>

      <button
        onClick={handleIncreasItem}
        className="px-3  bg-blue-300 text-gray-700 rounded-md text-2xl font-bold hover:bg-blue-400 transition-colors duration-200"
      >
        +
      </button>
    </div>
  );
}

export default UpdateItem;
