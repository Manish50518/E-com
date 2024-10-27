/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { productDetails } from "./ProductSlice";
import { addToCart } from "./AddToCart";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductItem({ product }) {
  const { id, image, description, price, isSold, brand, category, detailing } =
    product;
  // console.log(id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [addTOCart, setAddToCart] = useState(false);

  function handleAddToCartClick() {
    addToCart({ id, price, qunatity: 1 });
    setAddToCart(true);
    navigate("/products");
    toast.success("1 item added to the cart!", {
      autoClose: 3000,
    });
  }

  function handleGoToCart() {
    navigate("/cart");
  }

  function handleBuyNow() {
    const productOverView = {
      id,
      image,
      brand,
      description,
      quantity: 1,
      price,
      totalPrice: price * 1,
      category,
      detailing,
    };
    dispatch(productDetails(productOverView));
    navigate("/productDiscription");
  }

  return (
    <li className="product_list_li">
      <img src={image} className="product_img" onClick={handleBuyNow} />

      <p className="brand-li">{brand}</p>
      <p className="discription-li">{description}</p>
      <p className="price-li">₹{price}</p>
      {addTOCart ? (
        <button onClick={handleGoToCart} className="cart_button">
          Go to cart
        </button>
      ) : (
        <>
          <button onClick={handleAddToCartClick} className="cart_button">
            Add to Cart
          </button>
        </>
      )}

      <button onClick={handleBuyNow} className="cart_button">
        Buy Now
      </button>
    </li>
  );
}

export default ProductItem;
