import React from "react";
import ImageOne from "./ImageOne";
import ImageTwo from "./ImageTwo";
import ImageThree from "./ImageThree";
import Info1 from "./Info1";
import Navbar from "./Navbar";
const About = () => {
  return (
    <div>
      {/* <Info1/> */}
      <ImageOne />
      <Navbar />
      {/* <Info1 /> */}
      <ImageTwo />
      {/* <Info1 /> */}
      <ImageThree />
      {/* <Info1/> */}
    </div>
  );
};

export default About;
