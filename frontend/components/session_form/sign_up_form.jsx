import React from "react";

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
                <form onSubmit={this.handleSubmit} className="login-form-box">
                Sign Up for Petday
                <br />
                <br />
                Connect with great local businesses
                    <div className="login-form">
                        <br />
                            <input className="login-input"
                            type="text"
                            placeholder="First name"
                            value={this.state.firstname}
                            onChange={this.update("firstname")
                            } /> 
                        <br />
                            <input className="login-input"
                            type="text"
                            placeholder="Last name"
                            value={this.state.lastname}
                            onChange={this.update("lastname")
                            } /> 
                        <br />
                            <input className="login-input"
                            type="text"
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
                            <input className="login-input"
                            type="text"
                            placeholder="ZIP code"
                            value={this.state.zipcode}
                            onChange={this.update("zipcode")
                            } /> 
                        <br />
                        Birthday optional
                            <input className="login-input"
                            type="text"
                            placeholder="Month"
                            value={this.state.birthmonth}
                            onChange={this.update("birthmonth")
                            } /> 
                            <input className="login-input"
                            type="text"
                            placeholder="Day"
                            value={this.state.birthyear}
                            onChange={this.update("birthyear")
                            } /> 
                            <input className="login-input"
                            type="text"
                            placeholder="Day"
                            value={this.state.birthday}
                            onChange={this.update("birthday")
                            } /> 

                        <br />
                        <input
                        className="session-submit" 
                        type="submit"
                        value={this.props.buttonMessage}
                        />
                    </div>

                </form>
            </div>
        );
    }
}
 
export default SignUpForm;