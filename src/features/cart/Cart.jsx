import CartItem from "./CartItem";
import { getCartItems } from "../../services/apiProducts";
import { useLoaderData, useNavigate } from "react-router-dom";
import OrderSummary from "../order/orderSUmmary";

function Cart() {
  const cart = useLoaderData();
  const navigate = useNavigate();
  const showBtn = true;
  // const CartItem = cart.length;

  console.log(cart);
  return (
    <div className="cart">
      <header className="page_header">Cart</header>
      <hr className="page_hr" />
      {cart.length !== 0 ? (
        <div className="cart_main_div">
          <ul className={`${cart.length != 0 ? "cart_list_ul" : " "}`}>
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
          <OrderSummary cartdata={cart} showBtn={showBtn} />
        </div>
      ) : (
        <div>
          <p>Opp's your cart is empty !!!</p>
          <button onClick={() => navigate("/products")} className="">
            Continue shopping
          </button>
        </div>
      )}
    </div>
  );
}

<orderSummary />;

export async function loader() {
  const cart = getCartItems();
  return cart;
}

export default Cart;
