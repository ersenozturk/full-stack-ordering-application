import Logo from "../ui/Logo";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
const Header = () => {
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
          <a
            className="transition ease-in-out delay-200 hover:text-primary"
            href="#"
          >
            <FaSearch />
          </a>
          <a className="btn-primary" href="#">
            Order Online
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
