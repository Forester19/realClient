import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from "redux";

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import FormContainer from './js/components/container/FormContainer';
import {HeaderComponent} from "./js/components/container/HeaderComponent";
import {FooterComponent} from "./js/components/container/HeaderComponent";
import {requestAuthorisation} from "./js/service/RequestAuthorization";
import thunk from 'redux-thunk';



const createState = () => ({
   userInfo: {
       login: '',
       password: '',
       isAuthorized: false
   }
});
let reducer = (state = createState(), action) => {
    switch (action.type) {
        case 'ADD_CRED': {
            let {login, password, isAuthorized} = action.payload;
            return {...state, userInfo: {login, password, isAuthorized}};
        }
    }
    return state;
};

const history = createBrowserHistory();
const store = createStore(reducer,applyMiddleware(thunk));


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
        <div>
            <HeaderComponent/>
            <Switch>
                <Route path='/log-in' render={() => <FormContainer title={'LogIn'}/>}/>
                <Route path='/sign-up' render={() => <FormContainer title={'SignUp'}/>}/>
            </Switch>
            <FooterComponent/>
        </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('app'));

window.store = store;
if (window.devToolsExtension) {
    window.devToolsExtension.open();
}

store.dispatch(requestAuthorisation('ewf','wef'));
