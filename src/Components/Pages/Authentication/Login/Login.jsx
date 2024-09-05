import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../../context/AuthContext/AuthContext";
// import loginImg from "../../assets/man-hands-hold-touch-tablet-pc-with-login-box-travel-concept.jpg";
// import axios from "axios";
// import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  // const location = useLocation();
  // const urls = [
  //   "https://work-notes-server.onrender.com/todo/login/",
  //   "http://localhost:8000/todo/login/",
  // ];

  // const from = location.state?.form?.pathname || "/";

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const username = form.username.value;
  //   const password = form.password.value;
  //   // console.log(username, password);
  //   try {
  //     const requests = urls.map((url) =>
  //       axios.post(url, {
  //         username: username,
  //         password: password,
  //       })
  //     );
  //     const response = await Promise.any(requests);

  //     // await axios.post("http://localhost:8000/todo/login/", {
  //     //   username: username,
  //     //   password: password,
  //     // });
  //     if (response.data?.token) {
  //       localStorage.setItem("token", response.data.token);
  //       localStorage.setItem("userId", response.data.user_id);

  //       navigate(from, { replace: true });
  //       toast.success("Logged In successfully", { duration: 6000 });
  //       console.log("Login successful", response.data);
  //     } else {
  //       console.error("No token returned from API");
  //     }
  //   } catch (error) {
  //     toast.error("Login information is Not correct", { duration: 6000 });

  //     console.error(
  //       "Login failed",
  //       error.response ? error.response.data : error
  //     );
  //   }
  // };

  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
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
              <div className="w-full px-3 mb-6">
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
              </div>
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
