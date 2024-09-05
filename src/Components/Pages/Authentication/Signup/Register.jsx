import { Link } from "react-router-dom";
// import loginImg from "../../assets/man-hands-hold-touch-tablet-pc-with-login-box-travel-concept.jpg";
// import axios from "axios";
// import toast from "react-hot-toast";

const Register = () => {
  // const navigate = useNavigate();
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
  return (
    <div>
      <div className="w-full h-screen block md:flex">
        <div className="w-full md:w-1/2">
          <h1 className="text-sm text-nowrap md:text-xl font-bold ml-6 md:ml-16 text-lime-600 my-6 md:my-8">
            Welcom To FurniFlex
          </h1>

          <h1 className="text-2xl md:text-3xl text-gray-700 font-bold ml-6 md:ml-16 mt-3 md:mt-6 mb-2">
            Register
          </h1>
          <p className="text-xs md:text-sm text-nowrap text-gray-700 font-bold ml-6 md:ml-16">
            FurniFlex wants you to be Register
          </p>

          <form
            // onSubmit={handleLogin}
            className="mx-4 md:mx-14 py-6 md:py-16"
          >
            <div>
              <div className="w-full px-3 mb-6">
                <label className="block uppercase tracking-wide text-lime-600 text-xs font-bold mb-2">
                  Full name
                </label>
                <input
                  className="appearance-none border-b-2 border-lime-500 w-full py-2 px-3 text-gray-700 "
                  name="fullname"
                  type="text"
                  required
                />
              </div>
              <div className="w-full px-3 mb-6">
                <label className="block uppercase tracking-wide text-lime-600 text-xs font-bold mb-2">
                  email
                </label>
                <input
                  className="appearance-none border-b-2 border-lime-500 w-full py-2 px-3 text-gray-700 "
                  name="email"
                  type="text"
                  required
                />
              </div>
              <div className="w-full px-3 mb-6">
                <label className="block uppercase tracking-wide text-lime-500 text-xs font-bold mb-2">
                  password
                </label>
                <input
                  className="appearance-none border-b-2 border-lime-500 w-full py-2 px-3 text-gray-700"
                  name="password"
                  type="password"
                  required
                />
              </div>
            </div>
            <div className="text-center mt-6">
              <input
                className="bg-lime-400 w-full py-3 cursor-pointer rounded-lg font-bold"
                type="submit"
                value="Register"
              />
            </div>
          </form>
          <p className="ml-16">
            Already have an account?{" "}
            <Link to="/login" className="underline">
              Login here
            </Link>
          </p>
        </div>
        <div className="w-full md:w-1/2 h-48 md:h-full">
          <img
            src="https://media.istockphoto.com/id/1468757785/photo/human-resources-and-management-concept-employee-must-complete-the-online-survey-form-marked.webp?s=2048x2048&w=is&k=20&c=l-B0G_5_WWF54Z-CQ5V36x994jFibMTFK5qSfFA1a1k="
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
