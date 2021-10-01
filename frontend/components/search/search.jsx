import React from 'react';
import { withRouter } from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchBody: "",
      find: "",
      near: this.props.near
    };

    this.handleFilter = this.handleFilter.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);        
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value})
    }
  }

  handleFilter(e, filter) {
    e.preventDefault();

    if (!this.props.near) {
      this.props.near = 'san francisco';
      this.props.changeFilter('near', this.props.near)
        .then(() => {
          this.props.changeFilter('find', filter)
            .then(() => { this.props.history.push(
              `/search?find=${filter}&near=${this.props.near}`
            )})
        });
    } else {
      this.props.changeFilter('find', filter)
        .then(() => { this.props.history.push(`/search?find=${filter}&near=${this.props.near}`) })
    }
  };

  handleSubmit(e) {
    e.preventDefault();

    let find = this.state.find.split(' ').join('-');
    let near;
    if (!this.state.near) {
      near = 'san francisco';
    } else {
      near = this.state.near.split(' ').join('-');
    }

    this.props.changeFilter('near', near)
      .then(() => {
        this.props.changeFilter('find', this.state.find)
          .then(() => { this.props.history.push(`/search?find=${find}&near=${near}`);})
      });
    }

    
    render() {
    
      return (
        <div>
          <form className="the-whole-search-box" action="/" method="get">
            <div className="search-box-homepage-container">
              <label htmlFor="header-search">
                <span className="visually-hidden">Search blog posts</span>
              </label>
              <input
                className="search-box-home"
                type="text"
                id="header-search"
                placeholder="  e.g. taco, pancake, boba.."
                name="s"
              />
              <input
                className="search-box-home"
                type="text"
                id="header-search"
                placeholder="  City, town.. "
                name="s"
              />
              <button type="submit" className="search-box-submit-bttn-home">
                <img className="submit-icon-petday" src="/petday_img/petday_icon.png" alt="" />
              </button>
            </div>
          </form>
        </div>
    
      )
    };
}


export default Search;

