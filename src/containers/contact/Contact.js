import React, {useContext} from "react";
import "./Contact.scss";

import {contactInfo} from "../../portfolio";

// import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  return (
   
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
