export const SET_USER_ID = 'SET_USER_ID'
export const SET_USER_PASSWORD = 'SET_USER_PASSWORD'

export const setUserId = userId => dispatch=>{
    dispatch({
        type: SET_USER_ID,
        payload: userId
    })
};
export const setPassword = userPassword => dispatch=>{
    dispatch({
        type: SET_USER_PASSWORD,
        payload: userPassword
    })
};