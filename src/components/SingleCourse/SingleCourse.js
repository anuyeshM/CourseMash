import { useParams } from "react-router";
import React from "react";

import YouTube from "../../../node_modules/react-youtube";

import { Card, CardGroup } from "../../../node_modules/react-bootstrap";
import "../../../node_modules/mdb-react-ui-kit";
import StarRatings from "react-star-ratings";
import img from "../../Images/certificate (1).png";
import img1 from "../../Images/video.png";
import img2 from "../../Images/folder.png";

import courseData from "./../../data/fakeCourses.json";
import Review from "../ReviewCard/ReviewCard";
const SingleCourse = () => {
  const onPlayerReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  const opts = {
    height: "220",
    width: "340",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  // const courses = useContext(singleContext)
  //for collect url dynamic param value
  const { id } = useParams();

  // match url id and fakedb courses object to render UI
  const findMatch = courseData.find((single) => parseInt(id) === single.id);
  // destruture match course
  const {
    title,
    institute,
    rating,
    totalRate,
    lebel,
    price,
    description,
    videoId,
    payLink,
    review1,
    review2,
    review3,
    review4,
    uname1,
    uname2,
    uname3,
    uname4,
  } = findMatch;

  return (
    <>
      <section className="container my-lg-12">
        <div className="column">
          {/* banner left part text */}
          <div className="col-lg-12 mb-1">
            <div class="shadow-lg p-0 bg-rounded m-10">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "20px",
                }}
              >
                <YouTube
                  videoId={videoId}
                  opts={opts}
                  onReady={onPlayerReady}
                />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "20px",
              }}
            ></div>
          </div>
          <div>
            <div class="shadow-lg p-2 mb-10 mx-1 mt-3 bg-rounded  align-items-center text-center">
              <h1 className="text-decoration-underline background-red text-center">
                {title}
              </h1>
              <h6 className="text-center">Offer by: {institute}</h6>
              <p className="text-center">
                <p>
                  Ratings:{" "}
                  <StarRatings
                    rating={rating}
                    starRatedColor="gold"
                    starEmptyColor="#000"
                    starDimension="16px"
                    starSpacing="1px"
                  ></StarRatings>{" "}
                  <strong>{rating}</strong> || Total Enrolled{" "}
                  <strong>{totalRate}</strong>
                </p>
              </p>
              <p className="text-center">
                Total Enrolled: {totalRate} Students
              </p>
              <h5 className="text-center">
                Course Fee: INR <del>22999</del> {price}
              </h5>
              <p className="text-center">
                <strong>Level:Beginner</strong> {lebel}
              </p>
              <p>{description}</p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <a
                  style={{
                    background: "#8dff87",
                    color: "buttontext",
                    width: "100px",
                    height: "40px",
                    padding: "7px 7px 7px",
                    margin: "10px 10px 10px 10px",
                    font: "400 18px system-ui",
                    borderRadius: "10px",
                    textDecoration: "none",
                  }}
                  href={payLink}
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>

          {/* banner right part images */}
        </div>
      </section>
      <section className="container">
        <div className="row">
          <Review
            review1={review1}
            review2={review2}
            review3={review3}
            review4={review4}
            uname1={uname1}
            uname2={uname2}
            uname3={uname3}
            uname4={uname4}
          />
        </div>
      </section>

      <div className="row">
        <div className="col-lg-12 mb-1">
          <div class="shadow-lg p-3 mb-5 mx-2 bg-rounded m-10">
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                marginBottom: "10px",
                marginTop: "10px",
              }}
            >
              <CardGroup>
                <Card>
                  <Card.Body>
                    <Card.Title>Certification of completion </Card.Title>
                  </Card.Body>
                  <Card.Footer>
                    <Card.Img variant="top" src={img} />
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Body>
                    <Card.Title>21 hours on-demand video</Card.Title>
                  </Card.Body>
                  <Card.Footer>
                    <Card.Img variant="top" src={img1} />
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Body>
                    <Card.Title>Full Downloadabe Resource</Card.Title>
                  </Card.Body>
                  <Card.Footer>
                    <Card.Img variant="top" src={img2} />
                  </Card.Footer>
                </Card>
              </CardGroup>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCourse;
