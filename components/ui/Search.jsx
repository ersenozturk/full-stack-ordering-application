import Image from "next/image";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "../ui/Title";
import { GiCancel } from "react-icons/gi";

const Search = ({ setIsSearchModal }) => {
  return (
    <div className="modalShow">
      <OutsideClickHandler
        onOutsideClick={() => {
          setIsSearchModal(false);
        }}
      >
        <div className="relative z-50  w-[22.5rem] md:w-[37.5rem] bg-white border-2 p-10 rounded-2xl">
            <button className="absolute right-5 top-5 rounded-full" onClick={()=>setIsSearchModal(false)}>
                <GiCancel className=" rounded-full hover:text-red-600" fontSize={25}/>
            </button>
          <Title titleClass="text-[2.5rem]">Search</Title>
          <input type="search" placeholder="Search..." className="border-2 my-5 w-full"/>
          <div>
            <ul className="flex flex-col gap-5">
              <li className="flex-bw p-1 transition-colors delay-75 hover:bg-primary ">
                <div >
                  <Image src="/images/food.png" alt="" width={52} height={52} />
                </div>
                <span className="font-bold">Good Pizza</span>
                <span className="font-bold">$10</span>
              </li>
              <li className="flex-bw p-1 transition-colors delay-75 hover:bg-primary ">
                <div >
                  <Image src="/images/food.png" alt="" width={52} height={52} />
                </div>
                <span className="font-bold">Good Pizza</span>
                <span className="font-bold">$10</span>
              </li>
              <li className="flex-bw p-1 transition-colors delay-75 hover:bg-primary ">
                <div >
                  <Image src="/images/food.png" alt="" width={52} height={52} />
                </div>
                <span className="font-bold">Good Pizza</span>
                <span className="font-bold">$10</span>
              </li>
            </ul>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Search;
