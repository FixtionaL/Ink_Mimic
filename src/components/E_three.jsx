import { Parallax } from "react-parallax";
import img3 from "../assets/photo-1457369804613-52c61a468e7d.jpg";

const E_three = () => (
  <Parallax
    className="image1"
    blur={{ min: -15, max: 15 }}
    bgImage={img3}
    strength={800}
  >
    <div className="parallax_con">
      {/* <div className="img3_title">
        <div className="header_img3">Challenge...</div>
        <div class="img3_delay-1500">
        Ever felt captivated by the unique style of your favorite authors? Want to infuse your writing with the essence of literary legends but unsure where to start? The struggle to mirror their eloquence and creativity is real.
        </div>
      </div> */}
    </div>
    <div className="img3_title2">
      <div className="header2_img3">Why Us?</div>
      <br></br>
      <div class="img3_delay-1500-2">
       → Tailor the level of imitation to match your preferences.
        <br></br>
        <br></br>
        → Explore a diverse array of authors and genres to fuel your creativity.
        <br></br>
        <br></br>
        → Ideal for students studying literature, offering a hands-on approach to
        understanding writing styles.
      </div>
    </div>
  </Parallax>
);

export default E_three;
