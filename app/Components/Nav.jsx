"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BiLogoInstagram, BiLogoFacebook } from "react-icons/bi";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <div className="flex justify-between w-full h-16 px-4 items-center">
        <a href="/">
          <h1 className="text-2xl font-bold">Logo</h1>
        </a>
        <div className="hidden md:block">
          <ul className="flex gap-4">
            <a href="/treatment" className="flex items-center cursor-pointer">
              <li className="text-lg font-medium">TREATMENT</li>
            </a>
            <a className="flex items-center gap-1 cursor-pointer">
              <li className="text-lg font-medium">ABOUT</li>
            </a>
            <a href="/faqs" className="flex items-center gap-1 cursor-pointer">
              <li className="text-lg font-medium">FAQS</li>
            </a>
            <a
              href="/contact"
              className="flex items-center gap-1 cursor-pointer"
            >
              <li href="/contact" className="text-lg font-medium">
                CONTACT
              </li>
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className=" grid grid-rows-4 justify-center items-center gap-y-2 py-2 md:hidden">
              <a href="#" className="">
                BOOKING
              </a>
              <a href="#" className="">
                SERVICES
              </a>
              <a href="/faqs" className="">
                FAQS
              </a>
              <a href="/contact" className="">
                CONTACT
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Nav;
