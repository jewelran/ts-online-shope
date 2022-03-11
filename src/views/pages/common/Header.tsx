import React from "react";
import logo from "../../../asset/images/Logo.png"
const Header = () => {
  return <div className="container mx-auto bg-slate-400">
  <div className="flex items-center justify-between">
  <div className="">
  <img className="" src={logo} alt="" />
  </div>
  <div className="flex mr-3">
    <input type="text" className="p-3  w-full" id="" />
    <button className="bg-slate-200 p-3">search</button>
  </div>
  </div>
  </div>;
};

export default Header;
