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
                    <p className="biz-name">{business.name}</p>
                    </div>
                    <div className="biz-location">
                        <div className="map-on-index">

                        </div>
                    <p className="biz-phone-num">{business.phone_number}</p>
                    <p>{business.address}</p>
                    </div>
                    <div className="biz-rating">
                    <p></p>
                    <p className="biz-num-reviews"></p>
                    </div>
                    <div className="biz-categories">

                </div>
                    <span className="biz-cost">{business.cost}</span>
                    <span className="biz-bullet">&#8226;</span>
                    {business.categories}
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
                            <p className="result-boolean">{business.delivery ? <img className="result-bool" src="http://d5yem10y0aabn.cloudfront.net/business_boolean/yes.png"/> : <img className="result-bool"src="http://d5yem10y0aabn.cloudfront.net/business_boolean/no.png"/>} Delivery</p>
                            <p className="result-boolean">{business.takeout ? <img className="result-bool"src="http://d5yem10y0aabn.cloudfront.net/business_boolean/yes.png"/> : <img className="result-bool"src="http://d5yem10y0aabn.cloudfront.net/business_boolean/no.png"/>} Takeout</p>
                            <p className="result-boolean">{business.outdoor ? <img className="result-bool"src="http://d5yem10y0aabn.cloudfront.net/business_boolean/yes.png"/> : <img className="result-bool"src="http://d5yem10y0aabn.cloudfront.net/business_boolean/no.png"/>} Outdoor seating</p>
                        </div>
                        <div className="biz-review">
                            {/* <p className="biz-review-text">"{business.reviews.length !== 0 ? `${business.reviews[0].message.split(" ").filter((w, i) => i < 30).join(" ")}...` : "Write the first review!"}"<span className="result-review-more">more</span></p> */}
                            
                        </div>
                </div>

            </div>
            {/* <Footer/> */}

        </div>  
    );
}


export default withRouter(BusinessIndexItem); 