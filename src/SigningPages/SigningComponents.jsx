import React from 'react';

function RemarkableHeader() {
  return (
    <header>
      <h1 className="remarkable-header">REMARKABLE</h1>
    </header>
  );
}

function SignInFooter() {
  return (
    <footer>
      <div className="sign-up-hint">
        <div>Don't have the Remarkable account yet?</div>
        <a className="sign-up-link">Sign up</a>
      </div>
    </footer>
  );
}

function SignUpFooter() {
  return (
    <footer>
      <div className="sign-up-hint">
        <div>The only true way to become Remarkable.</div>
      </div>
    </footer>
  );
}

export { RemarkableHeader, SignInFooter, SignUpFooter };
