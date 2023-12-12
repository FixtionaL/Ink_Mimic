import { Parallax } from "react-parallax";
import img1 from "../assets/photo-1547584487-9037b59be4f4.jpg";

const E_one = () => (
  <Parallax
    className="image1"
    blur={{ min: -15, max: 15 }}
    bgImage={img1}
    strength={800}
  >
    <div className="parallax_con">
      <div className="img1_title">
        <div className="header_img1">NexConnect..</div>
        <br></br>
        <div class="img1_delay-1500">
          Diving into the minds of our users through personalized interactions.
          Our AGI, NexConnect, goes beyond surface-level feedback, engaging
          users in meaningful conversations to unveil their thoughts and
          preferences.
        </div>
      </div>
      <div className="img1_title2">
        <div className="header2_img1">Sumptuous..</div>
        <br></br>
        <div class="img1_delay-1500-2">
          With NexConnect, providing our  users with a premium experience. Our AGI
          connects on a personal level, ensuring that each interaction is
          tailored to their unique needs. Building long lasting relationships and leave
          a lasting impression on every user.
        </div>
      </div>
    </div>
  </Parallax>
);

export default E_one;
