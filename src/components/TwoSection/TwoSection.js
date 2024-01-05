import React from "react";
import "./TwoSection.css";
import twoSectionPhoto from "../../accets/twoSectionPhoto/twoSectionPhoto.jpg";

const TwoSection = () => {
  return (
    <div className="two_section_parent_div">
      <div className="two_section_grid_div">
        <div>
          <img src={twoSectionPhoto} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            velit voluptatibus nostrum facere neque numquam expedita, dolores
            eaque pariatur. Molestias quos, in accusamus voluptatibus rerum at,
            est, suscipit perferendis reiciendis quibusdam cum.
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
            life transitions, you must learn Emotional Intelligence. Emotional
            Intelligence (EQ) is the ability to strengthen your self-control, to
            improve your communication, & to make smarter choices by learning to
            effectively identify, understand, express, & manage your feelings &
            emotions!
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
