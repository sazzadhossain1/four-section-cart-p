import React from "react";
import "./ThreeSection.css";
import { Link } from "react-router-dom";
import heroSectionPhoto from "../../accets/heroSectionPhoto/heroSectionPhoto.JPG";

const ThreeSection = () => {
  return (
    <div className="three_section_main_div">
      <div className="three_section_child_div">
        <h4 className="three_section_h4">A Few Facts About Your Emotions:</h4>
        <div className="three_section_p_div">
          <p className="three_section_p">
            • Your emotions drive your decision making & they cloud your
            judgment
          </p>
          <p className="three_section_p">
            • Your emotions carry significant and valuable data about yourself &
            the world around you
          </p>
          <p className="three_section_p">
            • It is unhealthy for your emotions to be ignored or suppressed
          </p>
        </div>
      </div>

      <div className="three_section_child_second_div">
        <img className="heroSectionPhoto" src={heroSectionPhoto} alt="" />
        <div className="three_section_p_div">
          <h4 className="three_section_h4_two">
            With the “Why You Matter Playbook” <br /> you will learn:
          </h4>
          <p className="three_section_p">
            • To effectively identify, understand, & manage all valuable
            feelings
          </p>
          <p className="three_section_p">
            • To improve communication within yourself & with others
          </p>
          <p className="three_section_p">
            • To acknowledge & transform reoccurring behaviors & reactions into
            proactive, positive responses
          </p>
          <p className="three_section_p">
            • To evaluate the cost & benefits of your choices (I.e., your
            finances, relationships, your goals, your purpose, etc.)
          </p>
          <p className="three_section_p">
            • To identify, utilize & transform your emotions in all of life’s
            transitions
          </p>
          <p className="three_section_p">
            • To recognize & respond appropriately to your own feelings & the
            feelings of others
          </p>
          <p className="three_section_p">
            • To eliminate beliefs that limit your growth & success
          </p>
          <p className="three_section_p">
            • To develop a proactive & healthy perspective of current & future
            outcomes in your life
          </p>
          <p className="three_section_p">
            • To allow your purpose to influence your daily choices
          </p>
          <p className="three_section_last_p">
            &gt;&gt; Plus, additional tools & guidance custom to your unique
            concerns
          </p>
        </div>
      </div>
      <div className="your_support_div">
        <p className="three_section_p">
          Your support is here. Reach out to me at&nbsp;
          <Link className="tiffany_email">tiffany@youremotionsmatter.com</Link>,
          via social media, or book a one on one by clicking&nbsp;
          <Link
            className="here"
            to="https://stan.store/youremotionsmatter"
            target="_blank"
          >
            here&nbsp;
          </Link>
          to <br /> share your challenges & frustrations so I may customize your
          plan utilizing the “Why You Matter Playbook.”
        </p>
        <h5 className="tiffany_j">– Tiffany J. Norwood, CNLP, CEQP</h5>
      </div>
    </div>
  );
};

export default ThreeSection;
