import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import BusinessIndexContainer from '../components/business/business_index/business_index_container';

import GreetingContainer from '../components/greeting/greeting_container';
import SearchContainer from '../components/search/search_container';
import Footer from '../components/footer/footer';
import PopularSearch from '../components/business/poplular_search/popular_search';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="home">
        {/* <div className="top-img-frame">
                <img className="top-img" src="/petday_img/photo10.jpeg"/>
            </div> */}

        <div className="main-div">
          <GreetingContainer />
          <img
            className="petday-logo"
            src="/petday_img/petday_logo_small.png"
            alt="petdaylogo"
          />
          <SearchContainer />
          <div className="under-search-bar">
            <Link
              className="plumbers"
              to="https://www.yelp.com/search?cflt=Plumbing&find_loc=Burlingame%2C+CA+94010"
            >
              Plumbers
            </Link>
            <Link className="restaurants" to="/businesses">
              Restaurants
            </Link>
            <Link
              className="homeservice"
              to="https://www.yelp.com/search?cflt=hvac&find_loc=Burlingame%2C+CA+94010"
            >
              Home Services
            </Link>
            <Link className="delivery" to="/businesses">
              Delivery
            </Link>
            <Link
              className="blackOwned"
              to="https://www.yelp.com/search?find_desc=Black+Owned+Restaurants&find_loc=Burlingame%2C+CA+94010"
            >
              Black Owned
            </Link>
          </div>
          <PopularSearch changeFilter={this.props.changeFilter}/>
          {/* <BusinessIndexContainer /> */}
        </div>
        <div className="footer-content">
        <Footer />
        </div>
      </div>
    );
  }
}

export default Homepage;