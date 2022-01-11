import "./about.css";
import Bridge from "../../img/ggsml.jpg";
import Toon from "../../img/myToon.png";
const About = () => {
  return (
    <div className="aboutPage">
      <div className="about-left">
        <div className="about-card-out">
          <div className="about-card-bg">
          </div>
          <div className="about-card-in">
            <img src={Bridge} alt="" className="about-img" />
          </div>
        </div>
        <div className="a-toon">
          <img src={Toon} alt="" className="toon-img" />
        </div>
      </div>
        <div className="about-right">
          <h1 className="a-title">About Me</h1>
          <p className="a-sub">
            I am a full stack developer with a passion for creating.
            </p>
          <p className="a-desc">
          Happily married and blessed with 3 wonderfull children. I live in the greater bay area and began my entry into programming in the summer of 2021, starting with web design and now full stack. I'm very excited to see where this amazing journey will take me next.
          </p>
        </div>
      </div>
  );
};
export default About;