import { useNavigate } from "react-router-dom";

function GoToCart() {
  const navigate = useNavigate();

  function handleGoToCart() {
    navigate("/cart");
  }
  return (
    <div>
      <button onClick={handleGoToCart} className="cart_button">
        Go to cart
      </button>
    </div>
  );
}

export default GoToCart;
