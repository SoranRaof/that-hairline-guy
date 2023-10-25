import { MdLocationPin } from "react-icons/md";
import {
  BiLogoInstagram,
  BiLogoFacebook,
  BiLogoWhatsapp,
} from "react-icons/bi";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 h-auto p-2 md:p-4 gap-2">
      <div className="flex flex-col justify-center items-center">
        <MdLocationPin className="text-3xl" />
        <p className="text-lg">24 The Avenue</p>
        <p className="text-lg">LS17 7BE</p>
        <p className="text-lg">Leeds</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-1">
        <a>Booking</a>
        <a>Gallery</a>
        <a>About</a>
        <a>Contact</a>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 md:gap-4">
        <p className="text-lg">LOGO</p>
        <div className="flex flex-row gap-3">
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
    </div>
  );
};

export default Footer;
