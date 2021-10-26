import React from 'react';
import { withRouter } from 'react-router';

class PopularSeach extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            find: "",
            near: this.props.near,
        };

        // this.handleAmerican = this.handleAmerican.bind(this);
        // this.handleKorean =this.handleKorean.bind(this);
        // this.handleAsian =this.handleAsian.bind(this);
        this.handleCity = this.handleCity.bind(this);
        this.handleCategory = this.handleCategory.bind(this);

    }

    handleCategory(e, filter) {
        e.preventDefault();
        this.state.find = filter   
        this.props.changeFilter(filter, '')
            .then(() => {this.props.history.push(`/search_results`)})
    }


    // handleKorean(e, filter) {
    //     e.preventDefault();
    //     this.state.find = filter   
    //     this.props.changeFilter(filter, '')
    //         .then(() => {this.props.history.push(`/search_results`)})

    // }
    // handleAsian(e, filter) {
    //     e.preventDefault();
    //     this.state.find = filter   
    //     this.props.changeFilter(filter, '')
    //         .then(() => {this.props.history.push(`/search_results`)})

    // }

    // handleMexican(e, filter) {
    //     e.preventDefault();
    //      this.state.find = filter;   
    //     this.props.changeFilter(filter, '')
    //         .then(() => {this.props.history.push(`/search_results`)})

    // }
    handleCity(e, filter) {
        e.preventDefault();
         this.state.near = filter;   
        this.props.changeFilter('', filter)
            .then(() => {this.props.history.push(`/search_results`)})

    }



    render () {
        return (
          <div>
            <button onClick={(e) => this.handleCategory(e, "american")}>
              handle American
            </button>
            <button onClick={(e) => this.handleCategory(e, "korean")}>
              handle Korean
            </button>
            <button onClick={(e) => this.handleCategory(e, "asian")}>
              handle Asian
            </button>
            <button onClick={(e) => this.handleCategory(e, "mexican")}>
              handle Mexican
            </button>
            <button onClick={(e) => this.handleCity(e, "burlingame")}>
              handle Burlingame
            </button>
            <button onClick={(e) => this.handleCity(e, "san francisco")}>
              handle San Francisco
            </button>
          </div>
        );
    }

}

export default withRouter(PopularSeach);