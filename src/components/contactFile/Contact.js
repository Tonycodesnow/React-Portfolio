import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import Link from "../../img/link.png";
import Git from "../../img/git.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_h2cnbga', 'template_m3sze9d', formRef.current, "user_1toJv1wxG5WwKl8Z311aR")
    .then(
      (result) => {
        console.log(result.text);
        setDone(true)
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss project ideas</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="phone" className="c-icon" />
              (831) 316-3422
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              toni.huertinez@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Berkley, CA 94704 USA
            </div>
            <div className="c-info-item">
            <a href="https://www.linkedin.com/in/antonio-huerta-954a53216/">
              <img className="c-icon" src={Link} alt="" />
              </a>
            </div>
            <div className="c-info-item">
            <a href="https://github.com/Tonycodesnow">
              <img className="c-icon" src={Git} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="c-right">
        <p className="c-desc">
            <b>What’s your story?</b> Get in touch with me. Always available for
            freelancing if the right project comes along.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
