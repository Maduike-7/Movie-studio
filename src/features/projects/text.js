
// importing styles
import "./general.css"

import tv from './tv.gif'

export const Text = () => {
  return (

<div className="grided-container ">

<div className="giftext-container">
    <div className="gif">
    <img src={tv} width="150"  alt="logo" />    </div>
  <div className="anim-text">
    <h1>3D Animation</h1>
 <p>Our ability to deliver the highest quality has left our clients stunned, hence, this has made us the most sought after 3D animation company in Nigeria and even in Africa!</p>
  </div>
</div>

<div className="giftext-container">
    <div className="gif">
    <img src={tv} width="150"  alt="logo" />    </div>
  <div className="anim-text">
    <h1>Visual Effects</h1>
 <p>We engage your audience through ground-breaking visual effects (VFX) experiences that are driven by insight and innovation for feature film and TV projects and pretty much anything else you can think of.</p>
  </div>
</div>

<div className="giftext-container">
    <div className="gif">
    <img src={tv} width="150"  alt="logo" />    </div>
  <div className="anim-text">
    <h1>Training</h1>
 <p>As an industry leader in 3D digital animation and visual effects, our training is practical and our syllabus is structured in the most relevant and intuitive way.</p>
  </div>
</div>

<div className="giftext-container">
    <div className="gif">
    <img src={tv} width="150"  alt="logo" />    </div>
  <div className="anim-text">
    <h1>Video Production</h1>
 <p>Video production for us means creating the perfect image of your brand and also showcasing the passion of those who are responsible for the growth and success of your brand</p>
  </div>
</div>

<div className="giftext-container">
    <div className="gif">
    <img src={tv} width="150"  alt="logo" />    </div>
  <div className="anim-text">
    <h1>Explainer Videos</h1>
 <p>We specialize in creating warm, campaign-styled videos that helps you connect with your audience, send a message that sticks and increases brand awareness.</p>
  </div>
</div>

<div className="giftext-container">
    <div className="gif">
    <img src={tv} width="150"  alt="logo" />    </div>
  <div className="anim-text">
    <h1>Motion Graphics</h1>
 <p>For our Motion graphics, Info graphics, and vector driven spots, we use the latest animation styles such that, our clients have something new to react to and enjoy.</p>
  </div>
</div>
</div>
)
}


export default Text;