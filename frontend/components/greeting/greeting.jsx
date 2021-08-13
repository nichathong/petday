import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import Homepage from '../../homepage/homepage';
// import Dropdown from './dropdown';



const Greeting = ({ currentUser, logout }) => {
//   const [visible, setVisible] = useState(false);//set default state 
//   const handleDropDown = () => {
//     setVisible(!visible)
//   }
//   useEffect(() => {}, [visible])

  
  const sessionLinks = () => (
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

      </nav>
    </hgroup>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <nav className="nav-bar">
        <div className="left-nave">
          <Link to="https://www.yelp.com/writeareview" className="write-a-review">Write a Review</Link>
          <Link to="https://www.yelp.com/events/burlingame-ca-us" className="events">Events</Link>
          <Link to="https://www.yelp.com/talk/burlingame-ca-us" className="talk">Talk</Link>
        </div>
        <div className="login-nav">
          <Link to="/businsses" className="login-bttn-nav">Hello, {currentUser.firstname}</Link>
        </div>
        <div className="signup-nav">
            <button className="signup-bttn-nav" onClick={logout}>Log out</button>
        </div>
      </nav>
    </hgroup>
    // <hgroup className="header-group">
    //   <h2 className="header-name">Hi, {currentUser.username}!</h2>
    //   <button className="header-button" onClick={logout}>
    //     Log Out
    //   </button>
    // </hgroup>
  );
    return currentUser ? personalGreeting() : sessionLinks();
  };
  
  
  export default Greeting;
  
  {/* <Link to="/signup" className="signup-bttn-nav">Log out</Link>         */}
  {/* <h2 className="header-name">Hi, {currentUser.email}!</h2>
  <button className="header-button" onClick={handleDropDown}>
    Drop down menu
  </button>
  {visible && <Dropdown />} */}