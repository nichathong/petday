import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        if (this.props.formType === "other_pages") {
            this.type = "other_pages"
        } else if (this.props.formType === "review_pages") {
            this.type = "review_pages"
        }
    }

    // chooseProfile(){
    //     if (this.props.currentUser.profile_pic === "ross") {
    //         return window.ross
    //     } else if (this.props.currentUser.profile_pic === "chandler") {
    //         return window.chandler
    //     } else if (this.props.currentUser.profile_pic === "joey") {
    //         return window.joey
    //     } else if (this.props.currentUser.profile_pic === "phoebe") {
    //         return window.phoebe
    //     } else if (this.props.currentUser.profile_pic === "rachel") {
    //         return window.rachel
    //     } else if (this.props.currentUser.profile_pic === "monica") {
    //         return window.monica
    //     }
    // }

    logIn() {
        return (
            <div className={`nav-login-${this.type}`}>
                <div className={`dropdown-${this.type}`}>
                    <div className="dropdown">
                        <button onClick={() => this.handleClick()} className={`logout-out-bttn-${this.type}`}>
                        Profile img
                        </button>
                    </div>
                </div>

            </div>

        )
    }
}