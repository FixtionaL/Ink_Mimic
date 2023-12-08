import React from "react";
import videoBG from "../assets/pexels-tima-miroshnichenko-6549275 (2160p).mp4";
import Navbar from "./Navbar";

const Model = () => {
  return (
    <>
      <div className="main">
        <video src={videoBG} autoPlay loop muted />
        <Navbar />
        <div className="model_title">
          <div className="header_model">Plans..</div>
          <br></br>
          <div class="model_delay-1500">
            <h3>EXPLORER'S PASS</h3>
            <br></br>- Free Access into the world of style replication with
            limited features.
            <br></br>
            <br></br>- Ideal for Casual writers and those curious to explore the
            possibilities.
            <br></br>
            <br></br>
            <h3>WORDSMITH'S HAVEN</h3>
            <br></br>- Unlocks the full potential of Ink Mimic, including
            advanced style customization and access to an extended range of
            authors.
            <br></br>
            <br></br>- Perfect for Writers committed to honing their craft with
            enhanced AI capabilities.
            <br></br>
            <br></br>
            <h3>LITERARY MAESTRO</h3>
            <br></br>- Exclusive benefits includes priority access to new
            features, personalized support, and a curated selection of writing
            resources.
            <br></br>
            <br></br>- For dedicated authors and literary enthusiasts aiming for
            mastery.
          </div>
        </div>
        <div className="model_title2">
          <div className="header2_model">Perks..</div>
          <br></br>
          <div class="model_delay-1500-2">
            - Access an ever-expanding library of authors and writing styles.
            <br></br>
            <br></br>- Stay at the forefront of AI-driven writing with regular
            feature releases.
            <br></br>
            <br></br>- Receive personalized assistance to enhance your writing
            journey.
            <br></br>
            <br></br>
            <div>
                Subscribe to Ink Mimic today and let your creativity soar. Choose
                your tier, unlock the potential of our platform, and immerse
                yourself in a world where every word becomes a masterpiece.
                <br></br>
                <br></br>
                Ready to make your mark? Subscribe now and be part of the Ink Mimic
                community.{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Model;
