import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = ({ currentUser, logout }) => {
  const sessionLinks = () => (  
    <nav className="nav-bar">
      <div className="left-nave">
        <Link to="/writeareview" className="write-a-review">Write a Review</Link>
        <Link to="/events"className="events">Events</Link>
        <Link to="/Talk"className="talk">Talk</Link>
      </div>
      <div className="login-nav">
        <Link to="/login" className="login-bttn-nav">Log In</Link>        
      </div>
      {/* &nbsp; &nbsp; */}
      <div className="signup-nav">
      <Link to="/signup" className="signup-bttn-nav">Sign Up</Link>        
      </div>

    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Navbar;
