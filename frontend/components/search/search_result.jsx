import React from "react";
import { Link } from "react-router-dom";
import BusinessIndex from "../business/business_index/business_index";
import Map from '../map/map'
import Footer from "../footer/footer";

class SearchResult extends React.Component {
    render () {
        return (
          <div className="">
            <div className="biz-page-top-index">
              <div className="biz-top-page">
                {/* <img className="pet-day-logo-index" src="/petday_img/petday_logo_small.png"></img> */}
                <Link to="/">
                  <img
                    className="pet-day-logo-index"
                    src="/petday_img/petday_logo_small.png"
                  ></img>
                </Link>
                <Search find={this.props.find} near={this.props.near} />
              </div>
            </div>
            <div className="biz-index-main">
              <div className="biz-index-left">
                <div className="text-header">
                  {" "}
                  Pet-friendly Restaurants in your area
                </div>
                <div className="all-results">All results</div>
                <div>
                  <BusinessIndex
                    business={this.props.businesses}
                    changeFilter={this.props.chageFilter}
                    find={this.props.find}
                    near={this.props.near}
                  />
                </div>
              </div>
              <div className="map-in-index">
                <Map
                  businesses={businesses}
                  changeFilter={changeFilter}
                  find={this.props.find}
                  near={this.props.near}
                />
              </div>
            </div>
            <Footer/>
          </div>
        );
    }
}

export default SearchResult;