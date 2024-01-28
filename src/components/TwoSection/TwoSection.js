import React from "react";
import "./TwoSection.css";
import twoSectionPhoto from "../../accets/twoSectionPhoto/twoSectionPhoto.jpg";
import { Link } from "react-router-dom";

const TwoSection = () => {
  return (
    <div className="two_section_parent_div">
      <div className="two_section_grid_div">
        <div>
          <img src={twoSectionPhoto} alt="" />
          <p className="two_section_click_here_p">
            <Link
              className="athletes_click_here"
              to="https://stan.store/youremotionsmatter"
              target="_blank"
            >
              {" "}
              Click here
            </Link>{" "}
            to shop with Pro Athletes Hemp Association. You will find CBD
            products to benefit the aid in sleep, inflammation, anxiety, immune,
            and pain to&nbsp;
            {/* provide aid of your */}providing an enhanced physical wellbeing
            in this race called life.
          </p>
        </div>
        <div className="two_section_child_div">
          <p>
            If you are an athlete, former athlete, organization, team, business,
            or entity - you want to remain successful & handle challenging
            situations with ease.
          </p>
          <p>
            To guarantee & maintain success in all areas of life: your career,
            your finances, your relationships, & including but not limited to
            life transitions,&nbsp;
            {/* you must learn */}you will benefit from learning Emotional
            Intelligence. Emotional Intelligence (EQ) is the ability to
            strengthen your self-control, to improve your communication, & to
            make smarter choices by learning to effectively identify,
            understand, express, & manage your feelings & emotions!
          </p>
          <p>
            We created a 6-Week Interactive & Knowledge based Playbook. This
            Playbook Helps You Effectively Express & Navigate Your Feelings
            Bringing Self-Control & Genuine Peace Into your Career & Personal
            Life. Imagine how good it would be to feel respected, appreciated, &
            aware. Imagine approaching personal challenges with confidence,
            ease, & a plan!
          </p>
        </div>
      </div>
    </div>
  );
};

export default TwoSection;
