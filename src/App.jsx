import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./ui/Home";
import About from "./ui/About";
import Contact from "./ui/Contact";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import Cart from "./features/cart/Cart";
import Product, { loader as productLoader } from "./features/products/Product";
import { loader as cartLoader } from "./features/cart/Cart";
import ProductDiscription from "./features/products/ProductDiscription";
import GoToCheckout from "./features/order/GoToCheckout";
import Login from "./ui/Login";
import Register from "./ui/Register";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
 
    children: [
      {
        path: "/",
        element: <Home />,
        loader: productLoader,
        errorElement: <Error />,
      },
      {
        path: "/products",
        element: <Product />,
        loader: productLoader,
        errorElement: <Error />,
      },
      {
        path: "/productDiscription",
        element: <ProductDiscription />,
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
        loader: cartLoader,
      },
      {
        path: "/checkout",
        element: <GoToCheckout />,
        loader: cartLoader,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
