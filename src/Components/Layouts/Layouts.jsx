import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layouts = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/"> Home</Link>
            <Link to="/about"> About</Link>
            <Link to="/contact"> Contact</Link>
            <Link to="/service"> Service</Link>
            <Link to="/blog"> Blog</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layouts;
