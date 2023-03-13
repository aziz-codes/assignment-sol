import { NavLink } from "react-router-dom";
import { links } from "../assets/dummy";
const Navbar = () => {
  return (
    <nav className="bg-[#0b8d9f] w-full h-12">
      <div className="w-full relative flex justify-start px-1 items-center h-full gap-6">
        <div className="flex">
          <h4 className="bg-black text-xl font-semibold text-[#0b8d9f]">
            ASSIGNMENT
          </h4>

          <span className="bg-white font-semibold pr-0.5">SOL</span>
        </div>
        <div className="flex gap-5">
          {links.map((link, index) => (
            <NavLink key={index} className="text-white">
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
