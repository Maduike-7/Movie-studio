import React, { useState, useRef, useEffect } from 'react';
import { TweenMax } from 'gsap'; // Assuming GSAP library is installed

const Cursor = () => {
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    const text = textRef.current;

    const handleMouseMove = (e) => {
      setMouseX(e.pageX);
      setMouseY(e.pageY);
    };

    const handleMouseEnter = () => {
      cursor.classList.add('active');
      follower.classList.add('active');
      text.classList.add('active');
    };

    const handleMouseLeave = () => {
      cursor.classList.remove('active');
      follower.classList.remove('active');
      text.classList.remove('active');
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.querySelectorAll('.portfolio-item img').forEach((img) => {
      img.addEventListener('mouseenter', handleMouseEnter);
      img.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.querySelectorAll('.portfolio-item img').forEach((img) => {
        img.removeEventListener('mouseenter', handleMouseEnter);
        img.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const updateCursor = () => {
      setPosX((prevPosX) => prevPosX + (mouseX - prevPosX) / 9);
      setPosY((prevPosY) => prevPosY + (mouseY - prevPosY) / 9);

      TweenMax.set(follower, {
        css: {
          left: posX - 20,
          top: posY - 20,
        },
      });

      TweenMax.set(cursor, {
        css: {
          left: mouseX,
          top: mouseY,
        },
      });
    };

    TweenMax.to({}, 0.016, {
      repeat: -1,
      onRepeat: updateCursor,
    });
  }, [mouseX, mouseY, posX, posY]);

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-follower" ref={followerRef} />
      <div className="piu" ref={textRef}>
        {/* Your text content goes here */}
      </div>
    </>
  );
};

export default Cursor;
