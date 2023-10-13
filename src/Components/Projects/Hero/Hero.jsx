import React from "react";
import "./Hero.css";
import {
  AiFillPlayCircle,
  AiOutlinePlayCircle,
  AiFillStar,
} from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import customer1 from "../../../images/download-removebg-preview (4).png";
import customer2 from "../../../images/WhatsApp_Image_2023-08-22_at_10.46.22-removebg-preview.png";
import customer3 from "../../../images/terricks-noah-n9R0MN3XGvY-unsplash-removebg-preview (1).png";
import pizza from "../../../images/pizza.jpg";
import fire from "../../../images/fire.png";
function Hero() {
  return (
    <div className="hero-container">
      <div className="left">
        <h1>
          Be The Fastest <br /> In Delivering <br />
          Your <span>Food</span>
        </h1>
        <p>
          Our Job is to filling your tummy with delicious <br /> Food with fast
          and free Delivery
        </p>
        <div className="btn1">
          <button> Get Started</button>
          <button>
            <div className="btn_1">
              <AiFillPlayCircle color="gold" />
              Watch Video
            </div>
          </button>
        </div>

        <div className="customers">
          <div className=" imgBX">
            <div className="rounded-customers">
              <img src={customer1} alt="" />
            </div>
            <div className="rounded-customers cust2">
              <img src={customer2} alt="" />
            </div>
            <div className="rounded-customers cust3">
              <img src={customer3} alt="" />
            </div>
          </div>
          <h4>
            Our Happy Customers <br />
            <AiFillStar color="gold" />
            <span>4.5 (Rating Overview)</span>
          </h4>
        </div>
      </div>

      <div className="right">
        <div className="rouded-bg_img">
          <div className="playBtn">
            <AiOutlinePlayCircle color="white" />
          </div>
          <div className="fireEmoji">
            <img src={fire} style={{ width: "25px" }} alt="" />
          </div>
          <img src={customer1} alt="" />
          <div className="partialwhite">
            <div className="human-head">
              <FaUser />
            </div>
            <div className="cook">
              <h4>Mijel Kibry</h4>
              <h6>Assistant cook</h6>
            </div>
            <div className="icon-div">
              <BsFillTelephoneFill fontSize="100%" color="white" />
            </div>
          </div>
          <div className="left-syd"></div>
          <div className="right-syd"></div>
          {/* <img src={pizza} alt="" /> */}

          <div className="partialwhite2">
            <div className="img"></div>
            <div className="desc">
              <p>Italian Pizza</p>
              <div className="star">
                <AiFillStar color="gold" />
                <AiFillStar color="gold" />
                <AiFillStar color="gold" />
                <AiFillStar color="gold" />
                <AiFillStar color="gold" />
              </div>
              <div className="price">
                <span>$7.49</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
