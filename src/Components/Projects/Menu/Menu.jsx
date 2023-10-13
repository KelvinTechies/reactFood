import React from "react";
import { BiSolidChevronLeft, BiSolidChevronRight } from "react-icons/bi";
import pizza from "../../../images/6776_Pizza-Dough_ddmfs_2x1_1725-fdaa76496da045b3bdaadcec6d4c5398-removebg-preview.png";
import cheese from "../../../images/brooke-lark-HlNcigvUi4Q-unsplash.jpg";
import burger from "../../../images/joseph-gonzalez-fdlZBWIP0aM-unsplash.jpg";
import sharwama from "../../../images/anna-pelzer-IGfIGP5ONV0-unsplash.jpg";
import "./Menu.css";

function Menu() {
  return (
    <div>
      <div className="menu_container">
        <div className="h3">
          <h3>Our Menu</h3>
          <div className="menu_ball"></div>
          <div className="menu_ball2"></div>
        </div>
        <div className="div_2">
          <h2>Menu that ALways</h2>
          <div className="div_3">
            <h2> Make you fall in love</h2>

            <div className="btn2">
              <button>
                <BiSolidChevronLeft fontSize={30} />
              </button>
              <button>
                <BiSolidChevronRight color="white" fontSize={30} />
              </button>
            </div>
          </div>
        </div>
        <div className="menuDiv">
          <div className="sideBar">
            <div className="side_nav">
              <nav>
                <ul>
                  <li>Burger</li>
                  <li>Pizza</li>
                  <li>Cupcake</li>
                  <li>Ramen</li>
                  <li>Ice Cream</li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="menu_items">
            <div className="imgFoodBx">
              <div className="imgFood">
                <img src={pizza} alt="" />
              </div>
              <div className="desci">
                <h2>Nigerian Pizza</h2>
                <p>
                  <span>$</span>7.49
                </p>
                <span>Order Now</span>
              </div>
            </div>
            <div className="imgFoodBx">
              <div className="imgFood">
                <img src={cheese} alt="" />
              </div>
              <div className="desci">
                <h2>k Dining</h2>
                <p>
                  <span>$</span>4.49
                </p>
                <span>Order Now</span>
              </div>
            </div>
            <div className="imgFoodBx">
              <div className="imgFood">
                <img src={burger} alt="" />
              </div>
              <div className="desci">
                <h2>K Ramen</h2>
                <p>
                  <span>$</span>17.49
                </p>
                <span>Order Now</span>
              </div>
            </div>
            <div className="imgFoodBx">
              <div className="imgFood">
                <img src={sharwama} alt="" />
              </div>
              <div className="desci">
                <h2>K Fruit</h2>
                <p>
                  <span>$</span>10.49
                </p>
                <span>Order Now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
