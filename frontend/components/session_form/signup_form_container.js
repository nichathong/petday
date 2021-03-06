import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SignUpForm from './sign_up_form';
import { login } from '../../actions/session_actions';

const mapStateToProps = ({ errors }) => {
  // debugger
  return {
    errors: errors.session,
    formType: 'Sign Up',
    buttonMessage: "Sign Up",
    navlink: (
      <div>
        Already on Petday? <Link to="/login" className="session-link">Log In</Link>,
      </div>
    )
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
