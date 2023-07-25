import React, { useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

function Nav() {
  const menu = useRef();
  const openMenu = () => {
    const navMenu = menu.current;
    navMenu.classList.toggle("hidden");
  };
  return (
    <nav>
      <div className="flex justify-between mb-6 md:mb-0 items-center">
        <h1 className="font-Akronim text-[24px]">ZeekCodes</h1>
        <button
          onClick={openMenu}
          className="md:hidden flex justify-center items-center text-[24px] bg-[#51516D] text-white h-[40px] w-[40px]"
        >
          <RxHamburgerMenu />
        </button>
      </div>

      <ul
        ref={menu}
        className="hidden md:flex flex-col md:flex-row gap-4 font-Abel"
      >
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
