import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <div className="p-8 bg-slate-900  flex justify-between items-center">
        {/* Brand */}
        <div>
          <p className=" text-3xl text-white font-bold ">Shoppie</p>
        </div>

        {/* Cart */}

        <div className="flex">
          <div className="bg-white p-2 rounded-lg">
            <AiOutlineShoppingCart className="text-2xl" />
          </div>
          <div className="bg-red-600 rounded-lg flex justify-center items-center px-2 relative bottom-6 right-2 h-8 ">
            <p className="text-white text-sm">10</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
