import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../../context/AuthContext/AuthContext";
// import loginImg from "../../assets/man-hands-hold-touch-tablet-pc-with-login-box-travel-concept.jpg";
// import axios from "axios";
// import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email);
    // login(email, pas);

    if (login(email)) {
      navigate("/");
    } else {
      window.alert("invalid credentials. try again!!");
    }
  };

  return (
    <div>
      <div className="w-full h-screen block md:flex">
        <div className="w-full md:w-1/2 h-48 md:h-full">
          <img
            src="https://png.pngtree.com/png-vector/20191003/ourmid/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1786166.jpg"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-sm text-nowrap md:text-xl font-bold ml-6 md:ml-16 text-violet-600 my-6 md:my-12">
            Welcom To FurniFlex
          </h1>

          <h1 className="text-2xl md:text-3xl text-gray-700 font-bold ml-6 md:ml-16 mt-6 md:mt-12">
            LOGIN
          </h1>
          <p className="text-xs md:text-sm text-nowrap text-gray-700 font-bold ml-6 md:ml-16">
            FurniFlex wants you to be Login
          </p>

          <form onSubmit={handleLogin} className="mx-4 md:mx-14 py-6 md:py-16">
            <div>
              <div className="w-full px-3 mb-6">
                <label className="block uppercase tracking-wide text-violet-600 text-xs font-bold mb-2">
                  email
                </label>
                <input
                  className="appearance-none border-b-2 border-violet-500 w-full py-2 px-3 text-gray-700 "
                  name="email"
                  type="text"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {/* <div className="w-full px-3 mb-6">
                <label className="block uppercase tracking-wide text-violet-500 text-xs font-bold mb-2">
                  password
                </label>
                <input
                  className="appearance-none border-b-2 border-violet-500 w-full py-2 px-3 text-gray-700"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => {
                    console.log("password :", e.target.value);
                    setPass(e.target.value);
                  }}
                />
              </div> */}
            </div>
            <div className="text-center mt-6">
              <input
                className="bg-violet-400 w-full py-3 cursor-pointer rounded-lg font-bold"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <p className="ml-16">
            New Here?{" "}
            <Link to="/register" className="underline">
              Signup here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
