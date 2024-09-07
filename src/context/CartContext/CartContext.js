import { createContext, useContext } from "react";

export const CartContext = createContext({
  carts: [
    {
      id: 1,
      name: "some product",
      image: "",
      quantity: 1,
      price: 50,
    },
  ],
  addToCart: () => {},
  removeItem: () => {},
  updateItem: () => {},
});

export const CartProvider = CartContext.Provider;

export const useCart = () => {
  return useContext(CartContext);
};
