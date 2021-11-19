import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

class AllPhotos extends React.Component {
    constructor(props) {
        super(props);
        console.log("all-photos-component", this.props)
    }

    componentDidMount() {
        this.props.fetchBusiness(this.props.match.params.businessId);
    }

    addPhoto = (businessId) => {
        if (!this.props.id) {
            alert("Please log in!")  
        } else {
            this.props.history.push(`/businesses/${businessId}/upload/photos`);
        }
    }

    goToPhoto = (link) => {
        window.open(link, "_blank")
    }
    
    render () {
      console.log(this.props);
        if (this.props.business === undefined) return "Opps! somthing is wrong";
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
              </div>
              <div>need to import navbar</div>
              <div className="all-photos-container">
                <div className="all-photo-title">
                  Photos for {this.props.business.name}
                  <button
                    className="add-photo-bttn"
                    onClick={() => this.addPhoto(this.props.business.id)}
                  >Add Photo</button>
                </div>
                <div className="all-photo-grid">
                    {this.props.business.photoUrls.map( (url, idx) => <img src={url} key={idx} className='business-photo-show'/> )}

                </div>
              </div>
            </div>
          </div>
        );

    }
}

export default withRouter(AllPhotos);