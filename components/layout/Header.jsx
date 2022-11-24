import { useState } from "react";
import Logo from "../ui/Logo";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";

import Search from "../ui/Search";

const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);
  const handleSearch = () => {
    setIsSearchModal(true);
  };
  return (
    <header className="h-[5.5rem] bg-secondary ">
      <div className="container flex-bw h-full mx-auto text-white">
        <div>
          <Logo />
        </div>
        <nav>
          <ul className="flex gap-x-3">
            <li className="uppercase px-[.31rem] py-[1.25rem] text-base cursor-pointer transition ease-in-out delay-200 hover:text-primary ">
              <a href="#"> Home </a>
            </li>
            <li className="uppercase px-[.31rem] py-[1.25rem] text-base cursor-pointer transition ease-in-out delay-200 hover:text-primary">
              <a href="#"> Menu</a>
            </li>
            <li className="uppercase px-[.31rem] py-[1.25rem] text-base cursor-pointer transition ease-in-out delay-200 hover:text-primary">
              <a href="#"> About</a>
            </li>
            <li className="uppercase px-[.31rem] py-[1.25rem] text-base cursor-pointer transition ease-in-out delay-200 hover:text-primary">
              <a href="#"> Book Table</a>
            </li>
          </ul>
        </nav>
        <div className="flex-center  gap-x-4">
          <a
            className="transition ease-in-out delay-200 hover:text-primary"
            href="#"
          >
            <FaUserAlt />
          </a>
          <a
            className="transition ease-in-out delay-200 hover:text-primary"
            href="#"
          >
            <FaShoppingCart />
          </a>
          <button
            onClick={handleSearch}
            className="transition ease-in-out delay-200 hover:text-primary"
          >
            <FaSearch />
          </button>
          <a className="btn-primary" href="#">
            Order Online
          </a>
        </div>
      </div>
      {isSearchModal && <Search setIsSearchModal={setIsSearchModal}/>}
    </header>
  );
};

export default Header;
