import { Parallax } from "react-parallax";
import img2 from "../assets/photo-1524311583145-d5593bd3502a_1.jpg";

const E_two = () => (
  <Parallax
    className="image1"
    blur={{ min: -15, max: 15 }}
    bgImage={img2}
    strength={800}
  >
    <div className="parallax_con">
      <div className="img2_title">
        <div className="header_img2">CineQuill..</div>
        <br></br>
        <div class="img2_delay-1500">
          CineQuill blends advanced technology with artistic flair, turning your
          narrative into a captivating cinematic journey. From smooth
          transitions to enchanting animations, CineQuill adds a touch of
          cinematic brilliance to your storytelling.
        </div>
      </div>
      <div className="img2_title2">
        <div className="header2_img2">Harmonix..</div>
        <br></br>
        <div class="img2_delay-1500-2">
          Harmonix goes beyond typical audio synthesis, infusing vitality into
          your written expressions. Offering a blend of tones and tempos,
          Harmonix turns your narrative into an auditory masterpiece, creating a
          unique and engaging storytelling experience.
        </div>
      </div>
    </div>
  </Parallax>
);

export default E_two;
