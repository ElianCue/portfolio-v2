import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full container flex justify-normal m-auto h-auto relative">
      <nav className="w-full pt-10 h-full">
        <div className="flex justify-between items-center p-4">
          {/* Logo or Name with Menu */}
          <div className="flex items-center w-full justify-between md:w-auto">
            <li className="list-none text-2xl font-extrabold">
              <a href="#">Elian Cueva</a>
            </li>

            {/* Hamburger Button */}
            <button
              className="block md:hidden text-3xl focus:outline-none"
              onClick={toggleMenu}
            >
              &#9776;
            </button>
          </div>

          {/* Menu Items */}
          <ul
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex absolute top-full left-0 md:relative md:top-auto md:left-auto flex-col md:flex-row items-center md:space-x-4 space-y-4 md:space-y-0 p-8 md:p-0 text-xl font-extrabold justify-end w-full md:w-auto bg-white md:bg-transparent z-10`}
          >
            <li className="hover:animate-pulse hover:transition-all hover:duration-752">
              <a href="#">Sobre mí</a>
            </li>
            <li className="hover:animate-pulse hover:transition-all hover:duration-752">
              <a href="#">Skills</a>
            </li>
            <li className="hover:animate-pulse hover:transition-all hover:duration-752">
              <a href="#">Proyectos</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
