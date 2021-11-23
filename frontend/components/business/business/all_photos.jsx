import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import Search from "../../search/search";

class AllPhotos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          find: "",
          near: this.props.near
        };
        
    }

    componentDidMount() {
        const {find, near} = this.state;
        this.props.changeFilter(find,near);
        this.props.fetchBusiness(this.props.match.params.businessId);
        window.scrollTo(0, 0);
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
        const {changeFilter} = this.props;
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
                <Search find={this.props.find} near={this.props.near} changeFilter={changeFilter}/>
              </div>
              <div className="all-photos-container">
                <div className="all-photo-title">
                  Photos for {this.props.business.name}
                  <div className="add-photo">
                    <button
                      className="add-photo-bttn"
                      onClick={() => this.addPhoto(this.props.business.id)}
                    >Add Photo</button>
                  </div>
                </div>
                <div className="all-photo-grid-container">

                  <div className="all-photo-grid">
                      {this.props.business.photoUrls.map( (url, phoid) => <img src={url} key={phoid} className='each-all-photos'/> )}

                  </div>
                </div>
              </div>
            </div>
          </div>
        );

    }
}

export default withRouter(AllPhotos);