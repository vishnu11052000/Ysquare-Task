import { useState } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { toast } from "react-hot-toast";

function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  //validation form
  const validateForm = () => {
    const errors = {};
    if (data.email === "") {
      errors.email = "Email field is required.";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email field  is invalid.";
    }

    if (data.password === "") {
      errors.password = "Password field is required.";
    } else if (data.password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
    }

    return errors;
  };


  //handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setValidationErrors({});

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    try {
      const res = await axios.post("http://localhost:4000/login", data);

      if (res.data.success) {
        localStorage.setItem("token", res.data.token); // Store token in localstorage
        // console.log("token",res.data.token);
        navigate("/dashboard"); // Redirect to dashboard page
        toast.success("Login Successfully");
      } else {
        setError(res.data.message);
      }
    } catch (error) {
      setError("Login failed. Please try again.");
      console.error("Login error:", error);
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center m-8">
        <form
          action=""
          onSubmit={handleSubmit}
          className="bg-white mt-[1rem] shadow-2xl p-[5rem] rounded border-gray-300 border-2"
        >
          {/* {message && <p className="text-red-500">{message}</p>} */}
          <h1 className="text-2xl font-bold underline text-center">
            LOGIN FORM
          </h1>

          {/* {error && <p className="text-red-500">{error}</p>} */}

          <div className="mt-[1rem]">
            <label htmlFor="" className="font-semibold">
              E-mail
            </label>
            <br />
            <div className="flex items-center">
              <IoMdMail className="text-xl absolute text-blue-300 ml-2" />
              <input
                type="email"
                name="email"
                value={data.email}
                placeholder="Enter your email"
                onChange={handleChange}
                className="border-black border-2 py-2 px-8 w-[20rem] rounded"
              />
            </div>
            {validationErrors.email && (
              <p className="text-red-500">{validationErrors.email}</p>
            )}
          </div>

          <div className="mt-[1rem]">
            <label htmlFor="" className="font-semibold">
              Password:
            </label>
            <br />
            <div className="flex items-center">
              <RiLockPasswordFill className="text-xl absolute text-blue-300 ml-2" />
              <input
                type="password"
                name="password"
                value={data.password}
                placeholder="Enter your password"
                onChange={handleChange}
                className="border-black border-2 py-2 px-8 w-[20rem] rounded"
              />
            </div>
            {validationErrors.password && (
              <p className="text-red-500">{validationErrors.password}</p>
            )}
          </div>

          <span className="cursor-pointer  mt-[1rem] text-blue-80 text-blue-700">
            <Link>
              Forget Password?<span className="underline">Sign-in</span>
            </Link>
          </span>
          <br />

          <div className="flex items-center justify-around mt-4">
            <FaFacebook className="text-blue-700 text-2xl cursor-pointer" />
            <FaLinkedin className="text-blue-900 text-2xl cursor-pointer" />
            <FaWhatsappSquare className="text-green-600 text-2xl cursor-pointer" />
          </div>
          <button className="mt-[1rem] w-[20rem] py-2 bg-blue-600 font-semibold text-white">
            LOGIN
          </button>
          <br />
          <Link to="/signin">
            <button className="mt-[1rem] w-[20rem] py-2 bg-green-600 font-semibold text-black">
              SIGN-IN
            </button>
          </Link>
          <br />
        </form>
      </div>
    </div>
  );
}

export default Login;
