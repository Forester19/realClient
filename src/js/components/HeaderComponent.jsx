import React from 'react';
import {Menu} from './MenuComponent';
import {connect} from 'react-redux';
import ButtonWrapperComponent from "./wrappers/ButtonWrapperComponent";
import {UserInfoAction} from "../actions/UserInfoAction";

class HeaderComponent extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            login:props.login,
            password:props.password,
            isAuthorized: props.isAuthorized
        }
    }

    logOutHandler = () =>{
      this.props.dispatch(UserInfoAction('','',false));
    };

    render(){
        if(this.props.isAuthorized){
            return <div className={'header'}>
                <h2>Header</h2>
                <Menu items = {['Home', 'Service', 'Delivery','Contacts','Our partners']} customClassName={'mainMenu'} mainMenuOption={'mainMenuOption'}/>
                <ButtonWrapperComponent text='Log Out' className='log-out' onClick={this.logOutHandler}/>
                <div className='userInfo'>Logged in as: {this.props.login}</div>
            </div>
        }else{
            return <div className={'header'}>
                <h2>Header</h2>
                <Menu items = {['Home', 'Service', 'Delivery','Contacts','Our partners']} customClassName={'mainMenu'} mainMenuOption={'mainMenuOption'}/>
                <Menu items={['Sign Up', 'Log In']} customClassName={'loginMenu'} mainMenuOption={'mainMenuOption'}/>
            </div>
        }
    }

}
function mapStateToProps(state) {
    return {
        login: state.userInfo.login,
        password:state.userInfo.password,
        isAuthorized:state.userInfo.isAuthorized
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