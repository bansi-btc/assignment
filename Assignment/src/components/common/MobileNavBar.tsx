import { Link } from "react-router-dom";
import Logo from "../../assets/KoinxLogo.png";
import HamburgerImage from "../../assets/hamburger.png";
import { useState } from "react";
import classNames from "classnames";

const MobileNavBar = () => {
  const [isNavOpen, setisNavOpen] = useState<boolean>(false);

  const toggleNav = () => {
    setisNavOpen((prev) => {
      return !prev;
    });
  };
  return (
    <div className="wrapper shadow-lg shadow-[#1026490F] md:hidden">
      <div
        className={classNames(
          `flex flex-col gap-4 fixed h-screen items-center bg-gray-100 z-10 w-full justify-center transition-all
          duration-300 origin-left`,
          {
            "translate-x-[100%]": !isNavOpen,
          }
        )}
      >
        <ul className="flex flex-col gap-4 items-center">
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
      <div className="flex flex-row justify-between text-base items-center py-8 w-full herolike-wrapper">
        <Link to={"/"} className="py-1">
          <img src={Logo} alt="" className="" />
        </Link>

        {!isNavOpen ? (
          <div className="z-20" onClick={toggleNav}>
            <img src={HamburgerImage} alt="" />
          </div>
        ) : (
          <div className="z-20" onClick={toggleNav}>
            Close
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileNavBar;
