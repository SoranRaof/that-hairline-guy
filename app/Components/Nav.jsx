import { AiOutlineMenu } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

const Nav = () => {
  return (
    <div className="flex justify-between h-16 w-full px-4 py-3 items-center scroll outline">
      <div className="w-auto">
        <h1 className="text-2xl font-bold">Logo</h1>
      </div>
      <div className="hidden md:block">
        <ul className="flex gap-4">
          <li className="text-lg font-medium">Bookings</li>
          <li className="text-lg font-medium">Gallery</li>
          <li className="text-lg font-medium">About</li>
          <li className="text-lg font-medium">Contact</li>
        </ul>
      </div>
      <div className="md:block justify-end w-auto">
        <AiOutlineMenu className="text-2xl block md:hidden" />
        <BsInstagram className="text-2xl hidden md:block" />
      </div>
    </div>
  );
};

export default Nav;
