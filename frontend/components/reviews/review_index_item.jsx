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
                            <div className="profile-box">
                                <div className="user-info">
                                    <li className="user-username">{this.props.users[review.user_id].firstname.slice(0, 1).toUpperCase() + this.props.users[review.user_id].firstname.slice(1)} {this.props.users[review.user_id].lastname.slice(0,1).toUpperCase()}.</li>
                                    <li>{this.props.users[review.user_id].zip_code}</li>
                                </div>
                            </div>
                            <div className="rating-date-container">
                                <div className="review-rating">
                                    <img src={this.ratingStar} alt="" />
                                </div>
                                <div className="review-created-date">
                                    {this.realDate}
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

            )
        }
    }
}

export default ReviewIndexItem;