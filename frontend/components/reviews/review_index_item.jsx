import React from 'react';

class ReviewIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.ratingStar = "";
        if (this.props.review.rating === 1) {
            this.ratingStar = window.oneStar;
        } else if (this.props.review.rating === 2) {
            this.ratingStar = window.twoStar;
        } else if (this.props.review.rating === 3) {
            this.ratingStar = window.threeStar;
        } else if (this.props.review.rating === 4) {
            this.ratingStar = window.fourStar;
        } else {
            this.ratingStar = window.fiveStar;
        }
        this.date = new Date(this.props.review.created_at);
        this.realDate = (this.date.getMonth() + 1) + "/" + this.date.getDate() + "/" + this.date.getFullYear();
        this.handleDelete = this.handleDelete.bind(this);

    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteReview(this.props.review, this.props.business.id);
    }

    componentDidMount() {
        this.props.fetchUsers();
    }

    chooseProfile() {
    
    if (this.props.users[this.props.review.user_id].profile_pic === "harry") {
        return window.harry
    } else if (this.props.users[this.props.review.user_id].profile_pic === "ron") {
        return window.ron
    } else if (this.props.users[this.props.review.user_id].profile_pic === "hermione") {
        return window.hermione
    } else if (this.props.users[this.props.review.user_id].profile_pic === "hagrid") {
        return window.hagrid
    } else if (this.props.users[this.props.review.user_id].profile_pic === "drago") {
        return window.drago
    } else if (this.props.users[this.props.review.user_id].profile_pic === "george") {
        return window.george
    } else if (this.props.users[this.props.review.user_id].profile_pic === "dumbledore") {
        return window.dumbledore
    } else if (this.props.users[this.props.review.user_id].profile_pic === "snape") {
        return window.snape
    } else if (this.props.users[this.props.review.user_id].profile_pic === "mcgonagall") {
        return window.mcgonagall
    } else if (this.props.users[this.props.review.user_id].profile_pic === "dobby") {
        return window.dobby
    } else if (this.props.users[this.props.review.user_id].profile_pic === "guest") {
        return window.guest
    }
  } 


    render () {
        
        const { review, currentUser } = this.props;
        if (this.props.users[this.props.review.user_id] === undefined) {
            return (
                <div>
                    loading...
                </div>
            );
        } else { 
            return (
              <div>
                <div className="review-container">
                  <div className="review-profile-container">
                      <div className="profile-component-box">

                        <div className="profile-box">
                            <img
                                className="user-profile-photo"
                                src={this.chooseProfile()}
                                alt=""
                            />
                            <div className="user-info">
                                <li className="user-username">
                                {this.props.users[review.user_id].firstname
                                    .slice(0, 1)
                                    .toUpperCase() +
                                    this.props.users[review.user_id].firstname.slice(
                                    1
                                    )}{" "}
                                {this.props.users[review.user_id].lastname
                                    .slice(0, 1)
                                    .toUpperCase()}
                                .
                                </li>
                                <li >{this.props.users[review.user_id].zipcode}</li>
                            </div>
                        </div>
                            <div className="rating-date-container">
                        <div className="review-rating">
                            <img src={this.ratingStar} alt="" />
                            <div className="review-created-date">{this.realDate}</div>
                        </div>
                        </div>
                      </div>
                  </div>
                  <div className="review-message-container">
                    <div className="review-message-box">
                      {this.props.review.message}
                    </div>
                  </div>
                </div>
              </div>
            );
        }
    }
}

export default ReviewIndexItem;