import ContactForm from "../Components/ContactForm";
import Image from "next/image";
import JakClinic from "../../public/JakClinic.jpg";
import Logo from "../../public/TheHairlineGuyGreenNoBackground.png";
import { MdLocationPin, MdPhone } from "react-icons/md";

const Contact = () => {
  return (
    <div className="my-10 md:mx-10 lg:mx-32">
      <h1 className="text-5xl underline p-4 text-sage">CONTACT</h1>
      <div className="md:grid grid-cols-2 lg:grid-cols-3 justify-center gap-2">
        <div className="col-span-1 w-full p-4 rounded-lg md:shadow-lg">
          <div className="flex items-start justify-start md:items-center md:justify-center">
            <img
              className="rounded-xl max-h-[500px] lg:max-h-[500px]"
              src="/JakClinic.jpg"
              alt="/"
            />
          </div>
          <div className="flex items-start justify-start md:grid md:grid-cols-2  md:items-start lg:grid lg:grid-cols-4 lg:justify-center">
            <div className="flex flex-col items-center justify-center md:col-span-2 lg:col-span-4 lg:justify-center lg:items-center">
              <p className="text-xl font-bold mt-2 text-sage">Jak Newton</p>
              <p className="text-lg">The Hairline Guy</p>
              <MdPhone className="text-2xl text-sage" />
              <p className="text-lg">+44 7443 473019</p>
              <MdLocationPin className="text-2xl text-sage" />
              <p className="text-lg">24 The Avenue</p>
              <p className="text-lg">LS17 7BE</p>
              <p className="text-lg">Leeds</p>
            </div>
          </div>
        </div>
        <div className="md:col-span-1 lg:col-span-2 w-full rounded-lg shadow-lg">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
