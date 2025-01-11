import Logo from "../assets/KoinxLogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="wrapper shadow-lg shadow-[#1026490F]">
      <div className="flex flex-row justify-between text-base items-center py-8 w-full herolike-wrapper">
        <Link to={"/"} className="py-1">
          <img src={Logo} alt="" className="" />
        </Link>

        <div className="flex flex-row gap-11 justify-end">
          <ul className="flex flex-row gap-8">
            <Link to={"/cryto-taxes"} className="py-1">
              Crypto Taxes
            </Link>
            <Link to={"/tools"} className="py-1">
              Free Tools
            </Link>
            <Link to={"/resource"} className="py-1">
              Resource Center
            </Link>
          </ul>

          <div className="bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] text-white rounded-md py-1 px-4">
            Get Started
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
