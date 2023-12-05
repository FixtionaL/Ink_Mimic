import { Parallax } from "react-parallax";
import img2 from "../assets/aaron-burden-y02jEX_B0O0-unsplash.jpg";

const ImageTwo = () => (
  <Parallax className="image1"  blur={{ min: -30, max: 30 }}
   bgImage={img2} strength={800}>
    <div className="parallax_con">
      <span className="img1_text">Style Replication!</span>
    </div>
  </Parallax>
);

export default ImageTwo;
