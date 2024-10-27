import { useLoaderData } from "react-router-dom";
import { getProducts } from "../../services/apiProducts";
import ProductItem from "./ProductItem";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

function Product() {
  const products = useLoaderData();
  // console.log(products);
  const [updatedProducts, setUpdatedProduct] = useState(products);
  // console.log(updatedProducts);

  const filterProduct = (cat) => {
    setUpdatedProduct(products);
    const updatedProduct = products.filter((item) => item.category === cat);
    // console.log(updatedProduct);
    setUpdatedProduct(updatedProduct);
  };
  return (
    <div className="product_div">
      <header className="page_header">New Arrivals 😍</header>
      <hr className="page_hr" />
      <button
        onClick={() => setUpdatedProduct(products)}
        className="category_product"
      >
        All
      </button>
      <button
        onClick={() => filterProduct("Men's")}
        className="category_product"
      >
        Men's
      </button>
      <button
        onClick={() => filterProduct("Women's")}
        className="category_product"
      >
        Women's
      </button>
      <ul className="product_list_ul">
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
