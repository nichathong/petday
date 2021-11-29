import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }
  guestLogin(e) {
    e.preventDefault();
    this.props.login({
      email: "guest@gmail.com",
      password: "1234567"
    });
  }
  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }


  render() {
    return (
      <div className="login-form-container">
        <div className="session-top-tap">
          <Link to="/">
            <img
              className="session-form-petday-icon"
              src="/petday_img/petday_logo_small.png"
            ></img>
          </Link>
        </div>
        <div className="main-session-form">
          <div className="session-form-box">
            <div className="fillout-form">
              <div className="err-container">{this.renderErrors()}</div>
              <form onSubmit={this.handleSubmit} className="login-form-box">
                <div className="login-to-petday">Log in to Petday</div>
                <br />
                <div className="top-new-to-petday">{this.props.navlink}</div>
                <br />
                {this.props.welcomeMessage}
                <div className="login-form">
                  <input
                    className="login-input"
                    type="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.update("email")}
                  />
                  <br />
                  <input
                    className="login-input"
                    type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.update("password")}
                  />
                  <br />
                  <input
                    className="session-submit"
                    type="submit"
                    value={this.props.buttonMessage}
                  />

                  <button className="session-submit" onClick={this.guestLogin}>
                    Demo Log in
                  </button>
                  <div className="new-to-petday">{this.props.navlink}</div>
                </div>
              </form>
            </div>
          </div>
          {/* <div className="sessoion-deco-img">
            <a>Hello</a>
          </div> */}
        </div>
      </div>
    );
  }
}


export default SessionForm;
