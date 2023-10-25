"use client";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BiLogoInstagram, BiLogoFacebook } from "react-icons/bi";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <div className="flex justify-between w-full h-16 px-4 items-center">
        <div className="">
          <h1 className="text-2xl font-bold">Logo</h1>
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-4">
            <a className="flex items-center cursor-pointer">
              <li className="text-lg font-medium">Booking</li>
            </a>
            <a className="flex items-center gap-1 cursor-pointer">
              <li className="text-lg font-medium">Gallery</li>
            </a>
            <a className="flex items-center gap-1 cursor-pointer">
              <li className="text-lg font-medium">About</li>
            </a>
            <a className="flex items-center gap-1 cursor-pointer">
              <li className="text-lg font-medium">Contact</li>
            </a>
          </ul>
        </div>
        <div className="sm:block justify-end">
          {!isOpen ? (
            <AiOutlineMenu
              className="text-2xl block cursor-pointer md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <AiOutlineClose
              className="text-2xl block cursor-pointer md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
          <div className="flex gap-2">
            <a>
              <BiLogoFacebook className="text-4xl hidden md:block" />
            </a>
            <a>
              <BiLogoInstagram className="text-4xl hidden md:block" />
            </a>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className=" grid grid-rows-4 justify-center items-center gap-y-2 py-2 md:hidden">
          <a href="#" className="">
            Booking
          </a>
          <a href="#" className="">
            Gallery
          </a>
          <a href="#" className="">
            About
          </a>
          <a href="#" className="">
            Contact
          </a>
        </div>
      )}
    </div>
  );
};

export default Nav;
