import React, {useContext} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {illustration, contactInfo} from "../../portfolio";
// import {Fade} from "react-reveal";
import email from "../../assets/lottie/email";
// import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  return (
    // <Fade bottom duration={1000} distance="20px">
      <div >
        <div >
          <div >
            <h1 
            >{contactInfo.title}</h1>
            <p
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              Ph No : +91 9886561087 | Email : edwindev97@gmail.com
            </p>
            <div
              className={
                isDark ? "dark-mode contact-text-div" : "contact-text-div"
              }
            >
             
           
            </div>
          </div>
           
        </div>
      </div>
    // </Fade>
  );
}
