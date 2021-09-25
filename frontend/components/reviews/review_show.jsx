import React from "react";
import { Link } from "react-router-dom";

class ReviewShow extends React.Component {
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
    this.realDate =
      this.date.getMonth() +
      1 +
      "/" +
      this.date.getDate() +
      "/" +
      this.date.getFullYear();
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props
      .deleteReview(this.props.review, this.props.business.id)
      .then(() => window.location.reload());
  }

  handleClick(id) {
    if (
      document.getElementById(`myReviewDropdown${id}`).style.display === "block"
    ) {
      document.getElementById(`myReviewDropdown${id}`).style.display = "none";
    } else {
      document.getElementById(`myReviewDropdown${id}`).style.display = "block";
    }
  }
  componentDidMount() {
    this.props.fetchUsers();
  }

  chooseProfile() {
    //   if (this.props.user[this.props.review.user_id].profile_pic === ) 
  }

  render() {
     if (this.props.users[this.props.review.user_id] === undefined) {
         return (
             <div>Opps! Something's wrong...</div>
         )
     } else {
         return (
           <div>
                <div className="review-box">
                    <div className="review-top-section">
                        <div className="profile-info-section">
                            <div className="profile-container">
                                <img
                                    className="user-profile-photo"
                                    src={this.chooseProfile}
                                    alt=""
                                />
                                <div className="user-info">
                                        <li className="user-name">
                                        {this.props.users[this.props.review.user_id].firstname +
                                            " " +
                                            this.props.users[this.props.review.user_id].lastname}
                                        </li>
                                        <li>{this.props.users[this.props.review.user_id].zipcode}</li>
                                </div>
                            </div>
                            <div className="rating-date-box">
                                <span className="review-rating">
                                    <img src={this.ratingStar} alt="" />
                                </span>
                                <span className="review-created-time">{this.realDate}</span>
                            </div>

                        </div>
                        {/* {this.editandDelete()} */}
                    </div>
                    <div className="review-main-content">
                        <div className="review-main-box">
                            {this.props.review.message}
                        </div>
                    </div>
                </div>
           </div>
           
         )
     }
  }


}