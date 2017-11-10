import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div class="footer navbar-bottom" className="footer navbar-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <h4>Contact Us</h4>
                <a
                  target="_blank"
                  href="https://www.google.com/maps/place/8444+N+90th+St+%23110,+Scottsdale,+AZ+85258"
                >
                  <i className="fa fa-home" aria-hidden="true" /> 8444 N. 90th
                  St. #110 Scottsdale, AZ 85258
                </a>
                <br />
                <a target="_blank" href="mailto:info@codercamps.com">
                  <i className="fa fa-envelope" aria-hidden="true" />{" "}
                  info@codercamps.com
                </a>
                <br />
                <a href="tel:505-290-4953">
                  <i className="fa fa-phone" aria-hidden="true" /> +1 (480)
                  291-8500
                </a>
                <p>
                  <i className="fa fa-globe" aria-hidden="true" />{" "}
                  www.codercamps.com
                </p>
              </div>
              <div className="col-lg-4 col-md-4">
                <h4>Quick Links</h4>
                <a href="ourservices">
                  <i className="fa fa-square-o" aria-hidden="true" /> About Us
                </a><br></br>
                <a href="privacy">
                  <i className="fa fa-square-o" aria-hidden="true" /> Privacy
                </a><br></br>
                <a href="privacy">
                  <i className="fa fa-square-o" aria-hidden="true" /> Term &
                  Conditions
                </a><br></br>
                <a target="_blank" href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=7D6BXB6RXM6X8&lc=US&item_name=Foster%20The%20Future&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted">
                  <i className="fa fa-square-o" aria-hidden="true" /> Make a
                  Donatin
                </a>
              </div>
              <div className="col-lg-4 col-md-4">
                <h4>Stay In Touch</h4>
                <i className="social fa fa-facebook" aria-hidden="true" />
                <i className="social fa fa-twitter" aria-hidden="true" />
                <i className="social fa fa-instagram" aria-hidden="true" />
                <i className="social fa fa-linkedin" aria-hidden="true" />
                <i className="social fa fa-youtube" aria-hidden="true" />
                <i className="social fa fa-github" aria-hidden="true" />
                <br />
                <input type="text" placeholder=" Give online safe secure" />
                <a a target="_blank" href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=7D6BXB6RXM6X8&lc=US&item_name=Foster%20The%20Future&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted" className="btn btn-md btn-primary">Donate Now</a><br></br>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;