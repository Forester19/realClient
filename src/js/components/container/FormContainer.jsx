import React from "react";
import {connect} from 'react-redux';

class FormContainer extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor');
        this.state ={
                login:'',
                password:'',
                isValid:''
        }

    }

    setLogin = (event) => {
        this.setState({login: event.target.value});
    };

    setPassword = (event)  => {
        let action = {
            type: 'CHANGE_PASSWORD',
            payload:{
                password:event.target.value
            }
        };
        this.props.dispatch(action);
    };

    verifyCredentials = () => {
        console.log('verifyCredentials');
        if (this.state.login && this.state.password) {
            let action = {
                type: 'CHANGE_VALID',
                payload: {
                    isValid: true
                }
            };
            this.props.dispatch(action);
        }
        let action = {
                type: 'CHANGE_VALID',
                payload:{
                    isValid:false
                }
            };
            this.props.dispatch(action);

    };
    setCredentials = () => {
        console.log('action');
        let action = {
            type: 'ADD_CRED',
            payload: {
                login: this.state.login,
                password: this.state.password,
                isValid: this.state.isValid
            }
        };
        this.props.dispatch(action);
    };

    render() {


        return <div className="container">
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
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
                <button type="submit" disabled={this.props.isValid} className="btn btn-primary"
                        onClick={this.setCredentials}>Submit
                </button>
            </form>
        </div>

    }


}

function mapStateToProps(state) {
    console.log('mapStateToProps');
    return {
        login: state.login,
        password:state.password,
        isValid:state.isValid
    }
}


export default connect(mapStateToProps)(FormContainer);
