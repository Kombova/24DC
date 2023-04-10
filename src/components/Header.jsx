import React, { useState } from "react";
import logo from "../assets/logo.svg";
import arrow from "../assets/arrow.svg";

const Header = () => {
  const [isActiveBurger, setIsActiveBurger] = useState(false);
  const onClickBurger = () => {
    let menu = document.querySelector("#mobile-menu");
    setIsActiveBurger((isActiveBurger) => !isActiveBurger);
    menu.classList.toggle("hidden");
  };
  return (
    <header className="bg-dark-blue py-8">
      <div className="main_container flex justify-between items-center">
        <div className="flex w-1/5">
          <img src={logo} width={199} height={69} alt="Logo" />
        </div>
        <div className="flex-1 items-center justify-center hidden md:flex">
          <nav>
            <ul className=" flex space-x-8">
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Portfolio</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className=" justify-center  hidden md:flex w-1/5">
          <button className=" flex space-x-2 justify-center items-center py-2 px-8 bg-light-blue  font-medium leading-5 rounded text-white">
            Get started
            <img src={arrow} alt="arrow" />
          </button>
        </div>
        <button onClick={onClickBurger} className=" md:hidden">
          {isActiveBurger ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#A31621"
              className="w-8 h-8"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
      </div>
      <nav id="mobile-menu" className="hidden space-y-8 mt-4">
        <ul className=" flex flex-col space-y-8">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Portfolio</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Careers</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
        </ul>
        <button className=" flex space-x-2 justify-center items-center py-2 px-8 bg-light-blue  font-medium leading-5 rounded text-white">
          Get started
          <img src={arrow} alt="arrow" />
        </button>
      </nav>
    </header>
  );
};

export default Header;
