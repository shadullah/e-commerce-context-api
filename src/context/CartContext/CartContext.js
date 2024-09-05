import { createContext, useContext } from "react";

export const CartContext = createContext({
  addToCart: () => {},
  removeItem: () => {},
});

export const CartProvider = CartContext.Provider;

export const useCart = () => {
  return useContext(CartContext);
};
