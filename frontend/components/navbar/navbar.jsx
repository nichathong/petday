import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './dropdown';



const Navbar = ({ currentUser, logout }) => {
  const [visible, setVisible] = useState(false);//set default state 
  const handleDropDown = () => {
    setVisible(!visible)
  }
  useEffect(() => {}, [visible])
  const sessionLinks = () => (
    <nav className="nav-bar">
      <div className="left-nave">
        <Link to="https://www.yelp.com/writeareview" className="write-a-review">
          Write a Review
        </Link>
        <Link
          to="https://www.yelp.com/events/burlingame-ca-us"
          className="events"
        >
          Events
        </Link>
        <Link to="https://www.yelp.com/talk/burlingame-ca-us" className="talk">
          Talk
        </Link>
      </div>
      <div className="login-nav">
        <Link to="/login" className="login-bttn-nav">
          Log In
        </Link>
      </div>
      {/* &nbsp; &nbsp; */}
      <div className="signup-nav">
        <Link to="/signup" className="signup-bttn-nav">
          Sign Up
        </Link>
      </div>
      <div></div>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <nav className="nav-bar">
        <div className="left-nave">
          <Link
            to="https://www.yelp.com/writeareview"
            className="write-a-review"
          >
            Write a Review
          </Link>
          <Link
            to="https://www.yelp.com/events/burlingame-ca-us"
            className="events"
          >
            Events
          </Link>
          <Link
            to="https://www.yelp.com/talk/burlingame-ca-us"
            className="talk"
          >
            Talk
          </Link>
        </div>
        {/* <div className="login-nav">
        <Link to="/login" className="login-bttn-nav">Log In</Link>        
      </div> */}
        {/* &nbsp; &nbsp; */}
        {/* <div className="signup-nav">
      <Link to="/signup" className="signup-bttn-nav">Sign Up</Link>        
      </div> */}
      </nav>
      <h2 className="header-name">Hi, {currentUser.email}!</h2>
      <button className="header-button" onClick={handleDropDown}>
        Drop down menu
      </button>
      {visible && <Dropdown />}
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Navbar;
