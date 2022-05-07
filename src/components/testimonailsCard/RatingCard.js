
// import { Rating } from 'semantic-ui-react'
import ReactStars from "react-rating-stars-component";
import React from "react";
// import { render } from "react-dom";

const RatingExampleStar = () => (
    <div className="set-content" style={{display:"flex" , justifyContent: "center"}}>
    <ReactStars className="react-stars-wrapper-09389586531779652" 
    count={5}
    value={4}
    edit={false}
   
    size={24}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
  />
  </div>
)

export default RatingExampleStar


 
