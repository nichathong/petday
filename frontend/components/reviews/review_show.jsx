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
}