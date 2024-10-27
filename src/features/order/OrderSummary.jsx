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
    <div className="order_summary">
      <header className="order_summary_header">Order Summuary</header>
      <div className="order_summary_details">
        <div>Products ({totalCartProduct})</div>
        <div>{totalCartPrice}</div>
        <div>Shipping price</div>
        <div>30</div>
        <div className="totalPrice_order_summary">Total Amount</div>
        <div className="totalPrice_order_summary">{totalCartPrice + 30}</div>
      </div>
      {showBtn ? (
        <button onClick={handleCheckout} className="go_to_checkout">
          Go To Checkout
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default OrderSummary;
