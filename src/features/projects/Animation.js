import React, { useEffect, useRef } from 'react';
import { TimelineMax, Power0 } from 'gsap';

import "./general.css"

const Animation = ({ side, bgColor }) => {
  const boxRef = useRef(null);

  useEffect(() => {
    const tl = new TimelineMax({
      repeat: -1,
      yoyo: true,
    });

    // Animate the box depending on the side (top, right, bottom, left)
    const animateSide = (property, size) => {
      tl.fromTo(
        boxRef.current,
        1,
        {
          [property]: 0,
          background: bgColor,
          immediateRender: false,
          autoRound: false,
          ease: Power0.easeNone,
        },
        {
          [property]: size,
          background: bgColor,
        }
      );
    };

    switch (side) {
      case 'top':
        animateSide('width', 200);
        break;
      case 'right':
        animateSide('height', 200);
        break;
      case 'bottom':
        animateSide('width', 200);
        break;
      case 'left':
        animateSide('height', 200);
        break;
      default:
        break;
    }
  }, [bgColor, side]);




  return (
    
    <section className="hero-section">
   
    <video src={`https://res.cloudinary.com/df4o2wzzw/video/upload/v1681142465/hero_00_00_00-00_01_03_i2otyi.mp4`} autoPlay loop muted />
    <div className="content">
     <p>Welcome to Love VFX Studios</p>
     <p className="introduction">We specialize in a range of creative services encompassing graphic design, 3D animation, game development,
      and website design.</p>
     <button  onClick={''}>Want to know more?</button>
     </div>
     <div id="box">
  <div id="square">
    <span id="left-side" />
    <span id="top-side" />
    <span id="right-side" />
    <span id="bottom-side" />
  </div>
</div>


   </section> 
  )
};


export default Animation;
