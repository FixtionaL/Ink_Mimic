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
        <div className="header_img2">Offerings..</div>
        <br></br>
        <div class="img2_delay-1500">
          Ink Mimic employs cutting-edge large language models to analyze the
          writing styles of the literary giants. From the poetic cadence of
          Shakespeare to the profound simplicity of Hemingway, our AI seamlessly
          adapts their unique flair into your writing.{" "}
        </div>
      </div>
      <div className="img2_title2">
        <div className="header2_img2">VersePlay..</div>
        <br></br>
        <div class="img2_delay-1500-2">
          Unleash your creativity without the struggle. Whether you're a budding
          author seeking inspiration or a seasoned wordsmith wanting to explore
          new stylistic horizons, Ink Mimic is your ultimate companion on the
          journey of literary self-discovery.{" "}
        </div>
      </div>
    </div>
  </Parallax>
);

export default E_two;
