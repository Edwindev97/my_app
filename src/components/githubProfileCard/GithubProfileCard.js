import React from "react";
import "./GithubProfileCard.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo} from "../../portfolio";
import emoji from "react-easy-emoji";
import Contact from "../../containers/contact/Contact";
// import {Fade} from "react-reveal";

export default function GithubProfileCard({prof}) {
  if (prof.isHireable) {
    prof.hireable = "Yes";
  } else {
    prof.hireable = "No";
  }
  return (
    // <Fade bottom duration={1000} distance="20px">
      <div className="main" id="contact">
        <h1 className="prof-title">Reach Out to me!</h1>
        <div className="row">
          



          <div className="main-content-profile">
            <div className="blog-header">
              <p className="subTitle blog-subtitle">{contactInfo.subtitle}</p>
            </div>
            {/* <h2 className="bio-text">"{emoji(String(prof.bio))}"</h2> */}
         
            {/* <div className="opp-div">
              <span className="desc-prof">
                Open for opportunities: {prof.hireable}
              </span>
            </div> */}
            {/* <div className="opp-div">
              <p className="subTitle blog-subtitle">{contactInfo.subtitle}</p>
            </div>
            <div className="opp-div">
              <p className="subTitle blog-subtitle">{contactInfo.subtitle}</p>
            </div> */}
            <Contact/>

            <SocialMedia />
          </div>
          <div className="image-content-profile">
            <img
              src={"https://user-images.githubusercontent.com/56911453/156746355-b63ac8e3-1aa4-4a9f-8cd1-028e088fe708.jpg"}
              alt={prof.name}
              className="profile-image"
            />
          </div>
        </div>
      </div>
    // </Fade>
  );
}
