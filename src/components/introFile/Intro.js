import "./intro.css";
import Me from "../../img/Antspix2.png";

const Intro = () => {
  return (
    <div className="introStuff">

      <div className="introStuff-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hi, My name is</h2>
          <h1 className="i-name">Antonio H.</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Ux/Ui Designer</div>
              <div className="i-title-item">Artist</div>
              <div className="i-title-item">Content Creator</div>
            </div>
          </div>
          <p className="i-social">
          A Junior Web developer with a proven ability to adapt in both self-starting and collaborative environments. I am a creative and passionate person who is always looking for new challenges and opportunities to grow.
          </p>
        </div>
      </div>
      <div className="introStuff-right">
        <div className="i-bg"></div>
          <img src={Me} alt="" className="intro-img"/>
      </div>
    </div>
  );
};

export default Intro;
