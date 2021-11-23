import React from 'react';
import { withRouter } from 'react-router';
import HorizontalScroll from "react-scroll-horizontal";

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
            <h1 className="popular-search-title">
              Find pet-friendly restaurants by popular search
            </h1>
            <div className="popular-search-container">
              
                <div
                  
                  className="popular-search-items"
                  onClick={(e) => this.handleCategory(e, "american")}
                >
                  <img src={window.americanFood} className="category-img" />
                  <p className="pop-search-text">American</p>
                </div>
                <div
                  
                  className="popular-search-items"
                  onClick={(e) => this.handleCategory(e, "korean")}
                >
                  <img src={window.koreanFood} className="category-img" />
                  <br />
                  <p className="pop-search-text">Korean</p>
                </div>
                <div
                  
                  className="popular-search-items"
                  onClick={(e) => this.handleCategory(e, "asian")}
                >
                  <img src={window.japaneseFood} className="category-img" />
                  <br />
                  <p className="pop-search-text">Asian</p>
                </div>
                <div
                  
                  className="popular-search-items"
                  onClick={(e) => this.handleCategory(e, "mexican")}
                >
                  <img src={window.mexicanFood} className="category-img" />
                  <br />
                  <p className="pop-search-text">Mexican</p>
                </div>
                {/* <div
                  
                  className="popular-search-items"
                  onClick={(e) => this.handleCity(e, "San mateo")}
                >
                  <img src={window.sanMateoFood} className="category-img" />
                  <br />
                  <p className="pop-search-text">San Mateo</p>
                </div>
                <div
                  
                  className="popular-search-items"
                  onClick={(e) => this.handleCity(e, "san francisco")}
                >
                  <img src={window.sanFranFood} className="category-img" />
                  <br />
                  <p className="pop-search-text">San Francisco</p>
                </div> */}

                {/* <div className="popular-search-items">
              </div>
              <div className="popular-search-items">
              </div>
              <div className="popular-search-items">
              </div>

              <div className="popular-search-items">
              </div>
              <div className="popular-search-items">
              </div>
              <div className="popular-search-items">
              </div> */}
              
            </div>
          </div>
        );
    }

}

export default withRouter(PopularSeach);