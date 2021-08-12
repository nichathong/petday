// import React from 'react';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Search from '../../search/search';



class BusinessShow extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchBusiness(this.props.match.params.businessId);

    }


    render() {         
        const biz = this.props.business;
        if (!biz) {
            return null;   
        } else {
            return (
              <div className="biz-show-container">
                <div className="biz-top-page">
                  <Link to="/"><img className="pet-day-logo-index" src="/petday_img/petday_logo_small.png"></img></Link>
                  <Search />
                </div>
                <div className="biz-top-container">
                  <div className="biz-photo-contianer">
                    <img className="head-img-photo"src="/petday_img/food1.jpeg" alt="" />
                    <img className="head-img-photo"src="/petday_img/food2.jpeg" alt="" />
                    <img className="head-img-photo"src="/petday_img/food4.jpeg" alt="" />
                    <img className="head-img-photo"src="/petday_img/food5.jpeg" alt="" />
                    {/* {this.props.business.photoUrls.map((photoUrl, 1) => (
                    //             <img className="business-pictures" key={i} src={photoUrl} />
                    //         ))} */}
                  </div>
                    <div className="biz-intro">
                        <div className="biz-info-text">
                            <h3>{this.props.business.name}</h3>
                            <div className="rating-star">
                                This is star rating
                            <span className="review-number">reviews
                                {/* {this.props.business.reviews.length} reviews */}
                            </span>
                            </div>
                            <div className="categories">
                            <p>this is categories</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="biz-below-photo-container">
                  <div className="biz-user-upload-links">
                    <button
                      className="biz-review-bttn"
                      onClick={() =>
                        this.props.history.push(
                          `businesses/${this.props.business.id}/reviews/create`
                        )
                      }
                    >
                      Write a Review
                    </button>
                  </div>
                </div>
                <div className="left-column">
                  <div className="business-menu-container">
                    <div className="business-menu-content">
                      <h3>Menu</h3>
                    </div>
                  </div>
                  <div className="business-page-covid-update">
                    <p className="covid-title">COVID-19 Updates</p>
                    <p className="updated-service">Updated Services</p>
                    <div className="business-show-result-bools">
                        {/* <p className="business-show-result-boolean">{this.props.business.delivery ? <img className="result-bool" src="http://d5yem10y0aabn.cloudfront.net/business_boolean/yes.png"/> : <img className="result-bool"src="http://d5yem10y0aabn.cloudfront.net/business_boolean/no.png"/>} Delivery</p>
                        <p className="business-show-result-boolean">{this.props.business.takeout ? <img className="result-bool"src="http://d5yem10y0aabn.cloudfront.net/business_boolean/yes.png"/> : <img className="result-bool"src="http://d5yem10y0aabn.cloudfront.net/business_boolean/no.png"/>} Takeout</p>
                        <p className="business-show-result-boolean">{this.props.business.outdoor ? <img className="result-bool"src="http://d5yem10y0aabn.cloudfront.net/business_boolean/yes.png"/> : <img className="result-bool"src="http://d5yem10y0aabn.cloudfront.net/business_boolean/no.png"/>} Outdoor seating</p> */}
                    </div>
                  </div>

                  <div className="location-and-hours-container">
                    <div className="hours-content">
                      <p className="location-hours-text">Location & Hours</p>
                      <div className="address-content">
                        <h3>Here is address and Google map</h3>
                      </div>
                    </div>
                  </div>

                  <div className="reviews-container">
                    <div>
                      <h4 className="recommend-reviews">Recommended Reviews</h4>
                      {/* <ReviewIndexContainer business={this.props.business} /> */}
                    </div>
                  </div>
                </div>

                <div className="right-column">
                  <div className="sticky-content">
                    <div className="sticky-info">
                      <h3>Here is sticky content</h3>
                      <ul>
                        <li><a>website</a></li>
                        <li><a>{biz.phone_number}</a></li>
                        <li><a>{biz.address}</a></li>
                        <li><a href="#"> message this business</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );

        }
    }
}

 
export default BusinessShow;

