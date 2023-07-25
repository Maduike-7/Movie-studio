import React, { useEffect, useRef } from "react";


// importing styles
import "./general.css"

// importing button funtion
import Button from  "./button"
// importing logo from src

const AnimatedComponent = () => {
  <Button/>
  return (
    // <div ref={cardsRef}>
   <div className="cards">
<div className="card">
  <div className="thumbnail">
    <h3 className=" reveal">3D Character</h3>
    <p>Acting</p>
    <p>Intermediate</p>
  </div>
  <div className="card-img">
    <img src={`https://stepico.com/wp-content/uploads/2022/06/unnamed3-1-1024x547.jpg`} width="100%"  height="170vh" alt="" />
  </div>
  <div className="card-text">
<h3>₦200k</h3>
<p>₦ 240,000</p>
  </div>
  <div className="card-buttons">
    <div className="card-button-1 hover-effect add-cursor">
      Enroll
    </div>
  
  </div>
  </div>
  
<div className="card">
  <div className="thumbnail">
    <h3 className=" reveal">3D Character</h3>
    <p>Acting</p>
    <p>Intermediate</p>
  </div>
  <div className="card-img">
    <img src={`https://stepico.com/wp-content/uploads/2022/06/unnamed2-1024x675.png`} width="100%"  height="170vh" alt="" />
  </div>
  <div className="card-text">
<h3>₦100k</h3>
<p>₦ 240,000</p>
  </div>
  <div className="card-buttons">
    <div className="card-button-1 hover-effect add-cursor">
      Enroll
    </div>
  
  </div>
  </div>
  
<div className="card cardH">
  <div className="thumbnail thumb">
    <h3>3D Character</h3>
    <p>Acting</p>
    <p>Intermediate</p>
  </div>
  <div className="card-img">
    <img src={`https://stepico.com/wp-content/uploads/2022/06/unnamed4-895x1024.png`} width="100%"  height="170vh" alt="" />
  </div>
  <div className="card-text">
<h3>₦500k</h3>
<p>₦ 400,000</p>
  </div>
  <div className="card-buttons">
    <div className="card-button-1 hover-effect add-cursor">
      Enroll
    </div>
  
  </div>
  </div>
  
<div className="card">
  <div className="thumbnail">
    <h3>3D Character</h3>
    <p>Acting</p>
    <p>Intermediate</p>
  </div>
  <div className="card-img">
    <img src={`https://stepico.com/wp-content/uploads/2022/06/unnamed6-1024x443.png`} width="100%"  height="170vh" alt="" />
  </div>
  <div className="card-text">
<h3>₦200k</h3>
<p>₦ 340,000</p>
  </div>
  <div className="card-buttons">
    <div className="card-button-1 hover-effect add-cursor">
      Enroll
    </div>
  
  </div>
  </div>
  
<div className="card">
  <div className="thumbnail">
    <h3>3D Character</h3>
    <p>Acting</p>
    <p>Intermediate</p>
  </div>
  <div className="card-img">
    <img src={`https://stepico.com/wp-content/uploads/2022/06/unnamed7-1024x577.png`} width="100%"  height="170vh" alt="" />
  </div>
  <div className="card-text">
<h3>₦150k</h3>
<p>₦ 150,000</p>
  </div>
  <div className="card-buttons">
    <div className="card-button-1 hover-effect add-cursor">
      Enroll
    </div>
  </div>
</div>
</div>
  );
};

export default AnimatedComponent;
