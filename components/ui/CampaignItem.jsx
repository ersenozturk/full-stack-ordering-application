import Image from "next/image";
import React from "react";
import Title from "./Title";
import PrimayBtn from "./PrimayBtn";
import { FaShoppingCart } from "react-icons/fa";

const CampaignItem = ({ title, discount }) => {
  return (
    <div className="flex flex-1 items-center bg-secondary py-5 px-4 gap-5 rounded-md">
      <div className="relative w-36 h-36  sm:w-40 sm:h-40 ">
        <Image
          src="/images/campaignItem1.jpg"
          alt="campaignItem1.jpg"
          fill
          className="border-[5px] border-primary rounded-full hover:scale-105 transition-all delay-100	"
        />
      </div>
      <div className="flex flex-col items-start text-white">
        <Title titleClass="text-2xl">{title}</Title>
        <p>
          <span className="text-[40px] font-dancing"> {discount}%</span>{" "}
          <span className="text-lg font-dancing">off</span>
        </p>
        <PrimayBtn addClass="flex gap-2 items-center">
          <span>Order Now</span> <FaShoppingCart size={30} />
        </PrimayBtn>
      </div>
    </div>
  );
};

export default CampaignItem;
