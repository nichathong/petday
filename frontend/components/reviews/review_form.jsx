import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom'; 
import Search from '../search/search';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ReviewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            message: '',
            rating: '',
            user_id: this.props.user_id,
            business_id: this.props.match.params.businessId,
            find: '',
            near: this.props.near
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleHover = this.handleHover.bind(this);
        this.handleRatingChange = this.handleRatingChange.bind(this);
    }

    handleChange(type){
        return(e) => (
            this.setState({[type]: e.currentTarget.value})
        )
    }

    componentDidMount(){
        const { find, near} = this.state;
        this.props.changeFilter(find, near);
        this.props.fetchBusiness(this.props.match.params.businessId)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createReview(this.state).then(()=> this.props.history.push(`/businesses/${this.state.business_id}`))

    }

    handleHover(n){

        if (this.state.rating === '') {
            const ratingText = document.getElementById("rating-text");
            if (n === 1) {
        
                ratingText.innerText = "Not good"
            } else if (n === 2) {
                ratingText.innerText = "Could've been better"
            } else if (n === 3) {
                ratingText.innerText = "OK"
            } else if (n === 4) {
                ratingText.innerText = "Good"
            } else if (n === 5) {
                ratingText.innerText = "Great"
            } else {
                ratingText.innerText = "Select your rating"
            }
            
        } else {
            const ratingText = document.getElementById("rating-text");
            if (n === 1) {
        
                ratingText.innerText = "Not good"
            } else if (n === 2) {
                ratingText.innerText = "Could've been better"
            } else if (n === 3) {
                ratingText.innerText = "OK"
            } else if (n === 4) {
                ratingText.innerText = "Good"
            } else if (n === 5) {
                ratingText.innerText = "Great"
            } else {
                if (this.state.rating === 1) {
            
                    ratingText.innerText = "Not good"
                } else if (this.state.rating === 2) {
                    ratingText.innerText = "Could've been better"
                } else if (this.state.rating === 3) {
                    ratingText.innerText = "OK"
                } else if (this.state.rating === 4) {
                    ratingText.innerText = "Good"
                } else if (this.state.rating === 5) {
                    ratingText.innerText = "Great"
                }
            }
        }
        
    }

    handleRatingChange(n){
        this.setState({rating: n})
        const ratingText = document.getElementById("rating-text");
        if (n === 1) {
            ratingText.innerText = "Not good"
        } else if (n === 2) {
            ratingText.innerText = "Could've been better"
        } else if (n === 3) {
            ratingText.innerText = "OK"
        } else if (n === 4) {
            ratingText.innerText = "Good"
        } else if (n === 5) {
            ratingText.innerText = "Great"
        } else {
            ratingText.innerText = "Select your rating"
        }
    }

    render() {
        const { changeFilter } = this.props; 
        return (
          <div>
            <div className="navbar-review-space">
              <div className="review-form-navbar">
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
              <div className="review-form-box">
                <form onSubmit={this.handleSubmit}>
                  <div className="review-form-content">
                    <div className="review-form-text">
                      <span className="review-form-business-name">
                        {this.props.business.name}
                      </span>
                    </div>
                    <div className="review-box">
                      <p id="rating-text" className="select-your-rating">
                        Select your rating
                      </p>

                      <Rating
                        emptySymbol="fa fa-star fa-2x un-filled"
                        initialRating={this.state.rating}
                        fullSymbol="fa fa-star fa-2x filled"
                        onChange={this.handleRatingChange}
                        className="rating"
                        onHover={this.handleHover}
                      />
                      <textarea
                        className="text-area-text"
                        value={this.state.message}
                        onChange={this.handleChange("message")}
                        placeholder="It's amazing that they've added delivery due to COVID. The delivery wasn't perfert--they forgot one of my side dishes--but I understand this is a new operation for them at this time. Even so, the burrito was delicious and more than made up for it!"
                      ></textarea>
                      {/* <div className={classNameErrors}>
                                        {this.renderErrors()}
                                </div> */}
                    </div>
                  </div>
                  <button className="review-post-button">Post Review</button>
                </form>
              </div>
            </div>
          </div>
        );
        // const classNameErrors = (this.props.errors.length !== 0) ? "review-errors-box" : ""
        // if (!this.props.business) {
        //     return (
        //         <div>Loading..</div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             <p>Hello</p>
        //         </div>
        //     )
        // }
    }
}

export default ReviewForm