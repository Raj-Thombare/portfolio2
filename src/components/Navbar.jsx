import React, {useState} from "react";
import {FaBars, FaTimes} from "react-icons/fa"
import Logo from "../assets/logo1.png";

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleClick = () => {
        setNav(!nav)
    }

  return (
    <div className="fixed w-full h-[80px] bg-[#0a192f] flex justify-between items-center px-4 text-gray-300">
      <div>
        <img src={Logo} alt="logo img" style={{ width: "60px" }} />
      </div>

      <ul className="hidden md:flex">
        <li className="px-4 py-4">Home</li>
        <li className="px-4 py-4">About</li>
        <li className="px-4 py-4">Skills</li>
        <li className="px-4 py-4">Work</li>
        <li className="px-4 py-4">Contact</li>
      </ul>

      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars/> : <FaTimes/>}
      </div>

      <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center text-gray-300"}>
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Work</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

    </div>
  );
};

export default Navbar;
