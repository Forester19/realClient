

export const requestAuthorisation = (login, password) => async (dispatch, getState) => {

    let json = await fetch('/realClient/dist/cred.json').then(response => response.json());
    let action = {
        type: 'ADD_CRED',
        payload: {
            login: json.login,
            password: json.password,
            isAuthorized: json.isLoggedIn
        }
    };
    dispatch(action);
};