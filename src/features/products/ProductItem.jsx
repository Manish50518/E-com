/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { productDetails } from "./ProductSlice";
import { addToCart } from "./AddToCart";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductDiscription from "./ProductDiscription";
// import ProductDiscription from "./ProductDiscription";

function ProductItem({ product }) {
  const { id, image, description, price, isSold, brand, category, detailing } =
    product;
  const navigate = useNavigate();

  const [addTOCart, setAddToCart] = useState(false);
  const [openModel, setOpenModel] = useState(false);

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
    setOpenModel(true);
  }

  return (
    <div>
      <li className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center space-y-4 hover:shadow-2xl transition-shadow duration-300">
        <img
          src={image}
          alt={description}
          className="w-full h-[300px] object-cover rounded-md cursor-pointer hover:scale-105 transition-transform duration-200"
          onClick={handleBuyNow}
        />

        <p className="text-lg font-semibold text-gray-800">{brand}</p>
        <p className="text-md text-gray-600 text-center">{description}</p>
        <p className="text-xl font-bold text-black-600">₹{price}</p>

        {addTOCart ? (
          <button
            onClick={handleGoToCart}
            className="w-56 font-semibold py-3 bg-blue-500 text-white bg-gradient-to-r from-[#1D976C] via-[#93F9B9] to-[#1D976C] 
     text-center uppercase px-12 
    transition-all duration-500 ease-in-out 
    bg-[length:200%_auto] hover:bg-[position:right_center] 
    shadow-md shadow-gray-300 rounded-lg"
          >
            Go to Cart
          </button>
        ) : (
          <button
            onClick={handleAddToCartClick}
            className="w-56 font-semibold  py-3 bg-gradient-to-r from-[#FF512F] via-[#F09819] to-[#FF512F] 
    text-white text-center uppercase px-12 
    transition-all duration-500 ease-in-out 
    bg-[length:200%_auto] hover:bg-[position:right_center] 
    shadow-md shadow-gray-300 rounded-lg"
          >
            Add to Cart
          </button>
        )}

        <button
          onClick={handleBuyNow}
          className="w-56 py-3 bg-gradient-to-r font-semibold from-[#36D1DC] via-[#5B86E5] to-[#36D1DC] 
    text-white text-center uppercase px-12 
    transition-all duration-500 ease-in-out 
    bg-[length:200%_auto] hover:bg-[position:right_center] 
    shadow-md shadow-gray-300 rounded-lg"
        >
          Buy Now
        </button>
      </li>
      {openModel && (
        <ProductDiscription product={product} setOpenModel={setOpenModel} />
      )}
    </div>
  );
}

export default ProductItem;
