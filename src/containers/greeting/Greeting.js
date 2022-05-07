import React, {useContext} from "react";
// import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";

// import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

import { greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    // <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <Button
                    text="See my resume"
                    newTab={true}
                    href={greeting.resumeLink}
                  />
                )}
              </div>
            </div>
          </div>
          {/* <div className="image-content-profile">
           
          </div> */}
           <div className="greeting-image-div"> 
          
           <img
             src={"https://user-images.githubusercontent.com/56911453/156719504-ddec6e7d-9521-4154-8069-60d4c9e69037.svg"} alt="Edwin image"
              // alt={prof.name}
              // className="profile-image"
            />
            
          </div>
        </div>
      </div>
    // </Fade>
  );
}
