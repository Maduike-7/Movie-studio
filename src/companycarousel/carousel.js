import React from 'react';


// importing styles

import "./carousel.css"

export const Carousel = () => {
  return (
    <div className="slider">
	<div className="slide-track">
		<div className="slide">
			<img src={`https://orangevfx.com/wp-content/uploads/2022/04/CHIVITA-logo.png`} height="40" width="150" alt="" />
		</div>
		<div className="slide">
			<img src={`https://orangevfx.com/wp-content/uploads/2022/04/Axxela-Logo.png`} height="40" width="150" alt="" />
		</div>
	
		<div className="slide">
			<img src={`https://orangevfx.com/wp-content/uploads/2022/04/DStv_2012_logo.png`} height="40" width="150" alt="" />
		</div>
		<div className="slide">
			<img src={`https://orangevfx.com/wp-content/uploads/2022/04/AU-Logo.png`} height="40" width="150" alt="" />
		</div>
		<div className="slide">
			<img src={`https://orangevfx.com/wp-content/uploads/2020/08/multichoicenew-removebg-preview-1.png`} height="40" width="130" alt="" />
		</div>
	
		
		<div className="slide">
			<img src={`https://orangevfx.com/wp-content/uploads/2020/08/Wakanow-Logo-removebg-preview.png`} height="45" width="150" alt="" />
		</div>
		<div className="slide">
			<img src={`https://www.freepnglogos.com/uploads/netflix-logo-0.png`} height="40" width="150" alt="" />
		</div>
		<div className="slide">
			<img src={`https://www.freepnglogos.com/uploads/nickelodeon-logo-text-png-2.png`} height="40" width="150" alt="" />
		</div>
			<div className="slide">
			<img src={`https://orangevfx.com/wp-content/uploads/2020/08/first-removebg-preview.png`} height="40" width="150" alt="" />
		</div>
		<div className="slide">
			<img src={`https://www.freepnglogos.com/uploads/nick-jr-logo-png-17.png`} height="40" width="150" alt="" />
		</div>
		
	</div>
</div>
 
  )

}



export default Carousel;