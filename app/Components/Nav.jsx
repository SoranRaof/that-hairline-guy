"use client";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsInstagram, BsChevronDown } from "react-icons/bs";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="outline outline-red-500">
      <div className="flex justify-between w-full h-16 px-4 items-center scroll outline">
        <div className="">
          <h1 className="text-2xl font-bold">Logo</h1>
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-4">
            <a className="flex items-center gap-1 cursor-pointer group">
              <li className="text-lg font-medium">Booking</li>
              <BsChevronDown className="text-sm hidden group-hover:inline-block" />
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
        <div className="md:block justify-end">
          <AiOutlineMenu
            className="text-2xl block md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          />
          <BsInstagram className="text-2xl hidden md:block" />
        </div>
      </div>
      {isOpen && (
        <div className=" grid grid-rows-4 justify-center items-center gap-y-2 py-2">
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
