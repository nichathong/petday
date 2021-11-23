import React from 'react';

class BusinessHours extends React.Component {
    constructor(props) {
        super(props);
    }

    showHours = () => {
        let hours = this.props.hours;
        let hour = hours.split(",");
        let str = ""

        for (let i = 0; i < hour.lenght; i++) {
            hour[i] = hour[i] + "/n";
            str += hour[i];

        }

        return str.join("");
    }

    render () {
        console.log(this.props);
        <div>
            <div>
               <div>
                   {this.props.showHours()}
                </div> 
            </div>
        </div>
    }
}

export default BusinessHours;