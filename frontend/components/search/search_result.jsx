import React from "react";
import { Link } from "react-router-dom";
import BusinessIndex from "../business/business_index/business_index";
import Map from '../map/map'
import Footer from "../footer/footer";
import Search from "./search";
import BusinessIndexItem from "../business/business_index/business_index_item";

class SearchResult extends React.Component {
    render () {
      console.log(this.props.businesses);
      debugger
      const { businesses, changeFilter } = this.props;
        return (
          // <div>
          //   Hello
          // </div>
          <div className="">
            <div className="biz-page-top-index">
              <div className="biz-top-page">
                <Link to="/">
                  <img
                    className="pet-day-logo-index"
                    src="/petday_img/petday_logo_small.png"
                  ></img>
                </Link>
                <Search
                  find={this.props.find}
                  near={this.props.near}
                  changeFilter={changeFilter}
                />
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
                  {businesses.map((b, i) => (
                    <BusinessIndexItem
                      key={i}
                      business={b}
                      changeFilter={changeFilter}
                      find={this.props.find}
                      near={this.props.near}
                    />
                  ))}
                </div>
                {/* <div>
                  <BusinessIndex
                    businesses={businesses}
                    changeFilter={changeFilter}
                    find={this.props.find}
                    near={this.props.near}
                  />
                </div> */}
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
            <div className="footer-content">
              <Footer />
            </div>
          </div>
        );
    }
}

export default SearchResult;