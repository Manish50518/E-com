/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import UpdateItem from "./UpdateItem";
import supabase from "../../services/supabase";
import { useEffect, useRef } from "react";
import { getCartItems } from "../../services/apiProducts";
import { useNavigate } from "react-router-dom";
function CartItem({ cartItem, cartItemID, cartItemQuantity, totalPrice }) {
  const { id, image, brand, description, quantity, price } = cartItem;
  const navigate = useNavigate();
  async function handleDeleteCartItem() {
    const response = await supabase
      .from("cart_items")
      .delete()
      .eq("id", cartItemID);
    navigate("/cart");
  }

  return (
    <li className="cart_list_li">
      <div className="cart-flex-div">
        <div className="cart-img-div">
          <img src={image} className="crat-img" />{" "}
        </div>
        <div className="cart-item-div">
          <p className="cart-brand">{brand}</p>
          <p className="cart-discription">{description}</p>
          <UpdateItem
            id={id}
            cartItemQuantity={cartItemQuantity}
            cartItemID={cartItemID}
            price={price}
          />
          <p className="cart-price">Price :-{totalPrice}</p>
          <button onClick={handleDeleteCartItem} className="cartlist_button">
            Delete
          </button>
        </div>
      </div>
      <hr />
    </li>
  );
}

export default CartItem;
