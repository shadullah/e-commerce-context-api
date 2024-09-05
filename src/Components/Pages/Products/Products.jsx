// import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

const Products = () => {
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
  return (
    <div>
      <div className="flex justify-between">
        <div className="w-1/3">
          <h1>Categories</h1>
          <p>Shirt</p>
          <p>Sweater</p>
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
