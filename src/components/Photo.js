import React from "react";

import "./Photo.css";
import { Card, CardImg } from "reactstrap";

import Footer from "./Footer";

import Navbar from "./Navbar";

function Photo() {
  return (
    <div className="parentdiv23">
      <div className="div1233">
        <Navbar />
        <h1 class="text-4xl  text-center text-white mr-3 mb-2 ">Frames📸</h1>
<div className='pic'>
        <Card
          style={{
            width: "20rem",
            height: "200px",
            border: "2px solid white",
            objectFit: "cover",
            borderRadius: "6%",
          }}
        >
          <CardImg
            src={require("../components/assets/photos/0.jpeg")}
            style={{ width: "20rem", height: "196px", borderRadius: "5%" }}
          />
        </Card>
        <Card
          style={{
            width: "20rem",
            height: "200px",
            border: "2px solid white",
            objectFit: "cover",
            borderRadius: "6%",
          }}
        >
          <CardImg
            src={require("../components/assets/photos/1.jpeg")}
            style={{ width: "20rem", height: "196px", borderRadius: "5%" }}
          />
        </Card>
        <Card
          style={{
            width: "20rem",
            height: "200px",
            border: "2px solid white",
            objectFit: "cover",
            borderRadius: "6%",
          }}
        >
          <CardImg
            src={require("../components/assets/photos/2.jpeg")}
            style={{ width: "20rem", height: "196px", borderRadius: "5%" }}
          />
        </Card>
        <Card
          style={{
            width: "20rem",
            height: "200px",
            border: "2px solid white",
            objectFit: "cover",
            borderRadius: "6%",
          }}
        >
          <CardImg
            src={require("../components/assets/photos/3.jpeg")}
            style={{ width: "20rem", height: "196px", borderRadius: "5%" }}
          />
        </Card>
       
        <Card
          style={{
            width: "20rem",
            height: "200px",
            border: "2px solid white",
            objectFit: "cover",
            borderRadius: "6%",
          }}
        >
          <CardImg
            src={require("../components/assets/photos/5.jpeg")}
            style={{ width: "20rem", height: "196px", borderRadius: "5%" }}
          />
        </Card>
        <Card
          style={{
            width: "20rem",
            height: "200px",
            border: "2px solid white",
            objectFit: "cover",
            borderRadius: "6%",
          }}
        >
          <CardImg
            src={require("../components/assets/photos/6.jpeg")}
            style={{ width: "20rem", height: "196px", borderRadius: "5%" }}
          />
        </Card>
        <Card
          style={{
            width: "20rem",
            height: "200px",
            border: "2px solid white",
            objectFit: "cover",
            borderRadius: "6%",
          }}
        >
          <CardImg
            src={require("../components/assets/photos/7.jpeg")}
            style={{ width: "20rem", height: "196px", borderRadius: "5%" }}
          />
        </Card>
        <Card
          style={{
            width: "20rem",
            height: "200px",
            border: "2px solid white",
            objectFit: "cover",
            borderRadius: "5%",
          }}
        >
          <CardImg
            src={require("../components/assets/photos/8.jpeg")}
            style={{ width: "20rem", height: "196px", borderRadius: "5%" }}
          />
        </Card>
       
       
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Photo;
