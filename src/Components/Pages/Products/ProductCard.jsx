const ProductCard = ({ product }) => {
  const { title, price } = product;
  return (
    <div>
      <div className="main">
        {/* <div className="card border-gray-200 border-2 mx-auto p-6 rounded-2xl  flex flex-col justify-between h-[450px]">
          <img className="h-60 mx-auto" src={product?.image} alt="" />{" "}
          <div className="flex-1 flex flex-col justify-between">
            <h1 className="font-bold text-xl line-clamp-2">{title}</h1>
            <p className="font-bold mt-2 text-xl">${price}</p>
            <button className="bg-gray-600 w-full py-2 rounded-md mt-3">
              Add to Cart
            </button>
          </div>
        </div> */}

        <div className="card border-gray-200 border-2 mx-auto p-6 rounded-2xl grid grid-rows-[auto, 1fr, auto] h-[450px]">
          <img className="h-60 mx-auto" src={product?.image} alt="" />
          <div>
            <h1 className="font-bold text-xl line-clamp-2">{title}</h1>
            <p className="font-bold mt-2 text-xl">${price}</p>
          </div>
          <button className="bg-gray-600 w-full py-2 rounded-md">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
