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


  handleSubmit(e) {
    e.preventDefault();
    const {find, near} = this.state;
    // console.log(find, near);
    console.log("search",this.props)
    this.props.changeFilter(find, near).then(() => {
      this.props.history.push(`/search_results`);
    });

    window.scrollTo(0,0)
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

