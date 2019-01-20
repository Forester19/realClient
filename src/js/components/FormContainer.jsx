import React from "react";
import {connect} from 'react-redux';
import {RequestAuthorisation} from "../service/RequestAuthorization";


class FormContainer extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor');
        this.state ={
                login:props.login,
                password:props.password,
                isAuthorized: props.isAuthorized
        }

    }
    setLogin = (event) => {
        this.setState({login: event.target.value});
    };
    setPassword = (event)  => {
        this.setState({password: event.target.value});
    };
    verifyCredentials = () => {
        console.log('verifyCredentials');
        return !!(this.state.login && this.state.password);
    };

    componentWillReceiveProps(nextProps, nextContext) {
        this.state.login = nextProps.login;
    }

    setCredentials = () => {
        console.log('action');
        let action = {
            type: 'ADD_CRED',
            payload: {
                login: this.state.login,
                password: this.state.password,
                isAuthorized: true
            }
        };
        this.props.dispatch(action);
    };

    verifyUserInfo = (event) => {
        event.preventDefault();
        this.props.dispatch(RequestAuthorisation(this.state.login,this.state.password));
    };

    render() {
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
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                           onChange={this.setPassword}/>
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" disabled={!this.verifyCredentials()} className="btn btn-primary"
                        onClick={this.setCredentials}>Submit
                </button>
            </form>
        </div>

    }
}

function mapStateToProps(state) {
    console.log('mapStateToProps');
    return {
        login: state.userInfo.login,
        password:state.userInfo.password,
        isAuthorized:state.userInfo.isAuthorized
    }
}


export default connect(mapStateToProps)(FormContainer);
