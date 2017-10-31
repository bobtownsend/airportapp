 <div id="footer-signin" className="footer" className="footer">
      <div className="container">
          <div className="row">
              <div className="col-lg-4 col-md-4">
                  <h4>Contact Us</h4>
                  <p><i className="fa fa-home" aria-hidden="true"></i> 8444 N. 90th St. #110 Scottsdale, AZ 85258</p>
                  <p><i className="fa fa-envelope" aria-hidden="true"></i> info@codercamps.com</p>
                  <p><i className="fa fa-phone" aria-hidden="true"></i>  +1 855 755 2267</p>
                  <p><i className="fa fa-globe" aria-hidden="true"></i>  www.codercamps.com</p>
              </div>
              <div className="col-lg-4 col-md-4">
                  <h4>About</h4>
                  <p><i className="fa fa-square-o" aria-hidden="true"></i> About Us</p>
                  <p><i className="fa fa-square-o" aria-hidden="true"></i> Privacy</p>
                  <p><i className="fa fa-square-o" aria-hidden="true"></i> Term & Conditions</p>
              </div>
              <div className="col-lg-4 col-md-4">
                 <h4>Stay In Touch</h4>
                 <i className="social fa fa-facebook" aria-hidden="true"></i>
                 <i className="social fa fa-twitter" aria-hidden="true"></i>
                 <i className="social fa fa-instagram" aria-hidden="true"></i>
                 <i className="social fa fa-linkedin" aria-hidden="true"></i>
                 <i className="social fa fa-youtube" aria-hidden="true"></i>
                 <i className="social fa fa-github" aria-hidden="true"></i><br/>
                 <input type="email" placeholder="    Subsribe For Updates"/><button className="btn btn-md btn-primary">Subscribe</button>
              </div>
          </div>
      </div>
  </div>
      </div>

</div>



    )}

};



function validate (formProps) {
  const errors = {};

  if (!formProps.email) {
    errors.email = 'Please enter an email';
  };

  if (!formProps.password) {
    errors.password = 'Please enter a password';
  };

  if (!formProps.passwordConfirm) {
    errors.passwordConfirm = 'Please enter a password confirmation';
  };

  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords must match';
  };

  return errors;
}

function mapStateToProps (state) {
  return { errorMessage: state.auth.error };
};

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
  validate
}, mapStateToProps, actions)(Signup);

