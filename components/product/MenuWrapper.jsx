import Image from "next/image";
import React from "react";
import PrimayBtn from "../ui/PrimayBtn";
import Title from "../ui/Title";
import MenuItem from "./MenuItem";

const MenuWrapper = () => {
  return (
    <div className="container mx-auto pb-24">
      <Title titleClass="text-[2.5rem]">Our Menu</Title>
      {/* categories */}
      <div className="mt-10 mb-10">
        <ul className="flex justify-center items-center mx-auto">
          <li className="menu-category-li bg-secondary text-white">
            <button> All</button>
          </li>
          <li className="menu-category-li">
            <button> Burger</button>
          </li>
          <li className="menu-category-li">
            <button> Pizza</button>
          </li>
          <li className="menu-category-li">
            <button> Pasta</button>
          </li>
          <li className="menu-category-li">
            <button> Fries</button>
          </li>
        </ul>
      </div>
      {/* menu items */}
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
      <div className="flex justify-center mt-11">
        <PrimayBtn>View More</PrimayBtn>
      </div>
    </div>
  );
};

export default MenuWrapper;
