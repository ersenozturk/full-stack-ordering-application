import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

const MenuItem = () => {
  return (
    <div className="bg-secondary text-white rounded-3xl ">
      <Link href="/product">
        <div className="flex justify-center bg-[#F1F2F3] p-6 rounded-bl-[45px] rounded-tl-2xl rounded-tr-2xl cursor-pointer">
          <div className="relative w-40 h-40 flex ">
            <Image
              src="/images/food.png"
              alt=""
              fill
              className="hover:scale-110 transition-transform delay-100"
            />
          </div>
        </div>
      </Link>

      <div className=" p-6">
        <h2 className="text-xl font-semibold">Delicious Pizza</h2>
        <p className="text-[15px]">
          Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit,
          magnam voluptatem repellendus sed eaque
        </p>
        <div className="flex justify-between items-center">
          <span>$20</span>
          <span className="bg-primary p-3 rounded-full">
            <FaShoppingCart />
          </span>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
