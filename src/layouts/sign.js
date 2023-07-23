import React from "react";

import './navbar.css'


import {FaUserSecret} from "react-icons/fa";

const Sign = () => {
  return (
<div id="user" className="social-media">
    <ul  className="social-media-desktop">
    <li className="user">
            <a href="https://www.instagram.com/lovevfxstudios/" target="_lovevfx"> 
                <FaUserSecret className="usericon"/>
               register
            </a>
        </li>
</ul>
</div>
  );
}

export default Sign;
