import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'; 
import BusinessIndexItem from './business_index_item';
// BusinessIndexItem = withRouter(BusinessIndexItem);
import Search from '../../search/search';
import Map from '../../map/map';


class BusinessIndex extends React.Component {
    constructor(props) {
        super(props);
        // this.state = { 
        //     search: this.props.location.search.split("=")[1]
        //  }
    }

    // componentDidMount() {
    //     this.props.fetchBusinesses();
    // }

    componentDidMount() {
        let near = this.props.near;
        let find = this.props.find;
        
    }

    render() { 
        const { businesses, changeFilter } = this.props;

        return (
          <div className="">
            <div className="biz-page-top-index">
                <div className="biz-top-page">
                {/* <img className="pet-day-logo-index" src="/petday_img/petday_logo_small.png"></img> */}
                <Link to="/"><img className="pet-day-logo-index" src="/petday_img/petday_logo_small.png"></img></Link>
                <Search />
                </div>
            </div>
            <div className="biz-index-main">
                <div className="biz-index-left"> 
                 <div className="text-header"> Pet-friendly Restaurants in your area</div>
                 <div className="all-results">All results</div>
                <div>
                    {businesses.map((b, i) => (
                        <BusinessIndexItem key={i} business={b} />
                    ))}
                </div>
                </div>
                <div className="map-in-index">
                <Map businesses={businesses} changeFilter={changeFilter}/>

                </div>
            </div>
          </div>
        );
    }
}
 
export default BusinessIndex;