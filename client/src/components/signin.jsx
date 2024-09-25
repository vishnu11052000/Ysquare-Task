import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { toast } from "react-hot-toast";
import validateForm from "./validate";

function Register() {
  const navigate = useNavigate();
  const [formvalues, setFormvalues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormvalues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  
  
  
  //handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log('formvalues',formvalues);
    const errorForms = validateForm(formvalues);
    setErrors(errorForms);

    if (Object.keys(errorForms).length > 0) {
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:4000/register",
        formvalues
      );
      if (res.data.message === "User Registered Successfully") {
        toast.success("Sign-in Successfully");
        setFormvalues({ name: "", email: "", password: "" });
        navigate("/");
      }
    } catch (error) {
      console.error("Error Message", error.message);
    }
  };


  
  return (
    <div>
      <div className="flex justify-center items-center m-8">
        <form
          action=""
          onSubmit={handleSubmit}
          className="bg-white mt-[1rem] shadow-2xl p-[5rem] rounded-2xl border-gray-300 border-2"
        >
          {/* {message && <p className="text-red-500">{message}</p>} */}
          <h1 className="text-2xl font-bold underline text-center">
            Sign-IN Form
          </h1>

          {/* <p className="text-red-600">{error}</p> */}

          <div className="mt-[1rem]">
            <label htmlFor="" className="font-semibold">
              Name:
            </label>
            <br />
            <div className="flex items-center">
              <FaUserCircle className="text-xl absolute text-blue-300 ml-2 " />
              <input
                type="text"
                name="name"
                value={formvalues.name}
                placeholder="Enter your name"
                onChange={handleChange}
                className="border-black border-2 py-2 px-8 w-[20rem] rounded "
              />
            </div>
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>

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
                value={formvalues.email}
                placeholder="Enter your email"
                onChange={handleChange}
                className="border-black border-2 py-2 px-8 w-[20rem] rounded"
              />
            </div>
            {errors.email && <p className="text-red-500">{errors.email}</p>}
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
                value={formvalues.password}
                placeholder="Enter your password"
                onChange={handleChange}
                className="border-black border-2 py-2 px-8 w-[20rem] rounded"
              />
            </div>
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}
          </div>

          <span className="cursor-pointer  mt-[1rem] text-blue-80 text-blue-700">
            <Link to="/">Already have an account ?</Link>
          </span>
          <br />

          <div className="flex items-center justify-around mt-4">
            <FaFacebook className="text-blue-700 text-2xl cursor-pointer" />
            <FaLinkedin className="text-blue-900 text-2xl cursor-pointer" />
            <FaWhatsappSquare className="text-green-600 text-2xl cursor-pointer" />
          </div>
          <button className="mt-[1rem] w-[20rem] py-2 bg-blue-600 font-semibold text-white">
            SIGN-IN
          </button>
          <br />
          <Link to="/">
            <button className="mt-[1rem] w-[20rem] py-2 bg-gray-400 font-semibold text-black">
              LOGIN
            </button>
          </Link>
          <br />
        </form>
      </div>
    </div>
  );
}

export default Register;
