import React, {useContext} from "react";
import "./Testimonial.scss";
import {testimonialSectionWord} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import TestimonialCard from "../../components/testimonailsCard/TestimonialCard";

export default function TestimonialsPage() {
  const {isDark} = useContext(StyleContext);
  if (testimonialSectionWord.display) {
    return (
      <div id="experience">
        {/* <Fade bottom duration={1000} distance="20px"> */}
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">Testimonials</h1>
              <p
            className={
              isDark ? "dark-mode blog-subtitle" : "subTitle blog-subtitle"
            }
          >
            {testimonialSectionWord.subtitle}
          </p>
              <div className="experience-cards-div">
                {testimonialSectionWord.experience.map((card, i) => {
                  return (
                    <TestimonialCard
                      key={i}
                      isDark={isDark}
                      cardInfo={{
                        company: card.company,
                        desc: card.desc,
                        date: card.date,
                        companylogo: card.companylogo,
                        role: card.role,
                        descBullets: card.descBullets
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        {/* </Fade> */}
      </div>
    );
  }
  return null;
}
