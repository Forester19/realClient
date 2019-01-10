import React from 'react';
import ReactDOM from 'react-dom';
import FormContainer from './js/components/container/FormContainer';
import {createStore} from "redux";
import {Provider} from 'react-redux';


const createState = () => ({
    userInfo: {
        login: '',
        password: '',
        isAuthorized: false
    }
});
let reducer = (state = createState(), action) => {
    console.log('reducer');

    switch (action.type) {
        case 'ADD_CRED':
            console.log('ADD_CRED ' + action.login);
            return {
                userInfo: {
                    login: action.login,
                    password: action.password,
                    isAuthorized: action.isAuthorized
                }
            };
    }
    console.log('state ' + state.userInfo);
    return state;
};

const store = createStore(reducer);


ReactDOM.render(
    <Provider store={store}>
        <div>
            <FormContainer/>
        </div>
    </Provider>
    , document.getElementById('app'));

window.store = store;
if (window.devToolsExtension) {
    window.devToolsExtension.open();
}

