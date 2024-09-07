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
  const [carts, setCarts] = useState([]);
  const [currentUser, setCurrent] = useState(null);

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
      setCurrent(user);
      localStorage.setItem("currentUser", JSON.stringify(user));
      const userCart =
        JSON.parse(localStorage.getItem(`cart ${user.email}`)) || [];
      setCarts(userCart);

      return true;
    }
    return false;
  };

  const addToCart = (product) => {
    const existsProduct = carts.find((item) => item.id === product.id);

    if (existsProduct) {
      setCarts(
        carts.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCarts((prev) => [...prev, { ...product, quantity: 1 }]);
    }
  };

  const removeItem = (id) => {
    setCarts((prev) => prev.filter((prevCart) => prevCart.id !== id));
  };

  const updateItem = (id, item) => {
    setCarts((prev) =>
      prev.map((prevItem) => (prevItem.id === id ? item : prevItem))
    );
  };

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users && users.length > 0) {
      setUsers(users);
    }
  }, []);

  useEffect(() => {
    const carts = JSON.parse(localStorage.getItem("carts")) || [];
    if (carts && carts.length > 0) {
      setCarts(carts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users, carts]);

  const saveCartCurrent = () => {
    if (currentUser) {
      localStorage.setItem(`cart_ ${currentUser.email}`, JSON.stringify(carts));
    }
  };

  useEffect(() => {
    saveCartCurrent();
  }, [carts]);

  return (
    <>
      <AuthProvider value={{ users, register, login }}>
        <ProductProvider value={{ products }}>
          <CartProvider value={{ carts, addToCart, removeItem, updateItem }}>
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
