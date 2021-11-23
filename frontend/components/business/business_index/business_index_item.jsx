import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Footer from '../../footer/footer';

const BusinessIndexItem = ( {business, history} ) => {
    return (
            // <Link className="link-to-business" to={`/businesses/${business.id}`} />
        <div className="each-biz-containter" onClick={() => history.push(`/businesses/${business.id}`)}>
            <div className="each-biz">
                <img className="biz-img" src={business.photoUrls[0]} alt="" />
                <div className="right-index-business">
                    <div className="biz-details-box">
                    <div className="biz-name">{business.name}</div>
                    </div>
                    <div className="biz-location">
                        <div className="map-on-index">

                        </div>
                    <div className="biz-phone-num">{business.phone_number}</div>
                    <div>{business.address}</div>
                    </div>
                    <div className="biz-rating">
                    <div></div>
                    <div className="biz-num-reviews"></div>
                    </div>
                    <div className="biz-categories">

                </div>
                    <span className="biz-cost">{business.cost}</span>
                    <span className="biz-bullet">&#8226;</span>
                    <span className="biz-bullet">{business.categories}</span>
                    {/* {console.log(Object.values(business.categories))} */}
                    {/* {business.categories.map((category, i) => {
                        if (i === business.categories.length - 1) {
                        return (
                            <span className="result-category-name" key={i}>
                            {category.category}{" "}
                            </span>
                        );
                        } else {
                        return (
                            <span className="result-category-name" key={i}>
                            {category.category},{" "}
                            </span>
                        );
                        }
                    })} */}
                        <div className="result-booleans">
                            <div className="result-boolean">{business.delivery ? (<i className="fas fa-check fa-lg fa-pull-left"></i>) : (<i className="fas fa-times fa-lg fa-pull-left"></i>)}{"  "} Delivery</div>
                            <div className="result-boolean">{business.takeout ? (<i className="fas fa-check fa-lg fa-pull-left"></i>) : (<i className="fas fa-times fa-lg fa-pull-left"></i>)}{"  "} Takeout</div>
                            <div className="result-boolean">{business.outdoor ? (<i className="fas fa-check fa-lg fa-pull-left"></i>) : (<i className="fas fa-times fa-lg fa-pull-left"></i>)}{"  "} Outdoor seating</div>
                        </div>
                        <div className="biz-review">
                            {/* <div className="biz-review-text">"{business.reviews.length !== 0 ? `${business.reviews[0].message.split(" ").filter((w, i) => i < 30).join(" ")}...` : "Write the first review!"}"<span className="result-review-more">more</span></div> */}
                            
                        </div>
                </div>

            </div>
            {/* <Footer/> */}

        </div>  
    );
}


export default withRouter(BusinessIndexItem); 