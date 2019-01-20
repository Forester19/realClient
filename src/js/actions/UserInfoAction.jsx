export const UserInfoAction = (login, password, isAuthorized) => {
    return  {
        type: 'ADD_CRED',
        payload: {
            login: login,
            password: password,
            isAuthorized: isAuthorized
        }
    };
};