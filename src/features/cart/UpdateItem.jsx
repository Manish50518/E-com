// import { useDispatch } from "react-redux";
// import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

import { useNavigate } from "react-router-dom";
import supabase from "../../services/supabase";

// eslint-disable-next-line react/prop-types
function UpdateItem({ cartItemID, cartItemQuantity, price }) {
  const navigate = useNavigate();

  async function handleDecreaseItem() {
    if (cartItemQuantity === 1) {
      const response = await supabase
        .from("cart_items")
        .delete()
        .eq("id", cartItemID);
    }
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
    <div>
      <button onClick={handleDecreaseItem} className="in_dic_button">
        -
      </button>
      <span>{cartItemQuantity}</span>
      <button onClick={handleIncreasItem} className="in_dic_button">
        +
      </button>
    </div>
  );
}

export default UpdateItem;
