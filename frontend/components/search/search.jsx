import React from 'react';
import { withRouter } from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      find: "",
      near: this.props.near
    };
    // this.handleFilter = this.handleFilter.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);        
  }

  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value})
    }
  }

  // handleFilter(e, filter) {
  //   e.preventDefault();

  //   if (!this.props.near) {
  //     this.props.near = 'san francisco';
  //     this.props.changeFilter('near', this.props.near)
  //       .then(() => {
  //         this.props.changeFilter('find', filter)
  //           .then(() => { this.props.history.push(
  //             `/search?find=${filter}&near=${this.props.near}`
  //           )})
  //       });
  //   } else {
  //     this.props.changeFilter('find', filter)
  //       .then(() => { this.props.history.push(
  //         `/search?find_desc=${filter}&find_loc=${this.props.near}`
  //       ); })
  //   }
  // };

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    const {find, near} = this.state;
    this.props.changeFilter(find, near).then(() => {
      this.props.history.push(`/search_results`);
    });

    // let find = this.state.find.split(' ').join('-');
    // let near;
    // if (!this.state.near) {
    //   near = 'san francisco';
    // } else {
    //   near = this.state.near.split(' ').join('-');
    // }
    // this.props.changeFilter('near', near)
    //   .then(() => {
    //     this.props.changeFilter('find', this.state.find)
    //       .then(() => { this.props.history.push(`/search?find_desc=${find}&find_loc=${near}`);})
    //   });
    }

    render() {
    
      return (
        <div>
          <form className="the-whole-search-box">
            <div className="search-box-homepage-container">
              <label htmlFor="header-search">
                <span className="visually-hidden">Search blog posts</span>
              </label>
              <input
                className="search-box-home"
                type="text"
                id="header-search"
                placeholder="  e.g. taco, pancake, boba.."
                onChange={this.handleInput('find')}
                value={this.state.find}
              />
              <input
                className="search-box-home"
                type="text"
                id="header-search"
                placeholder="  City, town.. "
                onChange={this.handleInput('near')}
                value={this.state.near}
              />
              <button 
                type="submit" 
                className="search-box-submit-bttn-home"
                onClick={this.handleSubmit}
                >
                <img className="submit-icon-petday" src="/petday_img/petday_icon.png" alt="" />
              </button>
            </div>
          </form>
        </div>
    
      )
    };
}


export default Search;

