import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="ui container mt-3">
      <div className="ui secondary  menu">
        <Link to="/" className="active item">
          Home
        </Link>
        <div className="right menu">
          <Link to="/SignIn" className="ui item">
            Sign In
          </Link>
          <Link to="/SignUp" className="ui item">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
