import React from 'react';

class Footer extends React.Component {
    //Add comment to trigger heroku change
    render() {
        return (
          <div className="footer-container">
            <div className="footer-content">
              <div className="footer-section">
                <p className="footer-title">
                  About
                  <div className="about-links">
                    <div className="sub-link">
                      <a
                        href="https://nichathong.github.io/portfolio/"
                        target="_blank"
                      >
                        Portforlio
                      </a>
                    </div>
                    <div className="sub-link">
                      <a
                        href="https://github.com/nichathong/petday"
                        target="_blank"
                      >
                        Github
                      </a>
                    </div>
                    <div className="sub-link">
                      <a
                        href="https://angel.co/u/nicha-thongpanchang"
                        target="_blank"
                      >
                        AngleList
                      </a>
                    </div>
                    <div className="sub-link">
                      <a
                        href="https://www.linkedin.com/in/nicha-thpng/"
                        target="_blank"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </p>
                <p className="footer-title">
                  Project
                  <div className="about-links">
                    <div className="sub-link">
                      <a
                        href="https://nichathong.github.io/Javascript_project/"
                        target="_blank"
                      >
                        Bay House Price
                      </a>
                    </div>
                    <div className="sub-link">
                      <a
                        href="https://sprout-plant-app.herokuapp.com/#/"
                        target="_blank"
                      >
                        Sprout
                      </a>
                    </div>
                    <div className="sub-link">
                      <a
                        href="https://github.com/nichathong/petday"
                        target="_blank"
                      >
                        Petday
                      </a>
                    </div>
                  </div>
                </p>
                <p className="footer-title">
                  My Pets
                  <div className="about-links">
                    <div className="sub-link-mypet">
                      <a href="#">Snow</a>
                    </div>
                    <div className="sub-link-mypet">
                      <a href="#">Casper</a>
                    </div>
                    <div className="sub-link-mypet">
                      <a href="#">Sua</a>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>
        );
    }
}

export default Footer;