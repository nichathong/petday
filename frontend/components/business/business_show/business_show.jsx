// import React from 'react';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Search from '../../search/search';
import ReviewIndexContainer from '../../reviews/review_index_container';
import Map from '../../map/map';
import { changeFilter } from '../../../actions/filter_actions';


class BusinessShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      find: "",
      near: this.props.near,
    };
    this.avgStar = "";
    this.oneStar = (
      <div>
        <i id="inv-star" className="fas fa-star str fa-2x"></i>
        <i className="fas fa-star str fa-2x"></i>
        <i className="far fa-star str-g fa-2x"></i>
        <i className="far fa-star str-g fa-2x"></i>
        <i className="far fa-star str-g fa-2x"></i>
        <i className="far fa-star str-g fa-2x"></i>
      </div>
    );
    this.oneHalfStar = (
      <div>
        <i id="inv-star" className="fas fa-star str fa-2x"></i>
        <i className="fas fa-star str fa-2x"></i>
        <i className="fas fa-star-half-alt str fa-2x"></i>
        <i className="far fa-star str-g fa-2x"></i>
        <i className="far fa-star str-g fa-2x"></i>
        <i className="far fa-star str-g fa-2x"></i>
      </div>
    );
    this.twoStar = (
      <div>
        <i id="inv-star" className="fas fa-star str fa-2x"></i>
        <i className="fas fa-star str fa-2x"></i>
        <i className="fas fa-star str fa-2x"></i>
        <i className="far fa-star str-g fa-2x"></i>
        <i className="far fa-star str-g fa-2x"></i>
        <i className="far fa-star str-g fa-2x"></i>
      </div>
    );
    this.twoHalfStar = (
      <div>
        <i id="inv-star" className="fas fa-star str fa-2x"></i>
        <i className="fas fa-star str fa-2x"></i>
        <i className="fas fa-star str fa-2x"></i>
        <i className="fas fa-star-half-alt str fa-2x"></i>
        <i className="far fa-star str-g fa-2x"></i>
        <i className="far fa-star str-g fa-2x"></i>
      </div>
    );
    this.threeStar = (
      <div>
        <i id="inv-star" className="fas fa-star str fa-2x"></i>
        <i className="fas fa-star str fa-2x"></i>
        <i className="fas fa-star str fa-2x"></i>
        <i className="fas fa-star str fa-2x"></i>
        <i className="far fa-star str-g fa-2x"></i>
        <i className="far fa-star str-g fa-2x"></i>
      </div>
    );
    this.threeHalfStar = (
      <div>
        <i id="inv-star" className="fas fa-star str fa-2x"></i>
        <i className="fas fa-star str fa-2x"></i>
        <i className="fas fa-star str fa-2x"></i>
        <i className="fas fa-star str fa-2x"></i>
        <i className="fas fa-star-half-alt str fa-2x"></i>
        <i className="far fa-star str-g fa-2x"></i>
      </div>
    );
    this.fourStar = (
      <div>
        <i id="inv-star" className="fas fa-star str fa-2x"></i>
        <i className="fas fa-star str fa-2x"></i>
        <i className="fas fa-star str fa-2x"></i>
        <i className="fas fa-star str fa-2x"></i>
        <i className="fas fa-star str fa-2x"></i>
        <i className="far fa-star str-g fa-2x"></i>
      </div>
    );
    this.fourHalfStar = (
      <div>
        <i id="inv-star" className="fas fa-star str fa-2x"></i>
        <i className="fas fa-star str fa-2x"></i>
        <i className="fas fa-star str fa-2x"></i>
        <i className="fas fa-star str fa-2x"></i>
        <i className="fas fa-star str fa-2x"></i>
        <i id="half-star" className="fas fa-star-half-alt str fa-2x"></i>
      </div>
    );
    this.fiveStar = (
      <div>
        <i id="inv-star" className="fas fa-star str fa-2x"></i>
        <i className="fas fa-star str fa-2x"></i>
        <i className="fas fa-star str fa-2x"></i>
        <i className="fas fa-star str fa-2x"></i>
        <i className="fas fa-star str fa-2x"></i>
        <i className="fas fa-star str fa-2x"></i>
      </div>
    );
  }
  componentDidMount() {
    const { find, near } = this.state;
    this.props.fetchBusiness(this.props.match.params.businessId);
    this.props.changeFilter(find, near);
  }

  render() {
    const biz = this.props.business;
    const { changeFilter } = this.props;
    if (!biz) {
      return null;
    } else {
      let finalRating = 0;
      if (biz.reviews.length === 0) {
        finalRating = (5.0).toFixed(2);
      } else {
        let sumRating = 0;
        let avgRating = 0;
        for (let i = 0; i < biz.reviews.length; i++) {
          sumRating += biz.reviews[i].rating;
        }
        avgRating = sumRating / biz.reviews.length;
        finalRating = avgRating.toFixed(2);
      }
      if (finalRating > 4.9) {
        this.avgStar = this.fiveStar;
      } else if (finalRating > 4.4 && finalRating <= 4.9) {
        this.avgStar = this.fourHalfStar;
      } else if (finalRating >= 4.0 && finalRating <= 4.4) {
        this.avgStar = this.fourStar;
      } else if (finalRating > 3.5 && finalRating < 4) {
        this.avgStar = this.threeHalfStar;
      } else if (finalRating >= 3 && finalRating <= 3.5) {
        this.avgStar = this.threeStar;
      } else if (finalRating > 2.5 && finalRating < 3) {
        this.avgStar = this.twoHalfStar;
      } else if (finalRating >= 2 && finalRating <= 2.5) {
        this.avgStar = this.twoStar;
      } else if (finalRating > 1.5 && finalRating < 2) {
        this.avgStar = this.oneHalfStar;
      } else {
        this.avgStar = this.oneStar;
      }

      const weekHours = biz.hours.split(",");

      return (
        <div className="biz-show-container">
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
          <div className="biz-top-container">
            <div className="biz-photo-contianer">
              {biz.photoUrls.map((photoUrl, i) => (
                <img className="business-pictures" key={i} src={photoUrl} />
              ))}
            </div>
            <div className="biz-intro">
              <div className="biz-info-text">
                <h3>{this.props.business.name}</h3>
                <div className="rating-star">
                  {this.avgStar}
                  <span className="review-number">
                    {biz.reviews.length} reviews
                  </span>
                </div>
                <div className="categories">
                  <div>{biz.categories}</div>
                </div>
              </div>
              <div className="all-photo-bttn-main">
                <button
                  className="see-photo-bttn"
                  onClick={() =>
                    this.props.history.push(
                      `/business/biz_photos/${this.props.business.id}`
                    )
                  }
                >
                  See {biz.photoUrls.length} Photos
                </button>
              </div>
            </div>
          </div>
          <div className="biz-below-photo-container">
            <div className="biz-user-upload-links">
              <button
                className="biz-review-bttn"
                onClick={() =>
                  this.props.history.push(
                    `/businesses/${this.props.business.id}/reviews/create`
                  )
                }
              >
                <i className="far fa-star"></i> Write a Review
              </button>
              <button
                className="biz-add-photo-bttn"
                onClick={() =>
                  this.props.history.push(
                    `/businesses/${this.props.business.id}/upload/photos`
                  )
                }
              >
                <i className="fas fa-camera"></i> Add Photo
              </button>
            </div>
          </div>
          <div className="main-content-business-show-page">
            <div className="left-column">
              <div className="business-page-covid-update">
                <div className="covid-title">COVID-19 Updates</div>
                <br />
                <div className="updated-service">Updated Services</div>
                <div className="business-show-result-bools">
                  <div className="business-show-result-boolean">
                    {this.props.business.delivery ? (
                      <i class="fas fa-check fa-lg fa-pull-left"></i>
                    ) : (
                      <i class="fas fa-times fa-lg fa-pull-left"></i>
                    )}
                    {"  "}
                    Delivery
                  </div>
                  <div className="business-show-result-boolean">
                    {this.props.business.takeout ? (
                      <i class="fas fa-check fa-lg fa-pull-left"></i>
                    ) : (
                      <i class="fas fa-times fa-lg fa-pull-left"></i>
                    )}
                    {"  "}
                    Takeout
                  </div>
                  <div className="business-show-result-boolean">
                    {this.props.business.outdoor ? (
                      <i class="fas fa-check fa-lg fa-pull-left"></i>
                    ) : (
                      <i class="fas fa-times fa-lg fa-pull-left"></i>
                    )}
                    {"  "}
                    Outdoor seating
                  </div>
                </div>
              </div>

              <div className="location-and-hours-container">
                <div className="hours-content">
                  <div className="location-hours-text">Location & Hours</div>
                  <div className="address-content">
                    <div className="business-location">
                      <div className="map-box-biz-show">
                        <Map
                          businesses=""
                          singleBusiness={true}
                          business={this.props.business}
                          changeFilter={changeFilter}
                        />
                      </div>
                      <ul className="biz-st">{biz.address}</ul>
                    </div>
                    <div className="business-hour">
                      <div className="hours">
                        <div>
                          {weekHours.map((hr) => (
                            <div className="each-hour">{hr}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="reviews-container">
                <div>
                  <h4 className="recommend-reviews">Recommended Reviews</h4>
                  <ReviewIndexContainer businessId={biz.id} />
                </div>
              </div>
            </div>

            <div className="right-column">
              <div className="sticky-content">
                <div className="sticky-info">
                  <ul>
                    <li>
                      <a>
                        <Link to={`${biz.website}`} />
                        {biz.website}{" "}
                        <i className="fas fa-external-link-alt fa-pull-right"></i>
                      </a>
                    </li>
                    <li>
                      <a>
                        {biz.phone_number}{" "}
                        <i className="fas fa-phone-square-alt fa-lg fa-pull-right"></i>
                      </a>
                    </li>
                    <li>
                      <a>
                        {biz.address}{" "}
                        <i className="fas fa-directions fa-lg fa-pull-right"></i>
                      </a>
                    </li>
                    {/* <li>
                            <a href="#"> message this business</a>
                          </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

 
export default BusinessShow;

