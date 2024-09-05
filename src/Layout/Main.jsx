import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";
import { AuthProvider } from "../context/AuthContext/AuthContext";
import { useEffect, useState } from "react";
import { ProductProvider } from "../context/ProductContext/ProductContext";
import axios from "axios";
import { CartProvider } from "../context/CartContext/CartContext";

const Main = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("register");

  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("products.json");
        // const result = await res.json();
        setProducts(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  const register = (user) => {
    setUsers((prev) => [...prev, { id: Date.now(), ...user }]);
  };

  const login = (email) => {
    const user = users.find((user) => user.email === email);
    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      return true;
    }
    return false;
  };

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users && users.length > 0) {
      setUsers(users);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <>
      <AuthProvider value={{ users, register, login }}>
        <ProductProvider value={{ products }}>
          <CartProvider value={{ addToCart, removeItem }}>
            <div className="">
              {noHeaderFooter || <Navbar />}
              <Outlet></Outlet>
              {noHeaderFooter || <Footer />}
            </div>
          </CartProvider>
        </ProductProvider>
      </AuthProvider>
    </>
  );
};

export default Main;
