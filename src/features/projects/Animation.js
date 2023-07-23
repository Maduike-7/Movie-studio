import './general.css'


const index = () => {
  return (
    
    <section className="hero-section">
   
    <video src={`https://res.cloudinary.com/df4o2wzzw/video/upload/v1681142465/hero_00_00_00-00_01_03_i2otyi.mp4`} autoPlay loop muted />
    <div className="content">
     <p>Welcome to Love VFX Studios</p>
     <p className="introduction">We specialize in a range of creative services encompassing graphic design, 3D animation, game development,
      and website design.</p>
     <button>Want to know more?</button>
     </div>
   </section> 
 
  );
};


export default index;
