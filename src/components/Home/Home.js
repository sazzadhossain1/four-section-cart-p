import React from "react";
import "./Home.css";
import yourEmotionMatter from "../../accets/yourEmotionMatter.png";

import TwoSection from "../TwoSection/TwoSection";
import ThreeSection from "../ThreeSection/ThreeSection";
import SectionFour from "../FourSection/SectionFour";
import FifthSection from "../FifthSection/FifthSection";

import tiffanyPhoto from "../../accets/heroSectionPhoto/tiffanyPhoto.jpg";
import SixthSection from "../SixthSection/SixthSection";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="home_parent_div">
        <img
          className="yourEmotionMatter_photo"
          src={yourEmotionMatter}
          alt=""
        />

        <div className="home_icon_grid_div">
          <div className="heme_Unleash_div">
            {/* <p className="home_unleash_p">
              Unleash Your Hero Within. <br /> Embrace Your Worth, Stand Tall,{" "}
              <br /> and Remember, You Matter Regardless.
            </p> */}
            <p className="home_unleash_p">
              Winners Know Having A Game Plan Is The Best Way To Win The Game.
            </p>
            <p className="home_let_life_p">
              Let Life Coach Tiffany J. Norwood, CNLP, CEQP, Empower You To Be
              Successful In All Areas Of Your Life With The “Why You Matter
              Playbook.”
            </p>
            <Link target="_blank" to="https://stan.store/youremotionsmatter">
              <button className="home_start_btn">
                Start Winning In Life Now
              </button>
            </Link>
          </div>

          <div>
            <img className="tiffany_photo" src={tiffanyPhoto} alt="" />
            <p className="tiffany_photo_text">
              Life Coach Tiffany J. Norwood, CNLP, CEQP is spreading awareness
              around Emotional Intelligence with Juliet Hahn of Your Next Stop
              (YNS) Podcast, Live with the NFL Thread during Super Bowl 57.
            </p>
          </div>
        </div>
      </div>

      <TwoSection></TwoSection>
      <ThreeSection></ThreeSection>
      <SectionFour></SectionFour>
      <FifthSection></FifthSection>
      <SixthSection></SixthSection>
    </div>
  );
};

export default Home;
