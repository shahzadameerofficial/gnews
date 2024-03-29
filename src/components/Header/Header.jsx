import {
  NavLink
} from "react-router-dom";
import "./Header.css";
import { useRef } from "react";
import LoadingBar from "react-top-loading-bar";

function Header() {
  const ref = useRef(null);
  return (
    <>
      <LoadingBar color="red" ref={ref} />
      <header>
        {/* <img src={logo} alt="" /> */}
        <div className="logo">G<span className="logotext">News</span></div>
        <nav>
          <NavLink to='/' className='navItem'>Top Heading</NavLink>
          <NavLink to='/discover' className='navItem'>Discover More</NavLink>
        </nav>
      </header>
    </>
  );
}

export default Header;
