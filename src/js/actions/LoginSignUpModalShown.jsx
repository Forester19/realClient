export const LoginSignUpModalShown  = (isShown) => {
    return  {
        type: 'MODAL_IS_SHOWN',
        payload: isShown
    };
};