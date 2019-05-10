export const UserInfoAction = (login, password,role, isAuthorized, isLogin) => {
    return  {
        type: 'ADD_CRED',
        payload: {
            login: login,
            password: password,
            role: role,
            isAuthorized: isAuthorized,
            isLogin: isLogin
        }
    };
};