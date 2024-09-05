import { createContext, useContext } from "react";

export const ProductContext = createContext({
  products: [],
});

export const ProductProvider = ProductContext.Provider;

export const useProduct = () => {
  return useContext(ProductContext);
};
