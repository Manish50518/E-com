import { useLoaderData } from "react-router-dom";
import { getProducts } from "../../services/apiProducts";
import ProductItem from "./ProductItem";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

function Product() {
  const products = useLoaderData();
  const [updatedProducts, setUpdatedProduct] = useState(products);

  const filterProduct = (cat) => {
    setUpdatedProduct(products);
    const updatedProduct = products.filter((item) => item.category === cat);
    setUpdatedProduct(updatedProduct);
  };

  return (
    <div className="container mx-auto p-4">
      <header className="bg-fuchsia-600 text-white text-3xl font-semibold py-4 text-center rounded-md mb-6">
        New Arrivals 😍
      </header>
      <hr className="border-t-2 border-gray-300 mb-6" />
      <div className="flex justify-center gap-6 mb-6">
        <button
          onClick={() => setUpdatedProduct(products)}
          className="px-4 py-2 bg-gray-200 text-sm text-black rounded-md hover:bg-gray-300 transition duration-300"
        >
          All
        </button>
        <button
          onClick={() => filterProduct("Men's")}
          className="px-4 py-2 bg-gray-200 text-sm text-black rounded-md hover:bg-gray-300 transition duration-300"
        >
          Men's
        </button>
        <button
          onClick={() => filterProduct("Women's")}
          className="px-4 py-2 bg-gray-200 text-sm text-black rounded-md hover:bg-gray-300 transition duration-300"
        >
          Women's
        </button>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {updatedProducts.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </ul>
      <ToastContainer position="top-center" reverseOrder={false} />
    </div>
  );
}

export async function loader() {
  const product = await getProducts();
  return product;
}

export default Product;
