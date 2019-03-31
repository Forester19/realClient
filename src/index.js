import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from "redux";

import {Router, Route} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import {MainLayout} from "./js/components/MainLayout";
import thunk from 'redux-thunk';

const location = '/realClient/dist/index.html';

const createState = () => ({
   userInfo: {
       login: '',
       password: '',
       isAuthorized: false,
       isLogin: false
   },
    productsInfo: [],
    openFieldsForNewProduct: false
});
const history = createBrowserHistory();
let reducer = (state = createState(), action) => {
    switch (action.type) {
        case 'ADD_CRED': {
            let {login, password, isAuthorized, isLogin} = action.payload;
            return {...state, userInfo: {login, password, isAuthorized, isLogin}};
        }
        case 'ADD_PRODUCTS': {
            let {productsInfo} = action.payload;
            return {...state, productsInfo: {productsInfo}}
        }
        case 'OPEN_FIELDS_FOR_NEW_PRODUCT' : {
            console.log('OPEN_FIELDS_FOR_NEW_PRODUCT action ' + action.payload);
            return {...state, openFieldsForNewProduct: action.payload}
        }
    }
    return state;
};


const store = createStore(reducer,applyMiddleware(thunk));


ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route url='/' component={MainLayout}/>
        </Router>


    </Provider>
    , document.getElementById('app'));

window.store = store;
if (window.devToolsExtension) {
    window.devToolsExtension.open();
}

