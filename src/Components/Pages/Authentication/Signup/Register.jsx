import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../../context/AuthContext/AuthContext";

const Register = () => {
  const navigate = useNavigate();
  const [full, setFull] = useState("");
  const [email, setEmail] = useState("");
  const { register } = useAuth();

  const handleReg = (e) => {
    e.preventDefault();

    if (!email) return;

    register({ full, email });
    setFull("");
    setEmail("");
    navigate("/login");
  };

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

          <form onSubmit={handleReg} className="mx-4 md:mx-14 py-6 md:py-16">
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
                  value={full}
                  onChange={(e) => setFull(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {/* <div className="w-full px-3 mb-6">
                <label className="block uppercase tracking-wide text-lime-500 text-xs font-bold mb-2">
                  password
                </label>
                <input
                  className="appearance-none border-b-2 border-lime-500 w-full py-2 px-3 text-gray-700"
                  name="password"
                  type="password"
                  required
                  value={pas}
                  onChange={(e) => setPass(e.target.value)}
                />
              </div> */}
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
