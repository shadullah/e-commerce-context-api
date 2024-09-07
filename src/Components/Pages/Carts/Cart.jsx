import { useMemo } from "react";
import { useCart } from "../../../context/CartContext/CartContext";
import { IoMdClose } from "react-icons/io";

const Cart = () => {
  const { carts, removeItem, updateItem } = useCart();

  const Subtotal = useMemo(() => {
    return carts?.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [carts]);

  const handlePlus = (id) => {
    const changedItem = carts.find((item) => item.id === id);
    if (changedItem) {
      updateItem(id, { ...changedItem, quantity: changedItem.quantity + 1 });
    }
  };

  const handleMinus = (id) => {
    const changedItem = carts.find((item) => item.id === id);
    if (changedItem && changedItem.quantity > 1) {
      updateItem(id, { ...changedItem, quantity: changedItem.quantity - 1 });
    }
  };

  const total = Subtotal;

  return (
    <div>
      <div className="main flex justify-between mx-12">
        <div className="w-full p-6 ">
          <h1 className="text-2xl font-medium my-4">Overview of your order</h1>
          <div className="">
            {carts.length > 0 ? (
              <>
                {carts.map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-4 items-center gap-6 bg-gray-100 p-3 rounded-md"
                  >
                    <div className="flex justify-center items-center">
                      <img
                        className="w-16 rounded-md mr-2"
                        src={item.image}
                        alt="#"
                      />
                      <h5>{item.title}</h5>
                    </div>
                    <div>
                      {" "}
                      <p className="mt-3 space-x-2">
                        <span
                          onClick={() => handleMinus(item.id)}
                          className="text-sm font-extrabold bg-gray-400 px-2 py-1 rounded-md cursor-pointer"
                        >
                          -
                        </span>
                        <span className="text-xl">{item.quantity}</span>
                        <span
                          onClick={() => handlePlus(item.id)}
                          className="text-sm font-extrabold bg-gray-400 px-2 py-1 rounded-md cursor-pointer"
                        >
                          +
                        </span>
                      </p>
                    </div>

                    <div>price: ${item.price}</div>
                    <div>
                      <button
                        className="bg-gray-400 p-3 rounded-full"
                        onClick={() => removeItem(item.id)}
                      >
                        <IoMdClose />
                      </button>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <>
                <p>Cart is empty now</p>
              </>
            )}
          </div>
        </div>
        <div className="w-1/4 p-6">
          <h1 className="text-2xl font-medium my-4">Order Details</h1>
          <div className="p-3 bg-gray-200 rounded-md space-y-2 text-gray-600">
            <div className="text-sm flex justify-between">
              <p>Subtotal: </p>
              <p>${Subtotal.toFixed(2)}</p>
            </div>
            <div className="text-sm flex justify-between">
              <p className="">Shipping: </p>

              <p>Free</p>
            </div>
            <hr />
            <div className="text-lg font-medium flex justify-between">
              <p className="">Total:</p>

              <p>${total.toFixed(2)}</p>
            </div>
          </div>
          <div>
            <button className="bg-gray-800 w-full text-gray-100 py-2 rounded-md my-3">
              GO TO CHECKOUT &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
