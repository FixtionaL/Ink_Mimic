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
      <div className="header2_img3">Refine..</div>
      <br></br>
      <div class="img3_delay-1500-2">
        → Seamlessly refine PDF text with user-friendly tools.
        <br></br>
        <br></br>→ Enhanced teamwork through collaborative annotation features.
        <br></br>
        <br></br>→ Transform refined text into the chosen author's distinctive
        style effortlessly.
      </div>
    </div>
  </Parallax>
);

export default E_three;
