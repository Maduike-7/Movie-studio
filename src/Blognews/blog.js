import React from 'react';


// importing styles

import "./blog.css"

export const Blog = () => {
  return (
    <div className="section">
    <div className="container">
      <div className="grid-row">
        <div className="grid-item">
          <span>
            <h3>BRAND MARKETING</ h3>
            <p>What is brand marketing? There is no brand success without brand marketing. You may disagree but the success of global…</p>
          </span>
          <img src={`https://www.kareseniors.com.au/wp-content/uploads/2021/08/About-Us.jpg`} />
        </div>
        <div className="grid-item">
          <span>
            <h3>Review of Some 3D Software used for Production</h3>
            <p>Animation is a beautiful work of art achieved through ideas, imagination, and the effective use of required software. Animation software…</p>
          </span>
           <img src={`https://www.kareseniors.com.au/wp-content/uploads/2021/08/About-Us.jpg`} />
        </div>
        <div className="grid-item">
          <span>
            <h3>Lovevfx Masterclass</h3>
            <p>LOVE MASTERCLASS LAUNCH It is 2023, and we are 90% sure that some people have made resolutions, one of which…</p>
          </span>  <img src={`https://www.kareseniors.com.au/wp-content/uploads/2021/08/About-Us.jpg`} />
        </div>
       
  
      </div>
    </div>
  </div>
 
  )

}



export default Blog;