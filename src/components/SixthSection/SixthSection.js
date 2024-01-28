import React from "react";
import "./SixthSection.css";
import { Link } from "react-router-dom";

const SixthSection = () => {
  return (
    <div className="sixthSection_parent_div">
      <div className="sixthSection_child-div">
        <p className="sixthSection-p">
          Your support is here. Reach out to me at
          tiffany@youremotionsmatter.com, via social media, or book a one on one
          by clicking{" "}
          <Link
            className="here"
            to="https://stan.store/youremotionsmatter"
            target="_blank"
          >
            {" "}
            here
          </Link>{" "}
          to <br /> share your challenges & frustrations so I may customize your
          plan utilizing the “Why You Matter Playbook.”
        </p>
        <p className="sixthSection_tiffany_p">
          – Tiffany J. Norwood, CNLP, CEQP
        </p>
        <h4 className="sixthSection_why_because">Why? Because You Matter.</h4>
      </div>
    </div>
  );
};

export default SixthSection;
