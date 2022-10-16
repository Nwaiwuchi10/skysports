// import React from "react";

// import { Col, Image, Row } from "react-bootstrap";
// // import "../MoreFromClub/More.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
// // import "~slick-carousel/slick/slick.css";
// // import "~slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// const Game = ({ posty }) => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     // speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };
//   return (
//     <div style={{ width: "100%", background: "#D9D9D9", height: "auto" }}>
//       <div>
//         <div className="Div-h6-v" varian="h6">
//           RUBY
//         </div>
//         <hr className="hr" />
//       </div>
//       {/* <Carousel> */}
//       <div className="display-div-more">
//         {/* <Row sm={12} md={6} lg={4} xl={3}> */}
//         <div className="card" style={{ width: "18rem" }}>
//           <Image src={posty?.image} alt="hdt" />
//           {/* {posty.image.map((img) => {
//               <div>
//                 <Image src={img} alt="hdt" />{" "}
//               </div>;
//             })} */}

//           <div className="card-body">
//             <p className="card-text">{posty?.desc}</p>
//           </div>
//         </div>
//         {/* ///// */}
//       </div>
//       {/* //////// second carousel div */}
//       {/* </Carousel> */}
//     </div>
//   );
// };

// export default Game;

import React, { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import "./Game.css";
const Game = ({ poster }) => {
  return (
    <div
      style={{
        width: "100%",
        background: "rgb(255, 255, 255)",
        height: "auto",
      }}
    >
      <Row
        className="row-mp"
        style={{ width: "100%", marginLeft: "auto", marginRight: "auto" }}
      >
        {poster?.map((posty, index) => (
          <Col key={index} sm={12} md={6} lg={4} xl={3}>
            <Link
              to={`/newsDetails/${posty?._id}`}
              style={{ textDecoration: "none", color: "initial" }}
            >
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={posty?.image}
                  className="card-img-top"
                  alt="bsm"
                  style={{
                    width: "100%",
                    height: "25vh",
                    objectFit: "cover",
                  }}
                />
                <div
                  className="card-body"
                  style={{
                    width: "auto",
                    height: "20vh",
                    // objectFit: "cover",
                  }}
                >
                  <p className="card-text">
                    <h6>
                      {" "}
                      <strong>{posty?.caption}</strong>
                    </h6>
                  </p>
                  <p className="card-text">{posty?.desc}</p>
                </div>
              </div>
            </Link>
          </Col>
        ))}
      </Row>

      {/* <div>
      
        <div className="card" style={{ width: "18rem" }}>
          <img src={posty?.image} className="card-img-top" alt="bsm" />
          <div className="card-body">
            <p className="card-text">{posty?.caption}</p>
            <p className="card-text">{posty?.desc}</p>
          </div>
        </div>
       
      </div> */}
    </div>
  );
};

export default Game;
