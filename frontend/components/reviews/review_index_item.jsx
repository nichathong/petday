import React from 'react';

class ReviewIndexItem extends React.Component {
    constructor(props) {
        super(props)

    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteReview(this.props.review, this.props.businessId);
    }


    render () {
        const { review, currentUser } = this.props;
        return (
            <div>
                here is your reviews
            </div>
        )
    }
}

export default ReviewIndexItem;