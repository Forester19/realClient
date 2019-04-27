import React from "react";
import {connect} from 'react-redux';
import {RequestAuthorisation} from "../service/RequestAuthorization";
import {LoginSignUpModalShown} from "../actions/LoginSignUpModalShown";


class FormContainer extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor');
        this.state = {
            login: props.login,
            password: props.password,
            isAuthorized: props.isAuthorized,
            secondPassword: '',
            isLogin: false,
            isModalShown: 0
        }

    }

    hideLoginSignUpModal = () => {
        this.props.dispatch(LoginSignUpModalShown(0));
    };
    setLogin = (event) => {
        this.setState({login: event.target.value});
    };
    setPassword = (event) => {
        this.setState({password: event.target.value});
    };
    setSecondPassword = (event) => {
        this.setState({secondPassword: event.target.value});
    };
    verifyCredentials = () => {
        console.log('verifyCredentials ' + this.verifyPasswordsOnEqual());
        if (this.props.title !== 'LogIn') {
            console.log('verifyCredentials this.props.title !== \'LogIn\'');
            return !!(this.state.login && this.state.password) && this.verifyPasswordsOnEqual();
        } else {
            return !!(this.state.login && this.state.password)
        }
    };

    componentWillReceiveProps(nextProps, nextContext) {
        this.state.login = nextProps.login;
    }

    setCredentialsLogIn = () => {
        let action = {
            type: 'ADD_CRED',
            payload: {
                login: this.state.login,
                password: this.state.password,
                isAuthorized: true,
                isLogin: true
            }
        };
        this.props.dispatch(action);
    };

    setCredentialsSignUP = () => {
        let action = {
            type: 'ADD_CRED',
            payload: {
                login: this.state.login,
                password: this.state.password,
                isAuthorized: true,
                isLogin: false
            }
        };
        this.props.dispatch(action);
    };

    verifyUserInfo = (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.props.dispatch(RequestAuthorisation(this.state.login, this.state.password));
    };

    setUserInfo = (event) => {
        event.preventDefault();

    };

    verifyPasswordsOnEqual = () => {
        return this.state.password === this.state.secondPassword;
    };

    render() {
        this.verifyPasswordsOnEqual();
        if (this.props.isModalShown === 1) {
            return <div className="container loginContainer">
                <div className='login-form-header'>
                    <div>LogIn</div>
                    <div className='closeButton' onClick={this.hideLoginSignUpModal}>X</div>
                </div>
                <form onSubmit={this.verifyUserInfo}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Login or email address</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                               placeholder="Enter email" value={this.state.login} onChange={this.setLogin}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"
                               placeholder="Password"
                               onChange={this.setPassword}/>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" disabled={!this.verifyCredentials()} className="btn btn-primary signupItem"
                            onClick={this.setCredentialsLogIn}>Submit
                    </button>
                </form>
            </div>
        } else if (this.props.isModalShown === 2) {
            return <div className="container">
                <div>{this.props.title}</div>
                <form onSubmit={this.verifyUserInfo}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Login or email address</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                               placeholder="Enter email" value={this.state.login} onChange={this.setLogin}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"
                               placeholder="Password"
                               onChange={this.setPassword}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"
                               placeholder="Password once more"
                               onChange={this.setSecondPassword}/>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" disabled={!this.verifyCredentials()} className="btn btn-primary"
                            onClick={() => {
                                this.setCredentialsSignUP
                            }}>Submit
                    </button>
                </form>
            </div>
        } else {
                        return '';
        }
    }
}

function mapStateToProps(state) {
    return {
        login: state.userInfo.login,
        password: state.userInfo.password,
        isAuthorized: state.userInfo.isAuthorized,
        isModalShown: state.isLoginSignupShown
    }
}


export default connect(mapStateToProps)(FormContainer);
