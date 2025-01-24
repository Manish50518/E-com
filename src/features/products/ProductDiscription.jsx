import { addToCart } from "./AddToCart";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

// eslint-disable-next-line react/prop-types
function ProductDiscription({ product, setOpenModel }) {
  const [addTOCart, setAddToCart] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { id, image, brand, description, price, category, detailing } = product;

  // Close the modal
  function closeModal() {
    setOpenModel(false);
    navigate("/products");
  }

  function handleAddCart() {
    addToCart({ id, price });
    setAddToCart(true);
    toast.success("1 item added to the cart!", {
      autoClose: 3000,
    });
  }

  function handleGoToCart() {
    navigate("/cart");
  }

  useEffect(() => {
    document.body.style.overflow = "hidden"; // Disable scroll
    return () => {
      document.body.style.overflow = "auto"; // Re-enable scroll when modal is closed
    };
  }, []);

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
        <div className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
          <button
            onClick={closeModal}
            className="absolute top-3 right-3 text-red-600 text-xl font-bold hover:text-red-800"
          >
            ✕
          </button>

          <div className="flex justify-center mb-4">
            <img src={image} alt={brand} className="w-60 h-60 object-cover" />
          </div>

          <div className="space-y-4">
            <p className="text-lg font-semibold text-gray-800">
              {category} clothing
            </p>
            <p className="text-xl font-bold text-gray-800">{brand}</p>
            <p className="text-sm text-gray-600">{description}</p>
            <p className="text-xl font-semibold text-green-600">₹{price}</p>
            <p className="text-sm text-gray-500">{detailing}</p>

            {addTOCart ? (
              <div className="flex justify-center">
                <button
                  onClick={handleGoToCart}
                  className="w-56  font-semibold py-3 bg-blue-500 text-white bg-gradient-to-r from-[#1D976C] via-[#93F9B9] to-[#1D976C] 
     text-center uppercase px-12 
    transition-all duration-500 ease-in-out 
    bg-[length:200%_auto] hover:bg-[position:right_center] 
    shadow-md shadow-gray-300 rounded-lg"
                >
                  Go to Cart
                </button>
              </div>
            ) : (
              <div className="flex justify-center">
                <button
                  onClick={handleAddCart}
                  className="w-56 font-semibold  py-3 bg-gradient-to-r from-[#FF512F] via-[#F09819] to-[#FF512F] 
    text-white text-center uppercase px-12 
    transition-all duration-500 ease-in-out 
    bg-[length:200%_auto] hover:bg-[position:right_center] 
    shadow-md shadow-gray-300 rounded-lg"
                >
                  Add to Cart
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <ToastContainer position="top-center" reverseOrder={false} />
    </>
  );
}

export default ProductDiscription;
