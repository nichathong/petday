import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import SignUpForm from './sign_up_form';

const mapStateToProps = ({ errors }) => {
  return {
    // errors: errors.session,
    formType: 'Sign Up',
    buttonMessage: "Sign Up",
    navlink: (
      <p>
        Already on Petday? <Link to="/login" className="session-link">Log In</Link>,
      </p>
    )
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
