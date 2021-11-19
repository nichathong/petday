import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'; 
import BusinessIndexItem from './business_index_item';
// BusinessIndexItem = withRouter(BusinessIndexItem);
import Search from '../../search/search';
import Map from '../../map/map';
import Footer from '../../footer/footer';


class BusinessIndex extends React.Component {
    constructor(props) {
        super(props)
        // console.log(props) 
        this.state = {
          find: "",
          near: this.props.near,
        };
        // this.state = { 
        //     search: this.props.location.search.split("=")[1]
        //  }
        // this.handleClick = this.handleClick.bind(this)
    }


    componentDidMount() {
        const { find, near } = this.state;
        // if (this.props.businesses.length === 0) {
        //     this.props.changeFilter('near', this.props.near)
        //     .then(() => {
        //         this.props.changeFilter('find', this.state.find)
        //     });
        // }
        this.props.changeFilter(find, near);
        window.scrollTo(0, 0);
        this.props.fetchBusinesses();

    }
    // handleClick(e) {
    //   console.log('click')
    //   this.props.history.push(`/businesses/${e.target.id}`)
    // } 


    render() { 
      // console.log(this.props.businesses)
      if (this.props.businesses.length === 0) {
        return null
      }
        const biz = (Object.values(this.props.businesses[0]));
        const { businesses, changeFilter } = this.props;
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
                <Search find={this.props.find} near={this.props.near} changeFilter={changeFilter}/>
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
                  businesses={businesses}
                  changeFilter={changeFilter}
                  find={this.props.find}
                  near={this.props.near}
                />
              </div>
            </div>
            <div className="footer-content">
            <Footer/>
            </div>
          </div>
        );
    }
}
 
export default BusinessIndex;