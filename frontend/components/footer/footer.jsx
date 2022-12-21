import React from 'react';

class Footer extends React.Component {
    render() {
        return (
          <div className="footer-container">
            <div className="footer-content">
              <div className="footer-section">
                <p className="footer-title">
                  About
                  <div className="about-links">
                    <div className="sub-link">
                      {/* need to change the link to porforlio  */}
                      <a href="https://nichathong.github.io/portfolio/">
                        Portforlio
                      </a>
                    </div>
                    <div className="sub-link">
                      <a href="https://github.com/nichathong/petday">Github</a>
                    </div>
                    <div className="sub-link">
                      <a href="https://angel.co/u/nicha-thongpanchang">
                        AngleList
                      </a>
                    </div>
                    <div className="sub-link">
                      <a href="https://www.linkedin.com/in/nicha-thpng/">
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </p>
                <p className="footer-title">
                  Project
                  <div className="about-links">
                    <div className="sub-link">
                      <a href="https://nichathong.github.io/Javascript_project/">
                        Bay House Price
                      </a>
                    </div>
                    <div className="sub-link">
                      <a href="https://sprout-plant-app.herokuapp.com/#/">
                        Sprout
                      </a>
                    </div>
                    <div className="sub-link">
                      <a href="https://github.com/nichathong/petday">Petday</a>
                    </div>
                  </div>
                </p>
                <p className="footer-title">
                  My Pets
                  <div className="about-links">
                    <div className="sub-link">
                      <a href="#">Snow</a>
                    </div>
                    <div className="sub-link">
                      <a href="#">Casper</a>
                    </div>
                    <div className="sub-link">
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