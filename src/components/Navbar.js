import React, { useState }  from 'react';

import "./navbar.css"

// importing logos
import logo from "../logo.png"

// importing react-icons
import { FaFacebookF, FaInstagramSquare, FaLinkedinIn, FaYoutube, FaTwitter, signup } from "react-icons/fa";
 import { GiHamburgerMenu } from "react-icons/gi"

//  import { SfNav } from "react-Sf-building-blacks";

const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
   <>
  <nav className=" main-nav">
    {/* {1st logo part} */}
    <div className="logo">
        {/* <h2>
       Lovevfx
       Studio

        </h2> */}
<img src={logo} width="150"  alt="logo" />
    </div>
        {/* {2st logo part} */}
<div className="menu-link">
<ul>
    <li>
        <a href="#">Home</a>
    </li>
        <li>
        <a href="#">us</a>
    </li>
        <li>
        <a href="#">Services</a>
    </li>
        <li>
        <a href="#">work</a>
    </li>
    <li>
        <a href="#">training</a>
    </li>
    <li>
        <a href="#">Careers</a>
    </li>
    <li>
        <a href="#">Blog</a>
    </li>
    <li>
        <a href="#">Contact us</a>
    </li>
</ul>
</div>
        {/* {3rd social media links} */}
<div className="social-media">
    <ul className="social-media-desktop">
        <li>
            <a href="#" target="_lovevfx">
                <FaFacebookF className="facebook"/>
            </a>
        </li>
        <li>
            <a href="https://www.instagram.com/lovevfxstudios/" target="_lovevfx">
                <FaInstagramSquare className="instagram"/>
            </a>
        </li>
        <li>
            <a href="#" target="_lovevfx">
                <FaLinkedinIn className="linkedin"/>
            </a>
        </li>
        <li>
            <a href="#" target="_lovevfx"> 
                <FaYoutube className="youtube"/>
            </a>
        </li>

        <li>
            <a href="#" target="_lovevfx"> 
                <FaTwitter className="youtube"/>
            </a>
        </li>
    </ul>

{/* { hamburger menu start} */}
<div className="hamburger-menu" >
     <a href="#" onClick="() => setShowMediaIcons(!showMediaIcons)"  >
<GiHamburgerMenu  />
     </a>
</div>
    
</div>
  </nav>

  {/* { hero section} */}
   <section className="hero-section">
   <video src={`https://res.cloudinary.com/df4o2wzzw/video/upload/v1681142465/hero_00_00_00-00_01_03_i2otyi.mp4`} autoPlay loop muted/>
   <div className="content">
    <p>Welcome to Love VFX Studios</p>
    <button>Want to know more?</button>
    </div>
  </section> 
   </>
  );
};


export default Navbar;

