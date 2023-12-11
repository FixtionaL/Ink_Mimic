import { Parallax } from "react-parallax";
import img1 from "../assets/aaron-burden-xG8IQMqMITM-unsplash 2.jpg";

const ImageOne = () => (
  <Parallax
    className="image1"
    blur={{ min: -15, max: 15 }}
    bgImage={img1}
    strength={800}
  >
    <div className="parallax_con">
      <div className="img1_title">
        <div className="header_img1">Challenge..</div>
        <br></br>
        <div class="img1_delay-1500">
          Ever felt captivated by the unique style of your favorite authors?
          Want to infuse your writing with the essence of literary legends but
          unsure where to start? The struggle to mirror their eloquence and
          creativity is real.
        </div>
      </div>
      <div className="img1_title2">
        <div className="header2_img1">Vision..</div>
        <br></br>
        <div class="img1_delay-1500-2">
          Enter Ink Mimic, your gateway to literary mastery! We've crafted a
          groundbreaking solution that empowers you to effortlessly absorb,
          replicate, and weave the magic of legendary wordsmiths into your own
          prose.{" "}
        </div>
      </div>
    </div>
  </Parallax>
);

export default ImageOne;
