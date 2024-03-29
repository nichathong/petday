import React from "react";
import { withRouter } from "react-router";
import Footer from "../../footer/footer";
import GreetingContainer from "../../greeting/greeting_container"
import { Link } from "react-router-dom";
import Search from "../../search/search_container";
class BusinessPhoto extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      business: this.props.business,
      photoFile: null,
      photoUrl: null,
      find: "",
      near: this.props.near
    };

    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  update = (field, e) => {
    this.setState({ [field]: e.currentTarget.value });
  };

  componentDidMount() {
    const { find, near} = this.state;
    this.props.changeFilter(find, near);
    this.props.fetchBusiness(this.props.match.params.businessId);
    window.scrollTo(0, 0);
  }
  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    } else {
      this.setState({ photoUrl: "", photoFile: null });
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    if (!this.props.user) {
      this.props.history.push("/login");
    } else {
      const formData = new FormData();
      if (this.state.photoFile) {
        formData.append("business[photo]", this.state.photoFile);
        formData.append("business[url]", this.state.photoUrl);
      }

      $.ajax({
        url: `/api/businesses/${this.props.business.id}`,
        method: "PATCH",
        data: formData,
        contentType: false,
        processData: false,
      }).then(
        this.props.history.push(`/business/biz_photos/${this.props.business.id}`)
      );
    }
  }

  navigateBack() {
    this.props.history.push(
      `/businesses/${this.props.match.params.businessId}`
    );
  }


  render() {
    const { changeFilter } = this.props;
    const preview = this.state.photoUrl ? (<img className="preview-image" src={this.state.photoUrl} />) : null;
    if (this.props.business === undefined) return null;
    // if (this.props.business === undefined) return "Opps, something is worng!"; // if (this.props.business === undefined) return null;
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
                  <div
                    className="photo-form-business-name"
                    onClick={() =>
                      history.push(`/businesses/${this.props.business.id}`)
                    }
                  >
                    {this.props.business.name} :
                    <span className="photo-form-add-photo-title">
                      {" "}
                      Add Photos
                    </span>
                  </div>
                </div>
                <div className="photo-box">
                  <label className="upload-photo-text">
                    Upload
                    <input
                      type="file"
                      onChange={this.handleFile}
                      className="upload-icon"
                    />
                    <div className="preview-photo">{preview}</div>
                  </label>
                </div>
              </div>
              <button type="submit" className="review-post-button">
                Upload
              </button>
              <button
                onClick={() => this.navigateBack()}
                className="review-post-button-photo-cancel"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(BusinessPhoto)