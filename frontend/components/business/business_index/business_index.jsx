import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'; 
import BusinessIndexItem from './business_index_item';
import SearchContainer from '../../search/search_container';
import Map from '../../map/map';
import Footer from '../../footer/footer';



class BusinessIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          find: "",
          near: this.props.near,
        };
    }


    componentDidMount() {
        const { find, near } = this.state;
        this.props.changeFilter(find, near);
        window.scrollTo(0, 0);
        this.props.fetchBusinesses();

    }


    render() { 
      console.log(this.props.businesses)
      if (this.props.businesses.length === 0) {
        return null
      }
        const biz = (Object.values(this.props.businesses[0]));
        // console.log(biz)
        const { changeFilter } = this.props;
        return (
          <div className="">
            <div className="biz-page-top-index">
              <div className="biz-top-page">
                <Link to="/">
                  <img
                    className="pet-day-logo-index"
                    src="/petday_img/petday_logo_small.png"
                  ></img>
                </Link>
                <SearchContainer
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
                  {biz.map((b, i) => (
                    <BusinessIndexItem
                      key={i}
                      business={b}
                      changeFilter={changeFilter}
                      find={this.props.find}
                      near={this.props.near}
                    />
                  ))}
                </div>
              </div>
              <div className="map-in-index">
                <Map
                  businesses={biz}
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
 
export default BusinessIndex;