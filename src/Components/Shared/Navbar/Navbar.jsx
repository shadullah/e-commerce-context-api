import { FaShoppingCart, FaUser } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../../context/CartContext/CartContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { carts } = useCart();

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <div className="bg-gray-300">
      <div className="flex justify-between  items-center py-3  max-w-[1400px] mx-auto">
        <div>
          <Link to="/">
            <h1 className="text-3xl ">
              Furni<span className="text-blue-500">Flex</span>
            </h1>
          </Link>
        </div>
        <div>
          <ul className="flex">
            <li className="mx-4 my-6 md:my-0">
              <Link className="text-md" to="/">
                Home
              </Link>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <Link className="text-md" to="/">
                Products
              </Link>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <Link className="text-md" to="/">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex">
            {localStorage.getItem("currentUser") ? (
              <>
                <li className="mx-4 my-6 md:my-0">
                  <div className="relative">
                    <Link
                      className="text-xl right-3 absolute text-sky-600"
                      to="/carts"
                    >
                      <FaShoppingCart />{" "}
                    </Link>
                    <p className="text-[11px] bg-gray-400 text-gray-100 p-0.5 rounded-full">
                      {carts.length}
                    </p>
                  </div>
                </li>
                <li className="mx-4 my-6 md:my-0">
                  <button
                    onClick={handleLogout}
                    className="text-xl text-sky-600"
                  >
                    <IoIosLogOut />
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="mx-4 my-6 md:my-0">
                  <Link className="text-xl text-gray-600" to="/login">
                    <FaUser />
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
