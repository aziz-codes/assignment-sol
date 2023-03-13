import { NavLink } from "react-router-dom";
import { links } from "../assets/dummy";
import { AiFillCaretDown } from "react-icons/ai";
import { useState } from "react";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();
  const subMenu = [
    {
      path: "/about-us",
      label: "About Us",
    },
    {
      path: "contact-us",
      label: "Contact Us",
    },
    {
      path: "faqs",
      label: "FAQ's",
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-[#0b8d9f] w-full h-12">
      <div className="w-full relative flex justify-start px-1 items-center h-full gap-6">
        <div className="flex">
          <h4 className="bg-black text-xl font-semibold text-[#0b8d9f]">
            ASSIGNMENT
          </h4>

          <span className="bg-white font-semibold pr-0.5">SOL</span>
        </div>
        {location.pathname === "/" ? (
          <div className="flex gap-5">
            {links.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className="text-white py-2 hover:bg-black px-0.5"
              >
                {link.label}
              </NavLink>
            ))}
            <div
              className="flex flex-row cursor-pointer text-white relative items-center hover:bg-black py-2"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <label className="cursor-pointer">Help</label>
              <AiFillCaretDown className="text-white h-3 w-3 cursor-pointer" />
              {open && (
                <div className="absolute top-8 w-32  h-36 bg-white  text-black shadow-md">
                  <div className="flex flex-col items-baseline h-full mt-1 justify-between">
                    {subMenu.map((item, index) => (
                      <NavLink
                        key={index}
                        to={item.path}
                        className="w-full hover:bg-gray-200 px-3 py-3 items-center hover:text-amber-800 transition-all duration-100 ease-linear"
                      >
                        {item.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-5">
            <NavLink to="/" className="text-white py-2 hover:bg-black px-0.5">
              Home
            </NavLink>
            <label className="capitalize text-white">
              {location.pathname.replace("/", "").replace("-", " ")}
            </label>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
