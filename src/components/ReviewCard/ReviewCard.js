import React, { useState } from "react";
import people from "./data";

import "./style.css";
import courseData from "./../../data/fakeCourses.json";
const Review = (props) => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = people[index];
const findMatch = courseData.find((single) => parseInt(id) === single.id);
// destruture match course
// const {
//   review1,
//   review2,
//   review3,
//   review4,
//   uname1,
//   uname2,
//   uname3,
//   uname4,
// } = findMatch;
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const minIndex=0;
  const maxIndex=people.length-1;

  
  const getRandomPerson=()=>{
    const getRandomIntInclusive=(min, max) =>{
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    }

    let randomIndex=getRandomIntInclusive(minIndex, maxIndex);
    if (randomIndex===index){
      randomIndex=index+1
    }
    setIndex(checkNumber(randomIndex));

  }
  

  return (
    <>
    <article className="review">
      <div className="img-container">
        <img src={image} alt={props.uname1} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{props.uname1}</h4>
      <p className="info">{props.review1}</p>
      <button className="random-btn" onClick={getRandomPerson}>Get Random Review</button>
    </article>
      <article className="review">
      <div className="img-container">
        <img src={image} alt={props.uname2} className="person-img" />
        <span className="quote-icon">
        
        </span>
      </div>
      <h4 className="author">{props.uname2}</h4>
      <p className="info">{props.review2}</p>
      <button className="random-btn" onClick={getRandomPerson}>Get Random Review</button>
    </article>
    <article className="review">
      <div className="img-container">
        <img src={image} alt={props.uname4} className="person-img" />
        <span className="quote-icon">
     
        </span>
      </div>
      <h4 className="author">{props.uname4}</h4>
      <p className="info">{props.review3}</p>
      <button className="random-btn" onClick={getRandomPerson}>Get Random Review</button>
    </article>
    <article className="review">
      <div className="img-container">
        <img src={image} alt={props.uname3} className="person-img" />
        <span className="quote-icon">
         
        </span>
      </div>
      <h4 className="author">{props.uname3}</h4>
      <p className="info">{props.review4}</p>
      <button className="random-btn" onClick={getRandomPerson}>Get Random Review</button>
    </article>
    </>
  );
};

export default Review;
