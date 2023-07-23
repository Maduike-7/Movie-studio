import React from 'react';


// importing components
import Navbar from "../../layouts/Navbar";
import Animation from "../../features/projects/Animation"
import Index from "../../features/projects/index";
import Prod from "../../features/projects/prod";
import Camlogo from "../../features/projects/camlogo";
import Notch from "../../features/projects/notch";
import Text from "../../features/projects/text"
import About from "../../features/projects/about";
import Train from "../../features/projects/train";
import Character from "../../features/projects/character";
// import Course from "../features/projects/course";
import Whoweare from "../../features/projects/whoweare";
import Workers from "../../features/projects/workers";
import Latestnews from "../../features/projects/latestnews";
import Blog from "../../features/projects/blog";
import Footer from "../../features/projects/footer";
import Fixedicon from "../../features/projects/fixedicon";


export const App = () => {
  return (
  <>
  <Navbar />
  <Animation />
  <Index />
  <Prod />
  <Camlogo />
  <Notch />
  <Text />
  <About />
  <Train />
  <Character />
  {/* <Course /> */}
  <Whoweare />
  <Workers />
  <Latestnews />
  <Blog />
  <Footer />
  <Fixedicon />
  </>
  )

}



export default App;
