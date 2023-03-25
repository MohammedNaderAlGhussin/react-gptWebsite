import React, { Fragment, useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Logo from "./../assets/logo.svg";

const Menu = ({ link }) => {
  return (
    <Fragment>
      <li className={link}>
        <a href="#home">Home</a>
      </li>
      <li className={link}>
        <a href="#wig">what is GPT3?</a>
      </li>
      <li className={link}>
        <a href="#openAi">Open AI</a>
      </li>
      <li className={link}>
        <a href="#caseStudies">Case Studies</a>
      </li>
      <li className={link}>
        <a href="#library">Library</a>
      </li>
    </Fragment>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navbar">
      <div className="mr-4">
        <img className="w-[62.56px] h-[16px]" src={Logo} alt="logo" />
      </div>
      <nav className="text-white hidden lg:block mr-5">
        <ul className="flex flex-row items-center text-[18px] justify-start gap-8 lg:gap-10 capitalize">
          <Menu />
        </ul>
      </nav>
      <div className=" flex-row items-center justify-center gap-8 hidden lg:flex">
        <button className="text-white" type="button">
          Sign In
        </button>
        <button
          className="bg-[#ff4820] rounded-[7px] text-white px-4 py-2"
          type="button"
        >
          Sign Up
        </button>
      </div>
      <div className="menu cursor-pointer relative block lg:hidden">
        {toggleMenu ? (
          <RiCloseLine
            size={35}
            color="#fff"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            size={35}
            color="#fff"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="menu-container scale-up-center">
            <div className="absolute z-10 right-0 top-[12px] min-w-[210px] rounded-[7px]">
              <ul className="text-white flex flex-col items-end  justify-end text-end bg-color-footer ">
                <Menu link={"menu-links"} />
                <div className="flex flex-col items-end gap-4 w-full">
                  <button
                    className="text-white menu-links text-end "
                    type="button"
                  >
                    Sign In
                  </button>
                  <button
                    className="bg-[#ff4820]  rounded-[7px] text-white px-4 py-2 mb-4 mr-2"
                    type="button"
                  >
                    Sign Up
                  </button>
                </div>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
