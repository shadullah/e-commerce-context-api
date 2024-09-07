import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Pages/Authentication/Login/Login";
import Register from "../Components/Pages/Authentication/Signup/Register";
import Products from "../Components/Pages/Products/Products";
import Cart from "../Components/Pages/Carts/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/carts",
        element: <Cart />,
      },
    ],
  },
]);
