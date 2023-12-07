import { Parallax } from "react-parallax";
import img3 from "../assets/yannick-pulver-hopX_jpVtRM-unsplash.jpg";

const ImageThree = () => (
  <Parallax className="image1" blur={{ min: -20, max: 20 }}
  bgImage={img3} strength={800}>
    <div className="parallax_con">
    {/* <div className="img3_title">
        <div className="header_img3">Challenge...</div>
        <div class="img3_delay-1500">
        Ever felt captivated by the unique style of your favorite authors? Want to infuse your writing with the essence of literary legends but unsure where to start? The struggle to mirror their eloquence and creativity is real.
        </div>
      </div> */}
    </div>
      <div className="img3_title2">
        <div className="header2_img3">Why?...</div>
        <div class="img3_delay-1500-2">
        <b>Personalized Style Replication:</b> Tailor the level of imitation to match your preferences.
        <br></br>
        <br></br>
        <b>Limitless Inspiration:</b> Explore a diverse array of authors and genres to fuel your creativity.
        <br></br>
        <br></br>
        <b>Educational Excellence:</b> Ideal for students studying literature, offering a hands-on approach to understanding writing styles.
         </div>
      </div>
  </Parallax>
);

export default ImageThree;
