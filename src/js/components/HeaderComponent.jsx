import React from 'react';
import {Menu} from './MenuComponent';
import {connect} from 'react-redux';
import {UserInfoAction} from "../actions/UserInfoAction";
import {Link} from "react-router-dom";
import {LoginSignUpModalShown} from "../actions/LoginSignUpModalShown";
import {OpenFieldsForNewProductAction} from "../actions/OpenFieldsForNewProductAction";

class HeaderComponent extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            login:props.login,
            password:props.password,
            isAuthorized: props.isAuthorized,
            isShownLoginSignupModal: false
        }
    }

    logOutHandler = () =>{
      this.props.dispatch(UserInfoAction('','','', false, false));
      this.props.dispatch(OpenFieldsForNewProductAction(false));
    };

    logInShow = () =>{
        console.log('click on button');
        this.props.dispatch(LoginSignUpModalShown(1));
    };
    signUpShow = () =>{
        this.props.dispatch(LoginSignUpModalShown(2));
    };

    render(){
        if(this.props.isAuthorized){
            return <div className={'header'}>
                <h2>Header</h2>
                <Menu items = {['Home', 'Service', 'Delivery','Contacts','Our partners']} customClassName={'mainMenu'} mainMenuOption={'mainMenuOption'}/>
                <div className='log-out'><Link to={'/'} onClick={this.logOutHandler}>Log Out</Link> </div>
                <div className='userInfo'>Logged in as: {this.props.login}</div>
            </div>
        }else{
            return <div className={'header'}>
                <h2>Header</h2>
                <Menu items = {['Home', 'Service', 'Delivery','Contacts','Our partners']} customClassName={'mainMenu'} mainMenuOption={'mainMenuOption'}/>
               <div className='loginMenu'>
                   <div className='loginItem' style={{cursor: 'pointer'}} onClick={this.logInShow}><Link to={'/log-in'}>LogIn</Link></div>
                   <div className='signupItem' style={{cursor: 'pointer'}} onClick={this.signUpShow}><Link to={'/sign-up'}>SignUp</Link></div>
               </div>
                </div>
        }
    }

}
function mapStateToProps(state) {
    return {
        login: state.userInfo.login,
        password:state.userInfo.password,
        isAuthorized:state.userInfo.isAuthorized,
        isShownLoginSignupModal: state.isLoginSignupShown
    }
}
export default connect(mapStateToProps)(HeaderComponent);

export class FooterComponent extends React.Component {
    render(){
        return <div className='footer'>
            <h2>Footer</h2>
        </div>;
    }
}