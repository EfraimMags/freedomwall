import { FaBars, FaTimes } from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";
import './css/header.css'
import { useRef } from "react";
const Header = () => {

  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};
    
    return(
        <>
        
          <header>
            <h2 className="logo">FreeDomWall</h2>
    
            <nav ref={navRef}>
            
              <Link className ="link"  onClick={showNavbar} to="/">Home</Link>
              <Link className ="link" onClick={showNavbar} to="/About">About</Link>
              <Link className ="link" onClick={showNavbar}  to="/Contact">Contact</Link>
              <Link className ="link" onClick={showNavbar}  to="/Login">Login</Link>
              <Link className ="link"  onClick={showNavbar} to="/Post">
                <button className="btn btn-warning btnHead   ">Post something</button>
              </Link>
              <button
                className="nav-btn nav-close-btn"
                onClick={showNavbar}>
                <FaTimes />
              </button>
            </nav>
            
            <button className="nav-btn " onClick={showNavbar}>
              <FaBars />
            </button>
          </header>
  
        <Outlet />
      
        </>
    );
}
export default Header;