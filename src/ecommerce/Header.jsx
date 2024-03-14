import React, { useContext } from "react";
import { cartCount } from "./Main";
import {Link} from "react-router-dom";

const Header = () => {
  const { cart } = useContext(cartCount);

  return (
    <>
    <header>
<h1><Link to="/">React Routing</Link></h1>
<ul>
  <li>
    <Link to="/about">About</Link>
  </li>
  <li>
    <Link to="/blog">Blog</Link>
  </li>
<li>
  <Link to="/products">Products</Link>
  </li>
  <li>
  <Link to="/services">Services</Link>
  </li>
  <li>
  <Link to="/contact">Contact Us</Link>
  </li>




</ul>






    </header>
    {/* <nav>
      Header
      <a href="">
        Cart<span>{cart.length}</span>
      </a>
    </nav> */}
    </>
  );
};

export default Header;
