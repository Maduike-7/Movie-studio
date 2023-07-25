import React from 'react';


// importing styles
import './general.css'

import bloglovevfx from "../projects/bloglovevfx.jpg";
import shayocity from "../projects/shayocity.jpg";
import trailer from "../projects/trailer.jpg";

export const Blog = () => {
  return (
    <div className="section">
    <div className="container">
      <div className="grid-row">
        <div className="grid-item">
          <span>
            <h3>Shayo City</ h3>
            <p>LoveFVX's release of "Shayo City" marks a defining moment in the Nigerian gaming industry and beyond. As the first-ever Nigerian gangstar game, it not only offers an exhilarating gaming experience but also celebrates the cultural heritage of Nigeria. With its immersive narrative and commitment to authenticity, "Shayo City" stands as a testament to the immense creativity and potential within African game development. As players step into the captivating world of "Shayo City," they embark on a thrilling journey that showcases the power of storytelling and representation in the world of gaming.</p>
          </span>
          <img src={shayocity} />
        </div>
        <div className="grid-item">
          <span>
            <h3>LoveFVX Breaking Social Barriers through Gaming</h3>
            <p>One of LoveFVX's standout achievements is their unyielding commitment to embracing and celebrating their cultural identity. Through games that exude cultural authenticity, the studio showcases Nigeria's rich heritage, languages, music, and traditions. This approach not only resonates with local gamers but also fosters cross-cultural appreciation among players worldwide, creating a platform for sharing diverse narratives from different corners of the globe.</p>
          </span>
           <img src={bloglovevfx} />
        </div>
        <div className="grid-item">
          <span>
            <h3>LoveFVX Unleashes the Thrilling "Shayo City" Trailer - Nigeria's First Gangstar Game</h3>
            <p>The imminent release of the "Shayo City" trailer is a momentous occasion for both LoveFVX and the Nigerian gaming industry. As the first-ever Nigerian gangstar game, "Shayo City" sets a precedent for future African game developers to celebrate their cultural heritage while delivering thrilling gameplay. With its captivating storytelling and commitment to cultural authenticity, "Shayo City" promises to be a game that not only entertains but also sparks meaningful conversations about the intricacies of life. Gamers around the world eagerly await the unveiling of the "Shayo City" trailer, ready to embark on an unforgettable journey into the heart of Nigeria's dynamic and vibrant underworld.</p>
          </span>  <img src={trailer} />
        </div>
      </div>
    </div>
  </div>
 
  )

}



export default Blog;