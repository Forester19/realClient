import React from "react";
import {connect} from 'react-redux';

class FormContainer extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor');
        this.state ={
                login:'',
                password:'',
                isAuthorized: false
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

    render() {
        return <div className="container">
            <div>{this.props.title}</div>
            <form onSubmit={function (event) {event.preventDefault();}}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Login or email address</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Enter email" onChange={this.setLogin}/>
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
                <div className='login-result'>Your login: {this.state.login}</div>
                <div className='login-result'>Your password: {this.state.password}</div>
                <div className='login-result'>Your verification: {' ' + this.verifyCredentials()}</div>
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
