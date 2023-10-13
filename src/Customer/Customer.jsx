import React from "react";
import cheff from "../images/download-removebg-preview (6).png";
import meat from "../images/download-removebg-preview (7).png";
import cucumber from "../images/download-removebg-preview (18).png";
import chicken from "../images/download-removebg-preview (9).png";
import customer1 from "../images/download-removebg-preview (4).png";
import customer2 from "../images/WhatsApp_Image_2023-08-22_at_10.46.22-removebg-preview.png";
import customer3 from "../images/terricks-noah-n9R0MN3XGvY-unsplash-removebg-preview (1).png";
import "./Customer.css";

const Customer = () => {
  return (
    <div className="customer_container">
      <div className="customer_div">
        <div className="chef_side">
          <div className="chef_layout">
            <img className="img" src={cheff} alt="" />
            <div className="m">
              <img src={meat} alt="" />
              <img src={meat} alt="" />
              <img src={cucumber} alt="" />
              <img src={cucumber} alt="" />
              <img src={chicken} alt="" />
            </div>
            <div className="btm_layOut">
              <div className="lay">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
