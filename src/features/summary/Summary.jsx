import { useSelector } from "react-redux";
import { getTotalAmount, getTotalCartQuantity } from "../cart/cartSlice";

function Summary() {
  const productQuantity = useSelector(getTotalCartQuantity);
  const totalAmount = useSelector(getTotalAmount);
  return (
    <div>
      <span>Products({productQuantity}) </span>
      <span>{totalAmount}</span>
      <span>Shipping</span>
      <span>30</span>
      <span>Total amount</span>
      <span>{totalAmount + 30}</span>
    </div>
  );
}

export default Summary;
