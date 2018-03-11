import React from 'react';
import { RemarkableHeader, SignInFooter } from './SigningComponents';

class SignInPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(obj) {
    this.setState(Object.assign({}, this.state, obj));
  }

  handleSubmit() {
    console.log(this.state);
  }

  render() {
    return (
      <div id="starting-page">
        <RemarkableHeader />
        <div id="signing-page">
          <div className="signing-header">Sign In</div>;
          <form
            className="sign-in-form"
            method="POST"
            onSubmit={this.handleSubmit}
          >
            <div className="input-enter">
              <h3>Login</h3>
              <input
                type="text"
                name="login"
                onChange={lg =>
                  this.handleChange({
                    login: lg,
                  })
                }
              />
            </div>
            <div className="input-enter">
              <h3>Password</h3>
              <input
                type="password"
                name="password"
                onChange={pw =>
                  this.handleChange({
                    password: pw,
                  })
                }
              />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                background:
                  'linear-gradient(0deg, transparent 48%, lightgray 50%, transparent 52%)',
                width: '80%',
                alignSelf: 'center',
              }}
            >
              <input
                type="submit"
                className="submit-signing-form-button button"
                value="Submit"
              />
            </div>
          </form>
        </div>
        <SignInFooter />
      </div>
    );
  }
}

export default SignInPage;
