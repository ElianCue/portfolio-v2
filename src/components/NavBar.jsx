const NavBar = () => {
  return (
    <header className="w-[100vw] flex align-center justify-center center">
      <nav className="w-full p-2 ">
        <ul className="flex items-center space-x-4 p-8 text-2xl font-extrabold justify-start w-full">
          <li className="hover:animate-pulse hover:transition-all hover:duration-752"> <a href="#">Elian Cueva</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
