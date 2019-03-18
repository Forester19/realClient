import {UserInfoAction} from "../actions/UserInfoAction";


export const RequestAuthorisation = (login, password) => async (dispatch, getState) => {

    try{
        let json = await fetch('http://localhost:8080/message').then(response => response.json()).
        catch(() => console.log('Cant access. Browser block in.'));
        console.log('json from requestAuthorisation  ' +JSON.stringify(json));

        if(json.login === login && json.password === password){
            dispatch(UserInfoAction(json.login,json.password, true));
        }else {
            dispatch(UserInfoAction('','',false));
        }
    }catch (FileNotFound){
        console.log('file not found');
        dispatch(UserInfoAction('','',false));
        return false;
    }
};