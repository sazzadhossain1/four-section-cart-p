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
            <p className="home_unleash_p">
              Unleash Your Hero Within. <br /> Embrace Your Worth, Stand Tall,{" "}
              <br /> and Remember, You Matter Regardless.
            </p>
            <Link target="_blank" to="https://stan.store/youremotionsmatter">
              <button className="home_start_btn">
                Start Winning In Life Now
              </button>
            </Link>
          </div>
          <img className="tiffany_photo" src={tiffanyPhoto} alt="" />
        </div>
      </div>

      <TwoSection></TwoSection>
      <ThreeSection></ThreeSection>
      <SectionFour></SectionFour>
      {/* <FifthSection></FifthSection>
      <SixthSection></SixthSection> */}
    </div>
  );
};

export default Home;
