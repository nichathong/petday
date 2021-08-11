import React from 'react';
import { Link } from 'react-router-dom';
import BusinessIndexItem from './business_index_item';

class BusinessIndex extends React.Component {
    constructor(props) {
        super(props);
        // this.state = { 
        //     search: this.props.location.search.split("=")[1]
        //  }
    }

    componentDidMount() {
        this.props.fetchBusinesses();
    }

    render() { 
        const { businesses } = this.props;
        return (
          <div>
            <div className="biz-page-top-index">
                <div className="biz-top-page">
                <Link to="/"><img className="top-logg-icon" scr="/petday_img/petday_icon.png"></img></Link>
                </div>
            </div>
            <div className="biz-index-main">
                <div> 
                 <p className="text-header"> Pet Friendly restaurant in the Bay</p>
                 <p className="all-results">All results</p>
                </div>
                <div>
                    {businesses.map((b, i) => (
                        <BusinessIndexItem key={i} business={b} />
                    ))}
                </div>
            </div>
            <div className="map-box-index-page">
                <div>Business map is here</div>
            </div>
          </div>
        );
    }
}
 
export default BusinessIndex;