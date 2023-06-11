import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
	<div className='navdiv'>
    <header>
      {" "}
      <h1 class=" text-gray-300 font-bold text-2xl hover:text-[#1D9BF9]">
		<a className="firstcomp" href='/Blog'>
        Ninad 
		</a>
      </h1>
      <nav ref={navRef}>
        {" "}
        <div class=" ml-48"></div>
        <Link to="/About">About</Link>
        <Link to="/Project">Projects</Link>
        <Link to="/Viewblog">Blogs</Link>
        <Link to="/Photo">Frames</Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
	</div>
  );
}

export default Navbar;
