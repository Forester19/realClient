import {UserInfoAction} from "../actions/UserInfoAction";


export const RequestAuthorisation = (login, password) => async (dispatch, getState) => {

    let json = await fetch('/Users/vladyslav/Desktop/react/ClientSIde/realClient/dist/cred.json').then(response => response.json());

    console.log('json from requestAuthorisation  ' +JSON.stringify(json));

    if(json.login === login && json.password === password){
        dispatch(UserInfoAction(json.login,json.password, true));
    }else {
        dispatch(UserInfoAction('','',false));
    }

};