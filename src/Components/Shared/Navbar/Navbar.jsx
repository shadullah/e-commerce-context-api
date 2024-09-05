import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between  items-center py-3 px-12 bg-gray-300">
        <div>
          <h1 className="text-3xl ">
            Furni<span className="text-blue-500">Flex</span>
          </h1>
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
            <li className="mx-4 my-6 md:my-0">
              <Link className="text-xl text-sky-600" to="/">
                <FaShoppingCart />
              </Link>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <Link className="text-xl text-gray-600" to="/login">
                <FaUser />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
