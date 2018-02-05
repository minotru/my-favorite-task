import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Forminput extends React.Component {
    render() {
        return (
            <div className='input-enter'>
                <div>{this.props.text}</div>
                <input type={this.props.type} name={this.props.name} onChange={(event) => this.props.onChange(event.target.value)} style={{
                    fontSize: '0.7em',
                    lineHeight: '1.5em',
                    paddingLeft: '0.2em'
                }} />
            </div>
        );
    }
}

class Loginform extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.check() ? { login: '', password: '', passwordCnfrm: '' } : { login: '', password: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    check() {
        if (this.props.type.toLowerCase().localeCompare('sign up') === 0)
            return true;
        else return false;
    }

    handleChange(obj) {
        this.setState(obj);
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        let renderForm;
        if (this.check()) {
            renderForm = (
                <form className='sign-up-form' method='POST' onSubmit={this.handleSubmit}>
                    <Forminput text='Login' type='text' name='login' onChange={(l) => this.handleChange({ login: l, password: this.state.password, passwordCnfrm: this.state.passwordCnfrm })} />
                    <Forminput text='Password' type='password' name='password' onChange={(p) => this.handleChange({ login: this.state.login, password: p, passwordCnfrm: this.state.passwordCnfrm })} />
                    <Forminput text='Confirm password' type='password' name='passwordCnfrm' onChange={(pc) => this.handleChange({ login: this.state.login, password: this.state.password, passwordCnfrm: pc })} />
                    <div>Or through social networks [TODO]</div>
                    <div style={{ display: 'flex', justifyContent: 'center', background: 'linear-gradient(0deg, transparent 48%, lightgray 50%, transparent 52%)' }}>
                        <input type='submit' className='submit-sign-in-form-button button' value='Submit' />
                    </div>
                </form >
            );
        } else {
            renderForm = (
                <form className='sign-in-form' method='POST' onSubmit={this.handleSubmit}>
                    <Forminput text='Login' type='text' name='login' onChange={(l) => this.handleChange({ login: l, password: this.state.password })} />
                    <Forminput text='Password' type='password' name='password' onChange={(p) => this.handleChange({ login: this.state.login, password: p })} />
                    <div>Or through social networks [TODO]</div>
                    <div style={{ display: 'flex', justifyContent: 'center', background: 'linear-gradient(0deg, transparent 48%, lightgray 50%, transparent 52%)' }}>
                        <input type='submit' className='submit-sign-in-form-button button' value='Submit' />
                    </div>
                </form >
            );
        }
        return renderForm;
    }
}



class SignTypeHeader extends React.Component {
    render() {
        return (
            <div className='signing-header'>
                {this.props.text}
            </div>
        );
    }
}

class SigningPage extends React.Component {
    render() {
        return (
            <div id='signing-page'>
                <SignTypeHeader text={this.props.type} />
                <Loginform type={this.props.type} />
            </div>
        );
    }
}

class RemarkableHeader extends React.Component {
    render() {
        return (
            <header>
                <div class="remarkable-header">REMARKABLE</div>
            </header>
        );
    }
}

class SignUpFooter extends React.Component {
    render() {
        return (
            <footer>
                <div class="sign-up-hint">
                    <div>Don't have the Remarkable account yet?</div>
                    <a class="sign-up-link" href="#"> Sign up</a>
                </div>
            </footer>
        );
    }
}

class StartingPage extends React.Component {
    render() {
        return (
            <div id='starting-page'>
                <RemarkableHeader />
                <SigningPage type='Sign up' />
                <SignUpFooter />
            </div>
        );
    }
}

ReactDOM.render(<StartingPage />, document.getElementById('root'));