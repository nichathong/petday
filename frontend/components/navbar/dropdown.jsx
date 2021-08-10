import React from 'react';

class Dropdown extends React.Component {
    render() {
        return (
            <div>Hello, {this.props.user.firstname}</div>
        );
    }
}

export default Dropdown;