import { Parallax } from "react-parallax";
import img3 from "../assets/yannick-pulver-hopX_jpVtRM-unsplash.jpg";

const ImageThree = () => (
  <Parallax className="image1" blur={{ min: -20, max: 20 }}
  bgImage={img3} strength={800}>
    <div className="parallax_con">
      <span className="img1_text">Style Replication!</span>
    </div>
  </Parallax>
);

export default ImageThree;
