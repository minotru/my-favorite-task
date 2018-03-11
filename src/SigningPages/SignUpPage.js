import React from 'react';
import { RemarkableHeader, SignUpFooter } from './SigningComponents';

export default class SignUpPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      passwordCnfrm: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    const { login, password, passwordCnfrm } = this.state;
    return (
      <div id="starting-page">
        <RemarkableHeader />
        <div id="signing-page">
          <div className="signing-header">Sign Up</div>;
          <form
            className="sign-up-form"
            method="POST"
            onSubmit={this.handleSubmit}
          >
            <div className="input-enter">
              <h3>Login</h3>
              <input
                type="text"
                name="login"
                value={login}
                onChange={this.handleChange}
              />
            </div>
            <div className="input-enter">
              <h3>Password</h3>
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </div>
            <div className="input-enter">
              <h3>Confirm password</h3>
              <input
                type="password"
                name="passwordCnfrm"
                value={passwordCnfrm}
                onChange={this.handleChange}
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
        <SignUpFooter />
      </div>
    );
  }
}
