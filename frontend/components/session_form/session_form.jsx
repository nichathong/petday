import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  // renderErrors() {
  //   return(
  //     <ul>
  //       {this.props.errors.map((error, i) => (
  //         <li key={`error-${i}`}>
  //           {error}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }


  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <p className="login-to-petday">Log in to Petday</p> 
          <p className="top-new-to-petday">{this.props.navlink}</p>
          {this.props.welcomeMessage}
          <div className="login-form">
              <input className="login-input"
              type="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.update("email")
              } /> 
            <br />
                <input className="login-input"
                type="text"
                placeholder="Password"
                value={this.state.password}
                onChange={this.update("password")
                } /> 
            <br />
            <input
            className="session-submit" 
            type="submit"
            value={this.props.buttonMessage}
            />
            <div className="new-to-petday">{this.props.navlink}</div>

          </div>

        </form>
      </div>
    )
  }
}


export default SessionForm;
