import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FiMessageCircle } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./NavBar.css";
import backgroundImage from "../../../images/FFD6E0.png-removebg-preview.png";

function Navbar() {
  return (
    <div>
      <div className="nav-container">
        <div className="nav">
          <h3>
            <span>k</span>Foods
          </h3>
          <nav>
            <ul>
              <li>
                My Food <RiArrowDropDownLine />
              </li>
              <li>
                Services
                <RiArrowDropDownLine />
              </li>
              <li>
                Menu <RiArrowDropDownLine />
              </li>
              <li>
                Contact <RiArrowDropDownLine />
              </li>
            </ul>
          </nav>
          <div className="nav-icons">
            <AiOutlineSearch />
            <FiMessageCircle />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
