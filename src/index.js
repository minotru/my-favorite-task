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
        this.state = { login: '', password: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(obj) {
        this.setState(obj);
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <form className="sign-in-form" method="POST" onSubmit={this.handleSubmit}>
                <Forminput text="Login" type="text" name="login" onChange={(l) => this.handleChange({ login: l, password: this.state.password })} />
                <Forminput text="Password" type="password" name="password" onChange={(p) => this.handleChange({ login: this.state.login, password: p })} />
                <div>Or through social networks [TODO]</div>
                <div style={{ display: 'flex', justifyContent: 'center', background: 'linear-gradient(0deg, transparent 48%, lightgray 50%, transparent 52%)' }}>
                    <input type="submit" className="submit-sign-in-form-button button" value="Submit" />
                </div>
            </form >
        );
    }
}

class SignTypeHeader extends React.Component {
    render() {
        return (
            <div className="signing-header">
                {this.props.name}
            </div>
        );
    }
}





ReactDOM.render(<Loginform />, document.getElementById('root'));