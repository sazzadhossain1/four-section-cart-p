import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTiktok,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  return (
    <div>
      <div className="footer_parent_div">
        <div className="footer_icon__grid_div">
          <div className="footer_icon_child_div">
            <Link
              className="footer_media_link"
              target="_blank"
              to="https://www.linkedin.com/in/youremotionsmatter/"
            >
              <FontAwesomeIcon className="icon_style" icon={faLinkedin} />
              {/* <p>https://www.linkedin.com/in/youremotionsmatter/</p> */}
            </Link>

            <Link
              className="footer_media_link"
              target="_blank"
              to="https://www.facebook.com/youremotionsmatter"
            >
              <FontAwesomeIcon className="icon_style" icon={faFacebook} />
              {/* <p>https://www.facebook.com/youremotionsmatter</p> */}
            </Link>

            <Link
              className="footer_media_link"
              target="_blank"
              to="https://www.tiktok.com/@youremotionsmatter"
            >
              <FontAwesomeIcon className="icon_style" icon={faTiktok} />
              {/* <p>https://www.tiktok.com/@youremotionsmatter</p> */}
            </Link>

            <Link
              className="footer_media_link"
              target="_blank"
              to="https://www.instagram.com/yemotionsmatter/"
            >
              <FontAwesomeIcon className="icon_style" icon={faInstagram} />
              {/* <p>https://www.instagram.com/yemotionsmatter/</p> */}
            </Link>

            <Link
              className="footer_media_link"
              target="_blank"
              to="https://twitter.com/Yemotionsmatter"
            >
              <FontAwesomeIcon className="icon_style" icon={faTwitter} />
              {/* <p>https://twitter.com/Yemotionsmatter</p> */}
            </Link>

            <Link
              className="footer_media_link"
              target="_blank"
              to="https://www.clubhouse.com/@yemotionsmatter"
            >
              <FontAwesomeIcon className="icon_style" icon={faCopyright} />
              {/* <p>https://www.clubhouse.com/@yemotionsmatter</p> */}
            </Link>
          </div>
        </div>
      </div>
      <div className="footer_copy_right">
        <span>© youremotionsmatter &nbsp;|&nbsp; All rights reserved</span>
      </div>
    </div>
  );
};

export default Footer;
