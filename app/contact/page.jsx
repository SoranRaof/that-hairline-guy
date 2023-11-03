import ContactForm from "../Components/ContactForm";
import Image from "next/image";
import JakClinic from "../../public/JakClinic.jpg";
import Logo from "../../public/TheHairlineGuyGreenNoBackground.png";
import { MdLocationPin, MdPhone } from "react-icons/md";

const Contact = () => {
  return (
    <div className="my-10 md:mx-20 lg:mx-32">
      <h1 className="text-4xl p-4">Contact</h1>
      <div className="md:grid grid-cols-2 lg:grid-cols-3 justify-center gap-2">
        <div className="col-span-1 w-full p-4 rounded-lg md:shadow-lg">
          <div className="flex items-start justify-start md:items-center md:justify-center">
            <img
              className="rounded-xl max-h-[500px] lg:max-h-[600px]"
              src="/JakClinic.jpg"
              alt="/"
            />
          </div>
          <p className="text-xl font-bold mt-2">Jak Newton</p>
          <p className="text-lg">The Hairline Guy</p>
          <div className="flex justify-center">
            <MdPhone className="text-2xl" />
            <p className="text-lg">+44 1234 567890</p>
          </div>

          <MdLocationPin className="text-2xl" />
          <p className="text-lg">24 The Avenue</p>
          <p className="text-lg">LS17 7BE</p>
          <p className="text-lg">Leeds</p>
        </div>
        <div className="md:col-span-1 lg:col-span-2 w-full">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
