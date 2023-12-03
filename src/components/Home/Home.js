import React from "react";
import "./Home.css";
import yourEmotionMatter from "../../accets/yourEmotionMatter.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTiktok,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import TwoSection from "../TwoSection/TwoSection";
import ThreeSection from "../ThreeSection/ThreeSection";
import SectionFour from "../FourSection/SectionFour";

const Home = () => {
  return (
    <div>
      <div className="home_parent_div">
        <img
          className="yourEmotionMatter_photo"
          src={yourEmotionMatter}
          alt=""
        />

        <div className="home_icon_div">
          <Link
            className="media_link"
            target="_blank"
            to="https://www.linkedin.com/in/youremotionsmatter/"
          >
            <FontAwesomeIcon className="icon_style" icon={faLinkedin} />
            <p>https://www.linkedin.com/in/youremotionsmatter/</p>
          </Link>

          <Link
            className="media_link"
            target="_blank"
            to="https://www.facebook.com/youremotionsmatter"
          >
            <FontAwesomeIcon className="icon_style" icon={faFacebook} />
            <p>https://www.facebook.com/youremotionsmatter</p>
          </Link>

          <Link
            className="media_link"
            target="_blank"
            to="https://www.tiktok.com/@youremotionsmatter"
          >
            <FontAwesomeIcon className="icon_style" icon={faTiktok} />
            <p>https://www.tiktok.com/@youremotionsmatter</p>
          </Link>

          <Link
            className="media_link"
            target="_blank"
            to="https://www.instagram.com/yemotionsmatter/"
          >
            <FontAwesomeIcon className="icon_style" icon={faInstagram} />
            <p>https://www.instagram.com/yemotionsmatter/</p>
          </Link>

          <Link
            className="media_link"
            target="_blank"
            to="https://twitter.com/Yemotionsmatter"
          >
            <FontAwesomeIcon className="icon_style" icon={faTwitter} />
            <p>https://twitter.com/Yemotionsmatter</p>
          </Link>

          <Link
            className="media_link"
            target="_blank"
            to="https://www.clubhouse.com/@yemotionsmatter"
          >
            <FontAwesomeIcon className="icon_style" icon={faCopyright} />
            <p>https://www.clubhouse.com/@yemotionsmatter</p>
          </Link>
        </div>
      </div>
      <TwoSection></TwoSection>
      <ThreeSection></ThreeSection>
      <SectionFour></SectionFour>
    </div>
  );
};

export default Home;
