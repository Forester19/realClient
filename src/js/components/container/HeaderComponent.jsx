import React from 'react';
import {Menu} from './MenuComponent';

export class HeaderComponent extends React.Component{
    render(){
        return <div className={'header'}>
            <h2>Header</h2>
            <Menu items = {['Home', 'Service', 'Delivery','Contacts','Our partners']} customClassName={'mainMenu'} mainMenuOption={'mainMenuOption'}/>
            <Menu items={['Sign Up', 'Log In']} customClassName={'loginMenu'} mainMenuOption={'mainMenuOption'}/>
        </div>
    }
}

export class FooterComponent extends React.Component {
    render(){
        return <div className='footer'>
            <h2>Footer</h2>
        </div>;
    }
}