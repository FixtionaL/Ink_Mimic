import { Parallax } from "react-parallax";
import img1 from "../assets/aaron-burden-xG8IQMqMITM-unsplash.jpg";
import Navbar from "./Navbar";

const ImageOne = () => (
  <Parallax
    className="image1"
    blur={{ min: -30, max: 30 }}
    bgImage={img1}
    strength={800}
  >
    <Navbar />
    <div className="parallax_con">
      <span className="img1_text">Style Replication!</span>
    </div>
  </Parallax>
);

export default ImageOne;
