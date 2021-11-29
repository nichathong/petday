import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    welcomeMessage: "By logging in, you agree to Petday's Term of Service and Privacy Policy",
    formType: 'Login',
    buttomMessage: "Log In",
    navlink: (
      <div>
        New to Petday? <Link to="/signup" className="session-link">Sign Up</Link>
      </div>
    ),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    login: (user) => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
