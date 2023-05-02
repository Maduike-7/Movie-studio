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
          <img src={`https://images.unsplash.com/photo-1590102426319-c7526718cd70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnJhbmQlMjBtYXJrZXRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60`} />
        </div>
        <div className="grid-item">
          <span>
            <h3>Review of Some 3D Software used for Production</h3>
            <p>Animation is a beautiful work of art achieved through ideas, imagination, and the effective use of required software. Animation software…</p>
          </span>
           <img src={`https://www.blender.org/wp-content/uploads/2019/07/blender_vfx-1280x720.jpg?x12104`} />
        </div>
        <div className="grid-item">
          <span>
            <h3>Lovevfx Masterclass</h3>
            <p>LOVE MASTERCLASS LAUNCH It is 2023, and we are 90% sure that some people have made resolutions, one of which…</p>
          </span>  <img src={`https://images.unsplash.com/photo-1559223607-a43c990c692c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFzdGVyJTIwY2xhc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60`} />
        </div>
       
  
      </div>
    </div>
  </div>
 
  )

}



export default Blog;