import { MdLocationPin } from "react-icons/md";
import {
  BiLogoInstagram,
  BiLogoFacebook,
  BiLogoWhatsapp,
} from "react-icons/bi";
import Image from "next/image";
import Logo from "../../public/TheHairlineGuyGreenNoBackground.png";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-3 h-auto p-2">
      <div className="flex flex-col justify-around items-center">
        <Image alt="Logo" src={Logo} width={120} height={120} priority />
        <div className="flex flex-row gap-3 text-sage">
          <a>
            <BiLogoFacebook className="text-3xl" />
          </a>
          <a>
            <BiLogoInstagram className="text-3xl" />
          </a>
          <a>
            <BiLogoWhatsapp className="text-3xl" />
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-around items-center text-sage">
        <a className="btn-hover cursor-pointer">TREATMENT</a>
        <a className="btn-hover cursor-pointer">ABOUT</a>
        <a className="btn-hover cursor-pointer">FAQS</a>
        <a className="btn-hover cursor-pointer">CONTACT</a>
      </div>
      <div className="flex flex-col justify-center items-center text-sage">
        <MdLocationPin className="text-3xl" />
        <p className="text-lg">24 The Avenue</p>
        <p className="text-lg">LS17 7BE</p>
        <p className="text-lg">Leeds</p>
      </div>
    </div>
  );
};

export default Footer;
