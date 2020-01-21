import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {


    return (
      <div >
        <nav className="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
          <div >
            <NavLink exact activeClassName="active"
              to="/"
              className=" col s5 black-text">
              Home
            </NavLink>
          
            <NavLink exact activeClassName="active"
              to="/chat"
              className="col s5 center black-text">
              About
            </NavLink> 
          </div>
        </nav>
      </div>
    );
}

export default Navbar;
