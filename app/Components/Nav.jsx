"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BiLogoInstagram, BiLogoFacebook } from "react-icons/bi";
import Image from "next/image";
import Logo from "../../public/TheHairlineGuyGreenNoBackground.png";
import BackgroundImage from "../../public/header-background.png";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Image
        alt="Logo"
        src={BackgroundImage}
        width={1200}
        height={100}
        className="w-full block md:hidden"
      />
      <div
        className={`flex justify-between md:justify-around h-20 px-4 items-center ${
          isOpen ? "" : "shadow-xl"
        }`}
      >
        <a href="/">
          <Image
            alt="Logo"
            src={Logo}
            width={110}
            height={110}
            className="text-sage"
            priority
          />
        </a>
        <div className="hidden md:block">
          <ul className="flex gap-4">
            <a href="/treatment" className="flex items-center cursor-pointer">
              <li className="text-lg text-sage font-medium btn-hover">
                TREATMENT
              </li>
            </a>
            <a className="flex items-center gap-1 cursor-pointer">
              <li className="text-lg text-sage font-medium btn-hover">ABOUT</li>
            </a>
            <a href="/faqs" className="flex items-center gap-1 cursor-pointer">
              <li className="text-lg text-sage font-medium btn-hover">FAQS</li>
            </a>
            <a
              href="/contact"
              className="flex items-center gap-1 cursor-pointer"
            >
              <li
                href="/contact"
                className="text-lg text-sage font-medium btn-hover"
              >
                CONTACT
              </li>
            </a>
          </ul>
        </div>
        <div className="sm:block justify-end">
          {!isOpen ? (
            <AiOutlineMenu
              className="text-2xl text-sage block cursor-pointer md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <AiOutlineClose
              className="text-2xl text-sage block cursor-pointer md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
          <div className="flex gap-2">
            <a>
              <BiLogoFacebook className="text-4xl text-sage hidden md:block" />
            </a>
            <a>
              <BiLogoInstagram className="text-4xl text-sage hidden md:block" />
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
            className="overflow-hidden shadow-xl"
          >
            <div className="grid grid-rows-4 justify-center items-center gap-y-2 py-2 md:hidden">
              <a href="#" className="text-sage btn-hover">
                TREATMENT
              </a>
              <a href="#" className="text-sage btn-hover">
                ABOUT
              </a>
              <a href="/faqs" className="text-sage btn-hover">
                FAQS
              </a>
              <a href="/contact" className="text-sage btn-hover">
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
