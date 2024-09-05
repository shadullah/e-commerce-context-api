import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="  bg-gray-800">
      <div className="main max-w-[1400px] mx-auto text-white">
        <div className="flex justify-between py-6">
          <div className="w-1/2">
            <h1 className="text-3xl ">
              Furni<span className="text-blue-500">Flex</span>
            </h1>
          </div>
          <div className="w-full flex justify-between">
            <div>
              <h1 className="font-bold text-xl mb-3">About us</h1>
              <ul>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
              </ul>
            </div>
            <div>
              <h1 className="font-bold text-xl mb-3">Explore</h1>
              <ul>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
              </ul>
            </div>
            <div>
              <h1 className="font-bold text-xl mb-3">Community</h1>
              <ul>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex justify-between items-center my-6">
          <div className="flex space-x-2 text-xl">
            <span>
              <FaFacebook />
            </span>
            <span>
              <FaInstagram />
            </span>
            <span>
              <FaTwitter />
            </span>
          </div>
          <div className="space-x-2">
            <span>Contact</span>
            <span>Privacy policy</span>
          </div>
          <div>
            <span>Bangladesh</span>
          </div>
        </div>
        <p className="text-center text-sm pb-6">
          &copy; 2024 copyright reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
