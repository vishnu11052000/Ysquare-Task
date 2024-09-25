import { useEffect } from "react";
import { RiLogoutCircleLine } from "react-icons/ri";
import "../components/app.css";
import { FaHome } from "react-icons/fa";
import { MdOutlineHistory } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import img_1 from "../assets/image.jpg";
import img_2 from "../assets/image2.webp";
import img_3 from "../assets/image3.avif";
import img_4 from "../assets/image4.jpg";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function Main() {
  const navigate = useNavigate();



 //handleLogout
  const handleLogout = () => {
    toast.success("You have Logout Successfully");
    localStorage.removeItem("token");
    navigate("/");
  };

  // useEffect(()=>{
  //     localStorage.removeItem('token')
  // },[])

  return (
    <div className="page">
      <div className="home flex items-center content-center justify-between w-[100%] border-2 border-black p-6">
        <ul className="flex gap-x-4 text-white font-semibold cursor-pointer">
          <div className="flex items-center gap-x-0.5">
            <FaHome />
            <li>Home </li>
          </div>

          <div className="flex items-center gap-x-0.5">
            <MdOutlineHistory />
            <li>History</li>
          </div>

          <div className="flex items-center gap-x-0.5">
            <IoMdContact />
            <li>Contact</li>
          </div>
        </ul>
        <div className="flex items-center gap-x-2">
          <RiLogoutCircleLine
            onClick={handleLogout}
            className="text-2xl text-white cursor-pointer"
          />
          <span className="text-white font-semibold cursor-pointer">
            LOGOUT
          </span>
        </div>
      </div>

      {/* row1 */}
      <div className="flex items-center justify-center mt-[1rem] gap-x-8">
        <div className="boder-black h-[500px] w-[345px] bg-black text-white rounded-xl shadow-xl cursor-pointer">
          <img src={img_1} className="h-[230px] rounded-xl"></img>
          <p className="p-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
            id excepturi, itaque delectus iste laborum mollitia animi pariatur
            harum quae. Sit eius odit cum? Odit, eligendi! Ullam laborum ad
            nobis.
          </p>
          <button className="px-6 py-2 bg-blue-600 rounded-xl ml-[6rem]">
            Read More
          </button>
        </div>

        <div className="boder-black h-[500px] w-[345px]  bg-black text-white rounded-xl shadow-xl cursor-pointer">
          <img src={img_2} className="h-[230px] rounded-xl"></img>
          <p className="p-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
            id excepturi, itaque delectus iste laborum mollitia animi pariatur
            harum quae. Sit eius odit cum? Odit, eligendi! Ullam laborum ad
            nobis.
          </p>
          <button className="px-6 py-2 bg-blue-600 rounded-xl ml-[6rem]">
            Read More
          </button>
        </div>

        <div className="boder-black h-[500px] w-[345px] bg-black text-white rounded-xl shadow-xl cursor-pointer">
          <img src={img_3} className="h-[230px] rounded-xl"></img>
          <p className="p-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
            id excepturi, itaque delectus iste laborum mollitia animi pariatur
            harum quae. Sit eius odit cum? Odit, eligendi! Ullam laborum ad
            nobis.
          </p>
          <button className="px-6 py-2 bg-blue-600 rounded-xl ml-[6rem]">
            Read More
          </button>
        </div>
      </div>

      {/* row2 */}
      <div className="flex items-center justify-center mt-[6rem] gap-x-8">
        <div className="boder-black h-[500px] w-[345px] bg-black text-white rounded-xl shadow-xl cursor-pointer">
          <img src={img_4} className="h-[230px] rounded-xl"></img>
          <p className="p-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
            id excepturi, itaque delectus iste laborum mollitia animi pariatur
            harum quae. Sit eius odit cum? Odit, eligendi! Ullam laborum ad
            nobis.
          </p>
          <button className="px-6 py-2 bg-blue-600 rounded-xl ml-[6rem]">
            Read More
          </button>
        </div>

        <div className="boder-black h-[500px] w-[345px]  bg-black text-white rounded-xl shadow-xl cursor-pointer">
          <img src={img_1} className="h-[230px] rounded-xl"></img>
          <p className="p-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
            id excepturi, itaque delectus iste laborum mollitia animi pariatur
            harum quae. Sit eius odit cum? Odit, eligendi! Ullam laborum ad
            nobis.
          </p>
          <button className="px-6 py-2 bg-blue-600 rounded-xl ml-[6rem]">
            Read More
          </button>
        </div>

        <div className="boder-black h-[500px] w-[345px] bg-black text-white rounded-xl shadow-xl cursor-pointer">
          <img src={img_1} className="h-[230px] rounded-xl"></img>
          <p className="p-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
            id excepturi, itaque delectus iste laborum mollitia animi pariatur
            harum quae. Sit eius odit cum? Odit, eligendi! Ullam laborum ad
            nobis.
          </p>
          <button className="px-6 py-2 bg-blue-600 rounded-xl ml-[6rem]">
            Read More
          </button>
        </div>
      </div>

      {/* row3 */}

      <div className="flex items-center justify-center mt-[6rem] gap-x-8">
        <div className="boder-black h-[500px] w-[345px] bg-black text-white rounded-xl shadow-xl cursor-pointer">
          <img src={img_1} className="h-[230px] rounded-xl"></img>
          <p className="p-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
            id excepturi, itaque delectus iste laborum mollitia animi pariatur
            harum quae. Sit eius odit cum? Odit, eligendi! Ullam laborum ad
            nobis.
          </p>
          <button className="px-6 py-2 bg-blue-600 rounded-xl ml-[6rem]">
            Read More
          </button>
        </div>

        <div className="boder-black h-[500px] w-[345px]  bg-black text-white rounded-xl shadow-xl cursor-pointer">
          <img src={img_1} className="h-[230px] rounded-xl"></img>
          <p className="p-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
            id excepturi, itaque delectus iste laborum mollitia animi pariatur
            harum quae. Sit eius odit cum? Odit, eligendi! Ullam laborum ad
            nobis.
          </p>
          <button className="px-6 py-2 bg-blue-600 rounded-xl ml-[6rem]">
            Read More
          </button>
        </div>

        <div className="boder-black h-[500px] w-[345px] bg-black text-white rounded-xl shadow-xl cursor-pointer">
          <img src={img_1} className="h-[230px] rounded-xl"></img>
          <p className="p-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
            id excepturi, itaque delectus iste laborum mollitia animi pariatur
            harum quae. Sit eius odit cum? Odit, eligendi! Ullam laborum ad
            nobis.
          </p>
          <button className="px-6 py-2 bg-blue-600 rounded-xl ml-[6rem]">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
