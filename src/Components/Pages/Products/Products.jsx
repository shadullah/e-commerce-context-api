// import axios from "axios";
import ProductCard from "./ProductCard";
import { useProduct } from "../../../context/ProductContext/ProductContext";

const Products = () => {
  const { products } = useProduct();
  return (
    <div>
      <div className="flex justify-between">
        <div className="w-1/3">
          <h1 className="text-lg font-bold">Categories</h1>
          <p>Shirt</p>
          <p>Sweater</p>
          {localStorage.getItem("currentUser") ? (
            <></>
          ) : (
            <>
              <p className="text-red-600">
                N.B: Login to active cart functionality
              </p>
            </>
          )}
        </div>
        <div className="w-full">
          <div className="grid grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
