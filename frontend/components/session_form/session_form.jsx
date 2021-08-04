import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      zipcode: '',
      birthmonth: '',
      birthday: '',
      birthyear: ''

    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    debugger
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
        <form className="login-form-box">
          Welcome to Petday!
          <br/>
          Please {this.props.formType} or {this.props.navLink}
          {/* {this.renderErrors()} */}
          <div className="login-form">
            <br/>
            <label>email:
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
              />
            </label>
            <br/>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br/>
            <button onClick={this.handleSubmit} className="session-submit" type="submit" value={this.props.formType} >{this.props.formType}</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
