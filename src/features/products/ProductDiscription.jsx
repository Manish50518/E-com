import { useSelector } from "react-redux";
import { getProductDetials } from "./ProductSlice";
import { addToCart } from "./AddToCart";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

function ProductDiscription() {
  const [addTOCart, setAddToCart] = useState(false);
  const navigate = useNavigate();
  const product = useSelector(getProductDetials);
  const { id, image, brand, description, price, category, detailing } = product;

  console.log(id);

  function handleAddCart() {
    addToCart({ id, price });
    setAddToCart(true);
    toast.success("1 item added to the cart!", {
      autoClose: 3000,
    });
    // navigate("/products");
  }

  function handleGoToCart() {
    navigate("/cart");
  }
  // async function cartData() {
  //   const data = await getCartItems();
  //   console.log(data);
  //   return data;
  // }

  return (
    <div className="main-productDetail-div">
      <div className="productDetails-img-div">
        <img src={image} className="productDetails-img" />
      </div>
      <div className="productDetails-other-div">
        <p className="productDetails-category">{category} clothing</p>
        <p className="productDetails-brand">{brand}</p>
        <p className="productDetails-discription">{description}</p>
        <p className="productDetails-price">{price}</p>
        <p className="productDetails-detailing">{detailing}</p>{" "}
        {addTOCart ? (
          <button onClick={handleGoToCart} className="cart_button_discript">
            Go to cart
          </button>
        ) : (
          <button onClick={handleAddCart} className="cart_button_discript">
            add to cart
          </button>
        )}
        <ToastContainer position="top-center" reverseOrder={false} />
      </div>
    </div>
  );
}

export default ProductDiscription;