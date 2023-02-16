import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <hgroup className="header-group">
      <nav className="nav-bar">
        <div className="left-nave">
          <a href="https://www.yelp.com/writeareview" className="write-a-review">Write a Review</a>
          <a href="https://www.yelp.com/events/burlingame-ca-us" className="events">Events</a>
          <a href="https://www.yelp.com/talk/burlingame-ca-us" className="talk">Talk</a>
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
          <a href="https://www.yelp.com/writeareview" className="write-a-review">Write a Review</a>
          <a href="https://www.yelp.com/events/burlingame-ca-us" className="events">Events</a>
          <a href="https://www.yelp.com/talk/burlingame-ca-us" className="talk">Talk</a>
        </div>
        <div className="login-nav">
          <Link to="/businsses" className="login-bttn-nav">Hello, {currentUser.firstname}</Link>
        </div>
        <div className="signup-nav">
            <button className="signup-bttn-nav" onClick={logout}>Log out</button>
        </div>
      </nav>
    </hgroup>

  );
  return currentUser ? personalGreeting() : sessionLinks();
  };
  
  
  export default Greeting;
  