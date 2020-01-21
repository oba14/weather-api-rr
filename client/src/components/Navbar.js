import React, {useEffect} from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';


const Navbar = () => {

    const dispatch = useDispatch();

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
          
          <>
          <div className='col s5 center black-text'>
            <p style={{color:'green'}}>
            Connected as: <span style={{color: 'white'}}>{user.username}</span>
            </p>
          </div>
          <div className='right'>
            <button type="button" className='btn btn-danger' onClick={() => dispatch(disconnect(socket))}>
              Disconnect
            </button>
          </div>
        </>
        </nav>
      </div>
    );
}

export default Navbar;
