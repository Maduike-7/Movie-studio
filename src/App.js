import React from 'react';


// importing components
import Navbar from "./components/Navbar";
import Index from "./Webtext/index";
import Prod from "./Products/prod";
import Carousel from "./companycarousel/carousel"
import Notch from "./Webtext/notch";
import Text from "./Textgrid/text";
import About from "./Webtext/about";
import Train from "./Traningschool/train";
import Character from "./3Dcharacter/character";
import Button from "./3Dcharacter/button";
import Course from "./Webtext/course";
import Whoweare from "./Webtext/whoweare";
import Workers from "./Workerimg/workers";
import Latestnews from "./Webtext/latestnews";
import Blog from "./Blognews/blog";
import Footer from "./footer/footer";
import Fixedicon from "./communicationicon/fixedicon";


export const App = () => {
  return (
  <>
 
  <Navbar />
  <Index />
  <Prod />
  <Carousel />
  <Notch />
  <Text />
  <About />
  <Train />
  <Character />
  <Button />
  <Course />
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
