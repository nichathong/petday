import React from "react";
import { Link } from "react-router-dom";

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            zipcode: "",
            birthmonth: "",
            birthday: "",
            birthyear: ""    
         }
         this.handleSubmit = this.handleSubmit.bind(this);
    };

    update(field) {
        return (e) => this.setState({[field]: e.currentTarget.value});
    };


    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    };

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
                        <form onSubmit={this.handleSubmit} className="login-form-box">
                        <div className="signup-for-petday">Sign Up for Petday</div>
                        <br />
                        <div>Connect with great local businesses</div>
                        <div className="login-form">
                            <br />
                            <input
                            className="login-input"
                            type="text"
                            placeholder="First name"
                            value={this.state.firstname}
                            onChange={this.update("firstname")}
                            />
                            <br />
                            <input
                            className="login-input"
                            type="text"
                            placeholder="Last name"
                            value={this.state.lastname}
                            onChange={this.update("lastname")}
                            />
                            <br />
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
                            type="text"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.update("password")}
                            />
                            <br />
                            <input
                            className="login-input"
                            type="text"
                            placeholder="ZIP code"
                            value={this.state.zipcode}
                            onChange={this.update("zipcode")}
                            />
                            <br />
                            <br />
                            Birthday optional
                            <br />
                            <br />
                            <input
                            className="login-input"
                            type="text"
                            placeholder="Month"
                            value={this.state.birthmonth}
                            onChange={this.update("birthmonth")}
                            />
                            <input
                            className="login-input"
                            type="text"
                            placeholder="Day"
                            value={this.state.birthyear}
                            onChange={this.update("birthyear")}
                            />
                            <input
                            className="login-input"
                            type="text"
                            placeholder="Year"
                            value={this.state.birthday}
                            onChange={this.update("birthday")}
                            />
                            <br />
                            <input
                            className="session-submit"
                            type="submit"
                            value={this.props.buttonMessage}
                            />
                            <div className="already-on-petday">{this.props.navlink}</div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
          </div>
        );
    }
}
 
export default SignUpForm;


                        // <button className="session-submit"
                        // value={this.props.buttonMessage}
                        // >
                        //     <Link to="/" >Sign Up</Link>

                        // </button>