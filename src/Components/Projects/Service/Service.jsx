import React from "react";
import "./Service.css";
import order from "../../../images/download-removebg-preview (5).png";
import bike from "../../../images/fast-bike-delivery-icon-cartoon-style-vector-28085709-removebg-preview.png";
import cheff from "../../../images/images-removebg-preview (2).png";
function Service() {
  return (
    <div>
      <div className="parental_container">
        <div className="container">
          <div className="ball"></div>
        </div>
        <div className="sub_container">
          <h2>What We Serve</h2>
          <div className="p">
            <p>Your Favourite Food</p>
            <p>Delivery Partner</p>
          </div>
        </div>
        <div className="container1">
          <div className="ball2"></div>
        </div>
      </div>
      <div className="container2">
        <div className="imgGallery">
          <div className="imgBx">
            <img src={order} alt="" />
          </div>
          <h3>Easy to Order</h3>
          <p>You only need a few steps in ordering food</p>
        </div>
        <div className="imgGallery">
          <div className="imgBx">
            <img src={bike} alt="" />
          </div>
          <h3>Fastest Delivery</h3>
          <p>Delivery That is always on time, even Faster</p>
        </div>
        <div className="imgGallery">
          <div className="imgBx">
            <img src={cheff} alt="" />
          </div>
          <h3>Best Quality</h3>
          <p>Not only fast for us, quality is our number one</p>
        </div>
      </div>
    </div>
  );
}

export default Service;
