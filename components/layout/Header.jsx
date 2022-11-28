import { useState } from "react";
import { useRouter } from "next/router";
import Logo from "../ui/Logo";
import Search from "../ui/Search";
import PrimayBtn from "../ui/PrimayBtn";
import {
  FaUserAlt,
  FaShoppingCart,
  FaSearch,
  FaHamburger,
} from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);
  const handleSearch = () => {
    setIsSearchModal(true);
  };
  const router = useRouter();
  console.log(router.route);
  return (
    <header
      className={`h-[5.5rem] z-50 relative ${
        router.asPath === "/" ? "bg-transparent" : "bg-secondary"
      }`}
    >
      <div className="container flex-bw h-full mx-auto text-white">
        <div className="transition delay-300 cursor-pointer hover:text-primary">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <nav className="absolute top-0 left-0 grid place-content-center h-screen w-full text-black sm:static sm:text-white sm:w-auto">
          <ul className="flex flex-col sm:flex-row gap-x-3">
            <li className="uppercase px-[.31rem] py-[1.25rem] text-base cursor-pointer transition ease-in-out delay-200 hover:text-primary ">
              <Link href="/"> Home </Link>
            </li>
            <li className="uppercase px-[.31rem] py-[1.25rem] text-base cursor-pointer transition ease-in-out delay-200 hover:text-primary">
              <Link href="/menu"> Menu</Link>
            </li>
            <li className="uppercase px-[.31rem] py-[1.25rem] text-base cursor-pointer transition ease-in-out delay-200 hover:text-primary">
              <Link href="/about"> About</Link>
            </li>
            <li className="uppercase px-[.31rem] py-[1.25rem] text-base cursor-pointer transition ease-in-out delay-200 hover:text-primary">
              <Link href="/reservation"> Book Table</Link>
            </li>
          </ul>
        </nav>

        <div className="flex-center  gap-x-4">
          <Link
            className="transition ease-in-out delay-100 hover:text-primary"
            href="/login"
          >
            <FaUserAlt />
          </Link>
          <a
            className="transition ease-in-out delay-100 hover:text-primary"
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
          <PrimayBtn addClass="hidden md:inline-flex">Order Online</PrimayBtn>
          <button className="md:hidden transition ease-in-out delay-100 hover:text-primary">
            <FaHamburger />
          </button>
        </div>
      </div>
      {isSearchModal && <Search setIsSearchModal={setIsSearchModal} />}
    </header>
  );
};

export default Header;
